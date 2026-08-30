// Зручності та типи номерів — з довідки клієнта (HTML-документ, 2026-08-29).
// Структура (категорії/бейджі) тут, переклади лейблів — в src/i18n/amenities.ts.
export type Badge = 'free' | 'extra' | 'someRooms' | 'daily' | 'none';

export interface AmenityItem {
	id: string;
	badge?: Badge;
	/** Для пункту "Мови спілкування" — значення виводиться замість бейджа. */
	hasValue?: boolean;
}

export const amenityCategories: { id: string; items: AmenityItem[] }[] = [
	{
		id: 'general',
		items: [
			{ id: 'wifi', badge: 'free' },
			{ id: 'parking', badge: 'free' },
			{ id: 'minimarket' },
			{ id: 'laundry' },
			{ id: 'wakeup' },
			{ id: 'housekeeping', badge: 'daily' },
		],
	},
	{
		id: 'food',
		items: [
			{ id: 'breakfast', badge: 'extra' },
			{ id: 'kitchen', badge: 'someRooms' },
			{ id: 'fridge', badge: 'someRooms' },
			{ id: 'microwave', badge: 'someRooms' },
			{ id: 'pets', badge: 'extra' },
		],
	},
	{
		id: 'rules',
		items: [
			{ id: 'checkIn', hasValue: true },
			{ id: 'checkOut', hasValue: true },
			{ id: 'noSmoking' },
			{ id: 'noParties', badge: 'none' },
			{ id: 'visa' },
			{ id: 'mastercard' },
			{ id: 'amex' },
			{ id: 'maestro' },
			{ id: 'nfc' },
			{ id: 'cash' },
		],
	},
	{
		id: 'limits',
		items: [
			{ id: 'noAc', badge: 'none' },
			{ id: 'noPool', badge: 'none' },
			{ id: 'noFitness', badge: 'none' },
			{ id: 'noWheelchair', badge: 'none' },
			{ id: 'sharedShowers' },
			{ id: 'privateBathroom', badge: 'someRooms' },
			{ id: 'languages', hasValue: true },
		],
	},
];

export interface RoomTypeFact {
	id: string;
	/** Тарифна категорія з src/data/pricing.ts — яка ціна застосовується. */
	rateCategory: 'shared' | 'family' | 'triple' | 'fourBed';
}

// Порядок і прив'язка до фото — в компоненті сторінки (src/assets/property).
export const roomTypes: RoomTypeFact[] = [
	{ id: 'family', rateCategory: 'family' },
	{ id: 'dormBed', rateCategory: 'shared' },
	{ id: 'triple', rateCategory: 'triple' },
	{ id: 'fourBed', rateCategory: 'fourBed' },
];
