// "М'який" тех-режим — публічно всі бачать гарну "Незабаром" сторінку з
// таймером (src/lib/comingSoonPage.ts), а не браузерний Basic Auth
// логін-попап (був спочатку, користувач попросив прибрати 2026-08-30: "не
// потрібно логін пароль а щоб і залишився що в розробці з тамером").
//
// Реальний сайт лишається доступним для нас через preview-ключ у query:
// https://hha.ee/?key=<MAINTENANCE_PASSWORD> — ставить cookie на 30 днів і
// редиректить на чистий URL; далі кожен запит з цією cookie бачить справжній
// сайт як звичайно. Вимикається (для реального запуску, 01.09.2026 по ТЗ) —
// прибрати MAINTENANCE_PASSWORD з .env на сервері й перезапустити PM2,
// правити код не треба.
import 'dotenv/config';
import { defineMiddleware } from 'astro:middleware';
import { detectLocaleFromPath, renderComingSoonPage } from './lib/comingSoonPage';
import { pickLocaleFromAcceptLanguage } from './i18n/locales';

const PREVIEW_COOKIE = 'hha_preview';

export const onRequest = defineMiddleware(async (context, next) => {
	const url = new URL(context.request.url);

	// checkin.hha.ee — окремий піддомен для Külastajakaart (Фаза 2/3,
	// 2026-08-30). Це операційний інструмент для гостей, які фізично
	// заселяються ЗАРАЗ — не залежить від маркетингового Coming Soon
	// тех-режиму головного сайту, тому пропускаємо гейт повністю. Корінь
	// "/" одразу веде на форму (не на лендінг, як на hha.ee).
	if (url.hostname.startsWith('checkin.')) {
		if (url.pathname === '/') {
			const locale = pickLocaleFromAcceptLanguage(context.request.headers.get('accept-language'));
			return context.redirect(`/${locale}/checkin`, 302);
		}
		return next();
	}

	const password = process.env.MAINTENANCE_PASSWORD;
	if (!password) return next();

	// Telegram сам стукає в наш вебхук (сервер-до-сервера, без будь-яких
	// cookie) — цей шлях має лишатись доступним незалежно від тех-режиму,
	// інакше відповіді команди в живому чаті мовчки губляться.
	if (url.pathname === '/api/chat/telegram-webhook') return next();

	const keyParam = url.searchParams.get('key');

	if (keyParam === password) {
		url.searchParams.delete('key');
		context.cookies.set(PREVIEW_COOKIE, password, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 30,
		});
		return context.redirect(url.pathname + url.search, 302);
	}

	if (context.cookies.get(PREVIEW_COOKIE)?.value === password) {
		return next();
	}

	const locale = detectLocaleFromPath(url.pathname);
	return new Response(renderComingSoonPage(locale), {
		status: 200,
		headers: { 'content-type': 'text/html; charset=utf-8' },
	});
});
