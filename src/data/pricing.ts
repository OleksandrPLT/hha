// Тарифи — з прайс-листа клієнта (PDF, 2026-08-29). Ціни базові, без ПДВ.
// "Стара ціна" / % підвищення з документа — внутрішня інформація власника
// про зміну тарифів, свідомо НЕ виводиться на публічний сайт (гостям не
// показують історію підвищення цін). derive*() рахують похідні значення
// (вартість з ПДВ, ціна/добу в пакеті, економія), щоб не дублювати числа
// і не розсинхронізувати їх з джерелом.
export const vatRatePercent = 13;
export const currency = '€';

export interface RoomRate {
	perNight: number;
}

// Тижневий/двотижневий/місячний пакет — є тільки для shared (=ліжко в дормі)
// і family (з PDF-прайслиста). Для triple/fourBed відомий лише подобовий
// тариф за всю кімнату (уточнено в чаті 2026-08-29) — звичайний RoomRate.
export interface PackageRoomRate extends RoomRate {
	perMonth: number;
	week: number;
	twoWeeks: number;
}

export const rates: { shared: PackageRoomRate; family: PackageRoomRate; triple: RoomRate; fourBed: RoomRate } = {
	shared: { perNight: 20.0, perMonth: 250.0, week: 115.0, twoWeeks: 195.0 },
	family: { perNight: 35.0, perMonth: 400.0, week: 205.0, twoWeeks: 340.0 },
	// Ціна за всю кімнату (не за ліжко), уточнено в чаті 2026-08-29.
	triple: { perNight: 55.0 },
	fourBed: { perNight: 70.0 },
};

export function withVat(base: number): number {
	return Math.round(base * (1 + vatRatePercent / 100) * 100) / 100;
}

export function perDay(packagePrice: number, days: number): number {
	return Math.round((packagePrice / days) * 100) / 100;
}

export function savingsPercent(perNight: number, packagePrice: number, days: number): number {
	const fullPrice = perNight * days;
	return Math.round(((fullPrice - packagePrice) / fullPrice) * 1000) / 10;
}
