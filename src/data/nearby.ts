// "Місця поблизу" — надано користувачем 2026-08-29 (панель Booking).
// Назви визначних місць для 5 мов (en/uk/ru/lv/fi) лишені англійською/
// міжнародною формою — стандартна практика для власних назв на
// travel-сайтах. Для естонської (`et`) — реальні офіційні назви мовою
// оригіналу, надані користувачем 2026-08-30 ("правильный перевод").
export interface NearbyPlace {
	name: string;
	/** Реальна назва естонською — використовується лише на /et/, якщо задана. */
	nameEt?: string;
	km: number;
}

export const nearby: { attractions: NearbyPlace[]; food: NearbyPlace[]; nature: NearbyPlace[]; transport: NearbyPlace[] } = {
	attractions: [
		{ name: 'Estonian History Museum', nameEt: 'Eesti Ajaloomuuseum', km: 12 },
		{ name: 'Kadriorg Art Museum', nameEt: 'Kadrioru kunstimuuseum', km: 15 },
		{ name: 'Kadriorg Palace', nameEt: 'Kadrioru loss', km: 15 },
		{ name: 'Kumu Art Museum', nameEt: 'Kumu kunstimuuseum', km: 15 },
		{ name: "Maiden's Tower", nameEt: 'Neitsitorn', km: 16 },
		{ name: 'Niguliste Museum (church & concert hall)', nameEt: 'Niguliste muuseum (kirik ja kontserdisaal)', km: 16 },
		{ name: 'Toompea Castle', nameEt: 'Toompea loss', km: 16 },
		{ name: 'Seaplane Harbour (Lennusadam)', nameEt: 'Lennusadam', km: 17 },
		{ name: 'Town Hall Square', nameEt: 'Raekoja plats', km: 17 },
		{ name: 'Great Coastal Gate', nameEt: 'Suur Rannavärav', km: 18 },
	],
	food: [
		{ name: 'Maardu Grill', nameEt: 'Maardu Grill', km: 2.9 },
		{ name: 'Restoran Fortuna', nameEt: 'Restoran Fortuna', km: 3.3 },
		{ name: 'Ranniku restoran', nameEt: 'Ranniku restoran', km: 3.3 },
	],
	nature: [{ name: 'Jägala Waterfall', nameEt: 'Jägala juga', km: 13 }],
	transport: [
		{ name: 'Lagedi (train)', nameEt: 'Lagedi (rong)', km: 9 },
		{ name: 'Kulli (train)', nameEt: 'Kulli (rong)', km: 13 },
		{ name: 'Tallinn Bus Terminal', nameEt: 'Tallinna bussijaam', km: 14 },
		{ name: 'Tallinn Lennart Meri Airport', nameEt: 'Tallinna Lennart Meri lennujaam', km: 14 },
	],
};
