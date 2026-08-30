// Telegram Bot API вебхук — команда відповідає у Telegram (reply на
// повідомлення-пересилку), Telegram шле сюди update. Маршрутизація в
// потрібний тред — виключно через reply_to_message.message_id (те, що ми
// самі надіслали в sendTeamMessage і зберегли як telegramMessageId на
// повідомленні гостя). Повідомлення без reply — ігноруються (не можемо
// знати, якому гостю адресовано).
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { chatMessages, chatThreads } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { verifyWebhookSecret, type TelegramUpdate } from '../../../lib/telegramChat';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	if (!verifyWebhookSecret(request.headers.get('X-Telegram-Bot-Api-Secret-Token'))) {
		return new Response('forbidden', { status: 403 });
	}

	const update = (await request.json().catch(() => null)) as TelegramUpdate | null;
	const msg = update?.message;
	const replyToId = msg?.reply_to_message?.message_id;
	const text = msg?.text;

	if (msg && replyToId && text) {
		const original = db.select().from(chatMessages).where(eq(chatMessages.telegramMessageId, replyToId)).get();
		if (original) {
			db.insert(chatMessages).values({ threadId: original.threadId, sender: 'team', body: text }).run();
			db.update(chatThreads)
				.set({ lastMessageAt: new Date().toISOString().replace('T', ' ').slice(0, 19) })
				.where(eq(chatThreads.id, original.threadId))
				.run();
		}
	}

	// Telegram лише перевіряє статус 200 — тіло відповіді не важливе.
	return new Response('ok');
};
