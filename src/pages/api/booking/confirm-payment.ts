// Клієнтський onSuccess від RevolutCheckout — лише сигнал "спробуй
// перевірити". Реальне підтвердження завжди йде через GET /orders/{id}
// із Secret key (клієнту не довіряємо, could бути підроблений виклик).
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { bookings, rooms } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { getRevolutOrder, isOrderPaid } from '../../../lib/revolut';
import { sendMail } from '../../../lib/mailer';
import { renderEmailHtml } from '../../../lib/emailTemplate';
import { booking as bookingCopy } from '../../../i18n/booking';
import { formatBookingRef } from '../../../lib/memberCard';
import { isLocale, defaultLocale } from '../../../i18n/locales';
import { currency } from '../../../data/pricing';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json().catch(() => ({}));
	const bookingId = Number(body.bookingId);
	if (!Number.isInteger(bookingId)) {
		return new Response(JSON.stringify({ paid: false, error: 'invalid_booking' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	const bk = db.select().from(bookings).where(eq(bookings.id, bookingId)).get();
	if (!bk || !bk.paymentRef) {
		return new Response(JSON.stringify({ paid: false, error: 'no_payment_ref' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
	}

	if (bk.paymentStatus === 'paid') {
		return new Response(JSON.stringify({ paid: true }), { headers: { 'Content-Type': 'application/json' } });
	}

	try {
		const order = await getRevolutOrder(bk.paymentRef);
		if (isOrderPaid(order)) {
			db.update(bookings).set({ paymentStatus: 'paid', status: 'confirmed' }).where(eq(bookings.id, bookingId)).run();

			// Лист "оплата успішна" (2026-08-30, "нужно добавить про успешную
			// бронь електронное письмо") — окремий від початкового
			// "бронювання отримано", саме тут бронь реально стає підтвердженою.
			try {
				const locale = isLocale(bk.locale) ? bk.locale : defaultLocale;
				const copy = bookingCopy[locale];
				const room = db.select().from(rooms).where(eq(rooms.id, bk.roomId)).get();
				const roomTitle = room
					? (() => {
							try {
								return (JSON.parse(room.titles) as Record<string, string>)[locale] ?? (JSON.parse(room.titles) as Record<string, string>).en ?? '';
							} catch {
								return '';
							}
						})()
					: '';
				const ref = formatBookingRef(bk.id);
				const html = renderEmailHtml({
					heading: copy.confirmation.statusConfirmed,
					bodyHtml: `
						<p>${copy.confirmation.paidNote}</p>
						<p style="margin:0 0 0.3rem;"><strong>${roomTitle}</strong></p>
						<p style="margin:0 0 0.3rem;">${bk.checkIn} → ${bk.checkOut}</p>
						<p style="margin:0;">${copy.page.summaryTotal}: ${currency}${(bk.totalCents / 100).toFixed(2)}</p>
					`,
				});
				await sendMail(bk.email, `${copy.confirmation.heading} — ${ref}`, html);
			} catch {
				// SMTP може бути недоступний — оплата все одно зарахована.
			}

			return new Response(JSON.stringify({ paid: true }), { headers: { 'Content-Type': 'application/json' } });
		}
		return new Response(JSON.stringify({ paid: false, state: order.state }), { headers: { 'Content-Type': 'application/json' } });
	} catch {
		return new Response(JSON.stringify({ paid: false, error: 'revolut_unavailable' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
	}
};
