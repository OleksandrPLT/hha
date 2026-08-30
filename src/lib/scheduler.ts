// Автоматичні тригерні листи (Фаза 5, ТЗ §5.5 "нагадування, подяка після
// виїзду") — 2026-08-30. Zone.ee не дає cron (див. пам'ять
// hha-hosting-infra), але PM2-процес живе постійно, тому робимо звичайний
// setInterval прямо в самому застосунку. Модуль імпортується ОДИН РАЗ
// (побічний ефект top-level коду) з src/middleware.ts — ES-модулі
// кешуються Node, тому setInterval стартує рівно один раз за життя
// процесу, незалежно від кількості запитів.
import { db } from '../db/client';
import { bookings, guests, rooms } from '../db/schema';
import { and, eq, isNull, lte } from 'drizzle-orm';
import { sendMail } from './mailer';
import { renderEmailHtml } from './emailTemplate';
import { marketingEmails } from '../i18n/marketingEmails';
import { defaultLocale, isLocale, type Locale } from '../i18n/locales';
import { property } from '../data/property';

const CHECK_INTERVAL_MS = 60 * 60 * 1000; // раз на годину — реагувати з точністю до дати достатньо

function todayStr(): string {
	return new Date().toISOString().slice(0, 10);
}
function tomorrowStr(): string {
	return new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function pickLocale(json: string | undefined, locale: string): string {
	if (!json) return '';
	try {
		const parsed = JSON.parse(json) as Record<string, string>;
		return parsed[locale] ?? parsed.en ?? '';
	} catch {
		return '';
	}
}

function bookingLocale(raw: string): Locale {
	return isLocale(raw) ? raw : defaultLocale;
}

async function sendReminders() {
	const target = tomorrowStr();
	const candidates = db
		.select()
		.from(bookings)
		.where(and(eq(bookings.checkIn, target), eq(bookings.status, 'confirmed'), isNull(bookings.reminderSentAt)))
		.all();

	for (const bk of candidates) {
		const locale = bookingLocale(bk.locale);
		const copy = marketingEmails[locale].reminder;
		const room = db.select().from(rooms).where(eq(rooms.id, bk.roomId)).get();
		const roomName = room ? pickLocale(room.titles, locale) : '';

		try {
			const html = renderEmailHtml({
				heading: copy.heading,
				bodyHtml: `
					<p>${copy.body}</p>
					<p><strong>${copy.roomLabel}:</strong> ${roomName}</p>
					<p><strong>${copy.datesLabel}:</strong> ${bk.checkIn} → ${bk.checkOut}</p>
					<p><strong>${copy.addressLabel}:</strong> ${property.streetAddress}, ${property.city}</p>
				`,
			});
			await sendMail(bk.email, copy.subject, html);
		} catch {
			// SMTP тимчасово недоступний — спробуємо знову наступного проходу
			// (reminderSentAt лишається NULL, оскільки не дійшли до апдейту нижче)
			continue;
		}
		db.update(bookings).set({ reminderSentAt: new Date().toISOString() }).where(eq(bookings.id, bk.id)).run();
	}
}

async function sendThankYous() {
	const target = todayStr();
	// checkOut <= сьогодні (виїзд уже стався), лист ще не надсилали.
	const candidates = db
		.select()
		.from(bookings)
		.where(and(lte(bookings.checkOut, target), eq(bookings.status, 'confirmed'), isNull(bookings.thankYouSentAt)))
		.all();

	for (const bk of candidates) {
		const locale = bookingLocale(bk.locale);
		const copy = marketingEmails[locale].thankYou;
		const guest = bk.guestId ? db.select().from(guests).where(eq(guests.id, bk.guestId)).get() : undefined;
		const pointsBlock = guest ? `<p>${copy.pointsNote}</p>` : '';

		try {
			const html = renderEmailHtml({
				heading: copy.heading,
				bodyHtml: `
					<p>${copy.body}</p>
					<table role="presentation" cellpadding="0" cellspacing="0" style="margin:1rem 0;"><tr>
						<td style="padding-right:0.6rem;"><a href="${property.googleReviewsUrl}" style="display:inline-block;padding:0.6rem 1rem;background:#0072ce;color:#fff;border-radius:6px;text-decoration:none;font-weight:700;">${copy.reviewGoogleCta}</a></td>
						<td><a href="${property.bookingUrl}" style="display:inline-block;padding:0.6rem 1rem;background:#003580;color:#fff;border-radius:6px;text-decoration:none;font-weight:700;">${copy.reviewBookingCta}</a></td>
					</tr></table>
					${pointsBlock}
				`,
			});
			await sendMail(bk.email, copy.subject, html);
		} catch {
			continue;
		}
		db.update(bookings).set({ thankYouSentAt: new Date().toISOString() }).where(eq(bookings.id, bk.id)).run();
	}
}

async function tick() {
	try {
		await sendReminders();
	} catch (e) {
		console.error('[scheduler] sendReminders failed:', e);
	}
	try {
		await sendThankYous();
	} catch (e) {
		console.error('[scheduler] sendThankYous failed:', e);
	}
}

// Перший прохід — невелика затримка після старту процесу (дати БД встигають
// ініціалізуватись), далі — щогодини.
setTimeout(() => {
	void tick();
	setInterval(() => void tick(), CHECK_INTERVAL_MS);
}, 30_000);
