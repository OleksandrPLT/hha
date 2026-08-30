// Фаза 4 (система бронювань, ТЗ §5.4) — логіка доступності та ціни.
// Власний календар без синхронізації із зовнішніми каналами (Booking.com
// і т.д.) — клієнт підтвердив 2026-08-29, що доступу до Partner/Content
// API ще нема. Тому overbooking щодо зовнішніх каналів можливий і не
// відстежується тут — лише брони, оформлені через наш власний віджет.

import { db } from '../db/client';
import { bookings } from '../db/schema';
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
function rangesOverlap(aIn: string, aOut: string, bIn: string, bOut: string): boolean {
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
