// Технічний режим (пароль на весь сайт) — на час викочування нової
// SSR-версії на прод, щоб публіка не бачила процес деплою. Вмикається
// змінною середовища MAINTENANCE_PASSWORD (в .env на СЕРВЕРІ, не в git) —
// якщо вона не встановлена, middleware взагалі нічого не робить (як зараз
// локально в dev). Прибрати ворота перед реальним запуском (дата з ТЗ:
// 01.09.2026) — просто видалити змінну на сервері й перезапустити PM2,
// правити код не треба.
import 'dotenv/config';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const password = process.env.MAINTENANCE_PASSWORD;
	if (!password) return next();

	const authHeader = context.request.headers.get('authorization');
	if (authHeader?.startsWith('Basic ')) {
		const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
		const sep = decoded.indexOf(':');
		const suppliedPassword = sep >= 0 ? decoded.slice(sep + 1) : decoded;
		if (suppliedPassword === password) {
			return next();
		}
	}

	// Значення HTTP-заголовків мусять бути ByteString (лише ASCII/Latin1) —
	// тире "—" тут ламало Response з незрозумілою помилкою undici глибоко
	// всередині адаптера, тому лишаємо звичайний дефіс.
	return new Response('Site under maintenance', {
		status: 401,
		headers: { 'WWW-Authenticate': 'Basic realm="Hostel and Hotel Apartments - preview"' },
	});
});
