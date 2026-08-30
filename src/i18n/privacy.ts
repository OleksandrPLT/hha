import type { Locale } from './locales';

export interface PrivacyCopy {
	metaDescription: string;
	title: string;
	intro: string;
	sections: { heading: string; body: string[] }[];
	lastUpdated: string;
	backLabel: string;
}

// ЧЕРНЕТКА, не фінальний юридичний текст — відображає реальну поведінку
// сайту (статика, без аналітики, локальне збереження мови, вбудована
// Google-карта) станом на 2026-08. ОБОВ'ЯЗКОВО переглянути з юристом перед
// продакшеном і розширити, коли з'явиться Фаза 2 (кабінет гостя, реєстрація
// проживаючих для міграційної служби — див. пам'ять hha-apartments-tz,
// відкрите питання №1).
export const privacy: Record<Locale, PrivacyCopy> = {
	en: {
		metaDescription: 'How Hostel & Hotel Apartments / Hostel 3A handles your data on hha.ee.',
		title: 'Privacy Policy',
		intro: 'This page explains how AS P&G Grupp, operating Hostel & Hotel Apartments / Hostel 3A, handles information when you visit hha.ee.',
		sections: [
			{
				heading: 'Who we are',
				body: [
					'Data controller: AS P&G Grupp, registry code 10049852, VAT EE100194913, Toom-Kooli tn 7, Tallinn 10130, Estonia.',
					'Contact: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'What this website collects today',
				body: [
					"This website does not use analytics or advertising cookies. Your language choice is remembered in your browser's local storage and never leaves your device or reaches us.",
					"The map on this page is embedded from Google Maps. Loading it may let Google set cookies and process your data under Google's own privacy policy.",
				],
			},
			{
				heading: 'Cookies',
				body: [
					"We don't set any cookies of our own — there is no analytics, advertising, or tracking on this site.",
					"Loading the Google Maps section on this page may let Google set its own cookies, governed by Google's privacy policy, not ours. If we later add features such as online booking or live chat, this page will be updated to list any cookies they require.",
				],
			},
			{
				heading: 'If you contact us',
				body: [
					'If you email us, call, or write on WhatsApp, we use the information you provide — such as your name and contact details — only to reply to you and, where relevant, to arrange your stay. We keep this correspondence only as long as necessary.',
				],
			},
			{
				heading: 'Future online booking and guest accounts',
				body: [
					'When online booking and guest accounts become available on this site, this policy will be updated to describe the additional data we collect — for example, identity details required by Estonian law for registering guests — and how it is used.',
				],
			},
			{
				heading: 'Your rights',
				body: [
					'Under the GDPR, you can ask to access, correct, or delete your personal data, restrict or object to its processing, and request a copy in a portable format. To exercise these rights, contact us at office@hha.ee. If you are not satisfied with our response, you can lodge a complaint with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).',
				],
			},
			{
				heading: 'Changes to this policy',
				body: ['We may update this policy from time to time. The current version applies from the date shown below.'],
			},
		],
		lastUpdated: 'Last updated: August 2026',
		backLabel: '← Back to hha.ee',
	},
	et: {
		metaDescription: 'Kuidas Hostel & Hotel Apartments / Hostel 3A käitleb sinu andmeid lehel hha.ee.',
		title: 'Privaatsuspoliitika',
		intro: 'See leht selgitab, kuidas AS P&G Grupp, kes haldab Hostel & Hotel Apartments / Hostel 3A, käitleb infot, kui külastad hha.ee.',
		sections: [
			{
				heading: 'Kes me oleme',
				body: [
					'Vastutav töötleja: AS P&G Grupp, registrikood 10049852, KMKR EE100194913, Toom-Kooli tn 7, Tallinn 10130, Eesti.',
					'Kontakt: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'Mida see veebileht praegu kogub',
				body: [
					'See veebileht ei kasuta analüütika- ega reklaamiküpsiseid. Sinu keelevalik jääb meelde brauseri local storage\'is ega lahku kunagi sinu seadmest ega jõua meieni.',
					'Sellel lehel olev kaart on laaditud Google Mapsist. Selle laadimine võib lubada Google\'il seada küpsiseid ja töödelda sinu andmeid vastavalt Google\'i enda privaatsuspoliitikale.',
				],
			},
			{
				heading: 'Küpsised',
				body: [
					'Me ise küpsiseid ei sea — sellel lehel ei ole analüütikat, reklaami ega jälgimist.',
					"Selle lehe Google Mapsi kaardi laadimine võib lubada Google'il seada oma küpsiseid, mis alluvad Google'i, mitte meie privaatsuspoliitikale. Kui lisame hiljem näiteks veebibroneerimise või live-chati, uuendatakse seda lehte, et loetleda nende nõutavad küpsised.",
				],
			},
			{
				heading: 'Kui võtad meiega ühendust',
				body: [
					'Kui saadad meile e-kirja, helistad või kirjutad WhatsAppis, kasutame sinu antud infot — näiteks nime ja kontaktandmeid — ainult vastamiseks ja vajaduse korral sinu viibimise korraldamiseks. Säilitame seda kirjavahetust ainult nii kaua, kui vajalik.',
				],
			},
			{
				heading: 'Tulevane veebibroneerimine ja külaliskonto',
				body: [
					'Kui sellel lehel muutub kättesaadavaks veebibroneerimine ja külaliskonto, uuendatakse seda poliitikat, et kirjeldada täiendavaid andmeid, mida kogume — näiteks Eesti seadusega nõutud isikuandmed külaliste registreerimiseks — ja kuidas neid kasutatakse.',
				],
			},
			{
				heading: 'Sinu õigused',
				body: [
					'GDPR alusel võid küsida oma isikuandmetele juurdepääsu, nende parandamist või kustutamist, töötlemise piiramist või sellele vastuväite esitamist ning andmete koopiat ülekantavas formaadis. Nende õiguste kasutamiseks võta meiega ühendust aadressil office@hha.ee. Kui meie vastus ei rahulda sind, võid pöörduda Andmekaitse Inspektsiooni poole.',
				],
			},
			{
				heading: 'Muudatused selles poliitikas',
				body: ['Võime seda poliitikat aeg-ajalt uuendada. Kehtiv versioon kehtib alates allpool näidatud kuupäevast.'],
			},
		],
		lastUpdated: 'Viimati uuendatud: august 2026',
		backLabel: '← Tagasi hha.ee juurde',
	},
	uk: {
		metaDescription: 'Як Hostel & Hotel Apartments / Hostel 3A обробляє ваші дані на hha.ee.',
		title: 'Політика конфіденційності',
		intro: 'Ця сторінка пояснює, як AS P&G Grupp, що керує Hostel & Hotel Apartments / Hostel 3A, обробляє інформацію, коли ви відвідуєте hha.ee.',
		sections: [
			{
				heading: 'Хто ми',
				body: [
					'Контролер даних: AS P&G Grupp, реєстраційний код 10049852, VAT EE100194913, Toom-Kooli tn 7, Tallinn 10130, Естонія.',
					'Контакт: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'Що цей сайт збирає зараз',
				body: [
					'Цей сайт не використовує аналітичні чи рекламні cookie. Ваш вибір мови зберігається в локальному сховищі браузера (localStorage) і ніколи не покидає ваш пристрій та не потрапляє до нас.',
					'Карта на цій сторінці вбудована з Google Maps. Її завантаження може дозволити Google встановити cookie та обробляти ваші дані згідно з власною політикою конфіденційності Google.',
				],
			},
			{
				heading: 'Файли cookie',
				body: [
					'Ми самі не встановлюємо жодних cookie — на цьому сайті немає аналітики, реклами чи трекінгу.',
					"Завантаження карти Google Maps на цій сторінці може дозволити Google встановити власні cookie, які регулюються політикою Google, а не нашою. Якщо пізніше ми додамо, наприклад, онлайн-бронювання чи чат, цю сторінку буде оновлено з переліком потрібних для них cookie.",
				],
			},
			{
				heading: "Якщо ви зв'язуєтесь з нами",
				body: [
					"Якщо ви пишете нам на email, телефонуєте або пишете в WhatsApp, ми використовуємо надану вами інформацію — наприклад, ім'я та контактні дані — лише для відповіді вам і, за потреби, для організації вашого проживання. Ми зберігаємо це листування лише стільки, скільки необхідно.",
				],
			},
			{
				heading: 'Майбутнє онлайн-бронювання та кабінет гостя',
				body: [
					'Коли на цьому сайті з\'явиться онлайн-бронювання та кабінет гостя, цю політику буде оновлено з описом додаткових даних, які ми збираємо — наприклад, дані, необхідні за естонським законодавством для реєстрації проживаючих — і того, як вони використовуються.',
				],
			},
			{
				heading: 'Ваші права',
				body: [
					'Згідно з GDPR, ви можете вимагати доступ до своїх персональних даних, їх виправлення чи видалення, обмеження чи заперечення обробки, а також копію даних у портативному форматі. Щоб скористатися цими правами, зв\'яжіться з нами за адресою office@hha.ee. Якщо наша відповідь вас не задовольнить, ви можете подати скаргу до Інспекції захисту даних Естонії (Andmekaitse Inspektsioon).',
				],
			},
			{
				heading: 'Зміни до цієї політики',
				body: ['Ми можемо час від часу оновлювати цю політику. Чинна версія діє з дати, вказаної нижче.'],
			},
		],
		lastUpdated: 'Востаннє оновлено: серпень 2026',
		backLabel: '← Повернутися на hha.ee',
	},
	ru: {
		metaDescription: 'Как Hostel & Hotel Apartments / Hostel 3A обрабатывает ваши данные на hha.ee.',
		title: 'Политика конфиденциальности',
		intro: 'Эта страница объясняет, как AS P&G Grupp, управляющая Hostel & Hotel Apartments / Hostel 3A, обрабатывает информацию, когда вы посещаете hha.ee.',
		sections: [
			{
				heading: 'Кто мы',
				body: [
					'Контролёр данных: AS P&G Grupp, регистрационный код 10049852, VAT EE100194913, Toom-Kooli tn 7, Tallinn 10130, Эстония.',
					'Контакт: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'Что этот сайт собирает сейчас',
				body: [
					'Этот сайт не использует аналитические или рекламные cookie. Выбор языка сохраняется в локальном хранилище браузера (localStorage) и никогда не покидает ваше устройство и не попадает к нам.',
					'Карта на этой странице встроена из Google Maps. Её загрузка может позволить Google установить cookie и обрабатывать ваши данные согласно собственной политике конфиденциальности Google.',
				],
			},
			{
				heading: 'Файлы cookie',
				body: [
					'Мы сами не устанавливаем никаких cookie — на этом сайте нет аналитики, рекламы или трекинга.',
					'Загрузка карты Google Maps на этой странице может позволить Google установить собственные cookie, которые регулируются политикой Google, а не нашей. Если позже мы добавим, например, онлайн-бронирование или чат, эта страница будет обновлена со списком нужных для них cookie.',
				],
			},
			{
				heading: 'Если вы связываетесь с нами',
				body: [
					'Если вы пишете нам на email, звоните или пишете в WhatsApp, мы используем предоставленную вами информацию — например, имя и контактные данные — только для ответа вам и, при необходимости, для организации вашего проживания. Мы храним эту переписку только столько, сколько необходимо.',
				],
			},
			{
				heading: 'Будущее онлайн-бронирование и кабинет гостя',
				body: [
					'Когда на этом сайте появится онлайн-бронирование и кабинет гостя, эта политика будет обновлена с описанием дополнительных данных, которые мы собираем — например, данные, требуемые эстонским законодательством для регистрации проживающих — и того, как они используются.',
				],
			},
			{
				heading: 'Ваши права',
				body: [
					'Согласно GDPR, вы можете запросить доступ к своим персональным данным, их исправление или удаление, ограничение или возражение против обработки, а также копию данных в переносимом формате. Чтобы воспользоваться этими правами, свяжитесь с нами по адресу office@hha.ee. Если наш ответ вас не удовлетворит, вы можете подать жалобу в Инспекцию по защите данных Эстонии (Andmekaitse Inspektsioon).',
				],
			},
			{
				heading: 'Изменения в этой политике',
				body: ['Мы можем время от времени обновлять эту политику. Действующая версия применяется с даты, указанной ниже.'],
			},
		],
		lastUpdated: 'Последнее обновление: август 2026',
		backLabel: '← Вернуться на hha.ee',
	},
	lv: {
		metaDescription: 'Kā Hostel & Hotel Apartments / Hostel 3A apstrādā jūsu datus vietnē hha.ee.',
		title: 'Privātuma politika',
		intro: 'Šī lapa paskaidro, kā AS P&G Grupp, kas pārvalda Hostel & Hotel Apartments / Hostel 3A, apstrādā informāciju, kad apmeklējat hha.ee.',
		sections: [
			{
				heading: 'Kas mēs esam',
				body: [
					'Datu pārzinis: AS P&G Grupp, reģistrācijas kods 10049852, PVN EE100194913, Toom-Kooli tn 7, Tallinn 10130, Igaunija.',
					'Kontakti: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'Ko šī vietne apkopo šobrīd',
				body: [
					'Šī vietne neizmanto analītikas vai reklāmas sīkdatnes. Jūsu valodas izvēle tiek saglabāta pārlūkprogrammas local storage un nekad nepamet jūsu ierīci, un nesasniedz mūs.',
					'Šajā lapā redzamā karte ir iegulta no Google Maps. Tās ielāde var ļaut Google iestatīt sīkdatnes un apstrādāt jūsu datus saskaņā ar Google pašas privātuma politiku.',
				],
			},
			{
				heading: 'Sīkdatnes',
				body: [
					'Mēs paši neuzstādām nekādas sīkdatnes — šajā vietnē nav analītikas, reklāmas vai izsekošanas.',
					'Ielādējot šīs lapas Google Maps karti, Google var iestatīt savas sīkdatnes, kas pakļautas Google, nevis mūsu privātuma politikai. Ja vēlāk pievienosim, piemēram, tiešsaistes rezervēšanu vai tērzēšanu, šī lapa tiks atjaunināta ar to nepieciešamo sīkdatņu sarakstu.',
				],
			},
			{
				heading: 'Ja sazināties ar mums',
				body: [
					'Ja rakstāt mums e-pastu, zvanāt vai rakstāt WhatsApp, mēs izmantojam jūsu sniegto informāciju — piemēram, vārdu un kontaktinformāciju — tikai lai jums atbildētu un, ja nepieciešams, organizētu jūsu uzturēšanos. Mēs glabājam šo saraksti tikai tik ilgi, cik nepieciešams.',
				],
			},
			{
				heading: 'Turpmāka tiešsaistes rezervēšana un viesa konts',
				body: [
					'Kad šajā vietnē kļūs pieejama tiešsaistes rezervēšana un viesa konts, šī politika tiks atjaunināta, aprakstot papildu datus, ko apkopojam — piemēram, Igaunijas likumdošanā prasītos identitātes datus viesu reģistrēšanai — un to, kā tie tiek izmantoti.',
				],
			},
			{
				heading: 'Jūsu tiesības',
				body: [
					'Saskaņā ar VDAR jūs varat pieprasīt piekļuvi saviem personas datiem, to labošanu vai dzēšanu, apstrādes ierobežošanu vai iebildumus pret to, kā arī datu kopiju pārnesamā formātā. Lai izmantotu šīs tiesības, sazinieties ar mums office@hha.ee. Ja mūsu atbilde jūs neapmierina, varat iesniegt sūdzību Igaunijas Datu valsts inspekcijā (Andmekaitse Inspektsioon).',
				],
			},
			{
				heading: 'Izmaiņas šajā politikā',
				body: ['Mēs varam laiku pa laikam atjaunināt šo politiku. Pašreizējā versija ir spēkā no zemāk norādītā datuma.'],
			},
		],
		lastUpdated: 'Pēdējoreiz atjaunināts: 2026. gada augusts',
		backLabel: '← Atpakaļ uz hha.ee',
	},
	fi: {
		metaDescription: 'Miten Hostel & Hotel Apartments / Hostel 3A käsittelee tietojasi sivustolla hha.ee.',
		title: 'Tietosuojaseloste',
		intro: 'Tämä sivu selittää, miten AS P&G Grupp, joka ylläpitää Hostel & Hotel Apartments / Hostel 3A -sivustoa, käsittelee tietoja, kun vierailet hha.ee-sivustolla.',
		sections: [
			{
				heading: 'Keitä olemme',
				body: [
					'Rekisterinpitäjä: AS P&G Grupp, rekisterikoodi 10049852, ALV-numero EE100194913, Toom-Kooli tn 7, Tallinn 10130, Viro.',
					'Yhteystiedot: office@hha.ee, +372 562 39 000.',
				],
			},
			{
				heading: 'Mitä tämä sivusto kerää tällä hetkellä',
				body: [
					'Tämä sivusto ei käytä analytiikka- tai mainosevästeitä. Kielivalintasi tallentuu selaimesi local storageen eikä koskaan poistu laitteeltasi tai päädy meille.',
					'Tällä sivulla oleva kartta on upotettu Google Mapsista. Sen lataaminen voi antaa Googlelle mahdollisuuden asettaa evästeitä ja käsitellä tietojasi Googlen omien tietosuojakäytäntöjen mukaisesti.',
				],
			},
			{
				heading: 'Evästeet',
				body: [
					'Emme itse aseta evästeitä — tällä sivustolla ei ole analytiikkaa, mainontaa tai seurantaa.',
					"Tämän sivun Google Maps -kartan lataaminen voi antaa Googlelle mahdollisuuden asettaa omia evästeitään, jotka noudattavat Googlen, ei meidän, tietosuojakäytäntöä. Jos lisäämme myöhemmin esimerkiksi verkkovarauksen tai live-chatin, tätä sivua päivitetään listaamaan niiden vaatimat evästeet.",
				],
			},
			{
				heading: 'Jos otat meihin yhteyttä',
				body: [
					'Jos lähetät meille sähköpostia, soitat tai kirjoitat WhatsAppissa, käytämme antamiasi tietoja — kuten nimeäsi ja yhteystietojasi — vain vastataksemme sinulle ja tarvittaessa järjestääksemme oleskelusi. Säilytämme tätä kirjeenvaihtoa vain niin kauan kuin tarpeen.',
				],
			},
			{
				heading: 'Tuleva verkkovaraus ja vierastili',
				body: [
					'Kun verkkovaraus ja vierastili tulevat saataville tällä sivustolla, tätä selostetta päivitetään kuvaamaan lisätietoja, joita keräämme — esimerkiksi Viron lain edellyttämiä henkilötietoja vieraiden rekisteröintiin — ja miten niitä käytetään.',
				],
			},
			{
				heading: 'Oikeutesi',
				body: [
					'GDPR:n nojalla voit pyytää pääsyä henkilötietoihisi, niiden korjaamista tai poistamista, käsittelyn rajoittamista tai vastustamista sekä kopiota tiedoista siirrettävässä muodossa. Käyttääksesi näitä oikeuksia ota yhteyttä osoitteeseen office@hha.ee. Jos vastauksemme ei tyydytä sinua, voit tehdä valituksen Viron tietosuojavirastolle (Andmekaitse Inspektsioon).',
				],
			},
			{
				heading: 'Muutokset tähän selosteeseen',
				body: ['Voimme päivittää tätä selostetta ajoittain. Nykyinen versio on voimassa alla mainitusta päivämäärästä alkaen.'],
			},
		],
		lastUpdated: 'Päivitetty viimeksi: elokuu 2026',
		backLabel: '← Takaisin hha.ee-sivustolle',
	},
};
