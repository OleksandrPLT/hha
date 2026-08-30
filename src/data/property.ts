// Факти про об'єкт — перевірені 2026-08-29 по фото з попереднього сайту
// (вивіска на фасаді: адреса, телефон/WhatsApp). Не вигадувати нових фактів
// (рейтинги, кількість номерів тощо) без підтвердження клієнта — див.
// пам'ять hha-apartments-tz / відкриті питання.
export const property = {
	brand: 'Hostel & Hotel Apartments',
	propertyName: 'Hostel 3A',
	streetAddress: 'Kombinaadi 3a',
	city: 'Maardu',
	postalCode: '74114',
	country: 'EE',
	countryName: 'Estonia',
	phoneDisplay: '+372 562 39 000',
	phoneE164: '+37256239000',
	email: 'office@hha.ee',
	bookingUrl: 'https://www.booking.com/hotel/ee/hostel-hotell-3a.html',
	// Без API-ключа Google Maps — просто embed за пошуковим запитом, працює без ключа.
	mapEmbedSrc:
		'https://www.google.com/maps?q=Kombinaadi+3a,+Maardu,+Estonia&output=embed',
	mapLinkHref: 'https://www.google.com/maps/search/?api=1&query=Kombinaadi+3a+Maardu+Estonia',
	buffetHours: 'Mon–Fri 8:00–18:00',
	// Знято вручну через пошук 2026-08-29 (booking.com віддає порожню сторінку
	// без JS-рендерингу — WebFetch не працює). Це знімок на дату, НЕ живий
	// віджет — Booking API/офіційний доступ див. відкрите питання №3 в ТЗ.
	// Оновлювати вручну час від часу, поки немає living-інтеграції.
	bookingScore: '7.6',
	bookingReviewCount: 41,
	bookingSnapshotDate: 'Aug 2026',
	// Google-рейтинг — надано користувачем напряму (share.google посилання
	// не піддається WebFetch/скрапінгу, JS-рендер) 2026-08-29. Теж знімок,
	// не живий віджет.
	googleScore: '4.2',
	googleReviewCount: 18,
	googleReviewsUrl: 'https://share.google/ZkJ3yUdWz46y6KWyJ',
	// Юрособа-власник — підтверджено користувачем 2026-08-29 (inforegister.ee),
	// публікація в футері узгоджена явно. Джерело: registrikood 10049852.
	legalEntityName: 'AS P&G Grupp',
	legalEntityRegCode: '10049852',
	legalEntityVat: 'EE100194913',
	legalEntityAddress: 'Toom-Kooli tn 7, Tallinn 10130, Estonia',
} as const;
