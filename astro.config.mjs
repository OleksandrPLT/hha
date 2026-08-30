// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const site = 'https://hha.ee';

// ТЗ §1/§8: UKR/EST/ENG/RUS/LAT/FIN, кожна мова — окремий URL-префікс
// (/et/, /en/, ...) з hreflang + x-default між ними. defaultLocale тут —
// технічний вибір (яка мова обслуговує "голий" префікс за замовчуванням і
// x-default), не остаточне рішення по контенту — узгодити з клієнтом
// разом з дизайн-макетом (Фаза 1) і поправити, якщо треба.
const locales = ['en', 'et', 'uk', 'ru', 'lv', 'fi'];
const defaultLocale = 'en';

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'never',

	i18n: {
		locales,
		defaultLocale,
		routing: {
			prefixDefaultLocale: true,
		},
	},

	integrations: [
		sitemap({
			i18n: {
				locales: Object.fromEntries(locales.map((l) => [l, l])),
				defaultLocale,
			},
			// "/" — це лише JS-редирект-заглушка (визначає мову гостя і йде на
			// /<locale>), не контентна сторінка — не варто її індексувати.
			filter: (page) => new URL(page).pathname !== '/',
			// @astrojs/sitemap не додає x-default сам — дописуємо вручну поруч з
			// уже згенерованими per-locale hreflang-посиланнями. lastmod — час
			// білда (для статичного лендінгу немає per-page дати оновлення).
			serialize(item) {
				const buildDate = new Date().toISOString();
				const links = item.links ?? [];
				const defaultLink = links.find((l) => l.lang === defaultLocale);
				return {
					...item,
					lastmod: buildDate,
					links: defaultLink ? [...links, { lang: 'x-default', url: defaultLink.url }] : links,
				};
			},
		}),
	],

	// 2026-08-29: hha.ee — шаред-хостинг Zone.ee (ZoneOS), без systemd/cron.
	// АЛЕ в панелі my.zone.eu є офіційна підтримка Node: "Webhosting → PM2
	// and Node.js" (PM2 тримає процес живим) + "mod_proxy backend port" у
	// налаштуваннях домену (Apache проксіює на порт застосунку). Тому
	// гібридний рендеринг: 'server' глобально, а сторінки, яким SSR не
	// потрібен (лендінг/privacy/terms/news) — самі позначені
	// `export const prerender = true` і збираються як статичний HTML.
	// Джерело: https://www.zone.eu/support/kb/installing-a-nodejs-application-on-a-zone-web-server/
	// Див. пам'ять hha-hosting-infra.
	output: 'server',

	adapter: node({
		mode: 'standalone',
	}),

	// Zone.ee mod_proxy термінує TLS і проксіює на застосунок звичайним HTTP,
	// коректно пробрасуючи X-Forwarded-Proto: https — але @astrojs/node у цій
	// версії не має опції довіряти цьому заголовку (немає trustProxy), тож
	// Astro сам будує context.url зі схемою "http". Вбудована origin-перевірка
	// Astro (security.checkOrigin, POST-форми) порівнює реальний
	// `Origin: https://hha.ee` з такого url.origin ("http://hha.ee") — схеми
	// не збігаються, і всі форми (реєстрація/логін/тощо) падають з
	// "Cross-site POST form submissions are forbidden" (перевірено на проді
	// 2026-08-30). Ця перевірка — internal middleware, що ЗАВЖДИ виконується
	// ДО нашого власного src/middleware.ts (unshift в
	// astro/dist/core/middleware/load.js), тому виправити зсередини коду
	// неможливо. Вимикаємо офіційним прапорцем; CSRF-ризик пом'якшений тим,
	// що сесійна кука вже SameSite=Lax (не йде на cross-site POST).
	security: {
		checkOrigin: false,
	},
});
