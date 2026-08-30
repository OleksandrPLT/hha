import type { Locale } from './locales';

export interface ComingSoonCopy {
	tagline: string;
	heading: string;
	body: string;
	units: { days: string; hours: string; minutes: string; seconds: string };
	contactLabel: string;
	poweredBy: string;
	metaDescription: string;
}

// Копірайтинг для тимчасової Coming Soon сторінки (Фаза 1). Не остаточні
// SEO-тексти лендінгу (ТЗ §8 — ті пишуться окремо під ключові слова кожної
// мови), тут просто коректний, живий переклад плейсхолдера.
export const comingSoon: Record<Locale, ComingSoonCopy> = {
	en: {
		tagline: 'Modern apartments in Estonia',
		heading: 'Coming soon',
		body: "We're putting the finishing touches on our new website. Thank you for your patience.",
		units: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
		contactLabel: 'Contact us',
		poweredBy: 'Website by',
		metaDescription: 'Hostel & Hotel Apartments — modern apartments in Estonia. Our new website is launching soon.',
	},
	et: {
		tagline: 'Moodsad korterid Eestis',
		heading: 'Peatselt',
		body: 'Viimistleme oma uut veebilehte. Täname kannatlikkuse eest.',
		units: { days: 'Päeva', hours: 'Tundi', minutes: 'Minutit', seconds: 'Sekundit' },
		contactLabel: 'Võta ühendust',
		poweredBy: 'Veebilehe lõi',
		metaDescription: 'Hostel & Hotel Apartments — moodsad korterid Eestis. Meie uus veebileht avatakse peatselt.',
	},
	uk: {
		tagline: 'Сучасні апартаменти в Естонії',
		heading: 'Незабаром',
		body: 'Ми завершуємо роботу над нашим новим сайтом. Дякуємо за терпіння.',
		units: { days: 'Днів', hours: 'Годин', minutes: 'Хвилин', seconds: 'Секунд' },
		contactLabel: "Зв'язатися з нами",
		poweredBy: 'Сайт розробив',
		metaDescription: 'Hostel & Hotel Apartments — сучасні апартаменти в Естонії. Наш новий сайт скоро запрацює.',
	},
	ru: {
		tagline: 'Современные апартаменты в Эстонии',
		heading: 'Скоро',
		body: 'Мы завершаем работу над новым сайтом. Спасибо за терпение.',
		units: { days: 'Дней', hours: 'Часов', minutes: 'Минут', seconds: 'Секунд' },
		contactLabel: 'Связаться с нами',
		poweredBy: 'Сайт создан в',
		metaDescription: 'Hostel & Hotel Apartments — современные апартаменты в Эстонии. Новый сайт скоро заработает.',
	},
	lv: {
		tagline: 'Mūsdienīgi apartamenti Igaunijā',
		heading: 'Drīzumā',
		body: 'Mēs pabeidzam darbu pie jaunās mājaslapas. Paldies par pacietību.',
		units: { days: 'Dienas', hours: 'Stundas', minutes: 'Minūtes', seconds: 'Sekundes' },
		contactLabel: 'Sazinieties ar mums',
		poweredBy: 'Mājaslapu izveidoja',
		metaDescription: 'Hostel & Hotel Apartments — mūsdienīgi apartamenti Igaunijā. Jaunā mājaslapa drīz būs pieejama.',
	},
	fi: {
		tagline: 'Moderneja huoneistoja Virossa',
		heading: 'Pian',
		body: 'Viimeistelemme uutta verkkosivustoamme. Kiitos kärsivällisyydestäsi.',
		units: { days: 'Päivää', hours: 'Tuntia', minutes: 'Minuuttia', seconds: 'Sekuntia' },
		contactLabel: 'Ota yhteyttä',
		poweredBy: 'Sivuston toteutti',
		metaDescription: 'Hostel & Hotel Apartments — moderneja huoneistoja Virossa. Uusi verkkosivusto avataan pian.',
	},
};

// ТЗ (уточнення в чаті 2026-08-29): дата запуску та контактна пошта.
export const LAUNCH_DATE_ISO = '2026-09-01T00:00:00+03:00'; // Europe/Tallinn (EEST)
export const CONTACT_EMAIL = 'office@hha.ee';
