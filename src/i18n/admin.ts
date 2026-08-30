// Локалізація адмін-панелі (Фаза 3) — ОКРЕМА від публічної 6-мовної
// системи (src/i18n/locales.ts). Лише дві мови, бо панель бачить тільки
// власник/персонал, не гості сайту. Мова обирається перемикачем в шапці
// AdminLayout, зберігається в cookie admin_locale (не в БД — не хотілось
// зайвої міграції для того, що легко міняється в браузері).
export type AdminLocale = 'uk' | 'ru';
export const adminLocales: AdminLocale[] = ['uk', 'ru'];
export const adminLocaleNames: Record<AdminLocale, string> = { uk: 'Українська', ru: 'Русский' };
export const defaultAdminLocale: AdminLocale = 'uk';

export function isAdminLocale(value: string | undefined | null): value is AdminLocale {
	return value === 'uk' || value === 'ru';
}

export interface AdminCopy {
	nav: { overview: string; rooms: string; guests: string; logout: string; brand: string; brandSub: string };
	login: { title: string; subtitle: string; email: string; password: string; submit: string; errorInvalid: string };
	overview: {
		title: string;
		subtitle: string;
		statTotal: string;
		stat7: string;
		stat30: string;
		statCompany: string;
		statPoints: string;
		recentTitle: string;
		empty: string;
		colName: string;
		colEmail: string;
		colPhone: string;
		colDate: string;
	};
	guestsList: {
		title: string;
		countTotal: string;
		countFound: string;
		searchPlaceholder: string;
		searchBtn: string;
		reset: string;
		emptyAll: string;
		emptyFiltered: string;
		colId: string;
		colName: string;
		colEmail: string;
		colPhone: string;
		colType: string;
		colPoints: string;
		colDate: string;
		typeCompany: string;
		typeIndividual: string;
	};
	guestDetail: {
		back: string;
		company: string;
		individual: string;
		contactsTitle: string;
		email: string;
		phone: string;
		nationality: string;
		dob: string;
		address: string;
		city: string;
		postal: string;
		country: string;
		marketing: string;
		consent: string;
		registered: string;
		google: string;
		telegram: string;
		connected: string;
		notAvailable: string;
		yes: string;
		no: string;
		companyName: string;
		companyReg: string;
		companyVat: string;
		companyAddr: string;
		pointsTitle: string;
		pointsPlaceholder: string;
		pointsApply: string;
		reasonPlaceholder: string;
		notesTitle: string;
		notePlaceholder: string;
		noteAdd: string;
		noNotes: string;
		noticeAdded: string;
		noticePointsUpdated: string;
		errorDeltaRequired: string;
		errorReasonRequired: string;
		noteAccrued: string;
		noteDeducted: string;
		noteReason: string;
		noteNewBalance: string;
		pointsWord: string;
	};
	rooms: {
		title: string;
		addBtn: string;
		subtitle: string;
		empty: string;
		colName: string;
		colSlug: string;
		colPrice: string;
		colPhotos: string;
		colStatus: string;
		active: string;
		inactive: string;
		edit: string;
		up: string;
		down: string;
	};
	roomEdit: {
		back: string;
		titleNew: string;
		basicSection: string;
		slug: string;
		slugPlaceholder: string;
		priceNight: string;
		priceWeek: string;
		priceTwoWeeks: string;
		pricePerMonth: string;
		nameField: string;
		bedsField: string;
		bedsPlaceholder: string;
		guestsField: string;
		guestsPlaceholder: string;
		createBtn: string;
		saveBtn: string;
		deleteRoom: string;
		confirmDelete: string;
		photosSection: string;
		uploadBtn: string;
		photoHint: string;
		noPhotosNew: string;
		noPhotos: string;
		deletePhoto: string;
		savedNotice: string;
		errorRequired: string;
		errorSlugTaken: string;
	};
}

export const admin: Record<AdminLocale, AdminCopy> = {
	uk: {
		nav: { overview: 'Огляд', rooms: 'Номери', guests: 'Гості', logout: 'Вийти', brand: 'Hostel 3A', brandSub: 'Адмін-панель' },
		login: {
			title: 'Адмін-панель',
			subtitle: 'Hostel & Hotel Apartments',
			email: 'Email',
			password: 'Пароль',
			submit: 'Увійти',
			errorInvalid: 'Невірний email або пароль.',
		},
		overview: {
			title: 'Огляд',
			subtitle: "Дані по гостях в реальному часі. Статистика по бронюваннях/доходах з'явиться у Фазі 4, коли запрацює система бронювання.",
			statTotal: 'Гостей всього',
			stat7: 'Нових за 7 днів',
			stat30: 'Нових за 30 днів',
			statCompany: 'Юридичних осіб',
			statPoints: 'Бонусних балів видано',
			recentTitle: 'Останні реєстрації',
			empty: 'Ще жодного гостя не зареєструвалось.',
			colName: "Ім'я",
			colEmail: 'Email',
			colPhone: 'Телефон',
			colDate: 'Дата реєстрації',
		},
		guestsList: {
			title: 'Гості',
			countTotal: 'всього',
			countFound: 'знайдено',
			searchPlaceholder: 'Пошук за іменем, email або телефоном',
			searchBtn: 'Знайти',
			reset: 'Скинути',
			emptyAll: 'Ще жодного гостя не зареєструвалось.',
			emptyFiltered: 'Нічого не знайдено.',
			colId: 'ID',
			colName: "Ім'я",
			colEmail: 'Email',
			colPhone: 'Телефон',
			colType: 'Тип',
			colPoints: 'Бали',
			colDate: 'Реєстрація',
			typeCompany: 'Юр. особа',
			typeIndividual: 'Фіз. особа',
		},
		guestDetail: {
			back: '← Усі гості',
			company: 'Юридична особа',
			individual: 'Фізична особа',
			contactsTitle: 'Контакти та анкета',
			email: 'Email',
			phone: 'Телефон',
			nationality: 'Громадянство',
			dob: 'Дата народження',
			address: 'Адреса',
			city: 'Місто',
			postal: 'Поштовий індекс',
			country: 'Країна проживання',
			marketing: 'Маркетингова згода',
			consent: 'Згода на обробку даних',
			registered: 'Реєстрація',
			google: 'Google',
			telegram: 'Telegram',
			connected: 'Підключено',
			notAvailable: '—',
			yes: 'Так',
			no: 'Ні',
			companyName: 'Назва компанії',
			companyReg: 'Реєстраційний код',
			companyVat: 'VAT',
			companyAddr: 'Адреса компанії',
			pointsTitle: 'Бонусні бали',
			pointsPlaceholder: 'напр. 150 або -50',
			pointsApply: 'Застосувати',
			reasonPlaceholder: "Причина (обов'язково)",
			notesTitle: 'Нотатки',
			notePlaceholder: 'Додати нотатку про гостя...',
			noteAdd: 'Додати',
			noNotes: 'Ще немає нотаток.',
			noticeAdded: 'Нотатку додано.',
			noticePointsUpdated: 'Баланс балів оновлено.',
			errorDeltaRequired: "Вкажіть кількість балів (додатну або від'ємну).",
			errorReasonRequired: 'Вкажіть причину нарахування/списання — вона піде в нотатки.',
			noteAccrued: 'Нараховано',
			noteDeducted: 'Списано',
			noteReason: 'Причина',
			noteNewBalance: 'Новий баланс',
			pointsWord: 'балів',
		},
		rooms: {
			title: 'Номери',
			addBtn: '+ Додати номер',
			subtitle: 'Порядок тут визначає порядок карток на сайті. "Активний" — вимикає показ на лендінгу без видалення.',
			empty: 'Ще немає жодного номера.',
			colName: 'Назва (EN)',
			colSlug: 'Slug',
			colPrice: 'Ціна/ніч',
			colPhotos: 'Фото',
			colStatus: 'Статус',
			active: 'Активний',
			inactive: 'Вимкнено',
			edit: 'Редагувати',
			up: 'Вище',
			down: 'Нижче',
		},
		roomEdit: {
			back: '← Усі номери',
			titleNew: 'Новий номер',
			basicSection: 'Основне',
			slug: 'Slug (латиницею, унікальний)',
			slugPlaceholder: 'напр. deluxe-double',
			priceNight: 'Ціна/ніч (€)',
			priceWeek: "Ціна/тиждень (€, необов'язково)",
			priceTwoWeeks: "Ціна/2 тижні (€, необов'язково)",
			pricePerMonth: "Ціна/місяць (€, необов'язково)",
			nameField: 'Назва номера',
			bedsField: 'Ліжка',
			bedsPlaceholder: 'напр. 1 double bed',
			guestsField: 'Гостей',
			guestsPlaceholder: 'напр. 2 guests',
			createBtn: 'Створити номер',
			saveBtn: 'Зберегти зміни',
			deleteRoom: 'Видалити номер',
			confirmDelete: 'Видалити цей номер і всі його фото назавжди?',
			photosSection: 'Фото',
			uploadBtn: 'Завантажити фото',
			photoHint: 'Перше фото в списку — те, що показується на картці номера на сайті.',
			noPhotosNew: 'Спершу створіть номер, потім можна буде додавати фото.',
			noPhotos: 'Ще немає фото — використовується заглушка на сайті.',
			deletePhoto: 'Видалити',
			savedNotice: 'Збережено.',
			errorRequired: 'Заповніть slug, назву англійською і ціну за ніч.',
			errorSlugTaken: 'Такий slug вже використовується іншим номером.',
		},
	},
	ru: {
		nav: { overview: 'Обзор', rooms: 'Номера', guests: 'Гости', logout: 'Выйти', brand: 'Hostel 3A', brandSub: 'Админ-панель' },
		login: {
			title: 'Админ-панель',
			subtitle: 'Hostel & Hotel Apartments',
			email: 'Email',
			password: 'Пароль',
			submit: 'Войти',
			errorInvalid: 'Неверный email или пароль.',
		},
		overview: {
			title: 'Обзор',
			subtitle: 'Данные по гостям в реальном времени. Статистика по бронированиям/доходам появится в Фазе 4, когда заработает система бронирования.',
			statTotal: 'Гостей всего',
			stat7: 'Новых за 7 дней',
			stat30: 'Новых за 30 дней',
			statCompany: 'Юридических лиц',
			statPoints: 'Бонусных баллов выдано',
			recentTitle: 'Последние регистрации',
			empty: 'Ещё ни один гость не зарегистрировался.',
			colName: 'Имя',
			colEmail: 'Email',
			colPhone: 'Телефон',
			colDate: 'Дата регистрации',
		},
		guestsList: {
			title: 'Гости',
			countTotal: 'всего',
			countFound: 'найдено',
			searchPlaceholder: 'Поиск по имени, email или телефону',
			searchBtn: 'Найти',
			reset: 'Сбросить',
			emptyAll: 'Ещё ни один гость не зарегистрировался.',
			emptyFiltered: 'Ничего не найдено.',
			colId: 'ID',
			colName: 'Имя',
			colEmail: 'Email',
			colPhone: 'Телефон',
			colType: 'Тип',
			colPoints: 'Баллы',
			colDate: 'Регистрация',
			typeCompany: 'Юр. лицо',
			typeIndividual: 'Физ. лицо',
		},
		guestDetail: {
			back: '← Все гости',
			company: 'Юридическое лицо',
			individual: 'Физическое лицо',
			contactsTitle: 'Контакты и анкета',
			email: 'Email',
			phone: 'Телефон',
			nationality: 'Гражданство',
			dob: 'Дата рождения',
			address: 'Адрес',
			city: 'Город',
			postal: 'Почтовый индекс',
			country: 'Страна проживания',
			marketing: 'Маркетинговое согласие',
			consent: 'Согласие на обработку данных',
			registered: 'Регистрация',
			google: 'Google',
			telegram: 'Telegram',
			connected: 'Подключено',
			notAvailable: '—',
			yes: 'Да',
			no: 'Нет',
			companyName: 'Название компании',
			companyReg: 'Регистрационный код',
			companyVat: 'VAT',
			companyAddr: 'Адрес компании',
			pointsTitle: 'Бонусные баллы',
			pointsPlaceholder: 'напр. 150 или -50',
			pointsApply: 'Применить',
			reasonPlaceholder: 'Причина (обязательно)',
			notesTitle: 'Заметки',
			notePlaceholder: 'Добавить заметку о госте...',
			noteAdd: 'Добавить',
			noNotes: 'Заметок пока нет.',
			noticeAdded: 'Заметка добавлена.',
			noticePointsUpdated: 'Баланс баллов обновлён.',
			errorDeltaRequired: 'Укажите количество баллов (положительное или отрицательное).',
			errorReasonRequired: 'Укажите причину начисления/списания — она попадёт в заметки.',
			noteAccrued: 'Начислено',
			noteDeducted: 'Списано',
			noteReason: 'Причина',
			noteNewBalance: 'Новый баланс',
			pointsWord: 'баллов',
		},
		rooms: {
			title: 'Номера',
			addBtn: '+ Добавить номер',
			subtitle: 'Порядок здесь определяет порядок карточек на сайте. "Активен" — отключает показ на лендинге без удаления.',
			empty: 'Ещё нет ни одного номера.',
			colName: 'Название (EN)',
			colSlug: 'Slug',
			colPrice: 'Цена/ночь',
			colPhotos: 'Фото',
			colStatus: 'Статус',
			active: 'Активен',
			inactive: 'Отключён',
			edit: 'Редактировать',
			up: 'Выше',
			down: 'Ниже',
		},
		roomEdit: {
			back: '← Все номера',
			titleNew: 'Новый номер',
			basicSection: 'Основное',
			slug: 'Slug (латиницей, уникальный)',
			slugPlaceholder: 'напр. deluxe-double',
			priceNight: 'Цена/ночь (€)',
			priceWeek: 'Цена/неделя (€, необязательно)',
			priceTwoWeeks: 'Цена/2 недели (€, необязательно)',
			pricePerMonth: 'Цена/месяц (€, необязательно)',
			nameField: 'Название номера',
			bedsField: 'Кровати',
			bedsPlaceholder: 'напр. 1 double bed',
			guestsField: 'Гостей',
			guestsPlaceholder: 'напр. 2 guests',
			createBtn: 'Создать номер',
			saveBtn: 'Сохранить изменения',
			deleteRoom: 'Удалить номер',
			confirmDelete: 'Удалить этот номер и все его фото навсегда?',
			photosSection: 'Фото',
			uploadBtn: 'Загрузить фото',
			photoHint: 'Первое фото в списке — то, что показывается на карточке номера на сайте.',
			noPhotosNew: 'Сначала создайте номер, затем можно будет добавлять фото.',
			noPhotos: 'Фото ещё нет — используется заглушка на сайте.',
			deletePhoto: 'Удалить',
			savedNotice: 'Сохранено.',
			errorRequired: 'Заполните slug, название на английском и цену за ночь.',
			errorSlugTaken: 'Такой slug уже используется другим номером.',
		},
	},
};

export function getAdminLocale(cookieValue: string | undefined): AdminLocale {
	return isAdminLocale(cookieValue) ? cookieValue : defaultAdminLocale;
}
