import type { Locale } from './locales';

export interface NearbyCopy {
	eyebrow: string;
	heading: string;
	subheading: string;
	categories: { attractions: string; food: string; nature: string; transport: string };
}

export const nearbyCopy: Record<Locale, NearbyCopy> = {
	en: {
		eyebrow: 'Around you',
		heading: "What's nearby",
		subheading: 'Distances from Hostel 3A, straight-line.',
		categories: { attractions: 'Sights in Tallinn', food: 'Restaurants & cafés', nature: 'Nature', transport: 'Getting around' },
	},
	et: {
		eyebrow: 'Lähiümbrus',
		heading: 'Mis on lähedal',
		subheading: 'Kaugused Hostel 3A-st linnulennult.',
		categories: { attractions: 'Vaatamisväärsused Tallinnas', food: 'Restoranid ja kohvikud', nature: 'Loodus', transport: 'Liikumine' },
	},
	uk: {
		eyebrow: 'Поблизу',
		heading: 'Що поруч',
		subheading: 'Відстані від Hostel 3A по прямій.',
		categories: { attractions: 'Визначні місця в Таллінні', food: 'Ресторани та кафе', nature: 'Природа', transport: 'Транспорт' },
	},
	ru: {
		eyebrow: 'Рядом',
		heading: 'Что поблизости',
		subheading: 'Расстояния от Hostel 3A по прямой.',
		categories: { attractions: 'Достопримечательности Таллинна', food: 'Рестораны и кафе', nature: 'Природа', transport: 'Транспорт' },
	},
	lv: {
		eyebrow: 'Tuvumā',
		heading: 'Kas ir tuvumā',
		subheading: 'Attālumi no Hostel 3A taisnā līnijā.',
		categories: { attractions: 'Apskates vietas Tallinā', food: 'Restorāni un kafejnīcas', nature: 'Daba', transport: 'Pārvietošanās' },
	},
	fi: {
		eyebrow: 'Lähistöllä',
		heading: 'Mitä lähellä on',
		subheading: 'Etäisyydet Hostel 3A:sta linnuntietä.',
		categories: { attractions: 'Nähtävyydet Tallinnassa', food: 'Ravintolat ja kahvilat', nature: 'Luonto', transport: 'Liikkuminen' },
	},
};
