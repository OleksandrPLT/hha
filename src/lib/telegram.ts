// Telegram Login Widget — на відміну від Google, тут немає token-exchange:
// сам віджет (скрипт telegram.org) редиректить браузер на наш callback з
// даними гостя прямо в query-рядку (data-auth-url підхід, обраний
// користувачем через офіційний генератор на core.telegram.org/widgets/login)
// + підписом hash. Перевіряємо підпис самі — HMAC-SHA256 даних ключем
// SHA256(bot_token), як описано в офіційній документації. Без цього будь-хто
// міг би підробити query-рядок і залогінитись під чужим telegramId.
import 'dotenv/config';
import { createHash, createHmac } from 'node:crypto';

export function isTelegramConfigured(): boolean {
	return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_USERNAME);
}

export function telegramBotUsername(): string {
	return process.env.TELEGRAM_BOT_USERNAME || '';
}

export interface TelegramAuthData {
	id: string;
	first_name?: string;
	last_name?: string;
	username?: string;
	photo_url?: string;
	auth_date: string;
	hash: string;
}

// true, якщо hash збігається І auth_date не старіший за добу (захист від
// повторного використання старого підписаного посилання — реплей-атака).
export function verifyTelegramAuth(data: TelegramAuthData): boolean {
	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	if (!botToken) return false;

	const { hash, ...rest } = data;
	if (!hash) return false;

	const checkString = Object.keys(rest)
		.filter((k) => rest[k as keyof typeof rest] !== undefined && rest[k as keyof typeof rest] !== '')
		.sort()
		.map((k) => `${k}=${rest[k as keyof typeof rest]}`)
		.join('\n');

	const secretKey = createHash('sha256').update(botToken).digest();
	const computedHash = createHmac('sha256', secretKey).update(checkString).digest('hex');

	if (computedHash !== hash) return false;

	const authDate = Number(data.auth_date) * 1000;
	const oneDayMs = 24 * 60 * 60 * 1000;
	if (Number.isNaN(authDate) || Date.now() - authDate > oneDayMs) return false;

	return true;
}
