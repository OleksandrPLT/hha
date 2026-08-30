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
		submit: string;
		haveAccount: string;
		loginLink: string;
		errorEmailTaken: string;
		errorPasswordMismatch: string;
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
			submit: 'Create account',
			haveAccount: 'Already have an account?',
			loginLink: 'Sign in',
			errorEmailTaken: 'An account with this email already exists.',
			errorPasswordMismatch: "Passwords don't match.",
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
			submit: 'Loo konto',
			haveAccount: 'Kas sul on juba konto?',
			loginLink: 'Logi sisse',
			errorEmailTaken: 'Selle e-postiga konto on juba olemas.',
			errorPasswordMismatch: 'Paroolid ei kattu.',
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
			submit: 'Створити акаунт',
			haveAccount: 'Вже є акаунт?',
			loginLink: 'Увійти',
			errorEmailTaken: 'Акаунт з таким email вже існує.',
			errorPasswordMismatch: 'Паролі не збігаються.',
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
			submit: 'Создать аккаунт',
			haveAccount: 'Уже есть аккаунт?',
			loginLink: 'Войти',
			errorEmailTaken: 'Аккаунт с таким email уже существует.',
			errorPasswordMismatch: 'Пароли не совпадают.',
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
			submit: 'Izveidot kontu',
			haveAccount: 'Jau ir konts?',
			loginLink: 'Ienākt',
			errorEmailTaken: 'Konts ar šo e-pastu jau pastāv.',
			errorPasswordMismatch: 'Paroles nesakrīt.',
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
			submit: 'Luo tili',
			haveAccount: 'Onko sinulla jo tili?',
			loginLink: 'Kirjaudu',
			errorEmailTaken: 'Tällä sähköpostilla on jo tili.',
			errorPasswordMismatch: 'Salasanat eivät täsmää.',
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
		},
	},
};
