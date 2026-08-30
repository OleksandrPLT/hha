import type { Locale } from './locales';

export interface AccountCopy {
	nav: { signIn: string; myAccount: string };
	register: {
		title: string;
		subtitle: string;
		accountTypeIndividual: string;
		accountTypeCompany: string;
		fullName: string;
		email: string;
		phone: string;
		password: string;
		confirmPassword: string;
		nationality: string;
		dateOfBirth: string;
		address: string;
		city: string;
		postalCode: string;
		countryOfResidence: string;
		companyName: string;
		companyRegCode: string;
		companyVat: string;
		companyAddress: string;
		companyLookupNote: string;
		marketingConsent: string;
		dataProcessingConsent: string;
		dataProcessingConsentLink: string;
		submit: string;
		haveAccount: string;
		loginLink: string;
		errorEmailTaken: string;
		errorPasswordMismatch: string;
		errorConsentRequired: string;
		errorGeneric: string;
	};
	login: {
		title: string;
		email: string;
		password: string;
		submit: string;
		noAccount: string;
		registerLink: string;
		errorInvalid: string;
		forgotPassword: string;
	};
	authModal: {
		close: string;
		loyaltyBadge: string;
		brandHeading: string;
		brandBody: string;
		secureConnection: string;
		comingSoon: string;
		orByEmail: string;
		oauthNote: string;
		subtitle: string;
		emailPlaceholder: string;
		showPassword: string;
		hidePassword: string;
		rememberMe: string;
	};
	forgotPassword: { title: string; subtitle: string; email: string; submit: string; successMessage: string; backToLogin: string };
	resetPassword: {
		title: string;
		newPassword: string;
		confirmPassword: string;
		submit: string;
		errorMismatch: string;
		errorInvalidToken: string;
		successMessage: string;
		loginLink: string;
	};
	dashboard: {
		title: string;
		welcome: string;
		navOverview: string;
		navAccountDetails: string;
		navStayHistory: string;
		accountType: string;
		memberId: string;
		scanNote: string;
		loyaltyPoints: string;
		loyaltyNote: string;
		accountDetailsTitle: string;
		memberSince: string;
		yes: string;
		no: string;
		stayHistoryTitle: string;
		stayHistoryEmpty: string;
		logout: string;
		viewFullProfile: string;
		editProfile: string;
		deleteAccount: string;
	};
	editProfile: {
		title: string;
		subtitle: string;
		submit: string;
		successMessage: string;
		backToAccount: string;
		errorEmailTaken: string;
		errorGeneric: string;
		photoTitle: string;
		photoUpload: string;
		photoRemove: string;
		connectedTitle: string;
		connectGoogle: string;
		disconnectGoogle: string;
		connectTelegram: string;
		disconnectTelegram: string;
		googleConnected: string;
		telegramConnected: string;
		linkedSuccess: string;
		unlinkedSuccess: string;
		oauthErrorGeneric: string;
		oauthErrorTaken: string;
	};
	deleteAccount: {
		title: string;
		warning: string;
		passwordLabel: string;
		confirmLabel: string;
		submit: string;
		cancel: string;
		errorInvalidPassword: string;
		errorGeneric: string;
	};
}

// Фаза 2 — реєстрація/вхід гостя, "максимальна анкета" (пряме прохання
// користувача 2026-08-29). Автопідтяжка даних компанії з е-Äriregister не
// підключена — офіційний API RIK вимагає окремої угоди, див. коментар в
// src/db/schema.ts.
export const account: Record<Locale, AccountCopy> = {
	en: {
		nav: { signIn: 'Sign in', myAccount: 'My account' },
		register: {
			title: 'Create an account',
			subtitle: 'Save your details for faster booking and track your loyalty points.',
			accountTypeIndividual: 'Individual',
			accountTypeCompany: 'Company',
			fullName: 'Full name',
			email: 'Email',
			phone: 'Phone',
			password: 'Password',
			confirmPassword: 'Confirm password',
			nationality: 'Nationality',
			dateOfBirth: 'Date of birth',
			address: 'Address',
			city: 'City',
			postalCode: 'Postal code',
			countryOfResidence: 'Country of residence',
			companyName: 'Company name',
			companyRegCode: 'Registry code',
			companyVat: 'VAT number',
			companyAddress: 'Company address',
			companyLookupNote: "We'll confirm company details with you directly — automatic lookup isn't connected yet.",
			marketingConsent: 'I agree to receive booking-related emails and occasional offers.',
			dataProcessingConsent: 'I agree to the processing of my personal data as described in the',
			dataProcessingConsentLink: 'Privacy Policy',
			submit: 'Create account',
			haveAccount: 'Already have an account?',
			loginLink: 'Sign in',
			errorEmailTaken: 'An account with this email already exists.',
			errorPasswordMismatch: "Passwords don't match.",
			errorConsentRequired: 'Please agree to the processing of your personal data to continue.',
			errorGeneric: 'Something went wrong. Please try again.',
		},
		login: {
			title: 'Sign in',
			email: 'Email',
			password: 'Password',
			submit: 'Sign in',
			noAccount: "Don't have an account?",
			registerLink: 'Create one',
			errorInvalid: 'Incorrect email or password.',
			forgotPassword: 'Forgot password?',
		},
		authModal: {
			close: 'Close',
			loyaltyBadge: '15 pts / night · 10 pts = €1',
			brandHeading: 'Sign in for your loyalty points',
			brandBody: 'See your points balance, book faster next time, and keep your details on file. Your data stays private.',
			secureConnection: 'Secure connection',
			comingSoon: 'Coming soon',
			orByEmail: 'or by email',
			oauthNote: 'Google & Telegram sign-in — coming soon',
			subtitle: "Welcome back — choose how you'd like to sign in.",
			emailPlaceholder: 'you@example.com',
			showPassword: 'Show password',
			hidePassword: 'Hide password',
			rememberMe: 'Remember me',
		},
		forgotPassword: {
			title: 'Reset password',
			subtitle: "Enter your email and we'll send you a reset link.",
			email: 'Email',
			submit: 'Send reset link',
			successMessage: "If that email is registered, we've sent a reset link to it.",
			backToLogin: '← Back to sign in',
		},
		resetPassword: {
			title: 'Choose a new password',
			newPassword: 'New password',
			confirmPassword: 'Confirm new password',
			submit: 'Save new password',
			errorMismatch: "Passwords don't match.",
			errorInvalidToken: 'This reset link is invalid or has expired.',
			successMessage: 'Your password has been updated.',
			loginLink: 'Sign in',
		},
		dashboard: {
			title: 'My account',
			welcome: 'Welcome back',
			navOverview: 'Overview',
			navAccountDetails: 'Account details',
			navStayHistory: 'Stay history',
			accountType: 'Account type',
			memberId: 'Member ID',
			scanNote: 'Show this at reception for quick check-in.',
			loyaltyPoints: 'Loyalty points',
			loyaltyNote: 'Earn 15 points for every night you stay. 10 points = €1 — redeemable on a future stay. Points will start counting once online booking launches.',
			accountDetailsTitle: 'Account details',
			memberSince: 'Member since',
			yes: 'Yes',
			no: 'No',
			stayHistoryTitle: 'Stay history',
			stayHistoryEmpty: "You don't have any stays yet — this will fill in once online booking launches.",
			logout: 'Sign out',
			viewFullProfile: 'Open full profile',
			editProfile: 'Edit profile',
			deleteAccount: 'Delete my data',
		},
		editProfile: {
			title: 'Edit profile',
			subtitle: 'Update your details below.',
			submit: 'Save changes',
			successMessage: 'Your profile has been updated.',
			backToAccount: '← Back to my account',
			photoTitle: 'Profile photo',
			photoUpload: 'Upload photo',
			photoRemove: 'Remove photo',
			connectedTitle: 'Connected accounts',
			connectGoogle: 'Connect Google',
			disconnectGoogle: 'Disconnect Google',
			connectTelegram: 'Connect Telegram',
			googleConnected: 'Connected via Google',
			disconnectTelegram: 'Disconnect Telegram',
			telegramConnected: 'Connected via Telegram',
			linkedSuccess: 'Your account is now connected.',
			unlinkedSuccess: 'Account disconnected.',
			oauthErrorGeneric: 'Something went wrong connecting your Google account. Please try again.',
			oauthErrorTaken: 'This Google account is already linked to another profile.',
			errorEmailTaken: 'An account with this email already exists.',
			errorGeneric: 'Something went wrong. Please try again.',
		},
		deleteAccount: {
			title: 'Delete my data',
			warning: 'This permanently deletes your account and all data we hold about you, including your loyalty points. This cannot be undone.',
			passwordLabel: 'Confirm your password',
			confirmLabel: 'I understand this cannot be undone',
			submit: 'Permanently delete my account',
			cancel: 'Cancel',
			errorInvalidPassword: 'Incorrect password.',
			errorGeneric: 'Something went wrong. Please try again.',
		},
	},
	et: {
		nav: { signIn: 'Logi sisse', myAccount: 'Minu konto' },
		register: {
			title: 'Loo konto',
			subtitle: 'Salvesta oma andmed kiiremaks broneerimiseks ja jälgi lojaalsuspunkte.',
			accountTypeIndividual: 'Eraisik',
			accountTypeCompany: 'Ettevõte',
			fullName: 'Täisnimi',
			email: 'E-post',
			phone: 'Telefon',
			password: 'Parool',
			confirmPassword: 'Korda parooli',
			nationality: 'Kodakondsus',
			dateOfBirth: 'Sünniaeg',
			address: 'Aadress',
			city: 'Linn',
			postalCode: 'Postiindeks',
			countryOfResidence: 'Elukohariik',
			companyName: 'Ettevõtte nimi',
			companyRegCode: 'Registrikood',
			companyVat: 'KMKR number',
			companyAddress: 'Ettevõtte aadress',
			companyLookupNote: 'Täpsustame ettevõtte andmed teiega otse — automaatne päring pole veel ühendatud.',
			marketingConsent: 'Nõustun broneeringutega seotud e-kirjade ja aeg-ajalt pakkumiste saamisega.',
			dataProcessingConsent: 'Nõustun oma isikuandmete töötlemisega vastavalt',
			dataProcessingConsentLink: 'privaatsuspoliitikale',
			submit: 'Loo konto',
			haveAccount: 'Kas sul on juba konto?',
			loginLink: 'Logi sisse',
			errorEmailTaken: 'Selle e-postiga konto on juba olemas.',
			errorPasswordMismatch: 'Paroolid ei kattu.',
			errorConsentRequired: 'Jätkamiseks nõustu oma isikuandmete töötlemisega.',
			errorGeneric: 'Midagi läks valesti. Palun proovi uuesti.',
		},
		login: {
			title: 'Logi sisse',
			email: 'E-post',
			password: 'Parool',
			submit: 'Logi sisse',
			noAccount: 'Kontot pole?',
			registerLink: 'Loo konto',
			errorInvalid: 'Vale e-post või parool.',
			forgotPassword: 'Unustasid parooli?',
		},
		authModal: {
			close: 'Sulge',
			loyaltyBadge: '15 p / öö · 10 p = 1 €',
			brandHeading: 'Logi sisse oma lojaalsuspunktide jaoks',
			brandBody: 'Vaata oma punktiseisu, broneeri kiiremini järgmisel korral ja hoia oma andmed salvestatuna. Sinu andmed jäävad privaatseks.',
			secureConnection: 'Turvaline ühendus',
			comingSoon: 'Tulekul',
			orByEmail: 'või e-postiga',
			oauthNote: 'Google ja Telegrami sisselogimine — tulekul',
			subtitle: 'Tere tulemast tagasi — vali, kuidas soovid sisse logida.',
			emailPlaceholder: 'sina@naide.ee',
			showPassword: 'Näita parooli',
			hidePassword: 'Peida parool',
			rememberMe: 'Jäta mind meelde',
		},
		forgotPassword: {
			title: 'Lähtesta parool',
			subtitle: 'Sisesta oma e-post ja saadame sulle lähtestamislingi.',
			email: 'E-post',
			submit: 'Saada link',
			successMessage: 'Kui see e-post on registreeritud, saatsime sellele lähtestamislingi.',
			backToLogin: '← Tagasi sisselogimise juurde',
		},
		resetPassword: {
			title: 'Vali uus parool',
			newPassword: 'Uus parool',
			confirmPassword: 'Korda uut parooli',
			submit: 'Salvesta uus parool',
			errorMismatch: 'Paroolid ei kattu.',
			errorInvalidToken: 'See lähtestamisleht on kehtetu või aegunud.',
			successMessage: 'Parool on uuendatud.',
			loginLink: 'Logi sisse',
		},
		dashboard: {
			title: 'Minu konto',
			welcome: 'Tere tulemast tagasi',
			navOverview: 'Ülevaade',
			navAccountDetails: 'Konto andmed',
			navStayHistory: 'Viibimiste ajalugu',
			accountType: 'Konto tüüp',
			memberId: 'Liikme ID',
			scanNote: 'Näita seda registreerimisel kiireks sisseregistreerimiseks.',
			loyaltyPoints: 'Lojaalsuspunktid',
			loyaltyNote: 'Iga öö eest 15 punkti. 10 punkti = 1 € — kasutatav järgmisel viibimisel. Punktid hakkavad kogunema, kui veebibroneerimine käivitub.',
			accountDetailsTitle: 'Konto andmed',
			memberSince: 'Liige alates',
			yes: 'Jah',
			no: 'Ei',
			stayHistoryTitle: 'Viibimiste ajalugu',
			stayHistoryEmpty: 'Sul pole veel ühtegi viibimist — see täitub, kui veebibroneerimine käivitub.',
			logout: 'Logi välja',
			viewFullProfile: 'Ava täisprofiil',
			editProfile: 'Muuda profiili',
			deleteAccount: 'Kustuta minu andmed',
		},
		editProfile: {
			title: 'Muuda profiili',
			subtitle: 'Uuenda oma andmeid allpool.',
			submit: 'Salvesta muudatused',
			successMessage: 'Sinu profiil on uuendatud.',
			backToAccount: '← Tagasi minu konto juurde',
			photoTitle: 'Profiilipilt',
			photoUpload: 'Laadi pilt üles',
			photoRemove: 'Eemalda pilt',
			connectedTitle: 'Ühendatud kontod',
			connectGoogle: 'Ühenda Google',
			disconnectGoogle: 'Katkesta Google',
			connectTelegram: 'Ühenda Telegram',
			googleConnected: 'Ühendatud Google kaudu',
			disconnectTelegram: 'Katkesta Telegram',
			telegramConnected: 'Ühendatud Telegrami kaudu',
			linkedSuccess: 'Sinu konto on nüüd ühendatud.',
			unlinkedSuccess: 'Konto ühendus katkestatud.',
			oauthErrorGeneric: 'Google konto ühendamisel läks midagi valesti. Palun proovi uuesti.',
			oauthErrorTaken: 'See Google konto on juba seotud teise profiiliga.',
			errorEmailTaken: 'Selle e-postiga konto on juba olemas.',
			errorGeneric: 'Midagi läks valesti. Palun proovi uuesti.',
		},
		deleteAccount: {
			title: 'Kustuta minu andmed',
			warning: 'See kustutab jäädavalt sinu konto ja kõik meie hoitavad andmed, sh lojaalsuspunktid. Seda ei saa tagasi võtta.',
			passwordLabel: 'Kinnita oma parool',
			confirmLabel: 'Saan aru, et seda ei saa tagasi võtta',
			submit: 'Kustuta konto jäädavalt',
			cancel: 'Loobu',
			errorInvalidPassword: 'Vale parool.',
			errorGeneric: 'Midagi läks valesti. Palun proovi uuesti.',
		},
	},
	uk: {
		nav: { signIn: 'Увійти', myAccount: 'Мій кабінет' },
		register: {
			title: 'Створити акаунт',
			subtitle: "Збережіть свої дані для швидшого бронювання і стежте за бонусними балами.",
			accountTypeIndividual: 'Фізична особа',
			accountTypeCompany: 'Юридична особа',
			fullName: "ПІБ",
			email: 'Email',
			phone: 'Телефон',
			password: 'Пароль',
			confirmPassword: 'Повторіть пароль',
			nationality: 'Громадянство',
			dateOfBirth: 'Дата народження',
			address: 'Адреса',
			city: 'Місто',
			postalCode: 'Поштовий індекс',
			countryOfResidence: 'Країна проживання',
			companyName: 'Назва компанії',
			companyRegCode: 'Реєстраційний код',
			companyVat: 'VAT-номер',
			companyAddress: 'Адреса компанії',
			companyLookupNote: 'Дані компанії уточнимо з вами напряму — автоматичний пошук поки не підключений.',
			marketingConsent: "Погоджуюсь отримувати листи щодо бронювання та іноді — спецпропозиції.",
			dataProcessingConsent: 'Погоджуюсь на обробку моїх персональних даних згідно з',
			dataProcessingConsentLink: 'Політикою конфіденційності',
			submit: 'Створити акаунт',
			haveAccount: 'Вже є акаунт?',
			loginLink: 'Увійти',
			errorEmailTaken: 'Акаунт з таким email вже існує.',
			errorPasswordMismatch: 'Паролі не збігаються.',
			errorConsentRequired: 'Щоб продовжити, погодьтесь на обробку персональних даних.',
			errorGeneric: 'Щось пішло не так. Спробуйте ще раз.',
		},
		login: {
			title: 'Увійти',
			email: 'Email',
			password: 'Пароль',
			submit: 'Увійти',
			noAccount: 'Немає акаунту?',
			registerLink: 'Створити',
			errorInvalid: 'Невірний email або пароль.',
			forgotPassword: 'Забули пароль?',
		},
		authModal: {
			close: 'Закрити',
			loyaltyBadge: '15 балів / ніч · 10 балів = 1 €',
			brandHeading: 'Увійдіть, щоб бачити бонусні бали',
			brandBody: 'Дивіться баланс балів, бронюйте швидше наступного разу і зберігайте свої дані. Ваші дані лишаються приватними.',
			secureConnection: "Захищене з'єднання",
			comingSoon: 'Скоро',
			orByEmail: 'або через email',
			oauthNote: 'Вхід через Google і Telegram — скоро',
			subtitle: 'З поверненням — оберіть спосіб входу.',
			emailPlaceholder: 'you@example.com',
			showPassword: 'Показати пароль',
			hidePassword: 'Приховати пароль',
			rememberMe: "Запам'ятати мене",
		},
		forgotPassword: {
			title: 'Скидання пароля',
			subtitle: 'Введіть email, і ми надішлемо посилання для скидання.',
			email: 'Email',
			submit: 'Надіслати посилання',
			successMessage: 'Якщо такий email зареєстрований, ми надіслали на нього посилання.',
			backToLogin: '← Назад до входу',
		},
		resetPassword: {
			title: 'Оберіть новий пароль',
			newPassword: 'Новий пароль',
			confirmPassword: 'Повторіть новий пароль',
			submit: 'Зберегти новий пароль',
			errorMismatch: 'Паролі не збігаються.',
			errorInvalidToken: 'Це посилання недійсне або застаріло.',
			successMessage: 'Пароль оновлено.',
			loginLink: 'Увійти',
		},
		dashboard: {
			title: 'Мій кабінет',
			welcome: 'З поверненням',
			navOverview: 'Огляд',
			navAccountDetails: 'Дані акаунту',
			navStayHistory: 'Історія проживань',
			accountType: 'Тип акаунту',
			memberId: 'Номер гостя',
			scanNote: 'Покажіть це на рецепції для швидкого заселення.',
			loyaltyPoints: 'Бонусні бали',
			loyaltyNote: 'За кожну ніч проживання — 15 балів. 10 балів = 1 € — можна використати під час наступного проживання. Бали почнуть нараховуватись, коли запрацює онлайн-бронювання.',
			accountDetailsTitle: 'Дані акаунту',
			memberSince: 'З нами з',
			yes: 'Так',
			no: 'Ні',
			stayHistoryTitle: 'Історія проживань',
			stayHistoryEmpty: "У вас ще немає проживань — тут з'явиться, коли запрацює онлайн-бронювання.",
			logout: 'Вийти',
			viewFullProfile: 'Відкрити повний профіль',
			editProfile: 'Редагувати профіль',
			deleteAccount: 'Видалити мої дані',
		},
		editProfile: {
			title: 'Редагувати профіль',
			subtitle: 'Оновіть свої дані нижче.',
			submit: 'Зберегти зміни',
			successMessage: 'Ваш профіль оновлено.',
			backToAccount: '← Назад до кабінету',
			photoTitle: 'Фото профілю',
			photoUpload: 'Завантажити фото',
			photoRemove: 'Прибрати фото',
			connectedTitle: 'Підключені акаунти',
			connectGoogle: 'Підключити Google',
			disconnectGoogle: 'Відключити Google',
			connectTelegram: 'Підключити Telegram',
			googleConnected: 'Підключено через Google',
			disconnectTelegram: 'Відключити Telegram',
			telegramConnected: 'Підключено через Telegram',
			linkedSuccess: 'Ваш акаунт підключено.',
			unlinkedSuccess: 'Акаунт відключено.',
			oauthErrorGeneric: 'Не вдалося підключити Google-акаунт. Спробуйте ще раз.',
			oauthErrorTaken: 'Цей Google-акаунт уже підключено до іншого профілю.',
			errorEmailTaken: 'Акаунт з таким email вже існує.',
			errorGeneric: 'Щось пішло не так. Спробуйте ще раз.',
		},
		deleteAccount: {
			title: 'Видалити мої дані',
			warning: 'Це назавжди видалить ваш акаунт і всі дані, які ми зберігаємо про вас, включно з бонусними балами. Це неможливо скасувати.',
			passwordLabel: 'Підтвердьте пароль',
			confirmLabel: 'Я розумію, що це незворотно',
			submit: 'Видалити акаунт назавжди',
			cancel: 'Скасувати',
			errorInvalidPassword: 'Невірний пароль.',
			errorGeneric: 'Щось пішло не так. Спробуйте ще раз.',
		},
	},
	ru: {
		nav: { signIn: 'Войти', myAccount: 'Личный кабинет' },
		register: {
			title: 'Создать аккаунт',
			subtitle: 'Сохраните свои данные для более быстрого бронирования и следите за бонусными баллами.',
			accountTypeIndividual: 'Физическое лицо',
			accountTypeCompany: 'Юридическое лицо',
			fullName: 'ФИО',
			email: 'Email',
			phone: 'Телефон',
			password: 'Пароль',
			confirmPassword: 'Повторите пароль',
			nationality: 'Гражданство',
			dateOfBirth: 'Дата рождения',
			address: 'Адрес',
			city: 'Город',
			postalCode: 'Почтовый индекс',
			countryOfResidence: 'Страна проживания',
			companyName: 'Название компании',
			companyRegCode: 'Регистрационный код',
			companyVat: 'VAT-номер',
			companyAddress: 'Адрес компании',
			companyLookupNote: 'Данные компании уточним с вами напрямую — автоматический поиск пока не подключён.',
			marketingConsent: 'Согласен(на) получать письма по бронированию и иногда — спецпредложения.',
			dataProcessingConsent: 'Согласен(на) на обработку моих персональных данных согласно',
			dataProcessingConsentLink: 'Политике конфиденциальности',
			submit: 'Создать аккаунт',
			haveAccount: 'Уже есть аккаунт?',
			loginLink: 'Войти',
			errorEmailTaken: 'Аккаунт с таким email уже существует.',
			errorPasswordMismatch: 'Пароли не совпадают.',
			errorConsentRequired: 'Чтобы продолжить, согласитесь на обработку персональных данных.',
			errorGeneric: 'Что-то пошло не так. Попробуйте ещё раз.',
		},
		login: {
			title: 'Войти',
			email: 'Email',
			password: 'Пароль',
			submit: 'Войти',
			noAccount: 'Нет аккаунта?',
			registerLink: 'Создать',
			errorInvalid: 'Неверный email или пароль.',
			forgotPassword: 'Забыли пароль?',
		},
		authModal: {
			close: 'Закрыть',
			loyaltyBadge: '15 баллов / ночь · 10 баллов = 1 €',
			brandHeading: 'Войдите, чтобы видеть бонусные баллы',
			brandBody: 'Смотрите баланс баллов, бронируйте быстрее в следующий раз и храните свои данные. Ваши данные остаются приватными.',
			secureConnection: 'Защищённое соединение',
			comingSoon: 'Скоро',
			orByEmail: 'или через email',
			oauthNote: 'Вход через Google и Telegram — скоро',
			subtitle: 'С возвращением — выберите способ входа.',
			emailPlaceholder: 'you@example.com',
			showPassword: 'Показать пароль',
			hidePassword: 'Скрыть пароль',
			rememberMe: 'Запомнить меня',
		},
		forgotPassword: {
			title: 'Сброс пароля',
			subtitle: 'Введите email, и мы отправим ссылку для сброса.',
			email: 'Email',
			submit: 'Отправить ссылку',
			successMessage: 'Если такой email зарегистрирован, мы отправили на него ссылку.',
			backToLogin: '← Назад ко входу',
		},
		resetPassword: {
			title: 'Выберите новый пароль',
			newPassword: 'Новый пароль',
			confirmPassword: 'Повторите новый пароль',
			submit: 'Сохранить новый пароль',
			errorMismatch: 'Пароли не совпадают.',
			errorInvalidToken: 'Эта ссылка недействительна или устарела.',
			successMessage: 'Пароль обновлён.',
			loginLink: 'Войти',
		},
		dashboard: {
			title: 'Личный кабинет',
			welcome: 'С возвращением',
			navOverview: 'Обзор',
			navAccountDetails: 'Данные аккаунта',
			navStayHistory: 'История проживаний',
			accountType: 'Тип аккаунта',
			memberId: 'Номер гостя',
			scanNote: 'Покажите это на ресепшене для быстрого заселения.',
			loyaltyPoints: 'Бонусные баллы',
			loyaltyNote: 'За каждые сутки проживания — 15 баллов. 10 баллов = 1 € — можно использовать при следующем проживании. Баллы начнут начисляться, когда заработает онлайн-бронирование.',
			accountDetailsTitle: 'Данные аккаунта',
			memberSince: 'С нами с',
			yes: 'Да',
			no: 'Нет',
			stayHistoryTitle: 'История проживаний',
			stayHistoryEmpty: 'У вас пока нет проживаний — появится здесь, когда заработает онлайн-бронирование.',
			logout: 'Выйти',
			viewFullProfile: 'Открыть полный профиль',
			editProfile: 'Редактировать профиль',
			deleteAccount: 'Удалить мои данные',
		},
		editProfile: {
			title: 'Редактировать профиль',
			subtitle: 'Обновите свои данные ниже.',
			submit: 'Сохранить изменения',
			successMessage: 'Ваш профиль обновлён.',
			backToAccount: '← Назад в кабинет',
			photoTitle: 'Фото профиля',
			photoUpload: 'Загрузить фото',
			photoRemove: 'Убрать фото',
			connectedTitle: 'Подключённые аккаунты',
			connectGoogle: 'Подключить Google',
			disconnectGoogle: 'Отключить Google',
			connectTelegram: 'Подключить Telegram',
			googleConnected: 'Подключено через Google',
			disconnectTelegram: 'Отключить Telegram',
			telegramConnected: 'Подключено через Telegram',
			linkedSuccess: 'Ваш аккаунт подключён.',
			unlinkedSuccess: 'Аккаунт отключён.',
			oauthErrorGeneric: 'Не удалось подключить Google-аккаунт. Попробуйте ещё раз.',
			oauthErrorTaken: 'Этот Google-аккаунт уже подключён к другому профилю.',
			errorEmailTaken: 'Аккаунт с таким email уже существует.',
			errorGeneric: 'Что-то пошло не так. Попробуйте ещё раз.',
		},
		deleteAccount: {
			title: 'Удалить мои данные',
			warning: 'Это навсегда удалит ваш аккаунт и все данные, которые мы храним о вас, включая бонусные баллы. Это невозможно отменить.',
			passwordLabel: 'Подтвердите пароль',
			confirmLabel: 'Я понимаю, что это необратимо',
			submit: 'Удалить аккаунт навсегда',
			cancel: 'Отмена',
			errorInvalidPassword: 'Неверный пароль.',
			errorGeneric: 'Что-то пошло не так. Попробуйте ещё раз.',
		},
	},
	lv: {
		nav: { signIn: 'Ienākt', myAccount: 'Mans konts' },
		register: {
			title: 'Izveidot kontu',
			subtitle: 'Saglabājiet savus datus ātrākai rezervēšanai un sekojiet līdzi lojalitātes punktiem.',
			accountTypeIndividual: 'Privātpersona',
			accountTypeCompany: 'Uzņēmums',
			fullName: 'Vārds, uzvārds',
			email: 'E-pasts',
			phone: 'Tālrunis',
			password: 'Parole',
			confirmPassword: 'Atkārtot paroli',
			nationality: 'Pilsonība',
			dateOfBirth: 'Dzimšanas datums',
			address: 'Adrese',
			city: 'Pilsēta',
			postalCode: 'Pasta indekss',
			countryOfResidence: 'Dzīvesvietas valsts',
			companyName: 'Uzņēmuma nosaukums',
			companyRegCode: 'Reģistrācijas kods',
			companyVat: 'PVN numurs',
			companyAddress: 'Uzņēmuma adrese',
			companyLookupNote: 'Uzņēmuma datus precizēsim ar jums tieši — automātiska meklēšana vēl nav pievienota.',
			marketingConsent: 'Piekrītu saņemt ar rezervāciju saistītus e-pastus un reizēm — īpašos piedāvājumus.',
			dataProcessingConsent: 'Piekrītu savu personas datu apstrādei saskaņā ar',
			dataProcessingConsentLink: 'Privātuma politiku',
			submit: 'Izveidot kontu',
			haveAccount: 'Jau ir konts?',
			loginLink: 'Ienākt',
			errorEmailTaken: 'Konts ar šo e-pastu jau pastāv.',
			errorPasswordMismatch: 'Paroles nesakrīt.',
			errorConsentRequired: 'Lai turpinātu, lūdzu, piekrītiet savu personas datu apstrādei.',
			errorGeneric: 'Kaut kas nogāja greizi. Lūdzu, mēģiniet vēlreiz.',
		},
		login: {
			title: 'Ienākt',
			email: 'E-pasts',
			password: 'Parole',
			submit: 'Ienākt',
			noAccount: 'Nav konta?',
			registerLink: 'Izveidot',
			errorInvalid: 'Nepareizs e-pasts vai parole.',
			forgotPassword: 'Aizmirsāt paroli?',
		},
		authModal: {
			close: 'Aizvērt',
			loyaltyBadge: '15 p. / naktī · 10 p. = 1 €',
			brandHeading: 'Ienāciet, lai redzētu lojalitātes punktus',
			brandBody: 'Skatiet savu punktu atlikumu, rezervējiet ātrāk nākamreiz un saglabājiet savus datus. Jūsu dati paliek privāti.',
			secureConnection: 'Droši savienots',
			comingSoon: 'Drīzumā',
			orByEmail: 'vai ar e-pastu',
			oauthNote: 'Google un Telegram pieteikšanās — drīzumā',
			subtitle: 'Laipni lūdzam atpakaļ — izvēlieties, kā ienākt.',
			emailPlaceholder: 'jus@piemers.lv',
			showPassword: 'Rādīt paroli',
			hidePassword: 'Slēpt paroli',
			rememberMe: 'Atcerēties mani',
		},
		forgotPassword: {
			title: 'Paroles atiestatīšana',
			subtitle: 'Ievadiet savu e-pastu, un mēs nosūtīsim atiestatīšanas saiti.',
			email: 'E-pasts',
			submit: 'Sūtīt saiti',
			successMessage: 'Ja šis e-pasts ir reģistrēts, mēs nosūtījām uz to saiti.',
			backToLogin: '← Atpakaļ uz ienākšanu',
		},
		resetPassword: {
			title: 'Izvēlieties jaunu paroli',
			newPassword: 'Jaunā parole',
			confirmPassword: 'Atkārtot jauno paroli',
			submit: 'Saglabāt jauno paroli',
			errorMismatch: 'Paroles nesakrīt.',
			errorInvalidToken: 'Šī saite ir nederīga vai beigusies.',
			successMessage: 'Parole atjaunināta.',
			loginLink: 'Ienākt',
		},
		dashboard: {
			title: 'Mans konts',
			welcome: 'Laipni lūdzam atpakaļ',
			navOverview: 'Pārskats',
			navAccountDetails: 'Konta dati',
			navStayHistory: 'Uzturēšanās vēsture',
			accountType: 'Konta tips',
			memberId: 'Dalībnieka ID',
			scanNote: 'Uzrādiet to reģistratūrā ātrai reģistrēšanai.',
			loyaltyPoints: 'Lojalitātes punkti',
			loyaltyNote: 'Par katru uzturēšanās nakti — 15 punkti. 10 punkti = 1 € — izmantojami nākamajā uzturēšanās reizē. Punkti sāks uzkrāties, kad tiks palaista tiešsaistes rezervēšana.',
			accountDetailsTitle: 'Konta dati',
			memberSince: 'Kopš',
			yes: 'Jā',
			no: 'Nē',
			stayHistoryTitle: 'Uzturēšanās vēsture',
			stayHistoryEmpty: 'Jums vēl nav neviena uzturēšanās — tas parādīsies, kad tiks palaista tiešsaistes rezervēšana.',
			logout: 'Iziet',
			viewFullProfile: 'Atvērt pilnu profilu',
			editProfile: 'Rediģēt profilu',
			deleteAccount: 'Dzēst manus datus',
		},
		editProfile: {
			title: 'Rediģēt profilu',
			subtitle: 'Atjauniniet savus datus zemāk.',
			submit: 'Saglabāt izmaiņas',
			successMessage: 'Jūsu profils ir atjaunināts.',
			backToAccount: '← Atpakaļ uz manu kontu',
			photoTitle: 'Profila attēls',
			photoUpload: 'Augšupielādēt attēlu',
			photoRemove: 'Noņemt attēlu',
			connectedTitle: 'Pievienotie konti',
			connectGoogle: 'Pievienot Google',
			disconnectGoogle: 'Atvienot Google',
			connectTelegram: 'Pievienot Telegram',
			googleConnected: 'Pievienots caur Google',
			disconnectTelegram: 'Atvienot Telegram',
			telegramConnected: 'Pievienots caur Telegram',
			linkedSuccess: 'Jūsu konts ir pievienots.',
			unlinkedSuccess: 'Konts atvienots.',
			oauthErrorGeneric: 'Neizdevās pievienot Google kontu. Lūdzu, mēģiniet vēlreiz.',
			oauthErrorTaken: 'Šis Google konts jau ir pievienots citam profilam.',
			errorEmailTaken: 'Konts ar šo e-pastu jau pastāv.',
			errorGeneric: 'Kaut kas nogāja greizi. Lūdzu, mēģiniet vēlreiz.',
		},
		deleteAccount: {
			title: 'Dzēst manus datus',
			warning: 'Tas neatgriezeniski dzēsīs jūsu kontu un visus mūsu glabātos datus par jums, tostarp lojalitātes punktus. To nevar atcelt.',
			passwordLabel: 'Apstipriniet savu paroli',
			confirmLabel: 'Es saprotu, ka to nevar atcelt',
			submit: 'Dzēst kontu neatgriezeniski',
			cancel: 'Atcelt',
			errorInvalidPassword: 'Nepareiza parole.',
			errorGeneric: 'Kaut kas nogāja greizi. Lūdzu, mēģiniet vēlreiz.',
		},
	},
	fi: {
		nav: { signIn: 'Kirjaudu', myAccount: 'Oma tili' },
		register: {
			title: 'Luo tili',
			subtitle: 'Tallenna tietosi nopeampaa varaamista varten ja seuraa kanta-asiakaspisteitäsi.',
			accountTypeIndividual: 'Yksityishenkilö',
			accountTypeCompany: 'Yritys',
			fullName: 'Koko nimi',
			email: 'Sähköposti',
			phone: 'Puhelin',
			password: 'Salasana',
			confirmPassword: 'Vahvista salasana',
			nationality: 'Kansalaisuus',
			dateOfBirth: 'Syntymäaika',
			address: 'Osoite',
			city: 'Kaupunki',
			postalCode: 'Postinumero',
			countryOfResidence: 'Asuinmaa',
			companyName: 'Yrityksen nimi',
			companyRegCode: 'Rekisterikoodi',
			companyVat: 'ALV-numero',
			companyAddress: 'Yrityksen osoite',
			companyLookupNote: 'Vahvistamme yrityksen tiedot suoraan kanssasi — automaattinen haku ei ole vielä käytössä.',
			marketingConsent: 'Hyväksyn varaukseen liittyvät sähköpostit ja satunnaiset tarjoukset.',
			dataProcessingConsent: 'Hyväksyn henkilötietojeni käsittelyn',
			dataProcessingConsentLink: 'tietosuojaselosteen mukaisesti',
			submit: 'Luo tili',
			haveAccount: 'Onko sinulla jo tili?',
			loginLink: 'Kirjaudu',
			errorEmailTaken: 'Tällä sähköpostilla on jo tili.',
			errorPasswordMismatch: 'Salasanat eivät täsmää.',
			errorConsentRequired: 'Jatkaaksesi hyväksy henkilötietojesi käsittely.',
			errorGeneric: 'Jokin meni pieleen. Yritä uudelleen.',
		},
		login: {
			title: 'Kirjaudu',
			email: 'Sähköposti',
			password: 'Salasana',
			submit: 'Kirjaudu',
			noAccount: 'Eikö sinulla ole tiliä?',
			registerLink: 'Luo tili',
			errorInvalid: 'Väärä sähköposti tai salasana.',
			forgotPassword: 'Unohditko salasanan?',
		},
		authModal: {
			close: 'Sulje',
			loyaltyBadge: '15 p / yö · 10 p = 1 €',
			brandHeading: 'Kirjaudu nähdäksesi kanta-asiakaspisteesi',
			brandBody: 'Näe pistesaldosi, varaa nopeammin seuraavalla kerralla ja säilytä tietosi tallennettuna. Tietosi pysyvät yksityisinä.',
			secureConnection: 'Suojattu yhteys',
			comingSoon: 'Tulossa pian',
			orByEmail: 'tai sähköpostilla',
			oauthNote: 'Google- ja Telegram-kirjautuminen — tulossa pian',
			subtitle: 'Tervetuloa takaisin — valitse kirjautumistapa.',
			emailPlaceholder: 'sina@esimerkki.fi',
			showPassword: 'Näytä salasana',
			hidePassword: 'Piilota salasana',
			rememberMe: 'Muista minut',
		},
		forgotPassword: {
			title: 'Salasanan palautus',
			subtitle: 'Anna sähköpostisi, niin lähetämme sinulle palautuslinkin.',
			email: 'Sähköposti',
			submit: 'Lähetä linkki',
			successMessage: 'Jos sähköposti on rekisteröity, lähetimme siihen linkin.',
			backToLogin: '← Takaisin kirjautumiseen',
		},
		resetPassword: {
			title: 'Valitse uusi salasana',
			newPassword: 'Uusi salasana',
			confirmPassword: 'Vahvista uusi salasana',
			submit: 'Tallenna uusi salasana',
			errorMismatch: 'Salasanat eivät täsmää.',
			errorInvalidToken: 'Tämä linkki on virheellinen tai vanhentunut.',
			successMessage: 'Salasana on päivitetty.',
			loginLink: 'Kirjaudu',
		},
		dashboard: {
			title: 'Oma tili',
			welcome: 'Tervetuloa takaisin',
			navOverview: 'Yleiskatsaus',
			navAccountDetails: 'Tilin tiedot',
			navStayHistory: 'Majoitushistoria',
			accountType: 'Tilin tyyppi',
			memberId: 'Jäsennumero',
			scanNote: 'Näytä tämä vastaanotossa nopeaa sisäänkirjautumista varten.',
			loyaltyPoints: 'Kanta-asiakaspisteet',
			loyaltyNote: 'Jokaisesta yöstä 15 pistettä. 10 pistettä = 1 € — käytettävissä seuraavalla majoituskerralla. Pisteet alkavat kertyä, kun verkkovaraus käynnistyy.',
			accountDetailsTitle: 'Tilin tiedot',
			memberSince: 'Jäsen alkaen',
			yes: 'Kyllä',
			no: 'Ei',
			stayHistoryTitle: 'Majoitushistoria',
			stayHistoryEmpty: 'Sinulla ei ole vielä majoituksia — tämä täyttyy, kun verkkovaraus käynnistyy.',
			logout: 'Kirjaudu ulos',
			viewFullProfile: 'Avaa koko profiili',
			editProfile: 'Muokkaa profiilia',
			deleteAccount: 'Poista tietoni',
		},
		editProfile: {
			title: 'Muokkaa profiilia',
			subtitle: 'Päivitä tietosi alla.',
			submit: 'Tallenna muutokset',
			successMessage: 'Profiilisi on päivitetty.',
			backToAccount: '← Takaisin tilille',
			photoTitle: 'Profiilikuva',
			photoUpload: 'Lataa kuva',
			photoRemove: 'Poista kuva',
			connectedTitle: 'Yhdistetyt tilit',
			connectGoogle: 'Yhdistä Google',
			disconnectGoogle: 'Katkaise Google-yhteys',
			connectTelegram: 'Yhdistä Telegram',
			googleConnected: 'Yhdistetty Googlen kautta',
			disconnectTelegram: 'Katkaise Telegram-yhteys',
			telegramConnected: 'Yhdistetty Telegramin kautta',
			linkedSuccess: 'Tilisi on nyt yhdistetty.',
			unlinkedSuccess: 'Tili irrotettu.',
			oauthErrorGeneric: 'Google-tilin yhdistäminen epäonnistui. Yritä uudelleen.',
			oauthErrorTaken: 'Tämä Google-tili on jo yhdistetty toiseen profiiliin.',
			errorEmailTaken: 'Tällä sähköpostilla on jo tili.',
			errorGeneric: 'Jokin meni pieleen. Yritä uudelleen.',
		},
		deleteAccount: {
			title: 'Poista tietoni',
			warning: 'Tämä poistaa tilisi ja kaikki sinusta tallennetut tiedot pysyvästi, mukaan lukien kanta-asiakaspisteet. Tätä ei voi perua.',
			passwordLabel: 'Vahvista salasanasi',
			confirmLabel: 'Ymmärrän, ettei tätä voi perua',
			submit: 'Poista tilini pysyvästi',
			cancel: 'Peruuta',
			errorInvalidPassword: 'Väärä salasana.',
			errorGeneric: 'Jokin meni pieleen. Yritä uudelleen.',
		},
	},
};
