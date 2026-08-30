// Реальні верифіковані відгуки з Booking.com (надіслані користувачем
// 2026-08-29, панель Booking, позначка "verified"). title/comment —
// дослівно, мовою гостя (Booking дозволяє власний заголовок + плюси/мінуси;
// НЕ перекладено на 6 мов сайту — це були б уже не слова гостя). Для
// відгуків без власного тексту (тільки автогенерована Booking-мітка типу
// "Відмінно"/"Досить добре" і "У даному відгуку відсутні коментарі") —
// title/comment не заповнені, показуємо тільки ім'я+країна+бал+дата.
// Порядок — як у Booking (зворотньо-хронологічний), нічого не приховано:
// включно з найнижчою оцінкою (1.0) — рішення користувача 2026-08-29 не
// цензурувати негатив, показати чесно з реальним текстом.
export interface GuestReview {
	name: string;
	countryFlag: string;
	score: number;
	date: string;
	roomType: string;
	title?: string;
	comment?: string;
}

export const guestReviews: GuestReview[] = [
	{ name: 'Yurii', countryFlag: '🇪🇪', score: 10, date: '25 Aug 2026', roomType: 'Mixed dorm, 4 beds' },
	{ name: 'Yurii', countryFlag: '🇪🇪', score: 10, date: '25 Aug 2026', roomType: 'Mixed dorm, 4 beds' },
	{ name: 'Kristiina', countryFlag: '🇪🇪', score: 6, date: '16 Aug 2026', roomType: 'Mixed dorm, 4 beds' },
	{ name: 'Oleg', countryFlag: '🇪🇪', score: 8, date: '26 Jul 2026', roomType: 'Mixed dorm, 4 beds' },
	{ name: 'Sunbris', countryFlag: '🇪🇪', score: 8, date: '23 Jul 2026', roomType: 'Mixed dorm, 4 beds' },
	{
		name: 'Kuulasvuo',
		countryFlag: '🇫🇮',
		score: 1,
		date: '17 May 2026',
		roomType: 'Triple room',
		title: 'Kamala paikka',
		comment:
			'+ En mistään, maksoin ja etsin toisen paikan\n− En voinut yöpyä täällä, niin kamala haju ja likainen paikka. Työmiesten hikiset vaatteet haisivat. Keittiö oli epäsiisti jne. Meni maksettu raha hukkaan.',
	},
	{
		name: 'Mika',
		countryFlag: '🇫🇮',
		score: 7,
		date: '4 Apr 2026',
		roomType: 'Triple room',
		title: 'Raksamiesten suosima hostelli maantien varressa',
		comment:
			'+ Oli lämmintä ja lämpöä pystyi itse säätelemään. Bussipysäkki on lähellä. Yöllä oli rauhallista.\n− Keittiö ja vessat voisivat olla siistimpiäkin. Koko talossa oli melkoinen haju, johon kyllä tottui. Sijainti on syrjäinen ja palvelut vähissä, Maardun keskustaan on ainakin 3 km matka.',
	},
	{ name: 'Oleh', countryFlag: '🇺🇦', score: 10, date: '24 Mar 2026', roomType: 'Mixed dorm, 4 beds · 28 nights' },
	{ name: 'Asko', countryFlag: '🇪🇪', score: 7, date: '16 Oct 2025', roomType: 'Triple room' },
	{
		name: 'Radosław',
		countryFlag: '🇵🇱',
		score: 6,
		date: '4 Sep 2025',
		roomType: 'Triple room',
		comment: '+ Wielkość pokoju.\n− Brud w kuchni, hałas na korytarzu o 1 w nocy, brak wyciszenia pokoju.',
	},
];
