// Member ID + QR-код для карти гостя. QR генерується на сервері (пакет
// qrcode, той самий принцип приватності, що й з самохостингом шрифтів —
// жодних запитів до сторонніх QR-API з даними гостя). Кодуємо посилання
// (не голий ID) — за прямим проханням користувача 2026-08-30: "щоб і в
// посиланні було ід також qr код був з данними щоб потім адмін міг
// відсканувати". Сама сторінка /account/id/[memberId] для адмінського
// сканування ще НЕ побудована — це вимагає Фази 3 (кабінет адміністратора,
// див. ТЗ), якої ще немає. QR вже кодує стабільне посилання наперед, щоб
// не міняти видані карти, коли той функціонал з'явиться.
import QRCode from 'qrcode';

export function formatMemberId(id: number): string {
	return `HHA-${String(id).padStart(6, '0')}`;
}

// Той самий формат для інших довідкових кодів у email/UI (бронювання,
// картка гостя) — щоб гість міг продиктувати короткий код замість
// голого числового id.
export function formatBookingRef(id: number): string {
	return `BK-${String(id).padStart(6, '0')}`;
}

export function formatCheckinCode(id: number): string {
	return `CH-${String(id).padStart(6, '0')}`;
}

export function memberVerifyUrl(site: string | URL, locale: string, memberId: string): string {
	return new URL(`${locale}/account/id/${memberId}`, site).toString();
}

export async function generateMemberQrSvg(verifyUrl: string): Promise<string> {
	return QRCode.toString(verifyUrl, {
		type: 'svg',
		margin: 1,
		width: 168,
		color: { dark: '#0b0d10', light: '#ffffffff' },
	});
}

// Загальний QR (не прив'язаний до гостя) — напр. посилання на
// self-service чекін, яке адмін показує/друкує на ресепшені.
export async function generateQrSvg(url: string, width = 220): Promise<string> {
	return QRCode.toString(url, {
		type: 'svg',
		margin: 1,
		width,
		color: { dark: '#0b0d10', light: '#ffffffff' },
	});
}
