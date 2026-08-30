// Külastajakaart / картка гостя (Фаза 2/3, ТЗ відкрите питання №1 —
// шаблон надав користувач 2026-08-30, checkin.hha.ee). Окремий i18n-файл
// (той самий патерн, що booking.ts/chat.ts).
import type { Locale } from './locales';

export interface CheckinCopy {
	meta: { title: string; description: string };
	page: {
		heading: string;
		subheading: string;
		sectionPersonal: string;
		firstName: string;
		lastName: string;
		dateOfBirth: string;
		citizenship: string;
		sectionAddress: string;
		country: string;
		city: string;
		street: string;
		zip: string;
		sectionContact: string;
		phone: string;
		email: string;
		sectionAccompanying: string;
		accompanyingHint: string;
		accompanyingName: string;
		accompanyingDob: string;
		accompanyingCitizenship: string;
		addAccompanying: string;
		removeAccompanying: string;
		sectionStay: string;
		arrivalDate: string;
		departureDate: string;
		consentText: string;
		consentCheckbox: string;
		signatureLabel: string;
		signatureClear: string;
		signatureHint: string;
		submitBtn: string;
		submitting: string;
		errorGeneric: string;
		errorConsent: string;
		errorSignature: string;
	};
	confirmation: {
		heading: string;
		subheading: string;
		emailSent: string;
		backHome: string;
		accountCreatedHeading: string;
		accountCreatedBody: string;
		setPasswordLink: string;
	};
}

export const checkin: Record<Locale, CheckinCopy> = {
	en: {
		meta: { title: 'Guest Registration Card — Hostel 3A', description: 'Digital guest registration card for check-in at Hostel 3A, Maardu.' },
		page: {
			heading: 'Guest Registration Card',
			subheading: 'Please fill in your details before or at check-in.',
			sectionPersonal: 'Personal details',
			firstName: 'First name',
			lastName: 'Surname',
			dateOfBirth: 'Date of birth',
			citizenship: 'Citizenship',
			sectionAddress: 'Permanent residence address',
			country: 'Country',
			city: 'City',
			street: 'Street, building, apartment',
			zip: 'ZIP code',
			sectionContact: 'Contact details',
			phone: 'Phone number',
			email: 'E-mail',
			sectionAccompanying: 'Accompanying persons',
			accompanyingHint: 'Fill in if travelling with a spouse or minor children.',
			accompanyingName: 'Full name',
			accompanyingDob: 'Date of birth',
			accompanyingCitizenship: 'Citizenship',
			addAccompanying: '+ Add person',
			removeAccompanying: 'Remove',
			sectionStay: 'Stay details',
			arrivalDate: 'Arrival date',
			departureDate: 'Departure date',
			consentText:
				'By signing, I confirm the accuracy of the provided data and agree to the hostel rules. I also consent to the processing of my personal data in accordance with Estonian law.',
			consentCheckbox: 'I confirm the above and agree.',
			signatureLabel: 'Guest signature',
			signatureClear: 'Clear',
			signatureHint: 'Sign with your finger or mouse in the box above.',
			submitBtn: 'Submit',
			submitting: 'Submitting…',
			errorGeneric: 'Please fill in all required fields.',
			errorConsent: 'Please confirm you agree to the declaration above.',
			errorSignature: 'Please sign in the box above.',
		},
		confirmation: {
			heading: 'Thank you',
			subheading: 'Your registration card has been received.',
			emailSent: 'A copy has been sent to your email.',
			backHome: 'Back to homepage',
			accountCreatedHeading: 'We created a loyalty account for you',
			accountCreatedBody: 'Earn points on future stays. Set a password to log in any time:',
			setPasswordLink: 'Set your password',
		},
	},
	et: {
		meta: { title: 'Külastajakaart — Hostel 3A', description: 'Digitaalne külastajakaart sisseregistreerimiseks Hostel 3A-s, Maardus.' },
		page: {
			heading: 'Külastajakaart',
			subheading: 'Palun täida oma andmed enne saabumist või saabumisel.',
			sectionPersonal: 'Isikuandmed',
			firstName: 'Eesnimi',
			lastName: 'Perekonnanimi',
			dateOfBirth: 'Sünniaeg',
			citizenship: 'Kodakondsus',
			sectionAddress: 'Alalise elukoha aadress',
			country: 'Riik',
			city: 'Linn',
			street: 'Tänav, maja, korter',
			zip: 'Sihtnumber',
			sectionContact: 'Kontaktandmed',
			phone: 'Telefoninumber',
			email: 'E-post',
			sectionAccompanying: 'Kaasreisijad',
			accompanyingHint: 'Täida, kui reisid abikaasa või alaealiste lastega.',
			accompanyingName: 'Nimi',
			accompanyingDob: 'Sünniaeg',
			accompanyingCitizenship: 'Kodakondsus',
			addAccompanying: '+ Lisa isik',
			removeAccompanying: 'Eemalda',
			sectionStay: 'Viibimise andmed',
			arrivalDate: 'Saabumise kuupäev',
			departureDate: 'Lahkumise kuupäev',
			consentText:
				'Allkirjastamisega kinnitan esitatud andmete õigsust ja nõustun majutusasutuse eeskirjadega. Samuti annan nõusoleku oma isikuandmete töötlemiseks vastavalt Eesti seadusandlusele.',
			consentCheckbox: 'Kinnitan eelnevat ja nõustun.',
			signatureLabel: 'Külalise allkiri',
			signatureClear: 'Tühjenda',
			signatureHint: 'Allkirjasta sõrme või hiirega ülal olevas kastis.',
			submitBtn: 'Saada',
			submitting: 'Saadan…',
			errorGeneric: 'Palun täida kõik kohustuslikud väljad.',
			errorConsent: 'Palun kinnita, et nõustud ülaltoodud deklaratsiooniga.',
			errorSignature: 'Palun allkirjasta ülal olevas kastis.',
		},
		confirmation: {
			heading: 'Aitäh',
			subheading: 'Sinu külastajakaart on vastu võetud.',
			emailSent: 'Koopia on saadetud sinu e-postile.',
			backHome: 'Tagasi avalehele',
			accountCreatedHeading: 'Lõime sulle lojaalsuskonto',
			accountCreatedBody: 'Teeni punkte tulevaste külastuste eest. Määra parool sisselogimiseks:',
			setPasswordLink: 'Määra parool',
		},
	},
	uk: {
		meta: { title: 'Картка гостя — Hostel 3A', description: 'Електронна картка гостя для заселення в Hostel 3A, Маарду.' },
		page: {
			heading: 'Картка гостя',
			subheading: 'Будь ласка, заповніть дані перед заїздом або під час заїзду.',
			sectionPersonal: 'Особисті дані',
			firstName: "Ім'я",
			lastName: 'Прізвище',
			dateOfBirth: 'Дата народження',
			citizenship: 'Громадянство',
			sectionAddress: 'Адреса постійного проживання',
			country: 'Країна',
			city: 'Місто',
			street: 'Вулиця, будинок, квартира',
			zip: 'Поштовий індекс',
			sectionContact: 'Контактні дані',
			phone: 'Номер телефону',
			email: 'Електронна пошта',
			sectionAccompanying: 'Супроводжуючі особи',
			accompanyingHint: "Заповнюється, якщо з вами подорожує чоловік/дружина або неповнолітні діти.",
			accompanyingName: "Ім'я та прізвище",
			accompanyingDob: 'Дата народження',
			accompanyingCitizenship: 'Громадянство',
			addAccompanying: '+ Додати особу',
			removeAccompanying: 'Видалити',
			sectionStay: 'Деталі перебування',
			arrivalDate: 'Дата заїзду',
			departureDate: 'Дата виїзду',
			consentText:
				'Своїм підписом я підтверджую правильність наданих даних та погоджуюсь із правилами проживання в хостелі. Я також даю згоду на обробку моїх персональних даних відповідно до законодавства Естонії.',
			consentCheckbox: 'Підтверджую вищевикладене і погоджуюсь.',
			signatureLabel: 'Підпис гостя',
			signatureClear: 'Очистити',
			signatureHint: 'Розпишіться пальцем або мишкою у полі вище.',
			submitBtn: 'Надіслати',
			submitting: 'Надсилаємо…',
			errorGeneric: "Заповніть, будь ласка, усі обов'язкові поля.",
			errorConsent: 'Підтвердіть, будь ласка, згоду з декларацією вище.',
			errorSignature: 'Розпишіться, будь ласка, у полі вище.',
		},
		confirmation: {
			heading: 'Дякуємо',
			subheading: 'Вашу картку гостя отримано.',
			emailSent: 'Копію надіслано на вашу пошту.',
			backHome: 'На головну',
			accountCreatedHeading: 'Ми створили для вас бонусний акаунт',
			accountCreatedBody: "Отримуйте бали за майбутні проживання. Встановіть пароль, щоб входити будь-коли:",
			setPasswordLink: 'Встановити пароль',
		},
	},
	ru: {
		meta: { title: 'Карта гостя — Hostel 3A', description: 'Электронная карта гостя для заселения в Hostel 3A, Маарду.' },
		page: {
			heading: 'Карта гостя',
			subheading: 'Пожалуйста, заполните данные перед заездом или во время заезда.',
			sectionPersonal: 'Личные данные',
			firstName: 'Имя',
			lastName: 'Фамилия',
			dateOfBirth: 'Дата рождения',
			citizenship: 'Гражданство',
			sectionAddress: 'Адрес постоянного проживания',
			country: 'Страна',
			city: 'Город',
			street: 'Улица, дом, квартира',
			zip: 'Почтовый индекс',
			sectionContact: 'Контактные данные',
			phone: 'Номер телефона',
			email: 'Электронная почта',
			sectionAccompanying: 'Сопровождающие лица',
			accompanyingHint: 'Заполняется, если с вами путешествует супруг(а) или несовершеннолетние дети.',
			accompanyingName: 'Имя и фамилия',
			accompanyingDob: 'Дата рождения',
			accompanyingCitizenship: 'Гражданство',
			addAccompanying: '+ Добавить человека',
			removeAccompanying: 'Удалить',
			sectionStay: 'Детали проживания',
			arrivalDate: 'Дата заезда',
			departureDate: 'Дата выезда',
			consentText:
				'Своей подписью я подтверждаю правильность предоставленных данных и соглашаюсь с правилами проживания в хостеле. Я также даю согласие на обработку моих персональных данных в соответствии с законодательством Эстонии.',
			consentCheckbox: 'Подтверждаю вышеизложенное и соглашаюсь.',
			signatureLabel: 'Подпись гостя',
			signatureClear: 'Очистить',
			signatureHint: 'Распишитесь пальцем или мышкой в поле выше.',
			submitBtn: 'Отправить',
			submitting: 'Отправляем…',
			errorGeneric: 'Пожалуйста, заполните все обязательные поля.',
			errorConsent: 'Подтвердите, пожалуйста, согласие с декларацией выше.',
			errorSignature: 'Распишитесь, пожалуйста, в поле выше.',
		},
		confirmation: {
			heading: 'Спасибо',
			subheading: 'Ваша карта гостя получена.',
			emailSent: 'Копия отправлена на вашу почту.',
			backHome: 'На главную',
			accountCreatedHeading: 'Мы создали для вас бонусный аккаунт',
			accountCreatedBody: 'Получайте баллы за будущие проживания. Установите пароль, чтобы входить в любое время:',
			setPasswordLink: 'Установить пароль',
		},
	},
	lv: {
		meta: { title: 'Viesa reģistrācijas karte — Hostel 3A', description: 'Digitāla viesa reģistrācijas karte reģistrācijai Hostel 3A, Maardu.' },
		page: {
			heading: 'Viesa reģistrācijas karte',
			subheading: 'Lūdzu, aizpildi savus datus pirms ierašanās vai ierodoties.',
			sectionPersonal: 'Personas dati',
			firstName: 'Vārds',
			lastName: 'Uzvārds',
			dateOfBirth: 'Dzimšanas datums',
			citizenship: 'Pilsonība',
			sectionAddress: 'Pastāvīgās dzīvesvietas adrese',
			country: 'Valsts',
			city: 'Pilsēta',
			street: 'Iela, māja, dzīvoklis',
			zip: 'Pasta indekss',
			sectionContact: 'Kontaktinformācija',
			phone: 'Tālruņa numurs',
			email: 'E-pasts',
			sectionAccompanying: 'Pavadošās personas',
			accompanyingHint: 'Aizpildi, ja ceļo kopā ar laulāto vai nepilngadīgiem bērniem.',
			accompanyingName: 'Vārds, uzvārds',
			accompanyingDob: 'Dzimšanas datums',
			accompanyingCitizenship: 'Pilsonība',
			addAccompanying: '+ Pievienot personu',
			removeAccompanying: 'Noņemt',
			sectionStay: 'Uzturēšanās informācija',
			arrivalDate: 'Ierašanās datums',
			departureDate: 'Izbraukšanas datums',
			consentText:
				'Ar parakstu apstiprinu sniegto datu pareizību un piekrītu izmitināšanas vietas noteikumiem. Tāpat piekrītu savu personas datu apstrādei saskaņā ar Igaunijas likumdošanu.',
			consentCheckbox: 'Apstiprinu iepriekš minēto un piekrītu.',
			signatureLabel: 'Viesa paraksts',
			signatureClear: 'Notīrīt',
			signatureHint: 'Parakstieties ar pirkstu vai peli augšējā lodziņā.',
			submitBtn: 'Iesniegt',
			submitting: 'Iesniedz…',
			errorGeneric: 'Lūdzu, aizpildi visus obligātos laukus.',
			errorConsent: 'Lūdzu, apstiprini piekrišanu iepriekš minētajai deklarācijai.',
			errorSignature: 'Lūdzu, parakstieties augšējā lodziņā.',
		},
		confirmation: {
			heading: 'Paldies',
			subheading: 'Tava reģistrācijas karte ir saņemta.',
			emailSent: 'Kopija nosūtīta uz tavu e-pastu.',
			backHome: 'Uz sākumlapu',
			accountCreatedHeading: 'Mēs izveidojām tev lojalitātes kontu',
			accountCreatedBody: 'Saņem punktus par turpmākajām uzturēšanās reizēm. Iestati paroli, lai pieslēgtos jebkurā laikā:',
			setPasswordLink: 'Iestatīt paroli',
		},
	},
	fi: {
		meta: { title: 'Vieraskortti — Hostel 3A', description: 'Digitaalinen vieraskortti sisäänkirjautumiseen Hostel 3A:ssa, Maardussa.' },
		page: {
			heading: 'Vieraskortti',
			subheading: 'Täytä tietosi ennen saapumista tai saapuessasi.',
			sectionPersonal: 'Henkilötiedot',
			firstName: 'Etunimi',
			lastName: 'Sukunimi',
			dateOfBirth: 'Syntymäaika',
			citizenship: 'Kansalaisuus',
			sectionAddress: 'Vakituisen asuinpaikan osoite',
			country: 'Maa',
			city: 'Kaupunki',
			street: 'Katu, talo, asunto',
			zip: 'Postinumero',
			sectionContact: 'Yhteystiedot',
			phone: 'Puhelinnumero',
			email: 'Sähköposti',
			sectionAccompanying: 'Mukana matkustavat',
			accompanyingHint: 'Täytä, jos matkustat puolison tai alaikäisten lasten kanssa.',
			accompanyingName: 'Koko nimi',
			accompanyingDob: 'Syntymäaika',
			accompanyingCitizenship: 'Kansalaisuus',
			addAccompanying: '+ Lisää henkilö',
			removeAccompanying: 'Poista',
			sectionStay: 'Majoitustiedot',
			arrivalDate: 'Saapumispäivä',
			departureDate: 'Lähtöpäivä',
			consentText:
				'Allekirjoituksellani vahvistan antamieni tietojen oikeellisuuden ja hyväksyn majoituspaikan säännöt. Annan myös suostumukseni henkilötietojeni käsittelyyn Viron lainsäädännön mukaisesti.',
			consentCheckbox: 'Vahvistan yllä olevan ja hyväksyn.',
			signatureLabel: 'Vieraan allekirjoitus',
			signatureClear: 'Tyhjennä',
			signatureHint: 'Allekirjoita sormella tai hiirellä yllä olevaan laatikkoon.',
			submitBtn: 'Lähetä',
			submitting: 'Lähetetään…',
			errorGeneric: 'Täytä kaikki pakolliset kentät.',
			errorConsent: 'Vahvista, että hyväksyt yllä olevan vakuutuksen.',
			errorSignature: 'Allekirjoita yllä olevaan laatikkoon.',
		},
		confirmation: {
			heading: 'Kiitos',
			subheading: 'Vieraskorttisi on vastaanotettu.',
			emailSent: 'Kopio on lähetetty sähköpostiisi.',
			backHome: 'Etusivulle',
			accountCreatedHeading: 'Loimme sinulle kanta-asiakastilin',
			accountCreatedBody: 'Kerää pisteitä tulevista majoituksista. Aseta salasana kirjautuaksesi milloin tahansa:',
			setPasswordLink: 'Aseta salasana',
		},
	},
};
