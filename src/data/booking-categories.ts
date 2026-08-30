// Розбивка рейтингу Booking.com по категоріях — надано користувачем
// 2026-08-29 (панель Booking). Шкала 1–10, як і загальний bookingScore.
export const bookingCategoryScores = {
	staff: 8.0,
	amenities: 6.8,
	cleanliness: 6.9,
	comfort: 6.9,
	value: 8.0,
	location: 7.3,
	wifi: 8.1,
} as const;

export type BookingCategoryKey = keyof typeof bookingCategoryScores;
