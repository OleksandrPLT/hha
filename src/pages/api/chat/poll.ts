// Живий чат — гість опитує свій тред на нові повідомлення (той самий
// polling-патерн, що й підтвердження оплати Revolut — без вебсокетів,
// простий fetch кожні кілька секунд, поки віджет відкритий).
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { chatThreads, chatMessages } from '../../../db/schema';
import { eq, gt, asc, and } from 'drizzle-orm';

export const prerender = false;

const COOKIE_NAME = 'hha_chat_token';

export const GET: APIRoute = async ({ url, cookies }) => {
	const token = cookies.get(COOKIE_NAME)?.value;
	if (!token) {
		return new Response(JSON.stringify({ messages: [] }), { headers: { 'Content-Type': 'application/json' } });
	}

	const thread = db.select().from(chatThreads).where(eq(chatThreads.visitorToken, token)).get();
	if (!thread) {
		return new Response(JSON.stringify({ messages: [] }), { headers: { 'Content-Type': 'application/json' } });
	}

	const afterId = Number(url.searchParams.get('after') || 0);
	const messages = db
		.select()
		.from(chatMessages)
		.where(afterId > 0 ? and(eq(chatMessages.threadId, thread.id), gt(chatMessages.id, afterId)) : eq(chatMessages.threadId, thread.id))
		.orderBy(asc(chatMessages.id))
		.all();

	return new Response(JSON.stringify({ messages }), { headers: { 'Content-Type': 'application/json' } });
};
