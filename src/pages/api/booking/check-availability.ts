// AJAX-перевірка доступності (Фаза 4) — лише для UX-підказки в формі;
// авторитетна перевірка все одно повторюється на сервері при POST
// створення бронювання (дати могли зайняти між цим запитом і сабмітом).
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { rooms } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { isValidDateRange, isRoomAvailable } from '../../../lib/booking';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const roomId = Number(url.searchParams.get('roomId'));
	const checkIn = url.searchParams.get('checkIn') || '';
	const checkOut = url.searchParams.get('checkOut') || '';

	if (!Number.isInteger(roomId) || !isValidDateRange(checkIn, checkOut)) {
		return new Response(JSON.stringify({ available: false, error: 'invalid_dates' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	const room = db.select().from(rooms).where(eq(rooms.id, roomId)).get();
	if (!room || !room.isActive) {
		return new Response(JSON.stringify({ available: false, error: 'room_not_found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
	}

	const available = isRoomAvailable(room.id, room.quantity, checkIn, checkOut);
	return new Response(JSON.stringify({ available }), { headers: { 'Content-Type': 'application/json' } });
};
