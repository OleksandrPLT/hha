// Фаза 4 (система бронювань, ТЗ §5.4) — логіка доступності та ціни.
// Власний календар без синхронізації із зовнішніми каналами (Booking.com
// і т.д.) — клієнт підтвердив 2026-08-29, що доступу до Partner/Content
// API ще нема. Тому overbooking щодо зовнішніх каналів можливий і не
// відстежується тут — лише брони, оформлені через наш власний віджет.

import { db } from '../db/client';
import { bookings, promotions } from '../db/schema';
import { and, eq, inArray } from 'drizzle-orm';

// Статуси, що фактично займають дати. 'cancelled' звільняє дати одразу.
// 'completed' лишається блокуючим на випадок, якщо історичну бронь колись
// звірятимуть з тими ж датами (в реальності completed завжди в минулому,
// тому на практиці не впливає на майбутню доступність).
const BLOCKING_STATUSES = ['pending', 'confirmed', 'completed'] as const;

export interface DateRange {
	checkIn: string; // 'YYYY-MM-DD'
	checkOut: string; // 'YYYY-MM-DD', виключно (ніч checkOut не займається)
}

export function nightsBetween(checkIn: string, checkOut: string): number {
	const inDate = new Date(`${checkIn}T00:00:00Z`);
	const outDate = new Date(`${checkOut}T00:00:00Z`);
	const ms = outDate.getTime() - inDate.getTime();
	return Math.round(ms / 86_400_000);
}

export function isValidDateRange(checkIn: string, checkOut: string): boolean {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(checkIn) || !/^\d{4}-\d{2}-\d{2}$/.test(checkOut)) return false;
	const nights = nightsBetween(checkIn, checkOut);
	if (!Number.isFinite(nights) || nights < 1) return false;
	// Не дозволяємо бронювання в минулому (порівнюємо календарні дати, не час).
	const today = new Date().toISOString().slice(0, 10);
	if (checkIn < today) return false;
	return true;
}

// Дві брони перетинаються, якщо checkIn_A < checkOut_B ТА checkOut_A > checkIn_B
// (стандартна перевірка перетину напіввідкритих інтервалів [checkIn, checkOut)).
export function rangesOverlap(aIn: string, aOut: string, bIn: string, bOut: string): boolean {
	return aIn < bOut && aOut > bIn;
}

// Скільки одиниць номера roomId вже зайнято на діапазон [checkIn, checkOut)
// існуючими блокуючими бронюваннями. excludeBookingId — щоб не рахувати
// саму бронь при редагуванні в адмінці.
export function occupiedCount(roomId: number, checkIn: string, checkOut: string, excludeBookingId?: number): number {
	const existing = db
		.select()
		.from(bookings)
		.where(and(eq(bookings.roomId, roomId), inArray(bookings.status, [...BLOCKING_STATUSES])))
		.all();

	return existing.filter((b) => {
		if (excludeBookingId != null && b.id === excludeBookingId) return false;
		return rangesOverlap(checkIn, checkOut, b.checkIn, b.checkOut);
	}).length;
}

export function isRoomAvailable(
	roomId: number,
	quantity: number,
	checkIn: string,
	checkOut: string,
	excludeBookingId?: number,
): boolean {
	return occupiedCount(roomId, checkIn, checkOut, excludeBookingId) < quantity;
}

// Візуальний календар (Фаза 4, 2026-08-30 — "все налаштувати вільні
// місця") — доступність по кожному дню місяця одним запитом, замість
// окремого AJAX на кожну дату. year/month — 1-based місяць (1=січень).
export interface DayAvailability {
	date: string; // 'YYYY-MM-DD'
	available: boolean;
}

export function getMonthAvailability(roomId: number, quantity: number, year: number, month: number): DayAvailability[] {
	const daysInMonth = new Date(year, month, 0).getDate();
	const existing = db
		.select()
		.from(bookings)
		.where(and(eq(bookings.roomId, roomId), inArray(bookings.status, [...BLOCKING_STATUSES])))
		.all();

	const result: DayAvailability[] = [];
	for (let day = 1; day <= daysInMonth; day++) {
		const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
		const nextDate = `${year}-${String(month).padStart(2, '0')}-${String(day + 1).padStart(2, '0')}`;
		// Кожен день перевіряємо як окрему добу [date, date+1) — простіше й
		// достатньо для календарної "зайнято/вільно" мітки клітинки; реальна
		// перевірка діапазону при бронюванні все одно йде через isRoomAvailable.
		const occupied = existing.filter((b) => rangesOverlap(date, nextDate, b.checkIn, b.checkOut)).length;
		result.push({ date, available: occupied < quantity });
	}
	return result;
}

// Акції/знижки (2026-08-30 — "розділ промоакцій щоб робити знижки").
// Автоматичні, без кодів: підходить, якщо активна, дати перетинаються з
// [checkIn, checkOut), і roomId або null (всі номери), або збігається.
// Кілька підхожих знижок — беремо ту, що дає найбільшу знижку в грошах
// (не сумуємо).
export interface AppliedPromotion {
	id: number;
	label: string;
	discountCents: number;
}

export function findBestPromotion(roomId: number, checkIn: string, checkOut: string, baseTotalCents: number): AppliedPromotion | null {
	const candidates = db.select().from(promotions).where(eq(promotions.isActive, true)).all();

	let best: AppliedPromotion | null = null;
	for (const p of candidates) {
		if (p.roomId != null && p.roomId !== roomId) continue;
		if (!rangesOverlap(checkIn, checkOut, p.startDate, p.endDate)) continue;

		const discountCents =
			p.discountType === 'percent'
				? Math.round((baseTotalCents * Math.min(100, Math.max(0, p.discountValue))) / 100)
				: Math.min(baseTotalCents, Math.max(0, p.discountValue));

		if (discountCents > 0 && (!best || discountCents > best.discountCents)) {
			best = { id: p.id, label: p.label, discountCents };
		}
	}
	return best;
}
