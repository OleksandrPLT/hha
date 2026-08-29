import type { Locale } from './locales';

export interface RoomCopy {
	title: string;
	caption: string;
}

export interface LandingCopy {
	metaDescription: string;
	nav: { about: string; rooms: string; buffet: string; location: string; contact: string; bookNow: string };
	hero: { eyebrow: string; heading: string; subheading: string; ctaBook: string; ctaContact: string };
	about: { eyebrow: string; heading: string; body: string };
	rooms: {
		eyebrow: string;
		heading: string;
		subheading: string;
		items: { double: RoomCopy; twin: RoomCopy; dorm: RoomCopy; single: RoomCopy; lounge: RoomCopy; dining: RoomCopy };
	};
	buffet: { eyebrow: string; heading: string; body: string; hours: string };
	reviews: { eyebrow: string; heading: string; subheading: string; bookingCta: string; googleCta: string };
	location: {
		eyebrow: string;
		heading: string;
		body: string;
		addressLabel: string;
		phoneLabel: string;
		emailLabel: string;
		mapCta: string;
	};
	footer: { rights: string; poweredBy: string };
	languageModal: { heading: string; subheading: string; continueLabel: string };
}

// Копірайтинг реального лендінгу (не Coming Soon). Чесний, стриманий тон —
// пишемо тільки те, що підтверджено фото зі старого сайту (див.
// src/data/property.ts і пам'ять hha-apartments-tz). Не остаточні
// маркетингові тексти — заміняться, коли буде затверджений Figma-макет
// і клієнт дасть більше деталей (ціни, повний список номерів/зручностей).
export const landing: Record<Locale, LandingCopy> = {
	en: {
		metaDescription:
			'Hostel 3A by H&H apartments — private and shared rooms in Maardu, Estonia, minutes from Tallinn, with an on-site buffet.',
		nav: { about: 'About', rooms: 'Rooms', buffet: 'Buffet', location: 'Location', contact: 'Contact', bookNow: 'Book now' },
		hero: {
			eyebrow: 'Maardu, Estonia',
			heading: 'H&H apartments — Hostel 3A',
			subheading:
				"Comfortable private and shared rooms just outside Tallinn, with an on-site buffet and a quiet place to work or rest.",
			ctaBook: 'Book on Booking.com',
			ctaContact: 'Contact us',
		},
		about: {
			eyebrow: 'About',
			heading: 'A modern hostel in Maardu',
			body:
				"Hostel 3A offers clean, recently furnished rooms — from private doubles to shared dorms — a short drive from Tallinn. A shared lounge, dining area and our own Pagari Buffet downstairs make it easy to settle in, whether you're staying one night or several weeks.",
		},
		rooms: {
			eyebrow: 'Rooms',
			heading: 'Choose your room',
			subheading: 'Private and shared options, all with fresh linen and a place to store your things.',
			items: {
				double: { title: 'Private double room', caption: 'A quiet room with a double bed, wardrobe and desk.' },
				twin: { title: 'Twin room', caption: 'Two single beds, ideal for friends or colleagues travelling together.' },
				dorm: { title: 'Shared dorm', caption: 'Budget-friendly beds in a shared room with individual storage.' },
				single: { title: 'Single room', caption: 'A compact private room with a kettle and fresh towels.' },
				lounge: { title: 'Shared lounge', caption: 'A common area with desks — handy for remote work or meeting up.' },
				dining: { title: 'Dining area', caption: 'A shared table for breakfast or an evening meal.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Buffet',
			heading: 'Home-style food downstairs',
			body:
				'Our own buffet — Pagari Buffet / Koduköök — serves home-style dishes on the ground floor of the building, open to guests and neighbours alike.',
			hours: 'Open Mon–Fri, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Reviews',
			heading: 'What guests say',
			subheading: "We're connecting live ratings soon — for now, see recent guest reviews directly on Booking.com.",
			bookingCta: 'Read reviews on Booking.com',
			googleCta: 'Find us on Google',
		},
		location: {
			eyebrow: 'Location',
			heading: 'Find us in Maardu',
			body: "We're located on Kombinaadi tänav in Maardu, a short drive from central Tallinn and close to the Tallinn ring road.",
			addressLabel: 'Address',
			phoneLabel: 'Phone / WhatsApp',
			emailLabel: 'Email',
			mapCta: 'Open in Google Maps',
		},
		footer: { rights: 'All rights reserved.', poweredBy: 'Website by' },
		languageModal: { heading: 'Choose your language', subheading: 'H&H apartments is available in 6 languages.', continueLabel: 'Continue' },
	},
	et: {
		metaDescription:
			'Hostel 3A by H&H apartments — privaat- ja jagatud toad Maardus, mõne minuti kaugusel Tallinnast, kohvikuga majas.',
		nav: { about: 'Meist', rooms: 'Toad', buffet: 'Puhvet', location: 'Asukoht', contact: 'Kontakt', bookNow: 'Broneeri' },
		hero: {
			eyebrow: 'Maardu, Eesti',
			heading: 'H&H apartments — Hostel 3A',
			subheading: 'Mugavad privaat- ja jagatud toad Tallinna lähedal, majas oma puhvet ja rahulik koht töötamiseks või puhkamiseks.',
			ctaBook: 'Broneeri Booking.com-is',
			ctaContact: 'Võta ühendust',
		},
		about: {
			eyebrow: 'Meist',
			heading: 'Moodne hostel Maardus',
			body:
				'Hostel 3A pakub puhtaid, hiljuti sisustatud tube — privaatsest kahekohalisest toast jagatud unetoani — vaid lühikese sõidu kaugusel Tallinnast. Ühine puhkeala, söögituba ja meie oma Pagari Puhvet allkorrusel muudavad sisseelamise lihtsaks, olgu tegu ühe öö või mitme nädalaga.',
		},
		rooms: {
			eyebrow: 'Toad',
			heading: 'Vali endale tuba',
			subheading: 'Privaat- ja jagatud valikud, kõigil värske voodipesu ja koht asjade hoidmiseks.',
			items: {
				double: { title: 'Privaatne kahekohaline tuba', caption: 'Rahulik tuba kahekohalise voodi, riidekapi ja lauaga.' },
				twin: { title: 'Kahe voodiga tuba', caption: 'Kaks üheinimesevoodit — sobib koos reisivatele sõpradele või kolleegidele.' },
				dorm: { title: 'Jagatud unetuba', caption: 'Taskukohased voodikohad jagatud toas, igaühel oma hoiukoht.' },
				single: { title: 'Üheinimesetuba', caption: 'Kompaktne privaattuba veekeetja ja värskete rätikutega.' },
				lounge: { title: 'Ühine puhkeala', caption: 'Lauaga ühisala — mugav kaugtööks või kohtumiseks.' },
				dining: { title: 'Söögituba', caption: 'Ühine laud hommiku- või õhtusöögiks.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Puhvet',
			heading: 'Kodune toit allkorrusel',
			body: 'Meie oma puhvet — Pagari Puhvet / Koduköök — pakub koduseid roogasid hoone esimesel korrusel, avatud nii külalistele kui naabritele.',
			hours: 'Avatud E–R, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Arvustused',
			heading: 'Mida külalised ütlevad',
			subheading: 'Peagi lisandub siia otseülekandega hinnang — praegu vaata värskeid arvustusi otse Booking.com-is.',
			bookingCta: 'Loe arvustusi Booking.com-is',
			googleCta: 'Leia meid Google\'ist',
		},
		location: {
			eyebrow: 'Asukoht',
			heading: 'Leia meid Maardus',
			body: 'Asume Kombinaadi tänaval Maardus, lühikese sõidu kaugusel Tallinna kesklinnast ja Tallinna ringteest.',
			addressLabel: 'Aadress',
			phoneLabel: 'Telefon / WhatsApp',
			emailLabel: 'E-post',
			mapCta: 'Ava Google Maps’is',
		},
		footer: { rights: 'Kõik õigused kaitstud.', poweredBy: 'Veebilehe lõi' },
		languageModal: { heading: 'Vali keel', subheading: 'H&H apartments on saadaval 6 keeles.', continueLabel: 'Jätka' },
	},
	uk: {
		metaDescription: 'Hostel 3A від H&H apartments — приватні та спільні номери в Маарду, за кілька хвилин від Таллінна, з власним буфетом.',
		nav: { about: 'Про нас', rooms: 'Номери', buffet: 'Буфет', location: 'Розташування', contact: 'Контакти', bookNow: 'Забронювати' },
		hero: {
			eyebrow: 'Маарду, Естонія',
			heading: 'H&H apartments — Hostel 3A',
			subheading: 'Затишні приватні та спільні номери неподалік Таллінна, з власним буфетом і тихим місцем для роботи чи відпочинку.',
			ctaBook: 'Забронювати на Booking.com',
			ctaContact: "Зв'язатися з нами",
		},
		about: {
			eyebrow: 'Про нас',
			heading: 'Сучасний хостел у Маарду',
			body:
				'Hostel 3A пропонує чисті, нещодавно облаштовані номери — від приватних двомісних до спільних кімнат — за кілька хвилин їзди від Таллінна. Спільна вітальня, їдальня та власний Pagari Buffet на першому поверсі роблять заселення легким, чи ви залишаєтесь на одну ніч, чи на кілька тижнів.',
		},
		rooms: {
			eyebrow: 'Номери',
			heading: 'Оберіть свій номер',
			subheading: 'Приватні та спільні варіанти — усюди свіжа білизна і місце для речей.',
			items: {
				double: { title: 'Приватний двомісний номер', caption: 'Тиха кімната з двоспальним ліжком, шафою та столом.' },
				twin: { title: 'Номер з двома ліжками', caption: 'Два односпальних ліжка — зручно для друзів чи колег, які подорожують разом.' },
				dorm: { title: 'Спільна кімната', caption: "Бюджетні місця у спільній кімнаті з окремим місцем для зберігання." },
				single: { title: 'Одномісний номер', caption: 'Компактна приватна кімната з чайником і свіжими рушниками.' },
				lounge: { title: 'Спільна вітальня', caption: 'Зона зі столами — зручно для віддаленої роботи чи зустрічей.' },
				dining: { title: 'Їдальня', caption: 'Спільний стіл для сніданку чи вечері.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Buffet',
			heading: 'Домашня кухня на першому поверсі',
			body: 'Наш власний буфет — Pagari Buffet / Koduköök — подає домашні страви на першому поверсі будівлі, відкритий і для гостей, і для сусідів.',
			hours: 'Пн–Пт, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Відгуки',
			heading: 'Що кажуть гості',
			subheading: 'Незабаром тут з\'явиться живий рейтинг — а поки що дивіться свіжі відгуки прямо на Booking.com.',
			bookingCta: 'Читати відгуки на Booking.com',
			googleCta: 'Знайти нас у Google',
		},
		location: {
			eyebrow: 'Розташування',
			heading: 'Як нас знайти в Маарду',
			body: 'Ми розташовані на вулиці Kombinaadi в Маарду, за кілька хвилин їзди від центру Таллінна і поруч з Таллінською об\'їзною дорогою.',
			addressLabel: 'Адреса',
			phoneLabel: 'Телефон / WhatsApp',
			emailLabel: 'Email',
			mapCta: 'Відкрити в Google Maps',
		},
		footer: { rights: 'Усі права захищені.', poweredBy: 'Сайт розробив' },
		languageModal: { heading: 'Оберіть мову', subheading: 'H&H apartments доступний 6 мовами.', continueLabel: 'Продовжити' },
	},
	ru: {
		metaDescription: 'Hostel 3A от H&H apartments — частные и общие номера в Маарду, в нескольких минутах от Таллинна, с собственным буфетом.',
		nav: { about: 'О нас', rooms: 'Номера', buffet: 'Буфет', location: 'Расположение', contact: 'Контакты', bookNow: 'Забронировать' },
		hero: {
			eyebrow: 'Маарду, Эстония',
			heading: 'H&H apartments — Hostel 3A',
			subheading: 'Уютные частные и общие номера рядом с Таллинном, с собственным буфетом и тихим местом для работы или отдыха.',
			ctaBook: 'Забронировать на Booking.com',
			ctaContact: 'Связаться с нами',
		},
		about: {
			eyebrow: 'О нас',
			heading: 'Современный хостел в Маарду',
			body:
				'Hostel 3A предлагает чистые, недавно обустроенные номера — от частных двухместных до общих комнат — в нескольких минутах езды от Таллинна. Общая гостиная, столовая и собственный Pagari Buffet на первом этаже делают заселение простым, останавливаетесь ли вы на одну ночь или на несколько недель.',
		},
		rooms: {
			eyebrow: 'Номера',
			heading: 'Выберите свой номер',
			subheading: 'Частные и общие варианты — везде свежее бельё и место для вещей.',
			items: {
				double: { title: 'Частный двухместный номер', caption: 'Тихая комната с двуспальной кроватью, шкафом и столом.' },
				twin: { title: 'Номер с двумя кроватями', caption: 'Две односпальные кровати — удобно для друзей или коллег, путешествующих вместе.' },
				dorm: { title: 'Общая комната', caption: 'Бюджетные места в общей комнате с индивидуальным местом для хранения.' },
				single: { title: 'Одноместный номер', caption: 'Компактная частная комната с чайником и свежими полотенцами.' },
				lounge: { title: 'Общая гостиная', caption: 'Зона со столами — удобно для удалённой работы или встреч.' },
				dining: { title: 'Столовая', caption: 'Общий стол для завтрака или ужина.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Buffet',
			heading: 'Домашняя кухня на первом этаже',
			body: 'Наш собственный буфет — Pagari Buffet / Koduköök — подаёт домашние блюда на первом этаже здания, открыт и для гостей, и для соседей.',
			hours: 'Пн–Пт, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Отзывы',
			heading: 'Что говорят гости',
			subheading: 'Скоро здесь появится живой рейтинг — а пока смотрите свежие отзывы прямо на Booking.com.',
			bookingCta: 'Читать отзывы на Booking.com',
			googleCta: 'Найти нас в Google',
		},
		location: {
			eyebrow: 'Расположение',
			heading: 'Как нас найти в Маарду',
			body: 'Мы находимся на улице Kombinaadi в Маарду, в нескольких минутах езды от центра Таллинна и рядом с Таллиннской окружной дорогой.',
			addressLabel: 'Адрес',
			phoneLabel: 'Телефон / WhatsApp',
			emailLabel: 'Email',
			mapCta: 'Открыть в Google Maps',
		},
		footer: { rights: 'Все права защищены.', poweredBy: 'Сайт создан в' },
		languageModal: { heading: 'Выберите язык', subheading: 'H&H apartments доступен на 6 языках.', continueLabel: 'Продолжить' },
	},
	lv: {
		metaDescription: 'Hostel 3A no H&H apartments — privātas un kopīgas istabas Maardu, dažu minūšu attālumā no Tallinas, ar savu bufeti.',
		nav: { about: 'Par mums', rooms: 'Istabas', buffet: 'Bufete', location: 'Atrašanās vieta', contact: 'Kontakti', bookNow: 'Rezervēt' },
		hero: {
			eyebrow: 'Maardu, Igaunija',
			heading: 'H&H apartments — Hostel 3A',
			subheading: 'Ērtas privātas un kopīgas istabas netālu no Tallinas, ar savu bufeti un klusu vietu darbam vai atpūtai.',
			ctaBook: 'Rezervēt Booking.com',
			ctaContact: 'Sazinieties ar mums',
		},
		about: {
			eyebrow: 'Par mums',
			heading: 'Moderns hostelis Maardu',
			body:
				'Hostel 3A piedāvā tīras, nesen iekārtotas istabas — no privātām divvietīgām līdz kopīgām istabām — neliela brauciena attālumā no Tallinas. Kopīga viesistaba, ēdamzona un mūsu pašu Pagari Buffet pirmajā stāvā ļauj viegli iekārtoties gan uz vienu nakti, gan uz vairākām nedēļām.',
		},
		rooms: {
			eyebrow: 'Istabas',
			heading: 'Izvēlieties savu istabu',
			subheading: 'Privātas un kopīgas iespējas — visur svaiga gultas veļa un vieta mantām.',
			items: {
				double: { title: 'Privāta divvietīga istaba', caption: 'Klusa istaba ar divguļamo gultu, skapi un galdu.' },
				twin: { title: 'Istaba ar divām gultām', caption: 'Divas vienguļamās gultas — ērti draugiem vai kolēģiem, kas ceļo kopā.' },
				dorm: { title: 'Kopīga istaba', caption: 'Ekonomiskas vietas kopīgā istabā ar individuālu uzglabāšanas vietu.' },
				single: { title: 'Vienvietīga istaba', caption: 'Kompakta privāta istaba ar tējkannu un svaigiem dvieļiem.' },
				lounge: { title: 'Kopīga viesistaba', caption: 'Zona ar galdiem — ērta attālinātam darbam vai tikšanās reizēm.' },
				dining: { title: 'Ēdamzona', caption: 'Kopīgs galds brokastīm vai vakariņām.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Buffet',
			heading: 'Mājas virtuve pirmajā stāvā',
			body: 'Mūsu pašu bufete — Pagari Buffet / Koduköök — piedāvā mājas ēdienus ēkas pirmajā stāvā, atvērta gan viesiem, gan kaimiņiem.',
			hours: 'Atvērts P–Pk, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Atsauksmes',
			heading: 'Ko saka viesi',
			subheading: 'Drīz šeit būs tiešs vērtējums — pagaidām skatiet jaunākās atsauksmes tieši Booking.com.',
			bookingCta: 'Lasīt atsauksmes Booking.com',
			googleCta: 'Atrodiet mūs Google',
		},
		location: {
			eyebrow: 'Atrašanās vieta',
			heading: 'Atrodiet mūs Maardu',
			body: 'Atrodamies Kombinaadi ielā Maardu, neliela brauciena attālumā no Tallinas centra un tuvu Tallinas apvedceļam.',
			addressLabel: 'Adrese',
			phoneLabel: 'Tālrunis / WhatsApp',
			emailLabel: 'E-pasts',
			mapCta: 'Atvērt Google Maps',
		},
		footer: { rights: 'Visas tiesības aizsargātas.', poweredBy: 'Mājaslapu izveidoja' },
		languageModal: { heading: 'Izvēlieties valodu', subheading: 'H&H apartments pieejams 6 valodās.', continueLabel: 'Turpināt' },
	},
	fi: {
		metaDescription: 'Hostel 3A, H&H apartments — yksityisiä ja jaettuja huoneita Maardussa, minuuttien päässä Tallinnasta, oma buffet paikan päällä.',
		nav: { about: 'Meistä', rooms: 'Huoneet', buffet: 'Buffet', location: 'Sijainti', contact: 'Yhteystiedot', bookNow: 'Varaa nyt' },
		hero: {
			eyebrow: 'Maardu, Viro',
			heading: 'H&H apartments — Hostel 3A',
			subheading: 'Viihtyisiä yksityisiä ja jaettuja huoneita lähellä Tallinnaa, omalla buffetilla ja rauhallisella tilalla työntekoon tai lepoon.',
			ctaBook: 'Varaa Booking.comissa',
			ctaContact: 'Ota yhteyttä',
		},
		about: {
			eyebrow: 'Meistä',
			heading: 'Moderni hostelli Maardussa',
			body:
				'Hostel 3A tarjoaa siistejä, äskettäin sisustettuja huoneita — yksityisistä kahden hengen huoneista jaettuihin makuusaleihin — lyhyen automatkan päässä Tallinnasta. Yhteinen oleskelutila, ruokailutila ja oma Pagari Buffet -puhvetti alakerrassa tekevät asettumisesta helppoa, oletpa yön tai useamman viikon.',
		},
		rooms: {
			eyebrow: 'Huoneet',
			heading: 'Valitse huoneesi',
			subheading: 'Yksityisiä ja jaettuja vaihtoehtoja — kaikissa tuoreet liinavaatteet ja säilytystilaa.',
			items: {
				double: { title: 'Yksityinen kahden hengen huone', caption: 'Rauhallinen huone parisängyllä, vaatekaapilla ja työpöydällä.' },
				twin: { title: 'Twin-huone', caption: 'Kaksi erillistä sänkyä — sopii yhdessä matkustaville ystäville tai kollegoille.' },
				dorm: { title: 'Jaettu makuusali', caption: 'Edullisia paikkoja jaetussa huoneessa, jokaisella oma säilytystila.' },
				single: { title: 'Yhden hengen huone', caption: 'Kompakti yksityinen huone vedenkeittimellä ja tuorein pyyhkein.' },
				lounge: { title: 'Yhteinen oleskelutila', caption: 'Työpöydillä varustettu yhteinen tila — kätevä etätyöhön tai tapaamisiin.' },
				dining: { title: 'Ruokailutila', caption: 'Yhteinen pöytä aamiaiselle tai illalliselle.' },
			},
		},
		buffet: {
			eyebrow: 'Pagari Buffet',
			heading: 'Kotiruokaa alakerrassa',
			body: 'Oma buffettimme — Pagari Buffet / Koduköök — tarjoaa kotiruokaa rakennuksen alakerrassa, avoinna niin vieraille kuin naapureillekin.',
			hours: 'Avoinna ma–pe, 8:00–18:00',
		},
		reviews: {
			eyebrow: 'Arvostelut',
			heading: 'Mitä vieraat sanovat',
			subheading: 'Reaaliaikainen arvosana lisätään pian — sitä odotellessa lue tuoreet arvostelut suoraan Booking.comista.',
			bookingCta: 'Lue arvosteluja Booking.comissa',
			googleCta: 'Löydä meidät Googlesta',
		},
		location: {
			eyebrow: 'Sijainti',
			heading: 'Löydä meidät Maardusta',
			body: 'Sijaitsemme Kombinaadi-kadulla Maardussa, lyhyen automatkan päässä Tallinnan keskustasta ja lähellä Tallinnan kehätietä.',
			addressLabel: 'Osoite',
			phoneLabel: 'Puhelin / WhatsApp',
			emailLabel: 'Sähköposti',
			mapCta: 'Avaa Google Mapsissa',
		},
		footer: { rights: 'Kaikki oikeudet pidätetään.', poweredBy: 'Sivuston toteutti' },
		languageModal: { heading: 'Valitse kieli', subheading: 'H&H apartments on saatavilla 6 kielellä.', continueLabel: 'Jatka' },
	},
};
