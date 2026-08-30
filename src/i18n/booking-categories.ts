import type { Locale } from './locales';
import type { BookingCategoryKey } from '../data/booking-categories';

export const bookingCategoryLabels: Record<Locale, Record<BookingCategoryKey, string>> = {
	en: { staff: 'Staff', amenities: 'Amenities', cleanliness: 'Cleanliness', comfort: 'Comfort', value: 'Value for money', location: 'Location', wifi: 'Free Wi-Fi' },
	et: { staff: 'Personal', amenities: 'Mugavused', cleanliness: 'Puhtus', comfort: 'Mugavus', value: 'Hinna ja kvaliteedi suhe', location: 'Asukoht', wifi: 'Tasuta WiFi' },
	uk: { staff: 'Персонал', amenities: 'Зручності', cleanliness: 'Чистота', comfort: 'Комфорт', value: 'Співвідношення ціна/якість', location: 'Розташування', wifi: 'Безкоштовний Wi-Fi' },
	ru: { staff: 'Персонал', amenities: 'Удобства', cleanliness: 'Чистота', comfort: 'Комфорт', value: 'Соотношение цены и качества', location: 'Расположение', wifi: 'Бесплатный Wi-Fi' },
	lv: { staff: 'Personāls', amenities: 'Ērtības', cleanliness: 'Tīrība', comfort: 'Komforts', value: 'Vērtība par naudu', location: 'Atrašanās vieta', wifi: 'Bezmaksas WiFi' },
	fi: { staff: 'Henkilökunta', amenities: 'Mukavuudet', cleanliness: 'Siisteys', comfort: 'Mukavuus', value: 'Hinta-laatusuhde', location: 'Sijainti', wifi: 'Ilmainen WiFi' },
};
