// Фаза 4 (система бронювань, ТЗ §5.4) — власний i18n-файл, той самий
// патерн, що й faq.ts/amenities.ts/account.ts (окремий файл на фічу).
// Метод оплати "банківський переказ" свідомо не додано — реальних
// реквізитів (IBAN) від клієнта не отримано, вигадувати не можна (той
// самий принцип, що й з іншими фактами про об'єкт). Є два робочих методи:
// оплата на місці (готівка/картка) і Revolut Pay (онлайн, ключі Merchant
// API надані користувачем 2026-08-30).
import type { Locale } from './locales';

export interface BookingCopy {
	meta: { title: string; description: string };
	page: {
		heading: string;
		subheading: string;
		roomLabel: string;
		checkIn: string;
		checkOut: string;
		guestsCount: string;
		checkBtn: string;
		checking: string;
		available: string;
		notAvailable: string;
		errorDates: string;
		detailsHeading: string;
		fullName: string;
		email: string;
		phone: string;
		specialRequests: string;
		specialRequestsPlaceholder: string;
		paymentHeading: string;
		paymentCash: string;
		paymentCashHint: string;
		paymentRevolut: string;
		paymentRevolutHint: string;
		summaryHeading: string;
		summaryNights: string;
		summaryTotal: string;
		submitBtn: string;
		submitting: string;
		errorGeneric: string;
		errorUnavailable: string;
		errorConsent: string;
		consentLabel: string;
		loginHint: string;
		backToRoom: string;
	};
	confirmation: {
		heading: string;
		subheading: string;
		refLabel: string;
		statusPending: string;
		statusConfirmed: string;
		payAtCheckinNote: string;
		paidNote: string;
		emailSent: string;
		backHome: string;
		pointsNote: string;
	};
}

export const booking: Record<Locale, BookingCopy> = {
	en: {
		meta: { title: 'Book your stay — Hostel 3A', description: 'Book directly with Hostel 3A in Maardu, Estonia. Instant confirmation, best direct rate.' },
		page: {
			heading: 'Book your stay',
			subheading: 'Direct booking — no commission, best rate guaranteed.',
			roomLabel: 'Room',
			checkIn: 'Check-in',
			checkOut: 'Check-out',
			guestsCount: 'Guests',
			checkBtn: 'Check availability',
			checking: 'Checking…',
			available: 'Available for these dates',
			notAvailable: 'Sorry, this room is not available for these dates',
			errorDates: 'Please choose valid dates (check-out after check-in, not in the past)',
			detailsHeading: 'Your details',
			fullName: 'Full name',
			email: 'Email',
			phone: 'Phone',
			specialRequests: 'Special requests (optional)',
			specialRequestsPlaceholder: 'Early check-in, extra bed, anything else we should know…',
			paymentHeading: 'Payment',
			paymentCash: 'Pay at check-in',
			paymentCashHint: 'Cash or card, on arrival',
			paymentRevolut: 'Pay now with Revolut',
			paymentRevolutHint: 'Secure online payment',
			summaryHeading: 'Summary',
			summaryNights: 'nights',
			summaryTotal: 'Total',
			submitBtn: 'Confirm booking',
			submitting: 'Booking…',
			errorGeneric: 'Please fill in all required fields correctly.',
			errorUnavailable: 'These dates were just taken by another booking — please choose different dates.',
			errorConsent: 'Please confirm you agree to the booking terms.',
			consentLabel: 'I agree to the booking conditions and the privacy policy',
			loginHint: 'Sign in to auto-fill your details and earn loyalty points',
			backToRoom: '← Back to rooms',
		},
		confirmation: {
			heading: 'Booking received',
			subheading: 'Thank you — we look forward to hosting you.',
			refLabel: 'Booking reference',
			statusPending: 'Awaiting confirmation',
			statusConfirmed: 'Confirmed',
			payAtCheckinNote: 'Please pay on arrival (cash or card).',
			paidNote: 'Payment received — thank you!',
			emailSent: 'A confirmation has been sent to your email.',
			backHome: 'Back to homepage',
			pointsNote: 'Loyalty points will be added to your account after your stay.',
		},
	},
	et: {
		meta: { title: 'Broneeri — Hostel 3A', description: 'Broneeri otse Hostel 3A-s Maardus, Eestis. Kohene kinnitus, parim otsehind.' },
		page: {
			heading: 'Broneeri oma peatumine',
			subheading: 'Otsebroneering — komisjonitasuta, parim hind garanteeritud.',
			roomLabel: 'Tuba',
			checkIn: 'Saabumine',
			checkOut: 'Lahkumine',
			guestsCount: 'Külalisi',
			checkBtn: 'Kontrolli saadavust',
			checking: 'Kontrollimine…',
			available: 'Nendel kuupäevadel on tuba saadaval',
			notAvailable: 'Kahjuks pole see tuba nendel kuupäevadel saadaval',
			errorDates: 'Palun vali sobivad kuupäevad (lahkumine pärast saabumist, mitte minevikus)',
			detailsHeading: 'Sinu andmed',
			fullName: 'Täisnimi',
			email: 'E-post',
			phone: 'Telefon',
			specialRequests: 'Erisoovid (valikuline)',
			specialRequestsPlaceholder: 'Varajane sisseregistreerimine, lisavoodi, muu oluline info…',
			paymentHeading: 'Makse',
			paymentCash: 'Maksan kohapeal',
			paymentCashHint: 'Sularaha või kaart saabumisel',
			paymentRevolut: 'Maksa kohe Revolutiga',
			paymentRevolutHint: 'Turvaline veebimakse',
			summaryHeading: 'Kokkuvõte',
			summaryNights: 'ööd',
			summaryTotal: 'Kokku',
			submitBtn: 'Kinnita broneering',
			submitting: 'Broneerin…',
			errorGeneric: 'Palun täida kõik kohustuslikud väljad korrektselt.',
			errorUnavailable: 'Need kuupäevad broneeriti äsja ära — palun vali teised kuupäevad.',
			errorConsent: 'Palun kinnita, et nõustud broneerimistingimustega.',
			consentLabel: 'Nõustun broneerimistingimuste ja privaatsuspoliitikaga',
			loginHint: 'Logi sisse, et andmed automaatselt täituksid ja teenida lojaalsuspunkte',
			backToRoom: '← Tagasi tubade juurde',
		},
		confirmation: {
			heading: 'Broneering vastu võetud',
			subheading: 'Aitäh — ootame sind hea meelega!',
			refLabel: 'Broneeringu number',
			statusPending: 'Ootab kinnitust',
			statusConfirmed: 'Kinnitatud',
			payAtCheckinNote: 'Palun tasu saabumisel (sularaha või kaart).',
			paidNote: 'Makse laekunud — aitäh!',
			emailSent: 'Kinnitus on saadetud sinu e-postile.',
			backHome: 'Tagasi avalehele',
			pointsNote: 'Lojaalsuspunktid lisatakse sinu kontole pärast peatumist.',
		},
	},
	uk: {
		meta: { title: 'Бронювання — Hostel 3A', description: 'Бронюйте напряму в Hostel 3A у Мaарду, Естонія. Миттєве підтвердження, найкраща пряма ціна.' },
		page: {
			heading: 'Забронювати проживання',
			subheading: 'Пряме бронювання — без комісії, найкраща ціна гарантована.',
			roomLabel: 'Номер',
			checkIn: 'Заїзд',
			checkOut: 'Виїзд',
			guestsCount: 'Гостей',
			checkBtn: 'Перевірити наявність',
			checking: 'Перевірка…',
			available: 'Доступно на ці дати',
			notAvailable: 'На жаль, номер недоступний на ці дати',
			errorDates: 'Оберіть коректні дати (виїзд після заїзду, не в минулому)',
			detailsHeading: 'Ваші дані',
			fullName: "Повне ім'я",
			email: 'Email',
			phone: 'Телефон',
			specialRequests: 'Особливі побажання (необов\'язково)',
			specialRequestsPlaceholder: 'Ранній заїзд, додаткове ліжко, інше, що варто знати…',
			paymentHeading: 'Оплата',
			paymentCash: 'Оплата при заїзді',
			paymentCashHint: 'Готівкою або карткою на місці',
			paymentRevolut: 'Оплатити зараз через Revolut',
			paymentRevolutHint: 'Безпечна онлайн-оплата',
			summaryHeading: 'Підсумок',
			summaryNights: 'ночей',
			summaryTotal: 'Разом',
			submitBtn: 'Підтвердити бронювання',
			submitting: 'Бронюємо…',
			errorGeneric: 'Заповніть коректно всі обов\'язкові поля.',
			errorUnavailable: 'Ці дати щойно зайняли іншим бронюванням — оберіть, будь ласка, інші дати.',
			errorConsent: 'Підтвердіть згоду з умовами бронювання.',
			consentLabel: 'Погоджуюсь з умовами бронювання та політикою конфіденційності',
			loginHint: 'Увійдіть, щоб дані заповнились автоматично і нараховувались бали лояльності',
			backToRoom: '← Назад до номерів',
		},
		confirmation: {
			heading: 'Бронювання отримано',
			subheading: 'Дякуємо — з нетерпінням чекаємо на вас!',
			refLabel: 'Номер бронювання',
			statusPending: 'Очікує підтвердження',
			statusConfirmed: 'Підтверджено',
			payAtCheckinNote: 'Будь ласка, оплатіть при заїзді (готівкою або карткою).',
			paidNote: 'Оплату отримано — дякуємо!',
			emailSent: 'Підтвердження надіслано на вашу пошту.',
			backHome: 'На головну',
			pointsNote: 'Бали лояльності нарахуються на ваш акаунт після проживання.',
		},
	},
	ru: {
		meta: { title: 'Бронирование — Hostel 3A', description: 'Бронируйте напрямую в Hostel 3A в Маарду, Эстония. Мгновенное подтверждение, лучшая прямая цена.' },
		page: {
			heading: 'Забронировать проживание',
			subheading: 'Прямое бронирование — без комиссии, лучшая цена гарантирована.',
			roomLabel: 'Номер',
			checkIn: 'Заезд',
			checkOut: 'Выезд',
			guestsCount: 'Гостей',
			checkBtn: 'Проверить наличие',
			checking: 'Проверка…',
			available: 'Доступно на эти даты',
			notAvailable: 'К сожалению, номер недоступен на эти даты',
			errorDates: 'Выберите корректные даты (выезд после заезда, не в прошлом)',
			detailsHeading: 'Ваши данные',
			fullName: 'Полное имя',
			email: 'Email',
			phone: 'Телефон',
			specialRequests: 'Особые пожелания (необязательно)',
			specialRequestsPlaceholder: 'Ранний заезд, дополнительная кровать, что-то ещё…',
			paymentHeading: 'Оплата',
			paymentCash: 'Оплата при заезде',
			paymentCashHint: 'Наличными или картой на месте',
			paymentRevolut: 'Оплатить сейчас через Revolut',
			paymentRevolutHint: 'Безопасная онлайн-оплата',
			summaryHeading: 'Итог',
			summaryNights: 'ночей',
			summaryTotal: 'Всего',
			submitBtn: 'Подтвердить бронирование',
			submitting: 'Бронируем…',
			errorGeneric: 'Заполните корректно все обязательные поля.',
			errorUnavailable: 'Эти даты только что заняли другим бронированием — выберите, пожалуйста, другие даты.',
			errorConsent: 'Подтвердите согласие с условиями бронирования.',
			consentLabel: 'Согласен(на) с условиями бронирования и политикой конфиденциальности',
			loginHint: 'Войдите, чтобы данные заполнились автоматически и начислялись баллы лояльности',
			backToRoom: '← Назад к номерам',
		},
		confirmation: {
			heading: 'Бронирование получено',
			subheading: 'Спасибо — с нетерпением ждём вас!',
			refLabel: 'Номер бронирования',
			statusPending: 'Ожидает подтверждения',
			statusConfirmed: 'Подтверждено',
			payAtCheckinNote: 'Пожалуйста, оплатите при заезде (наличными или картой).',
			paidNote: 'Оплата получена — спасибо!',
			emailSent: 'Подтверждение отправлено на вашу почту.',
			backHome: 'На главную',
			pointsNote: 'Баллы лояльности начислятся на ваш аккаунт после проживания.',
		},
	},
	lv: {
		meta: { title: 'Rezervācija — Hostel 3A', description: 'Rezervē tieši Hostel 3A Maardu, Igaunijā. Tūlītējs apstiprinājums, labākā tiešā cena.' },
		page: {
			heading: 'Rezervē savu uzturēšanos',
			subheading: 'Tieša rezervācija — bez komisijas, labākā cena garantēta.',
			roomLabel: 'Numurs',
			checkIn: 'Ierašanās',
			checkOut: 'Izbraukšana',
			guestsCount: 'Viesu skaits',
			checkBtn: 'Pārbaudīt pieejamību',
			checking: 'Pārbauda…',
			available: 'Pieejams šajos datumos',
			notAvailable: 'Diemžēl šis numurs šajos datumos nav pieejams',
			errorDates: 'Lūdzu, izvēlies derīgus datumus (izbraukšana pēc ierašanās, ne pagātnē)',
			detailsHeading: 'Tavi dati',
			fullName: 'Vārds, uzvārds',
			email: 'E-pasts',
			phone: 'Tālrunis',
			specialRequests: 'Īpaši pieprasījumi (nav obligāti)',
			specialRequestsPlaceholder: 'Agra reģistrēšanās, papildu gulta, kas cits mums jāzina…',
			paymentHeading: 'Maksājums',
			paymentCash: 'Maksāt ierodoties',
			paymentCashHint: 'Skaidrā naudā vai ar karti uz vietas',
			paymentRevolut: 'Maksāt tagad ar Revolut',
			paymentRevolutHint: 'Drošs tiešsaistes maksājums',
			summaryHeading: 'Kopsavilkums',
			summaryNights: 'naktis',
			summaryTotal: 'Kopā',
			submitBtn: 'Apstiprināt rezervāciju',
			submitting: 'Rezervē…',
			errorGeneric: 'Lūdzu, pareizi aizpildi visus obligātos laukus.',
			errorUnavailable: 'Šos datumus tikko aizņēma cita rezervācija — lūdzu, izvēlies citus datumus.',
			errorConsent: 'Lūdzu, apstiprini piekrišanu rezervācijas noteikumiem.',
			consentLabel: 'Piekrītu rezervācijas noteikumiem un privātuma politikai',
			loginHint: 'Pieslēdzies, lai dati aizpildītos automātiski un uzkrātos lojalitātes punkti',
			backToRoom: '← Atpakaļ pie numuriem',
		},
		confirmation: {
			heading: 'Rezervācija saņemta',
			subheading: 'Paldies — ar prieku sagaidīsim tevi!',
			refLabel: 'Rezervācijas numurs',
			statusPending: 'Gaida apstiprinājumu',
			statusConfirmed: 'Apstiprināts',
			payAtCheckinNote: 'Lūdzu, samaksā ierodoties (skaidrā naudā vai ar karti).',
			paidNote: 'Maksājums saņemts — paldies!',
			emailSent: 'Apstiprinājums nosūtīts uz tavu e-pastu.',
			backHome: 'Uz sākumlapu',
			pointsNote: 'Lojalitātes punkti tiks pievienoti tavam kontam pēc uzturēšanās.',
		},
	},
	fi: {
		meta: { title: 'Varaus — Hostel 3A', description: 'Varaa suoraan Hostel 3A:sta Maardussa, Virossa. Välitön vahvistus, paras suora hinta.' },
		page: {
			heading: 'Varaa majoituksesi',
			subheading: 'Suoravaraus — ei välityspalkkiota, paras hinta taattu.',
			roomLabel: 'Huone',
			checkIn: 'Saapuminen',
			checkOut: 'Lähtö',
			guestsCount: 'Vieraita',
			checkBtn: 'Tarkista saatavuus',
			checking: 'Tarkistetaan…',
			available: 'Saatavilla näille päiville',
			notAvailable: 'Valitettavasti huone ei ole saatavilla näille päiville',
			errorDates: 'Valitse kelvolliset päivämäärät (lähtö saapumisen jälkeen, ei menneisyydessä)',
			detailsHeading: 'Omat tiedot',
			fullName: 'Koko nimi',
			email: 'Sähköposti',
			phone: 'Puhelin',
			specialRequests: 'Erityistoiveet (valinnainen)',
			specialRequestsPlaceholder: 'Aikainen sisäänkirjautuminen, lisävuode, muuta huomioitavaa…',
			paymentHeading: 'Maksu',
			paymentCash: 'Maksa saapuessa',
			paymentCashHint: 'Käteinen tai kortti paikan päällä',
			paymentRevolut: 'Maksa nyt Revolutilla',
			paymentRevolutHint: 'Turvallinen verkkomaksu',
			summaryHeading: 'Yhteenveto',
			summaryNights: 'yötä',
			summaryTotal: 'Yhteensä',
			submitBtn: 'Vahvista varaus',
			submitting: 'Varataan…',
			errorGeneric: 'Täytä kaikki pakolliset kentät oikein.',
			errorUnavailable: 'Nämä päivät varattiin juuri toisella varauksella — valitse toiset päivät.',
			errorConsent: 'Vahvista, että hyväksyt varausehdot.',
			consentLabel: 'Hyväksyn varausehdot ja tietosuojakäytännön',
			loginHint: 'Kirjaudu sisään, jotta tietosi täyttyvät automaattisesti ja saat kanta-asiakaspisteitä',
			backToRoom: '← Takaisin huoneisiin',
		},
		confirmation: {
			heading: 'Varaus vastaanotettu',
			subheading: 'Kiitos — odotamme innolla saapumistasi!',
			refLabel: 'Varausnumero',
			statusPending: 'Odottaa vahvistusta',
			statusConfirmed: 'Vahvistettu',
			payAtCheckinNote: 'Maksa saapuessasi (käteinen tai kortti).',
			paidNote: 'Maksu vastaanotettu — kiitos!',
			emailSent: 'Vahvistus on lähetetty sähköpostiisi.',
			backHome: 'Etusivulle',
			pointsNote: 'Kanta-asiakaspisteet lisätään tilillesi oleskelun jälkeen.',
		},
	},
};
