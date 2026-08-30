// Умови програми лояльності — надано користувачем 2026-08-29.
export const POINTS_PER_NIGHT = 15;
export const POINTS_PER_EURO = 10; // 10 балів = 1 EUR

export function pointsToEuros(points: number): number {
	return Math.round((points / POINTS_PER_EURO) * 100) / 100;
}

export function pointsForStay(nights: number): number {
	return nights * POINTS_PER_NIGHT;
}
