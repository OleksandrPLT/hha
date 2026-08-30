// Живий чат сайту → Telegram (Фаза 5, ТЗ §5.5). Той самий бот, що й
// Login Widget (@hha_ee_bot, TELEGRAM_BOT_TOKEN вже в .env) — Login
// Widget і звичайний Bot API (sendMessage/webhook) це незалежні функції
// одного бота, конфлікту немає.
//
// TELEGRAM_TEAM_CHAT_ID — chat_id особистого чату з ботом АБО групи
// команди, куди пересилаються повідомлення гостей. Бот не може написати
// першим — власник/команда мають самі написати боту (або додати його в
// групу і написати там) хоч раз, інакше Telegram відхилить sendMessage.
// Поки TELEGRAM_TEAM_CHAT_ID не заданий — чат на сайті все одно працює
// (зберігає повідомлення, показує гостю), просто без пересилки команді;
// коли user дасть chat_id — просто дописати в .env, код міняти не треба.
import 'dotenv/config';

export function isTeamChatConfigured(): boolean {
	return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_TEAM_CHAT_ID);
}

const API_BASE = () => `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

// Повертає telegram message_id надісланого повідомлення (для reply-routing)
// або null, якщо не налаштовано/не вдалось відправити.
export async function sendTeamMessage(text: string): Promise<number | null> {
	if (!isTeamChatConfigured()) return null;
	try {
		const res = await fetch(`${API_BASE()}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: process.env.TELEGRAM_TEAM_CHAT_ID,
				text,
			}),
		});
		if (!res.ok) return null;
		const data = (await res.json()) as { ok: boolean; result?: { message_id: number } };
		return data.result?.message_id ?? null;
	} catch {
		return null;
	}
}

// Секрет для перевірки X-Telegram-Bot-Api-Secret-Token на вебхуку —
// генерується один раз при налаштуванні setWebhook (scripts/setup-telegram-webhook.mjs),
// зберігається в .env як TELEGRAM_WEBHOOK_SECRET.
export function verifyWebhookSecret(headerValue: string | null): boolean {
	const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
	if (!expected) return false;
	return headerValue === expected;
}

export interface TelegramUpdate {
	message?: {
		message_id: number;
		text?: string;
		chat: { id: number };
		reply_to_message?: { message_id: number };
	};
}
