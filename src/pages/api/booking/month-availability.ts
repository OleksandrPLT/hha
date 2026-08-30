// Календар вільних місць (Фаза 4, 2026-08-30) — доступність по кожному
// дню місяця одним запитом, для візуального календаря на сторінці
// бронювання.
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { rooms } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { getMonthAvailability } from '../../../lib/booking';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const roomId = Number(url.searchParams.get('roomId'));
	const year = Number(url.searchParams.get('year'));
	const month = Number(url.searchParams.get('month'));

	if (!Number.isInteger(roomId) || !Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
		return new Response(JSON.stringify({ error: 'invalid_params' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	const room = db.select().from(rooms).where(eq(rooms.id, roomId)).get();
	if (!room || !room.isActive) {
		return new Response(JSON.stringify({ error: 'room_not_found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
	}

	const days = getMonthAvailability(room.id, room.quantity, year, month);
	return new Response(JSON.stringify({ days }), { headers: { 'Content-Type': 'application/json' } });
};
