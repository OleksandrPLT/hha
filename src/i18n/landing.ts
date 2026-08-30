import type { Locale } from './locales';

export interface RoomCopy {
	title: string;
	caption: string;
}

export interface LandingCopy {
	metaDescription: string;
	nav: { about: string; rooms: string; pricing: string; buffet: string; location: string; contact: string; bookNow: string };
	hero: { eyebrow: string; heading: string; subheading: string; ctaBook: string; ctaContact: string };
	about: { eyebrow: string; heading: string; body: string };
	rooms: {
		eyebrow: string;
		heading: string;
		subheading: string;
		items: { double: RoomCopy; twin: RoomCopy; dorm: RoomCopy; single: RoomCopy; lounge: RoomCopy; dining: RoomCopy };
	};
	pricing: {
		eyebrow: string;
		heading: string;
		subheading: string;
		categoryShared: string;
		categoryFamily: string;
		colPerNight: string;
		colPerMonth: string;
		colWeek: string;
		colTwoWeeks: string;
		save: string;
		perDay: string;
		vatExcluded: string;
		vatIncluded: string;
		termsHeading: string;
		termsPrepay: string;
		termsEarlyCheckout: string;
	};
	buffet: { eyebrow: string; heading: string; body: string; hours: string };
	reviews: { eyebrow: string; heading: string; subheading: string; bookingCta: string; googleCta: string; recentGuestsLabel: string };
	location: {
		eyebrow: string;
		heading: string;
		body: string;
		addressLabel: string;
		phoneLabel: string;
		emailLabel: string;
		mapCta: string;
	};
	footer: { rights: string; poweredBy: string; regCode: string };
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
			'Hostel 3A by Hostel & Hotel Apartments — private and shared rooms in Maardu, Estonia, minutes from Tallinn, with an on-site buffet.',
		nav: { about: 'About', rooms: 'Rooms', pricing: 'Prices', buffet: 'Buffet', location: 'Location', contact: 'Contact', bookNow: 'Book now' },
		hero: {
			eyebrow: 'Hostel 3A · Maardu, Estonia',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Prices',
			heading: 'Rates',
			subheading: 'Book by the night or save with a weekly / two-week package.',
			categoryShared: 'Shared room',
			categoryFamily: 'Family room',
			colPerNight: 'Per night',
			colPerMonth: 'Per month (30 nights)',
			colWeek: 'Week (7 nights)',
			colTwoWeeks: '2 weeks (14 nights)',
			save: 'Save',
			perDay: '/ night',
			vatExcluded: 'Prices exclude VAT (13%).',
			vatIncluded: 'incl. VAT:',
			termsHeading: 'Booking terms',
			termsPrepay: 'Week / 2-week / month packages require full prepayment at check-in.',
			termsEarlyCheckout: 'Leaving early cancels the package discount — the stay is recalculated at the standard per-night rate.',
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
			recentGuestsLabel: 'Recent guests on Booking.com',
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
		footer: { rights: 'All rights reserved.', poweredBy: 'Website by', regCode: 'Reg. code' },
		languageModal: { heading: 'Choose your language', subheading: 'Hostel & Hotel Apartments is available in 6 languages.', continueLabel: 'Continue' },
	},
	et: {
		metaDescription:
			'Hostel 3A by Hostel & Hotel Apartments — privaat- ja jagatud toad Maardus, mõne minuti kaugusel Tallinnast, kohvikuga majas.',
		nav: { about: 'Meist', rooms: 'Toad', pricing: 'Hinnad', buffet: 'Puhvet', location: 'Asukoht', contact: 'Kontakt', bookNow: 'Broneeri' },
		hero: {
			eyebrow: 'Hostel 3A · Maardu, Eesti',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Hinnad',
			heading: 'Hinnakiri',
			subheading: 'Broneeri ööde kaupa või säästa nädala / kahe nädala paketiga.',
			categoryShared: 'Jagatud tuba',
			categoryFamily: 'Pere tuba',
			colPerNight: 'Öö kohta',
			colPerMonth: 'Kuu kohta (30 ööd)',
			colWeek: 'Nädal (7 ööd)',
			colTwoWeeks: '2 nädalat (14 ööd)',
			save: 'Säästad',
			perDay: '/ öö',
			vatExcluded: 'Hinnad ei sisalda käibemaksu (13%).',
			vatIncluded: 'koos käibemaksuga:',
			termsHeading: 'Broneerimistingimused',
			termsPrepay: 'Nädala / 2 nädala / kuu paketid eeldavad 100% ettemaksu sisseregistreerimisel.',
			termsEarlyCheckout: 'Varasem lahkumine tühistab paketi soodustuse — viibimine arvestatakse ümber tavalise öö hinnaga.',
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
			recentGuestsLabel: 'Hiljutised külalised Booking.com-is',
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
		footer: { rights: 'Kõik õigused kaitstud.', poweredBy: 'Veebilehe lõi', regCode: 'Registrikood' },
		languageModal: { heading: 'Vali keel', subheading: 'Hostel & Hotel Apartments on saadaval 6 keeles.', continueLabel: 'Jätka' },
	},
	uk: {
		metaDescription: 'Hostel 3A від Hostel & Hotel Apartments — приватні та спільні номери в Маарду, за кілька хвилин від Таллінна, з власним буфетом.',
		nav: { about: 'Про нас', rooms: 'Номери', pricing: 'Ціни', buffet: 'Буфет', location: 'Розташування', contact: 'Контакти', bookNow: 'Забронювати' },
		hero: {
			eyebrow: 'Hostel 3A · Маарду, Естонія',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Ціни',
			heading: 'Тарифи',
			subheading: 'Бронюйте подобово або заощаджуйте з тижневим / двотижневим пакетом.',
			categoryShared: 'Спільна кімната',
			categoryFamily: 'Сімейний номер',
			colPerNight: 'За добу',
			colPerMonth: 'За місяць (30 діб)',
			colWeek: 'Тиждень (7 діб)',
			colTwoWeeks: '2 тижні (14 діб)',
			save: 'Економія',
			perDay: '/ добу',
			vatExcluded: 'Ціни вказані без ПДВ (13%).',
			vatIncluded: 'з ПДВ:',
			termsHeading: 'Умови бронювання',
			termsPrepay: 'Пакети на тиждень / 2 тижні / місяць вимагають 100% передоплати при заселенні.',
			termsEarlyCheckout: 'Дострокове виселення скасовує знижку пакета — проживання перераховується за стандартним тарифом за добу.',
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
			recentGuestsLabel: 'Останні гості на Booking.com',
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
		footer: { rights: 'Усі права захищені.', poweredBy: 'Сайт розробив', regCode: 'Реєстраційний код' },
		languageModal: { heading: 'Оберіть мову', subheading: 'Hostel & Hotel Apartments доступний 6 мовами.', continueLabel: 'Продовжити' },
	},
	ru: {
		metaDescription: 'Hostel 3A от Hostel & Hotel Apartments — частные и общие номера в Маарду, в нескольких минутах от Таллинна, с собственным буфетом.',
		nav: { about: 'О нас', rooms: 'Номера', pricing: 'Цены', buffet: 'Буфет', location: 'Расположение', contact: 'Контакты', bookNow: 'Забронировать' },
		hero: {
			eyebrow: 'Hostel 3A · Маарду, Эстония',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Цены',
			heading: 'Тарифы',
			subheading: 'Бронируйте посуточно или экономьте с недельным / двухнедельным пакетом.',
			categoryShared: 'Общий номер',
			categoryFamily: 'Семейный номер',
			colPerNight: 'За сутки',
			colPerMonth: 'За месяц (30 суток)',
			colWeek: 'Неделя (7 суток)',
			colTwoWeeks: '2 недели (14 суток)',
			save: 'Экономия',
			perDay: '/ сутки',
			vatExcluded: 'Цены указаны без НДС (13%).',
			vatIncluded: 'с НДС:',
			termsHeading: 'Условия бронирования',
			termsPrepay: 'Пакеты на неделю / 2 недели / месяц требуют 100% предоплаты при заселении.',
			termsEarlyCheckout: 'Досрочный выезд аннулирует скидку пакета — проживание пересчитывается по стандартному суточному тарифу.',
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
			recentGuestsLabel: 'Недавние гости на Booking.com',
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
		footer: { rights: 'Все права защищены.', poweredBy: 'Сайт создан в', regCode: 'Рег. код' },
		languageModal: { heading: 'Выберите язык', subheading: 'Hostel & Hotel Apartments доступен на 6 языках.', continueLabel: 'Продолжить' },
	},
	lv: {
		metaDescription: 'Hostel 3A no Hostel & Hotel Apartments — privātas un kopīgas istabas Maardu, dažu minūšu attālumā no Tallinas, ar savu bufeti.',
		nav: { about: 'Par mums', rooms: 'Istabas', pricing: 'Cenas', buffet: 'Bufete', location: 'Atrašanās vieta', contact: 'Kontakti', bookNow: 'Rezervēt' },
		hero: {
			eyebrow: 'Hostel 3A · Maardu, Igaunija',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Cenas',
			heading: 'Cenrādis',
			subheading: 'Rezervējiet pa naktīm vai ietaupiet ar nedēļas / divu nedēļu paketi.',
			categoryShared: 'Kopīga istaba',
			categoryFamily: 'Ģimenes istaba',
			colPerNight: 'Par nakti',
			colPerMonth: 'Par mēnesi (30 naktis)',
			colWeek: 'Nedēļa (7 naktis)',
			colTwoWeeks: '2 nedēļas (14 naktis)',
			save: 'Ietaupījums',
			perDay: '/ nakts',
			vatExcluded: 'Cenas norādītas bez PVN (13%).',
			vatIncluded: 'ar PVN:',
			termsHeading: 'Rezervācijas noteikumi',
			termsPrepay: 'Nedēļas / 2 nedēļu / mēneša paketēm nepieciešama 100% priekšapmaksa iereģistrējoties.',
			termsEarlyCheckout: 'Agrāka izbraukšana anulē paketes atlaidi — uzturēšanās tiek pārrēķināta pēc standarta nakts tarifa.',
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
			recentGuestsLabel: 'Nesenie viesi Booking.com',
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
		footer: { rights: 'Visas tiesības aizsargātas.', poweredBy: 'Mājaslapu izveidoja', regCode: 'Reģ. kods' },
		languageModal: { heading: 'Izvēlieties valodu', subheading: 'Hostel & Hotel Apartments pieejams 6 valodās.', continueLabel: 'Turpināt' },
	},
	fi: {
		metaDescription: 'Hostel 3A, Hostel & Hotel Apartments — yksityisiä ja jaettuja huoneita Maardussa, minuuttien päässä Tallinnasta, oma buffet paikan päällä.',
		nav: { about: 'Meistä', rooms: 'Huoneet', pricing: 'Hinnat', buffet: 'Buffet', location: 'Sijainti', contact: 'Yhteystiedot', bookNow: 'Varaa nyt' },
		hero: {
			eyebrow: 'Hostel 3A · Maardu, Viro',
			heading: 'Hostel & Hotel Apartments',
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
		pricing: {
			eyebrow: 'Hinnat',
			heading: 'Hinnasto',
			subheading: 'Varaa yöltä tai säästä viikko- / kahden viikon paketilla.',
			categoryShared: 'Jaettu huone',
			categoryFamily: 'Perhehuone',
			colPerNight: 'Yö',
			colPerMonth: 'Kuukausi (30 yötä)',
			colWeek: 'Viikko (7 yötä)',
			colTwoWeeks: '2 viikkoa (14 yötä)',
			save: 'Säästö',
			perDay: '/ yö',
			vatExcluded: 'Hinnat eivät sisällä ALV:tä (13%).',
			vatIncluded: 'sis. ALV:',
			termsHeading: 'Varausehdot',
			termsPrepay: 'Viikko-, 2 viikon ja kuukausipaketit edellyttävät 100 % ennakkomaksua sisäänkirjautuessa.',
			termsEarlyCheckout: 'Aikaisempi lähtö peruuttaa pakettialennuksen — oleskelu lasketaan uudelleen normaalilla yöhinnalla.',
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
			recentGuestsLabel: 'Viimeisimmät vieraat Booking.comissa',
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
		footer: { rights: 'Kaikki oikeudet pidätetään.', poweredBy: 'Sivuston toteutti', regCode: 'Rek. nro' },
		languageModal: { heading: 'Valitse kieli', subheading: 'Hostel & Hotel Apartments on saatavilla 6 kielellä.', continueLabel: 'Jatka' },
	},
};
