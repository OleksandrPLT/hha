import type { Locale } from './locales';

export interface TermsCopy {
	metaDescription: string;
	title: string;
	intro: string;
	sections: { heading: string; body: string[] }[];
	lastUpdated: string;
	backLabel: string;
}

// Власні умови бронювання Hostel 3A — НЕ переклад умов Booking.com (їхні
// стосуються самої платформи Booking.com B.V., іншої юридичної особи й
// іншого набору послуг — видавати їх за наші було б юридично некоректно).
// Факти тут — реальні, зібрані в чаті 2026-08-29: прайс-лист (передоплата
// пакетів, дострокове виселення), заїзд/виїзд, довідка про зручності
// (діти/тварини/оплата/вечірки). ЧЕРНЕТКА — переглянути з юристом, як і
// privacy.ts.
export const terms: Record<Locale, TermsCopy> = {
	en: {
		metaDescription: 'Booking terms, check-in/out times and house rules for Hostel 3A.',
		title: 'Booking Terms',
		intro: 'These terms cover booking, payment and house rules at Hostel 3A (Hostel & Hotel Apartments), Kombinaadi 3a, Maardu, Estonia.',
		sections: [
			{
				heading: 'Rates and prepayment',
				body: [
					'Week, two-week and month packages require full prepayment at check-in.',
					'Leaving earlier than booked cancels the package discount — the stay is recalculated at the standard nightly rate for the room type.',
				],
			},
			{
				heading: 'Cancellation',
				body: [
					'Cancellation and prepayment conditions can vary by room type and rate. Please check the specific conditions shown at the time of booking (currently via Booking.com).',
				],
			},
			{
				heading: 'Check-in and check-out',
				body: ['Check-in: 10:00–22:00. Check-out: 07:00–11:30. There is no age restriction for check-in.'],
			},
			{
				heading: 'Children and extra beds',
				body: ['Guests of any age are welcome. We do not provide cots or extra beds.'],
			},
			{
				heading: 'Pets',
				body: ['Pets are allowed on request and may incur an extra charge — please let us know in advance.'],
			},
			{
				heading: 'Payment methods',
				body: ['We accept Visa, Mastercard, American Express, Maestro, contactless (NFC) payment and cash.'],
			},
			{
				heading: 'House rules',
				body: ['No smoking indoors. Parties and events are not allowed.'],
			},
			{
				heading: 'Questions',
				body: ['For anything not covered here, contact us at office@hha.ee or +372 562 39 000.'],
			},
		],
		lastUpdated: 'Last updated: August 2026',
		backLabel: '← Back to hha.ee',
	},
	et: {
		metaDescription: 'Broneerimistingimused, saabumis-/lahkumisajad ja majareeglid Hostel 3A-s.',
		title: 'Broneerimistingimused',
		intro: 'Need tingimused kehtivad broneerimisele, maksmisele ja majareeglitele Hostel 3A-s (Hostel & Hotel Apartments), Kombinaadi 3a, Maardu, Eesti.',
		sections: [
			{
				heading: 'Hinnad ja ettemaks',
				body: [
					'Nädala, kahe nädala ja kuu paketid eeldavad 100% ettemaksu sisseregistreerimisel.',
					'Varasem lahkumine kui broneeritud tühistab paketi soodustuse — viibimine arvestatakse ümber toa tavalise öö hinnaga.',
				],
			},
			{
				heading: 'Tühistamine',
				body: ['Tühistamis- ja ettemaksutingimused võivad erineda sõltuvalt toa tüübist ja hinnast. Palun tutvu broneerimise ajal näidatud konkreetsete tingimustega (praegu Booking.com kaudu).'],
			},
			{
				heading: 'Sisse- ja väljaregistreerimine',
				body: ['Sisseregistreerimine: 10:00–22:00. Väljaregistreerimine: 07:00–11:30. Sisseregistreerimisel vanusepiirangut ei ole.'],
			},
			{
				heading: 'Lapsed ja lisavoodid',
				body: ['Igas vanuses külalised on teretulnud. Me ei paku voodikorve ega lisavoodeid.'],
			},
			{
				heading: 'Lemmikloomad',
				body: ['Lemmikloomad on lubatud eelneval kokkuleppel ja võivad kaasa tuua lisatasu — palun andke sellest ette teada.'],
			},
			{
				heading: 'Maksevõimalused',
				body: ['Aktsepteerime Visa, Mastercard, American Express, Maestro, kontaktivaba (NFC) makset ja sularaha.'],
			},
			{
				heading: 'Majareeglid',
				body: ['Siseruumides suitsetamine keelatud. Peod ja üritused ei ole lubatud.'],
			},
			{
				heading: 'Küsimused',
				body: ['Kõige kohta, mida siin ei ole kajastatud, võta ühendust: office@hha.ee või +372 562 39 000.'],
			},
		],
		lastUpdated: 'Viimati uuendatud: august 2026',
		backLabel: '← Tagasi hha.ee juurde',
	},
	uk: {
		metaDescription: 'Умови бронювання, час заїзду/виїзду та правила проживання в Hostel 3A.',
		title: 'Умови бронювання',
		intro: "Ці умови стосуються бронювання, оплати та правил проживання в Hostel 3A (Hostel & Hotel Apartments), Kombinaadi 3a, Маарду, Естонія.",
		sections: [
			{
				heading: 'Тарифи та передоплата',
				body: [
					'Пакети на тиждень, 2 тижні та місяць вимагають 100% передоплати при заселенні.',
					'Виїзд раніше заброньованого терміну скасовує знижку пакета — проживання перераховується за стандартним тарифом за добу для цього типу номера.',
				],
			},
			{
				heading: 'Скасування',
				body: ['Умови скасування та передоплати можуть відрізнятися залежно від типу номера й тарифу. Будь ласка, перевіряйте конкретні умови, показані під час бронювання (наразі через Booking.com).'],
			},
			{
				heading: 'Заїзд і виїзд',
				body: ['Заїзд: 10:00–22:00. Виїзд: 07:00–11:30. Вікових обмежень для заїзду немає.'],
			},
			{
				heading: 'Діти та додаткові ліжка',
				body: ['Гості будь-якого віку вітаються. Дитячих ліжечок та додаткових ліжок ми не надаємо.'],
			},
			{
				heading: 'Домашні тварини',
				body: ['Тварини дозволені за попереднім запитом і можуть передбачати додаткову плату — попередьте нас заздалегідь.'],
			},
			{
				heading: 'Способи оплати',
				body: ['Приймаємо Visa, Mastercard, American Express, Maestro, безконтактну оплату (NFC) та готівку.'],
			},
			{
				heading: 'Правила проживання',
				body: ["Курити в приміщенні заборонено. Вечірки та заходи не дозволені."],
			},
			{
				heading: 'Питання',
				body: ["З усього, що тут не описано, звертайтесь: office@hha.ee або +372 562 39 000."],
			},
		],
		lastUpdated: 'Востаннє оновлено: серпень 2026',
		backLabel: '← Повернутися на hha.ee',
	},
	ru: {
		metaDescription: 'Условия бронирования, время заезда/выезда и правила проживания в Hostel 3A.',
		title: 'Условия бронирования',
		intro: 'Эти условия касаются бронирования, оплаты и правил проживания в Hostel 3A (Hostel & Hotel Apartments), Kombinaadi 3a, Маарду, Эстония.',
		sections: [
			{
				heading: 'Тарифы и предоплата',
				body: [
					'Пакеты на неделю, 2 недели и месяц требуют 100% предоплаты при заселении.',
					'Выезд раньше забронированного срока отменяет скидку пакета — проживание пересчитывается по стандартному тарифу за сутки для этого типа номера.',
				],
			},
			{
				heading: 'Отмена бронирования',
				body: ['Условия отмены и предоплаты могут отличаться в зависимости от типа номера и тарифа. Пожалуйста, проверяйте конкретные условия, показанные при бронировании (сейчас через Booking.com).'],
			},
			{
				heading: 'Заезд и выезд',
				body: ['Заезд: 10:00–22:00. Выезд: 07:00–11:30. Возрастных ограничений для заезда нет.'],
			},
			{
				heading: 'Дети и дополнительные кровати',
				body: ['Гости любого возраста приветствуются. Детские кроватки и дополнительные кровати мы не предоставляем.'],
			},
			{
				heading: 'Домашние животные',
				body: ['Животные допускаются по предварительному запросу и могут повлечь дополнительную плату — предупредите нас заранее.'],
			},
			{
				heading: 'Способы оплаты',
				body: ['Принимаем Visa, Mastercard, American Express, Maestro, бесконтактную оплату (NFC) и наличные.'],
			},
			{
				heading: 'Правила проживания',
				body: ['Курение в помещении запрещено. Вечеринки и мероприятия не разрешены.'],
			},
			{
				heading: 'Вопросы',
				body: ['По всему, что здесь не описано, обращайтесь: office@hha.ee или +372 562 39 000.'],
			},
		],
		lastUpdated: 'Последнее обновление: август 2026',
		backLabel: '← Вернуться на hha.ee',
	},
	lv: {
		metaDescription: 'Rezervācijas noteikumi, reģistrēšanās/izbraukšanas laiki un mājas noteikumi Hostel 3A.',
		title: 'Rezervācijas noteikumi',
		intro: 'Šie noteikumi attiecas uz rezervēšanu, maksājumiem un mājas noteikumiem Hostel 3A (Hostel & Hotel Apartments), Kombinaadi 3a, Maardu, Igaunija.',
		sections: [
			{
				heading: 'Cenas un priekšapmaksa',
				body: [
					'Nedēļas, divu nedēļu un mēneša paketēm nepieciešama 100% priekšapmaksa iereģistrējoties.',
					'Agrāka izbraukšana nekā rezervēts anulē paketes atlaidi — uzturēšanās tiek pārrēķināta pēc standarta nakts tarifa šim istabas tipam.',
				],
			},
			{
				heading: 'Atcelšana',
				body: ['Atcelšanas un priekšapmaksas nosacījumi var atšķirties atkarībā no istabas tipa un tarifa. Lūdzu, pārbaudiet konkrētos nosacījumus, kas parādās rezervācijas brīdī (pašlaik ar Booking.com starpniecību).'],
			},
			{
				heading: 'Iereģistrēšanās un izbraukšana',
				body: ['Iereģistrēšanās: 10:00–22:00. Izbraukšana: 07:00–11:30. Vecuma ierobežojumu iereģistrējoties nav.'],
			},
			{
				heading: 'Bērni un papildu gultas',
				body: ['Viesi jebkurā vecumā ir gaidīti. Mēs nenodrošinām bērnu gultiņas vai papildu gultas.'],
			},
			{
				heading: 'Mājdzīvnieki',
				body: ['Mājdzīvnieki atļauti pēc iepriekšēja pieprasījuma un var radīt papildu maksu — lūdzu, informējiet mūs iepriekš.'],
			},
			{
				heading: 'Maksājumu veidi',
				body: ['Pieņemam Visa, Mastercard, American Express, Maestro, bezkontakta (NFC) maksājumus un skaidru naudu.'],
			},
			{
				heading: 'Mājas noteikumi',
				body: ['Smēķēt telpās aizliegts. Ballītes un pasākumi nav atļauti.'],
			},
			{
				heading: 'Jautājumi',
				body: ['Par visu, kas šeit nav aprakstīts, sazinieties: office@hha.ee vai +372 562 39 000.'],
			},
		],
		lastUpdated: 'Pēdējoreiz atjaunināts: 2026. gada augusts',
		backLabel: '← Atpakaļ uz hha.ee',
	},
	fi: {
		metaDescription: 'Varausehdot, sisään-/uloskirjautumisajat ja talon säännöt Hostel 3A:ssa.',
		title: 'Varausehdot',
		intro: 'Nämä ehdot koskevat varaamista, maksamista ja talon sääntöjä Hostel 3A:ssa (Hostel & Hotel Apartments), Kombinaadi 3a, Maardu, Viro.',
		sections: [
			{
				heading: 'Hinnat ja ennakkomaksu',
				body: [
					'Viikko-, kahden viikon ja kuukausipaketit edellyttävät 100 % ennakkomaksua sisäänkirjautuessa.',
					'Varattua aikaisempi lähtö peruuttaa pakettialennuksen — oleskelu lasketaan uudelleen kyseisen huonetyypin normaalilla yöhinnalla.',
				],
			},
			{
				heading: 'Peruutus',
				body: ['Peruutus- ja ennakkomaksuehdot voivat vaihdella huonetyypin ja hinnan mukaan. Tarkista varauksen yhteydessä näytettävät tarkat ehdot (tällä hetkellä Booking.comin kautta).'],
			},
			{
				heading: 'Sisään- ja uloskirjautuminen',
				body: ['Sisäänkirjautuminen: 10:00–22:00. Uloskirjautuminen: 07:00–11:30. Sisäänkirjautumiselle ei ole ikärajaa.'],
			},
			{
				heading: 'Lapset ja lisävuoteet',
				body: ['Kaiken ikäiset vieraat ovat tervetulleita. Emme tarjoa vauvansänkyjä tai lisävuoteita.'],
			},
			{
				heading: 'Lemmikkieläimet',
				body: ['Lemmikit ovat sallittuja etukäteispyynnöstä ja niistä voidaan periä lisämaksu — ilmoitathan meille etukäteen.'],
			},
			{
				heading: 'Maksutavat',
				body: ['Hyväksymme Visa-, Mastercard-, American Express- ja Maestro-kortit, lähimaksun (NFC) sekä käteisen.'],
			},
			{
				heading: 'Talon säännöt',
				body: ['Tupakointi sisätiloissa kielletty. Juhlat ja tapahtumat eivät ole sallittuja.'],
			},
			{
				heading: 'Kysymykset',
				body: ['Kaikesta, mitä tässä ei ole mainittu, ota yhteyttä: office@hha.ee tai +372 562 39 000.'],
			},
		],
		lastUpdated: 'Päivitetty viimeksi: elokuu 2026',
		backLabel: '← Takaisin hha.ee-sivustolle',
	},
};
