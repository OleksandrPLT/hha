// Клієнтський onSuccess від RevolutCheckout — лише сигнал "спробуй
// перевірити". Реальне підтвердження завжди йде через GET /orders/{id}
// із Secret key (клієнту не довіряємо, could бути підроблений виклик).
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { bookings } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { getRevolutOrder, isOrderPaid } from '../../../lib/revolut';

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
			return new Response(JSON.stringify({ paid: true }), { headers: { 'Content-Type': 'application/json' } });
		}
		return new Response(JSON.stringify({ paid: false, state: order.state }), { headers: { 'Content-Type': 'application/json' } });
	} catch {
		return new Response(JSON.stringify({ paid: false, error: 'revolut_unavailable' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
	}
};
