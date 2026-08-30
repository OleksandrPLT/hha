// Одноразовий скрипт: реєструє вебхук Telegram-бота на прод-URL живого
// чату (Фаза 5). Запускати на СЕРВЕРІ (потрібен TELEGRAM_BOT_TOKEN з
// .env) через: node --env-file=.env scripts/setup-telegram-webhook.mjs
//
// Генерує/зберігає TELEGRAM_WEBHOOK_SECRET в .env, якщо його там ще
// немає — Telegram присилає цей секрет назад в кожному вебхук-запиті
// (X-Telegram-Bot-Api-Secret-Token), ми звіряємо в telegram-webhook.ts,
// щоб ніхто сторонній не міг підкинути фальшиву "відповідь команди".
import { randomBytes } from 'node:crypto';
import { appendFileSync } from 'node:fs';

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
	console.error('TELEGRAM_BOT_TOKEN не знайдено в .env');
	process.exit(1);
}

let secret = process.env.TELEGRAM_WEBHOOK_SECRET;
if (!secret) {
	secret = randomBytes(24).toString('hex');
	appendFileSync('.env', `\nTELEGRAM_WEBHOOK_SECRET=${secret}\n`);
	console.log('Згенеровано і додано TELEGRAM_WEBHOOK_SECRET в .env');
}

const webhookUrl = 'https://hha.ee/api/chat/telegram-webhook';

const res = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ url: webhookUrl, secret_token: secret, allowed_updates: ['message'] }),
});
const data = await res.json();
console.log(JSON.stringify(data, null, 2));

if (!data.ok) {
	console.error('setWebhook не вдався');
	process.exit(1);
}
console.log(`\nВебхук встановлено: ${webhookUrl}`);
console.log('Не забудь: pm2 restart hha --update-env (щоб процес прочитав новий TELEGRAM_WEBHOOK_SECRET).');
