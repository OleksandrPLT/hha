// Живий чат (Фаза 5, ТЗ §5.5) — плаваючий віджет, окремий i18n-файл (той
// самий патерн, що booking.ts/admin.ts).
import type { Locale } from './locales';

export interface ChatCopy {
	bubbleLabel: string;
	heading: string;
	subheading: string;
	placeholder: string;
	send: string;
	emptyState: string;
	offlineNote: string;
}

export const chat: Record<Locale, ChatCopy> = {
	en: {
		bubbleLabel: 'Chat with us',
		heading: 'Chat with Hostel 3A',
		subheading: 'We usually reply within a few hours.',
		placeholder: 'Type your message…',
		send: 'Send',
		emptyState: 'Ask us anything — about rooms, check-in, or your booking.',
		offlineNote: "We're not always online, but every message reaches our team.",
	},
	et: {
		bubbleLabel: 'Vestle meiega',
		heading: 'Vestle Hostel 3A-ga',
		subheading: 'Vastame tavaliselt mõne tunni jooksul.',
		placeholder: 'Kirjuta oma sõnum…',
		send: 'Saada',
		emptyState: 'Küsi meilt toa, saabumise või oma broneeringu kohta.',
		offlineNote: 'Me ei ole alati veebis, aga iga sõnum jõuab meie meeskonnani.',
	},
	uk: {
		bubbleLabel: 'Написати нам',
		heading: 'Чат з Hostel 3A',
		subheading: 'Зазвичай відповідаємо протягом кількох годин.',
		placeholder: 'Введіть повідомлення…',
		send: 'Надіслати',
		emptyState: 'Запитайте про номери, заїзд або ваше бронювання.',
		offlineNote: 'Ми не завжди онлайн, але кожне повідомлення доходить до команди.',
	},
	ru: {
		bubbleLabel: 'Написать нам',
		heading: 'Чат с Hostel 3A',
		subheading: 'Обычно отвечаем в течение нескольких часов.',
		placeholder: 'Введите сообщение…',
		send: 'Отправить',
		emptyState: 'Спросите о номерах, заезде или вашем бронировании.',
		offlineNote: 'Мы не всегда онлайн, но каждое сообщение доходит до команды.',
	},
	lv: {
		bubbleLabel: 'Rakstīt mums',
		heading: 'Tērzē ar Hostel 3A',
		subheading: 'Parasti atbildam dažu stundu laikā.',
		placeholder: 'Ievadi savu ziņu…',
		send: 'Sūtīt',
		emptyState: 'Jautā par numuriem, ierašanos vai savu rezervāciju.',
		offlineNote: 'Mēs ne vienmēr esam tiešsaistē, bet katra ziņa nonāk pie mūsu komandas.',
	},
	fi: {
		bubbleLabel: 'Keskustele kanssamme',
		heading: 'Keskustele Hostel 3A:n kanssa',
		subheading: 'Vastaamme yleensä muutaman tunnin sisällä.',
		placeholder: 'Kirjoita viestisi…',
		send: 'Lähetä',
		emptyState: 'Kysy huoneista, saapumisesta tai varauksestasi.',
		offlineNote: 'Emme ole aina paikalla, mutta jokainen viesti tavoittaa tiimimme.',
	},
};
