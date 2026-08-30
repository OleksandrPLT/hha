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
	nav: {
		overview: string;
		rooms: string;
		bookings: string;
		guests: string;
		checkin: string;
		promotions: string;
		invoices: string;
		organizations: string;
		marketing: string;
		migrationReport: string;
		logout: string;
		brand: string;
		brandSub: string;
	};
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
		quantity: string;
		quantityHint: string;
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
	bookings: {
		title: string;
		subtitle: string;
		empty: string;
		addBtn: string;
		colId: string;
		colRoom: string;
		colGuest: string;
		colDates: string;
		colTotal: string;
		colStatus: string;
		colPayment: string;
		colSource: string;
		filterAll: string;
		statusPending: string;
		statusConfirmed: string;
		statusCancelled: string;
		statusCompleted: string;
		paymentUnpaid: string;
		paymentPaid: string;
		paymentRefunded: string;
		sourceWebsite: string;
		sourcePhone: string;
		sourceEmail: string;
		sourceBookingCom: string;
	};
	bookingNew: {
		title: string;
		subtitle: string;
		room: string;
		source: string;
		fullName: string;
		email: string;
		phone: string;
		checkIn: string;
		checkOut: string;
		guestsCount: string;
		pricePerNight: string;
		pricePerNightHint: string;
		alreadyPaid: string;
		createBtn: string;
		errorRequired: string;
		errorDates: string;
		availabilityWarning: string;
	};
	bookingDetail: {
		back: string;
		refLabel: string;
		guestSection: string;
		fullName: string;
		email: string;
		phone: string;
		linkedAccount: string;
		guestBooking: string;
		staySection: string;
		checkIn: string;
		checkOut: string;
		nights: string;
		guestsCount: string;
		specialRequests: string;
		paymentSection: string;
		method: string;
		methodCash: string;
		methodRevolut: string;
		status: string;
		pricePerNight: string;
		total: string;
		markPaid: string;
		checkNow: string;
		statusSection: string;
		setPending: string;
		setConfirmed: string;
		setCancelled: string;
		setCompleted: string;
		completedHint: string;
		pointsAwarded: string;
		notice: string;
	};
	checkinList: {
		title: string;
		subtitle: string;
		empty: string;
		colId: string;
		colName: string;
		colDates: string;
		colStay: string;
		colVerified: string;
		verifiedYes: string;
		verifiedNo: string;
		qrTitle: string;
		qrHint: string;
		copyLink: string;
		copied: string;
	};
	checkinDetail: {
		back: string;
		personalSection: string;
		firstName: string;
		lastName: string;
		dateOfBirth: string;
		citizenship: string;
		addressSection: string;
		country: string;
		city: string;
		street: string;
		zip: string;
		contactSection: string;
		phone: string;
		email: string;
		accompanyingSection: string;
		noAccompanying: string;
		staySection: string;
		arrivalDate: string;
		departureDate: string;
		signatureSection: string;
		signedAt: string;
		receptionSection: string;
		receptionHint: string;
		roomBedNumber: string;
		documentType: string;
		documentTypePassport: string;
		documentTypeId: string;
		documentTypeOther: string;
		documentNumber: string;
		verifyBtn: string;
		verifiedBy: string;
		notice: string;
	};
	promotionsList: {
		title: string;
		subtitle: string;
		addBtn: string;
		empty: string;
		colLabel: string;
		colRoom: string;
		colDiscount: string;
		colDates: string;
		colStatus: string;
		allRooms: string;
		active: string;
		inactive: string;
	};
	promotionEdit: {
		back: string;
		titleNew: string;
		label: string;
		labelPlaceholder: string;
		room: string;
		allRoomsOption: string;
		discountType: string;
		discountTypePercent: string;
		discountTypeFixed: string;
		discountValue: string;
		discountValueHintPercent: string;
		discountValueHintFixed: string;
		startDate: string;
		endDate: string;
		isActive: string;
		createBtn: string;
		saveBtn: string;
		deleteBtn: string;
		confirmDelete: string;
		errorRequired: string;
		errorDates: string;
		savedNotice: string;
	};
	organizationsList: {
		title: string;
		subtitle: string;
		empty: string;
		colName: string;
		colRegCode: string;
		colGuests: string;
	};
	organizationDetail: {
		back: string;
		regCode: string;
		vat: string;
		address: string;
		guestsSection: string;
		noGuests: string;
		invoicesSection: string;
		noInvoices: string;
	};
	invoicesList: {
		title: string;
		subtitle: string;
		addBtn: string;
		empty: string;
		colNumber: string;
		colBillTo: string;
		colAmount: string;
		colDate: string;
		colStatus: string;
		statusIssued: string;
		statusPaid: string;
		statusCancelled: string;
	};
	invoiceDetail: {
		back: string;
		printBtn: string;
		markPaidBtn: string;
		cancelBtn: string;
		confirmCancel: string;
		billTo: string;
		payer: string;
		invoiceNumber: string;
		issueDate: string;
		dueDate: string;
		descriptionLabel: string;
		descriptionText: string;
		amountExclVat: string;
		vatLabel: string;
		amountTotal: string;
		iban: string;
		bic: string;
		reference: string;
		statusLabel: string;
	};
	bookingGenerateInvoice: {
		btn: string;
		alreadyIssued: string;
	};
	marketingComposer: {
		title: string;
		subtitle: string;
		subject: string;
		subjectPlaceholder: string;
		body: string;
		bodyPlaceholder: string;
		bodyHint: string;
		recipientsNote: string;
		sendBtn: string;
		sentNotice: string;
		historyTitle: string;
		colSubject: string;
		colRecipients: string;
		colDate: string;
		empty: string;
		errorRequired: string;
		errorNoRecipients: string;
	};
	migrationReport: {
		title: string;
		subtitle: string;
		from: string;
		to: string;
		downloadBtn: string;
	};
}

export const admin: Record<AdminLocale, AdminCopy> = {
	uk: {
		nav: {
			overview: 'Огляд',
			rooms: 'Номери',
			bookings: 'Бронювання',
			guests: 'Гості',
			checkin: 'Картки гостей',
			promotions: 'Акції',
			invoices: 'Інвойси',
			organizations: 'Організації',
			marketing: 'Розсилки',
			migrationReport: 'Звіт для PPA',
			logout: 'Вийти',
			brand: 'Hostel 3A',
			brandSub: 'Адмін-панель',
		},
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
			quantity: 'Кількість одиниць',
			quantityHint: 'Скільки таких номерів/ліжок фізично є — визначає, скільки бронювань на ці ж дати можливо одночасно.',
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
		bookings: {
			title: 'Бронювання',
			subtitle: 'Власний календар бронювань сайту (без синхронізації з Booking.com чи іншими каналами).',
			empty: 'Ще немає жодного бронювання.',
			addBtn: '+ Додати бронювання',
			colId: '№',
			colRoom: 'Номер',
			colGuest: 'Гість',
			colDates: 'Дати',
			colTotal: 'Сума',
			colStatus: 'Статус',
			colPayment: 'Оплата',
			colSource: 'Джерело',
			filterAll: 'Усі',
			statusPending: 'Очікує',
			statusConfirmed: 'Підтверджено',
			statusCancelled: 'Скасовано',
			statusCompleted: 'Завершено',
			paymentUnpaid: 'Не оплачено',
			paymentPaid: 'Оплачено',
			paymentRefunded: 'Повернено',
			sourceWebsite: 'Сайт',
			sourcePhone: 'Телефон',
			sourceEmail: 'Email',
			sourceBookingCom: 'Booking.com',
		},
		bookingNew: {
			title: 'Нове бронювання',
			subtitle: 'Внести бронювання, яке прийшло не через сайт (телефон, email, Booking.com).',
			room: 'Номер',
			source: 'Джерело',
			fullName: "Ім'я гостя",
			email: 'Email',
			phone: 'Телефон',
			checkIn: 'Заїзд',
			checkOut: 'Виїзд',
			guestsCount: 'Гостей',
			pricePerNight: 'Ціна/ніч (€, з ПДВ)',
			pricePerNightHint: 'Підставлено поточну ціну номера — можна змінити для індивідуального тарифу.',
			alreadyPaid: 'Вже оплачено',
			createBtn: 'Створити бронювання',
			errorRequired: "Заповніть усі обов'язкові поля.",
			errorDates: 'Перевірте дати заїзду/виїзду.',
			availabilityWarning: '⚠ На ці дати вже є інше бронювання цього номера — перевірте перед збереженням.',
		},
		bookingDetail: {
			back: '← Усі бронювання',
			refLabel: 'Бронювання',
			guestSection: 'Гість',
			fullName: "Ім'я",
			email: 'Email',
			phone: 'Телефон',
			linkedAccount: 'Прив\'язаний акаунт',
			guestBooking: 'Без акаунта (гостьове бронювання)',
			staySection: 'Проживання',
			checkIn: 'Заїзд',
			checkOut: 'Виїзд',
			nights: 'Ночей',
			guestsCount: 'Гостей',
			specialRequests: 'Побажання',
			paymentSection: 'Оплата',
			method: 'Метод',
			methodCash: 'На місці',
			methodRevolut: 'Revolut',
			status: 'Статус оплати',
			pricePerNight: 'Ціна/ніч (з ПДВ)',
			total: 'Разом',
			markPaid: 'Позначити оплаченим',
			checkNow: 'Перевірити оплату зараз',
			statusSection: 'Статус бронювання',
			setPending: 'Очікує',
			setConfirmed: 'Підтвердити',
			setCancelled: 'Скасувати',
			setCompleted: 'Завершити проживання',
			completedHint: 'При завершенні гостю з акаунтом автоматично нарахуються бали лояльності.',
			pointsAwarded: 'Бали вже нараховано за це бронювання.',
			notice: 'Збережено.',
		},
		checkinList: {
			title: 'Картки гостей',
			subtitle: 'Külastajakaart — електронний облік проживаючих (зберігається 2 роки за естонським законом).',
			empty: 'Ще немає жодної картки.',
			colId: '№',
			colName: "Ім'я",
			colDates: 'Заповнено',
			colStay: 'Проживання',
			colVerified: 'Документ',
			verifiedYes: 'Перевірено',
			verifiedNo: 'Не перевірено',
			qrTitle: 'Самостійний чекін для гостя',
			qrHint: 'Покажіть цей QR-код або дайте посилання гостю — він сам заповнить картку на своєму телефоні.',
			copyLink: 'Скопіювати посилання',
			copied: 'Скопійовано!',
		},
		checkinDetail: {
			back: '← Усі картки',
			personalSection: 'Особисті дані',
			firstName: "Ім'я",
			lastName: 'Прізвище',
			dateOfBirth: 'Дата народження',
			citizenship: 'Громадянство',
			addressSection: 'Адреса постійного проживання',
			country: 'Країна',
			city: 'Місто',
			street: 'Вулиця, будинок, квартира',
			zip: 'Поштовий індекс',
			contactSection: 'Контактні дані',
			phone: 'Телефон',
			email: 'Email',
			accompanyingSection: 'Супроводжуючі особи',
			noAccompanying: 'Немає.',
			staySection: 'Деталі перебування',
			arrivalDate: 'Дата заїзду',
			departureDate: 'Дата виїзду',
			signatureSection: 'Підпис гостя',
			signedAt: 'Підписано',
			receptionSection: 'Для адміністратора',
			receptionHint: 'Заповнити ПІСЛЯ звірки з оригіналом паспорта/ID-картки гостя.',
			roomBedNumber: 'Номер кімнати (ліжка)',
			documentType: 'Тип документа',
			documentTypePassport: 'Паспорт',
			documentTypeId: 'ID-картка',
			documentTypeOther: 'Інше',
			documentNumber: 'Номер документа',
			verifyBtn: 'Підтвердити перевірку документа',
			verifiedBy: 'Перевірив',
			notice: 'Збережено.',
		},
		promotionsList: {
			title: 'Акції',
			subtitle: 'Автоматичні знижки на бронювання — застосовуються без промокодів, якщо дати перетинаються з акцією.',
			addBtn: '+ Додати акцію',
			empty: 'Ще немає жодної акції.',
			colLabel: 'Назва',
			colRoom: 'Номер',
			colDiscount: 'Знижка',
			colDates: 'Період',
			colStatus: 'Статус',
			allRooms: 'Усі номери',
			active: 'Активна',
			inactive: 'Вимкнена',
		},
		promotionEdit: {
			back: '← Усі акції',
			titleNew: 'Нова акція',
			label: 'Назва акції',
			labelPlaceholder: 'напр. Знижка на довгі вихідні',
			room: 'Номер',
			allRoomsOption: 'Усі номери',
			discountType: 'Тип знижки',
			discountTypePercent: 'Відсоток (%)',
			discountTypeFixed: 'Фіксована сума (€)',
			discountValue: 'Розмір знижки',
			discountValueHintPercent: 'Наприклад, 15 — це 15% від суми бронювання.',
			discountValueHintFixed: 'Сума в євро, віднімається від загальної суми бронювання.',
			startDate: 'Діє з',
			endDate: 'Діє по',
			isActive: 'Активна',
			createBtn: 'Створити акцію',
			saveBtn: 'Зберегти зміни',
			deleteBtn: 'Видалити акцію',
			confirmDelete: 'Видалити цю акцію назавжди?',
			errorRequired: "Заповніть назву, розмір знижки і період дії.",
			errorDates: 'Дата "по" має бути пізніше дати "з".',
			savedNotice: 'Збережено.',
		},
		organizationsList: {
			title: 'Організації',
			subtitle: 'Компанії, до яких прив\'язані гостьові акаунти.',
			empty: 'Ще немає жодної організації.',
			colName: 'Назва',
			colRegCode: 'Рег. код',
			colGuests: 'Гостей',
		},
		organizationDetail: {
			back: '← Усі організації',
			regCode: 'Реєстраційний код',
			vat: 'VAT',
			address: 'Адреса',
			guestsSection: 'Прив\'язані гості',
			noGuests: 'Ще немає прив\'язаних гостей.',
			invoicesSection: 'Інвойси',
			noInvoices: 'Ще немає інвойсів.',
		},
		invoicesList: {
			title: 'Інвойси',
			subtitle: 'Видані інвойси по бронюваннях.',
			addBtn: '+ Новий інвойс',
			empty: 'Ще немає жодного інвойсу.',
			colNumber: '№',
			colBillTo: 'Одержувач',
			colAmount: 'Сума',
			colDate: 'Дата',
			colStatus: 'Статус',
			statusIssued: 'Видано',
			statusPaid: 'Оплачено',
			statusCancelled: 'Скасовано',
		},
		invoiceDetail: {
			back: '← Усі інвойси',
			printBtn: 'Друк / PDF',
			markPaidBtn: 'Позначити оплаченим',
			cancelBtn: 'Скасувати інвойс',
			confirmCancel: 'Скасувати цей інвойс?',
			billTo: 'Одержувач',
			payer: 'Реквізити отримувача платежу',
			invoiceNumber: 'Номер інвойсу',
			issueDate: 'Дата видачі',
			dueDate: 'Термін оплати',
			descriptionLabel: 'Опис',
			descriptionText: 'Проживання',
			amountExclVat: 'Сума без ПДВ',
			vatLabel: 'ПДВ',
			amountTotal: 'Разом до сплати',
			iban: 'IBAN',
			bic: 'BIC',
			reference: 'Призначення платежу',
			statusLabel: 'Статус',
		},
		bookingGenerateInvoice: {
			btn: 'Створити інвойс',
			alreadyIssued: 'Інвойс вже створено',
		},
		marketingComposer: {
			title: 'Розсилки',
			subtitle: 'Лист усім гостям, що дали згоду на маркетингові розсилки.',
			subject: 'Тема листа',
			subjectPlaceholder: 'напр. Знижка -15% на вересень',
			body: 'Текст листа',
			bodyPlaceholder: 'Текст повідомлення...',
			bodyHint: 'Просто текст — переноси рядків стануть абзацами в листі.',
			recipientsNote: 'Отримають лист лише гості з активною згодою на маркетингові розсилки.',
			sendBtn: 'Надіслати розсилку',
			sentNotice: 'Розсилку надіслано.',
			historyTitle: 'Історія розсилок',
			colSubject: 'Тема',
			colRecipients: 'Отримувачів',
			colDate: 'Дата',
			empty: 'Ще не було жодної розсилки.',
			errorRequired: "Заповніть тему і текст листа.",
			errorNoRecipients: 'Немає жодного гостя зі згодою на маркетингові розсилки.',
		},
		migrationReport: {
			title: 'Звіт для PPA',
			subtitle: 'Список гостей за період — PDF естонською, на бланку хостела, для міграційної служби (Politsei- ja Piirivalveamet).',
			from: 'Період з',
			to: 'Період по',
			downloadBtn: 'Завантажити PDF',
		},
	},
	ru: {
		nav: {
			overview: 'Обзор',
			rooms: 'Номера',
			bookings: 'Бронирования',
			guests: 'Гости',
			checkin: 'Карты гостей',
			promotions: 'Акции',
			invoices: 'Инвойсы',
			organizations: 'Организации',
			marketing: 'Рассылки',
			migrationReport: 'Отчёт для PPA',
			logout: 'Выйти',
			brand: 'Hostel 3A',
			brandSub: 'Админ-панель',
		},
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
			quantity: 'Количество единиц',
			quantityHint: 'Сколько таких номеров/кроватей физически есть — определяет, сколько бронирований на эти же даты возможно одновременно.',
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
		bookings: {
			title: 'Бронирования',
			subtitle: 'Собственный календарь бронирований сайта (без синхронизации с Booking.com и другими каналами).',
			empty: 'Ещё нет ни одного бронирования.',
			addBtn: '+ Добавить бронирование',
			colId: '№',
			colRoom: 'Номер',
			colGuest: 'Гость',
			colDates: 'Даты',
			colTotal: 'Сумма',
			colStatus: 'Статус',
			colPayment: 'Оплата',
			colSource: 'Источник',
			filterAll: 'Все',
			statusPending: 'Ожидает',
			statusConfirmed: 'Подтверждено',
			statusCancelled: 'Отменено',
			statusCompleted: 'Завершено',
			paymentUnpaid: 'Не оплачено',
			paymentPaid: 'Оплачено',
			paymentRefunded: 'Возвращено',
			sourceWebsite: 'Сайт',
			sourcePhone: 'Телефон',
			sourceEmail: 'Email',
			sourceBookingCom: 'Booking.com',
		},
		bookingNew: {
			title: 'Новое бронирование',
			subtitle: 'Внести бронирование, которое пришло не через сайт (телефон, email, Booking.com).',
			room: 'Номер',
			source: 'Источник',
			fullName: 'Имя гостя',
			email: 'Email',
			phone: 'Телефон',
			checkIn: 'Заезд',
			checkOut: 'Выезд',
			guestsCount: 'Гостей',
			pricePerNight: 'Цена/ночь (€, с НДС)',
			pricePerNightHint: 'Подставлена текущая цена номера — можно изменить для индивидуального тарифа.',
			alreadyPaid: 'Уже оплачено',
			createBtn: 'Создать бронирование',
			errorRequired: 'Заполните все обязательные поля.',
			errorDates: 'Проверьте даты заезда/выезда.',
			availabilityWarning: '⚠ На эти даты уже есть другое бронирование этого номера — проверьте перед сохранением.',
		},
		bookingDetail: {
			back: '← Все бронирования',
			refLabel: 'Бронирование',
			guestSection: 'Гость',
			fullName: 'Имя',
			email: 'Email',
			phone: 'Телефон',
			linkedAccount: 'Привязанный аккаунт',
			guestBooking: 'Без аккаунта (гостевое бронирование)',
			staySection: 'Проживание',
			checkIn: 'Заезд',
			checkOut: 'Выезд',
			nights: 'Ночей',
			guestsCount: 'Гостей',
			specialRequests: 'Пожелания',
			paymentSection: 'Оплата',
			method: 'Метод',
			methodCash: 'На месте',
			methodRevolut: 'Revolut',
			status: 'Статус оплаты',
			pricePerNight: 'Цена/ночь (с НДС)',
			total: 'Итого',
			markPaid: 'Отметить оплаченным',
			checkNow: 'Проверить оплату сейчас',
			statusSection: 'Статус бронирования',
			setPending: 'Ожидает',
			setConfirmed: 'Подтвердить',
			setCancelled: 'Отменить',
			setCompleted: 'Завершить проживание',
			completedHint: 'При завершении гостю с аккаунтом автоматически начислятся баллы лояльности.',
			pointsAwarded: 'Баллы уже начислены за это бронирование.',
			notice: 'Сохранено.',
		},
		checkinList: {
			title: 'Карты гостей',
			subtitle: 'Külastajakaart — электронный учёт проживающих (хранится 2 года по эстонскому закону).',
			empty: 'Ещё нет ни одной карты.',
			colId: '№',
			colName: 'Имя',
			colDates: 'Заполнено',
			colStay: 'Проживание',
			colVerified: 'Документ',
			verifiedYes: 'Проверено',
			verifiedNo: 'Не проверено',
			qrTitle: 'Самостоятельный чекин для гостя',
			qrHint: 'Покажите этот QR-код или дайте ссылку гостю — он сам заполнит карту на своём телефоне.',
			copyLink: 'Скопировать ссылку',
			copied: 'Скопировано!',
		},
		checkinDetail: {
			back: '← Все карты',
			personalSection: 'Личные данные',
			firstName: 'Имя',
			lastName: 'Фамилия',
			dateOfBirth: 'Дата рождения',
			citizenship: 'Гражданство',
			addressSection: 'Адрес постоянного проживания',
			country: 'Страна',
			city: 'Город',
			street: 'Улица, дом, квартира',
			zip: 'Почтовый индекс',
			contactSection: 'Контактные данные',
			phone: 'Телефон',
			email: 'Email',
			accompanyingSection: 'Сопровождающие лица',
			noAccompanying: 'Нет.',
			staySection: 'Детали проживания',
			arrivalDate: 'Дата заезда',
			departureDate: 'Дата выезда',
			signatureSection: 'Подпись гостя',
			signedAt: 'Подписано',
			receptionSection: 'Для администратора',
			receptionHint: 'Заполнить ПОСЛЕ сверки с оригиналом паспорта/ID-карты гостя.',
			roomBedNumber: 'Номер комнаты (кровати)',
			documentType: 'Тип документа',
			documentTypePassport: 'Паспорт',
			documentTypeId: 'ID-карта',
			documentTypeOther: 'Другое',
			documentNumber: 'Номер документа',
			verifyBtn: 'Подтвердить проверку документа',
			verifiedBy: 'Проверил',
			notice: 'Сохранено.',
		},
		promotionsList: {
			title: 'Акции',
			subtitle: 'Автоматические скидки на бронирование — применяются без промокодов, если даты пересекаются с акцией.',
			addBtn: '+ Добавить акцию',
			empty: 'Ещё нет ни одной акции.',
			colLabel: 'Название',
			colRoom: 'Номер',
			colDiscount: 'Скидка',
			colDates: 'Период',
			colStatus: 'Статус',
			allRooms: 'Все номера',
			active: 'Активна',
			inactive: 'Отключена',
		},
		promotionEdit: {
			back: '← Все акции',
			titleNew: 'Новая акция',
			label: 'Название акции',
			labelPlaceholder: 'напр. Скидка на длинные выходные',
			room: 'Номер',
			allRoomsOption: 'Все номера',
			discountType: 'Тип скидки',
			discountTypePercent: 'Процент (%)',
			discountTypeFixed: 'Фиксированная сумма (€)',
			discountValue: 'Размер скидки',
			discountValueHintPercent: 'Например, 15 — это 15% от суммы бронирования.',
			discountValueHintFixed: 'Сумма в евро, вычитается из общей суммы бронирования.',
			startDate: 'Действует с',
			endDate: 'Действует по',
			isActive: 'Активна',
			createBtn: 'Создать акцию',
			saveBtn: 'Сохранить изменения',
			deleteBtn: 'Удалить акцию',
			confirmDelete: 'Удалить эту акцию навсегда?',
			errorRequired: 'Заполните название, размер скидки и период действия.',
			errorDates: 'Дата "по" должна быть позже даты "с".',
			savedNotice: 'Сохранено.',
		},
		organizationsList: {
			title: 'Организации',
			subtitle: 'Компании, к которым привязаны гостевые аккаунты.',
			empty: 'Ещё нет ни одной организации.',
			colName: 'Название',
			colRegCode: 'Рег. код',
			colGuests: 'Гостей',
		},
		organizationDetail: {
			back: '← Все организации',
			regCode: 'Регистрационный код',
			vat: 'VAT',
			address: 'Адрес',
			guestsSection: 'Привязанные гости',
			noGuests: 'Ещё нет привязанных гостей.',
			invoicesSection: 'Инвойсы',
			noInvoices: 'Ещё нет инвойсов.',
		},
		invoicesList: {
			title: 'Инвойсы',
			subtitle: 'Выданные инвойсы по бронированиям.',
			addBtn: '+ Новый инвойс',
			empty: 'Ещё нет ни одного инвойса.',
			colNumber: '№',
			colBillTo: 'Получатель',
			colAmount: 'Сумма',
			colDate: 'Дата',
			colStatus: 'Статус',
			statusIssued: 'Выдан',
			statusPaid: 'Оплачен',
			statusCancelled: 'Отменён',
		},
		invoiceDetail: {
			back: '← Все инвойсы',
			printBtn: 'Печать / PDF',
			markPaidBtn: 'Отметить оплаченным',
			cancelBtn: 'Отменить инвойс',
			confirmCancel: 'Отменить этот инвойс?',
			billTo: 'Получатель',
			payer: 'Реквизиты получателя платежа',
			invoiceNumber: 'Номер инвойса',
			issueDate: 'Дата выдачи',
			dueDate: 'Срок оплаты',
			descriptionLabel: 'Описание',
			descriptionText: 'Проживание',
			amountExclVat: 'Сумма без НДС',
			vatLabel: 'НДС',
			amountTotal: 'Итого к оплате',
			iban: 'IBAN',
			bic: 'BIC',
			reference: 'Назначение платежа',
			statusLabel: 'Статус',
		},
		bookingGenerateInvoice: {
			btn: 'Создать инвойс',
			alreadyIssued: 'Инвойс уже создан',
		},
		marketingComposer: {
			title: 'Рассылки',
			subtitle: 'Письмо всем гостям, давшим согласие на маркетинговые рассылки.',
			subject: 'Тема письма',
			subjectPlaceholder: 'напр. Скидка -15% на сентябрь',
			body: 'Текст письма',
			bodyPlaceholder: 'Текст сообщения...',
			bodyHint: 'Обычный текст — переносы строк станут абзацами в письме.',
			recipientsNote: 'Письмо получат только гости с активным согласием на маркетинговые рассылки.',
			sendBtn: 'Отправить рассылку',
			sentNotice: 'Рассылка отправлена.',
			historyTitle: 'История рассылок',
			colSubject: 'Тема',
			colRecipients: 'Получателей',
			colDate: 'Дата',
			empty: 'Ещё не было ни одной рассылки.',
			errorRequired: 'Заполните тему и текст письма.',
			errorNoRecipients: 'Нет ни одного гостя с согласием на маркетинговые рассылки.',
		},
		migrationReport: {
			title: 'Отчёт для PPA',
			subtitle: 'Список гостей за период — PDF на эстонском, на бланке хостела, для миграционной службы (Politsei- ja Piirivalveamet).',
			from: 'Период с',
			to: 'Период по',
			downloadBtn: 'Скачать PDF',
		},
	},
};

export function getAdminLocale(cookieValue: string | undefined): AdminLocale {
	return isAdminLocale(cookieValue) ? cookieValue : defaultAdminLocale;
}
