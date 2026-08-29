// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
		}),
	],

	// 2026-08-29: хостинг hha.ee виявився не VPS (як admin.intech.org.ua), а
	// шаред-хостинг Zone.ee (ZoneOS) без systemd/cron/sudo — тримати живий
	// Node SSR-процес там нема на чому. Поки що (Фаза 1, Coming Soon — без
	// бекенду) свідомо відкат на 'static', деплой напряму в Apache-докрут.
	// Коли дійдемо до кабінетів/бронювання (Фаза 2-4) — треба або знайти
	// механізм Node-хостингу в панелі Zone.ee (Passenger?), або переносити
	// проєкт на окремий VPS; тоді повернути output: 'server' + adapter node.
	output: 'static',
});
