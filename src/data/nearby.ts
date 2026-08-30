// "Місця поблизу" — надано користувачем 2026-08-29 (панель Booking).
// Назви визначних місць лишені англійською/міжнародною формою уніфіковано
// для всіх 6 мов сайту (як уже й було з "Kadriorg Palace"/"Kumu Art
// Museum" у джерелі) — стандартна практика для власних назв на travel-сайтах.
export interface NearbyPlace {
	name: string;
	km: number;
}

export const nearby: { attractions: NearbyPlace[]; food: NearbyPlace[]; nature: NearbyPlace[]; transport: NearbyPlace[] } = {
	attractions: [
		{ name: 'Estonian History Museum', km: 12 },
		{ name: 'Kadriorg Art Museum', km: 15 },
		{ name: 'Kadriorg Palace', km: 15 },
		{ name: 'Kumu Art Museum', km: 15 },
		{ name: "Maiden's Tower", km: 16 },
		{ name: 'Niguliste Museum (church & concert hall)', km: 16 },
		{ name: 'Toompea Castle', km: 16 },
		{ name: 'Seaplane Harbour (Lennusadam)', km: 17 },
		{ name: 'Town Hall Square', km: 17 },
		{ name: 'Great Coastal Gate', km: 18 },
	],
	food: [
		{ name: 'Maardu Grill', km: 2.9 },
		{ name: 'Restoran Fortuna', km: 3.3 },
		{ name: 'Ranniku restoran', km: 3.3 },
	],
	nature: [{ name: 'Jägala Waterfall', km: 13 }],
	transport: [
		{ name: 'Lagedi (train)', km: 9 },
		{ name: 'Kulli (train)', km: 13 },
		{ name: 'Tallinn Bus Terminal', km: 14 },
		{ name: 'Tallinn Lennart Meri Airport', km: 14 },
	],
};
