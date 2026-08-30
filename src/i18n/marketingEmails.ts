// Автоматичні тригерні листи (Фаза 5, ТЗ §5.5 "нагадування, подяка після
// виїзду") — надсилає src/lib/scheduler.ts. Окремий i18n-файл, той самий
// патерн, що booking.ts/checkin.ts.
import type { Locale } from './locales';

export interface MarketingEmailsCopy {
	reminder: {
		subject: string;
		heading: string;
		body: string;
		roomLabel: string;
		datesLabel: string;
		addressLabel: string;
	};
	thankYou: {
		subject: string;
		heading: string;
		body: string;
		reviewHeading: string;
		reviewGoogleCta: string;
		reviewBookingCta: string;
		pointsNote: string;
	};
}

export const marketingEmails: Record<Locale, MarketingEmailsCopy> = {
	en: {
		reminder: {
			subject: 'See you soon at Hostel 3A',
			heading: "We're looking forward to your stay",
			body: 'Just a reminder — your stay starts tomorrow. Here are the details:',
			roomLabel: 'Room',
			datesLabel: 'Dates',
			addressLabel: 'Address',
		},
		thankYou: {
			subject: 'Thank you for staying with us',
			heading: 'Thank you for staying at Hostel 3A',
			body: "We hope you enjoyed your stay. If you have a moment, we'd love to hear your feedback:",
			reviewHeading: 'Leave a review',
			reviewGoogleCta: 'Review on Google',
			reviewBookingCta: 'Review on Booking.com',
			pointsNote: 'Your loyalty points have been added to your account for your next stay.',
		},
	},
	et: {
		reminder: {
			subject: 'Näeme peagi Hostel 3A-s',
			heading: 'Ootame sind rõõmuga',
			body: 'Väike meeldetuletus — sinu peatumine algab homme. Siin on detailid:',
			roomLabel: 'Tuba',
			datesLabel: 'Kuupäevad',
			addressLabel: 'Aadress',
		},
		thankYou: {
			subject: 'Täname, et peatusid meil',
			heading: 'Täname, et peatusid Hostel 3A-s',
			body: 'Loodame, et sulle meeldis. Kui sul on hetk aega, oleksime tänulikud tagasiside eest:',
			reviewHeading: 'Jäta arvustus',
			reviewGoogleCta: 'Arvustus Google\'is',
			reviewBookingCta: 'Arvustus Booking.com-is',
			pointsNote: 'Sinu lojaalsuspunktid on lisatud kontole järgmise külastuse jaoks.',
		},
	},
	uk: {
		reminder: {
			subject: 'До зустрічі в Hostel 3A',
			heading: 'Чекаємо на ваше проживання',
			body: 'Невеличке нагадування — ваше проживання починається завтра. Ось деталі:',
			roomLabel: 'Номер',
			datesLabel: 'Дати',
			addressLabel: 'Адреса',
		},
		thankYou: {
			subject: 'Дякуємо, що обрали нас',
			heading: 'Дякуємо, що зупинялись у Hostel 3A',
			body: 'Сподіваємось, вам сподобалось. Якщо є хвилинка, будемо вдячні за відгук:',
			reviewHeading: 'Залишити відгук',
			reviewGoogleCta: 'Відгук на Google',
			reviewBookingCta: 'Відгук на Booking.com',
			pointsNote: 'Ваші бали лояльності нараховано на акаунт для наступного проживання.',
		},
	},
	ru: {
		reminder: {
			subject: 'До встречи в Hostel 3A',
			heading: 'Ждём ваше проживание',
			body: 'Небольшое напоминание — ваше проживание начинается завтра. Вот детали:',
			roomLabel: 'Номер',
			datesLabel: 'Даты',
			addressLabel: 'Адрес',
		},
		thankYou: {
			subject: 'Спасибо, что выбрали нас',
			heading: 'Спасибо, что останавливались в Hostel 3A',
			body: 'Надеемся, вам понравилось. Если есть минутка, будем благодарны за отзыв:',
			reviewHeading: 'Оставить отзыв',
			reviewGoogleCta: 'Отзыв на Google',
			reviewBookingCta: 'Отзыв на Booking.com',
			pointsNote: 'Ваши баллы лояльности начислены на аккаунт для следующего проживания.',
		},
	},
	lv: {
		reminder: {
			subject: 'Uz tikšanos Hostel 3A',
			heading: 'Gaidām tavu uzturēšanos',
			body: 'Neliela atgādne — tava uzturēšanās sākas rīt. Lūk, detaļas:',
			roomLabel: 'Numurs',
			datesLabel: 'Datumi',
			addressLabel: 'Adrese',
		},
		thankYou: {
			subject: 'Paldies, ka izvēlējies mūs',
			heading: 'Paldies, ka apstājies Hostel 3A',
			body: 'Ceram, ka tev patika. Ja ir brīdis, priecāsimies par atsauksmi:',
			reviewHeading: 'Atstāt atsauksmi',
			reviewGoogleCta: 'Atsauksme Google',
			reviewBookingCta: 'Atsauksme Booking.com',
			pointsNote: 'Tavi lojalitātes punkti pievienoti kontam nākamajai uzturēšanās reizei.',
		},
	},
	fi: {
		reminder: {
			subject: 'Nähdään pian Hostel 3A:ssa',
			heading: 'Odotamme majoitustasi',
			body: 'Pieni muistutus — majoituksesi alkaa huomenna. Tässä tiedot:',
			roomLabel: 'Huone',
			datesLabel: 'Päivämäärät',
			addressLabel: 'Osoite',
		},
		thankYou: {
			subject: 'Kiitos, että majoituit meillä',
			heading: 'Kiitos, että majoituit Hostel 3A:ssa',
			body: 'Toivottavasti pidit oleskelustasi. Jos sinulla on hetki aikaa, arvostaisimme palautetta:',
			reviewHeading: 'Jätä arvostelu',
			reviewGoogleCta: 'Arvostelu Googlessa',
			reviewBookingCta: 'Arvostelu Booking.comissa',
			pointsNote: 'Kanta-asiakaspisteesi on lisätty tilillesi seuraavaa majoitusta varten.',
		},
	},
};
