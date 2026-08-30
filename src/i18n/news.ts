import type { Locale } from './locales';

export interface NewsCopy {
	navLabel: string;
	heading: string;
	subheading: string;
	metaDescription: string;
	readMore: string;
	backToNews: string;
	empty: string;
}

export const newsCopy: Record<Locale, NewsCopy> = {
	en: {
		navLabel: 'News',
		heading: 'News',
		subheading: 'Updates from Hostel 3A.',
		metaDescription: 'News and updates from Hostel 3A — Hostel & Hotel Apartments in Maardu, Estonia.',
		readMore: 'Read more',
		backToNews: '← Back to news',
		empty: 'No news yet — check back soon.',
	},
	et: {
		navLabel: 'Uudised',
		heading: 'Uudised',
		subheading: 'Hostel 3A uudised.',
		metaDescription: 'Uudised ja värskendused Hostel 3A-lt — Hostel & Hotel Apartments Maardus, Eestis.',
		readMore: 'Loe edasi',
		backToNews: '← Tagasi uudiste juurde',
		empty: 'Uudiseid veel pole — vaata varsti tagasi.',
	},
	uk: {
		navLabel: 'Новини',
		heading: 'Новини',
		subheading: 'Оновлення від Hostel 3A.',
		metaDescription: 'Новини та оновлення від Hostel 3A — Hostel & Hotel Apartments у Маарду, Естонія.',
		readMore: 'Читати далі',
		backToNews: '← Назад до новин',
		empty: 'Поки що новин немає — зазирніть пізніше.',
	},
	ru: {
		navLabel: 'Новости',
		heading: 'Новости',
		subheading: 'Обновления от Hostel 3A.',
		metaDescription: 'Новости и обновления от Hostel 3A — Hostel & Hotel Apartments в Маарду, Эстония.',
		readMore: 'Читать далее',
		backToNews: '← Назад к новостям',
		empty: 'Пока новостей нет — загляните позже.',
	},
	lv: {
		navLabel: 'Ziņas',
		heading: 'Ziņas',
		subheading: 'Jaunumi no Hostel 3A.',
		metaDescription: 'Ziņas un jaunumi no Hostel 3A — Hostel & Hotel Apartments Maardu, Igaunijā.',
		readMore: 'Lasīt vairāk',
		backToNews: '← Atpakaļ uz ziņām',
		empty: 'Ziņu vēl nav — ielūkojieties drīz.',
	},
	fi: {
		navLabel: 'Uutiset',
		heading: 'Uutiset',
		subheading: 'Hostel 3A:n uutiset.',
		metaDescription: 'Uutisia ja päivityksiä Hostel 3A:lta — Hostel & Hotel Apartments Maardussa, Virossa.',
		readMore: 'Lue lisää',
		backToNews: '← Takaisin uutisiin',
		empty: 'Ei vielä uutisia — käy pian uudelleen.',
	},
};
