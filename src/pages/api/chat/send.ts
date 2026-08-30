// Живий чат (Фаза 5) — гість надсилає повідомлення. Працює без акаунта
// (visitorToken в cookie); якщо гість залогінений — прив'язуємо guestId
// і підставляємо ім'я, щоб команді в Telegram було видно, хто питає.
import type { APIRoute } from 'astro';
import { randomBytes } from 'node:crypto';
import { db } from '../../../db/client';
import { chatThreads, chatMessages, guests } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { sendTeamMessage } from '../../../lib/telegramChat';

export const prerender = false;

const COOKIE_NAME = 'hha_chat_token';

export const POST: APIRoute = async ({ request, cookies, session }) => {
	const body = await request.json().catch(() => ({}));
	const text = String(body.text || '').trim().slice(0, 2000);
	if (!text) {
		return new Response(JSON.stringify({ error: 'empty' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	let token = cookies.get(COOKIE_NAME)?.value;
	if (!token) {
		token = randomBytes(16).toString('hex');
		cookies.set(COOKIE_NAME, token, { path: '/', httpOnly: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 180 });
	}

	const guestId = await session?.get('guestId');
	const guest = guestId ? db.select().from(guests).where(eq(guests.id, guestId)).get() : undefined;

	let thread = db.select().from(chatThreads).where(eq(chatThreads.visitorToken, token)).get();
	if (!thread) {
		const inserted = db
			.insert(chatThreads)
			.values({ visitorToken: token, guestId: guestId ?? null, visitorName: guest?.fullName ?? null })
			.run();
		thread = db.select().from(chatThreads).where(eq(chatThreads.id, Number(inserted.lastInsertRowid))).get()!;
	} else if (guest && !thread.guestId) {
		// Гість залогінився вже після того, як почав чат анонімно — довʼязуємо.
		db.update(chatThreads).set({ guestId: guest.id, visitorName: guest.fullName }).where(eq(chatThreads.id, thread.id)).run();
	}

	const who = guest ? `${guest.fullName} (${guest.email})` : `Guest #${thread.id}`;
	const telegramMessageId = await sendTeamMessage(`💬 ${who}:\n${text}`);

	const inserted = db
		.insert(chatMessages)
		.values({ threadId: thread.id, sender: 'visitor', body: text, telegramMessageId })
		.run();
	db.update(chatThreads).set({ lastMessageAt: new Date().toISOString().replace('T', ' ').slice(0, 19) }).where(eq(chatThreads.id, thread.id)).run();

	const message = db.select().from(chatMessages).where(eq(chatMessages.id, Number(inserted.lastInsertRowid))).get();
	return new Response(JSON.stringify({ message }), { headers: { 'Content-Type': 'application/json' } });
};
