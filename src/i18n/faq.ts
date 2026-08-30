import type { Locale } from './locales';

export interface FaqItem {
	q: string;
	a: string;
}

export interface FaqCopy {
	eyebrow: string;
	heading: string;
	subheading: string;
	items: FaqItem[];
}

// Джерело фактів — агрегатор бронювання (наданий користувачем 2026-08-29):
// час виїзду (11:30 — раніше на сайті був тільки заїзд), відстань до
// аеропорту/центру Маарду, парковка, їжа (бар + спільна кухня — це
// підтверджує "bar", який раніше згадувався непрямо через пошук), склад
// кухні. Середню ціну в рублях НЕ використано (неактуальна валюта — на
// сайті свої точні ціни в €), питання про Куму/Кадріорг лишено як SEO
// long-tail (Таллінн, ~15 км).
export const faq: Record<Locale, FaqCopy> = {
	en: {
		eyebrow: 'FAQ',
		heading: 'Frequently asked questions',
		subheading: 'Quick answers about staying at Hostel 3A.',
		items: [
			{ q: 'What time is check-in and check-out?', a: 'Check-in is from 10:00 to 22:00. Check-out is until 11:30.' },
			{ q: 'Is parking available?', a: 'Yes — there is a parking area for guests.' },
			{ q: "What's the nearest airport?", a: 'Tallinn Lennart Meri Airport, about 14 km away.' },
			{ q: 'How far is Hostel 3A from Maardu town centre?', a: 'About 1.3 km.' },
			{ q: 'What food options are available on site?', a: 'An on-site bar and a shared guest kitchen, plus our own Pagari Buffet downstairs (Mon–Fri, 8:00–18:00).' },
			{ q: "What's in the shared kitchen?", a: 'A dining corner and table, a coffee maker/kettle and a microwave.' },
			{ q: 'What sights are nearby in Tallinn?', a: 'Kumu Art Museum and Kadriorg Palace, both about 15 km away.' },
		],
	},
	et: {
		eyebrow: 'KKK',
		heading: 'Korduma kippuvad küsimused',
		subheading: 'Kiired vastused Hostel 3A-s peatumise kohta.',
		items: [
			{ q: 'Millal on sisse- ja väljaregistreerimine?', a: 'Sisseregistreerimine on 10:00–22:00. Väljaregistreerimine toimub kuni 11:30.' },
			{ q: 'Kas parkimine on võimalik?', a: 'Jah — külalistele on olemas parkimisala.' },
			{ q: 'Milline on lähim lennujaam?', a: 'Tallinna Lennart Meri lennujaam, umbes 14 km kaugusel.' },
			{ q: 'Kui kaugel on Hostel 3A Maardu kesklinnast?', a: 'Umbes 1,3 km.' },
			{ q: 'Millised toitlustusvõimalused on kohapeal?', a: 'Baar ja jagatud külalisköök, lisaks meie oma Pagari Puhvet allkorrusel (E–R, 8:00–18:00).' },
			{ q: 'Mis on jagatud köögis?', a: 'Sööginurk ja -laud, kohvimasin/veekeetja ning mikrolaineahi.' },
			{ q: 'Millised vaatamisväärsused on Tallinnas lähedal?', a: 'Kumu kunstimuuseum ja Kadrioru loss, mõlemad umbes 15 km kaugusel.' },
		],
	},
	uk: {
		eyebrow: 'FAQ',
		heading: 'Часті запитання',
		subheading: 'Швидкі відповіді про проживання в Hostel 3A.',
		items: [
			{ q: 'У який час заїзд і виїзд?', a: 'Заїзд — з 10:00 до 22:00. Виїзд — до 11:30.' },
			{ q: 'Чи є парковка?', a: 'Так — для гостей передбачена парковочна зона.' },
			{ q: 'Який найближчий аеропорт?', a: 'Міжнародний аеропорт Таллінн імені Леннарта Мері, приблизно за 14 км.' },
			{ q: 'Як далеко Hostel 3A від центру Маарду?', a: 'Приблизно 1,3 км.' },
			{ q: 'Які варіанти харчування є на місці?', a: 'Бар і спільна кухня для гостей, а також власний Pagari Buffet на першому поверсі (Пн–Пт, 8:00–18:00).' },
			{ q: 'Що є у спільній кухні?', a: 'Обідній куточок зі столом, кавоварка/чайник і мікрохвильова піч.' },
			{ q: 'Які визначні місця поруч у Таллінні?', a: 'Художній музей Куму та Кадріоргський палац — обидва приблизно за 15 км.' },
		],
	},
	ru: {
		eyebrow: 'FAQ',
		heading: 'Частые вопросы',
		subheading: 'Быстрые ответы о проживании в Hostel 3A.',
		items: [
			{ q: 'Во сколько заезд и выезд?', a: 'Заезд — с 10:00 до 22:00. Выезд — до 11:30.' },
			{ q: 'Есть ли парковка?', a: 'Да — для гостей предусмотрена парковочная зона.' },
			{ q: 'Какой ближайший аэропорт?', a: 'Международный аэропорт Таллин имени Леннарта Мери, около 14 км.' },
			{ q: 'Как далеко Hostel 3A от центра Маарду?', a: 'Около 1,3 км.' },
			{ q: 'Какие варианты питания есть на месте?', a: 'Бар и общая кухня для гостей, а также собственный Pagari Buffet на первом этаже (Пн–Пт, 8:00–18:00).' },
			{ q: 'Что есть в общей кухне?', a: 'Обеденный уголок со столом, кофеварка/чайник и микроволновая печь.' },
			{ q: 'Какие достопримечательности рядом в Таллинне?', a: 'Художественный музей Куму и дворец Кадриорг — оба примерно в 15 км.' },
		],
	},
	lv: {
		eyebrow: 'BUJ',
		heading: 'Biežāk uzdotie jautājumi',
		subheading: 'Ātras atbildes par uzturēšanos Hostel 3A.',
		items: [
			{ q: 'Cikos ir iereģistrēšanās un izrakstīšanās?', a: 'Iereģistrēšanās ir no 10:00 līdz 22:00. Izrakstīšanās — līdz 11:30.' },
			{ q: 'Vai ir pieejama autostāvvieta?', a: 'Jā — viesiem ir paredzēta stāvvietas zona.' },
			{ q: 'Kura ir tuvākā lidosta?', a: 'Tallinas Lennart Meri lidosta, apmēram 14 km attālumā.' },
			{ q: 'Cik tālu Hostel 3A atrodas no Maardu centra?', a: 'Apmēram 1,3 km.' },
			{ q: 'Kādas ēdināšanas iespējas ir uz vietas?', a: 'Bārs un kopīga viesu virtuve, kā arī mūsu pašu Pagari Buffet pirmajā stāvā (P–Pk, 8:00–18:00).' },
			{ q: 'Kas ir kopīgajā virtuvē?', a: 'Ēdamzona ar galdu, kafijas automāts/tējkanna un mikroviļņu krāsns.' },
			{ q: 'Kādas apskates vietas ir tuvumā Tallinā?', a: 'Kumu Mākslas muzejs un Kadriorgas pils — abi apmēram 15 km attālumā.' },
		],
	},
	fi: {
		eyebrow: 'UKK',
		heading: 'Usein kysytyt kysymykset',
		subheading: 'Nopeita vastauksia Hostel 3A:ssa majoittumisesta.',
		items: [
			{ q: 'Mihin aikaan sisään- ja uloskirjautuminen tapahtuu?', a: 'Sisäänkirjautuminen on klo 10:00–22:00. Uloskirjautuminen viimeistään klo 11:30.' },
			{ q: 'Onko pysäköinti mahdollista?', a: 'Kyllä — vieraille on oma pysäköintialue.' },
			{ q: 'Mikä on lähin lentokenttä?', a: 'Tallinnan Lennart Meri -lentokenttä, noin 14 km päässä.' },
			{ q: 'Kuinka kaukana Hostel 3A on Maardun keskustasta?', a: 'Noin 1,3 km.' },
			{ q: 'Mitä ruokailumahdollisuuksia paikan päällä on?', a: 'Baari ja yhteinen vieraskeittiö, sekä oma Pagari Buffet -puhvettimme alakerrassa (ma–pe, 8:00–18:00).' },
			{ q: 'Mitä yhteisessä keittiössä on?', a: 'Ruokailunurkkaus pöydällä, kahvinkeitin/vedenkeitin ja mikroaaltouuni.' },
			{ q: 'Mitä nähtävyyksiä Tallinnassa on lähellä?', a: 'Kumu-taidemuseo ja Kadriorgin palatsi, molemmat noin 15 km päässä.' },
		],
	},
};
