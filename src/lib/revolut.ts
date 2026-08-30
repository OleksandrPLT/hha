// Revolut Merchant API (Orders) — Фаза 4, оплата Revolut Pay. Ключі
// (Secret + Public) надані користувачем напряму в чат 2026-08-30, лежать
// лише в .env на сервері (REVOLUT_SECRET_KEY, REVOLUT_PUBLIC_KEY), НІКОЛИ
// в git, ніколи не виводяться повторно в чат. Ключі отримані з реального
// Revolut Business акаунта (Меню → API → Merchant API) — вважаємо їх
// production (live), не sandbox, тому працюємо з merchant.revolut.com
// (не sandbox-merchant.revolut.com).
//
// Flow: сервер створює Order (POST /orders) через Secret key → віддає
// клієнту лише order.public_id (безпечний, для цього й призначений) →
// клієнтський embed.js (RevolutCheckout) відкриває popup оплати →
// onSuccess лише сигналізує "спробуй перевірити" — РЕАЛЬНЕ підтвердження
// оплати завжди йде через серверний GET /orders/{id} (Secret key), клієнту
// не довіряємо.
import 'dotenv/config';

const API_BASE = 'https://merchant.revolut.com/api/1.0';

export function isRevolutConfigured(): boolean {
	return Boolean(process.env.REVOLUT_SECRET_KEY);
}

function secretKey(): string {
	const key = process.env.REVOLUT_SECRET_KEY;
	if (!key) throw new Error('REVOLUT_SECRET_KEY не налаштований в .env');
	return key;
}

// Реальний API повертає state у ВЕЛИКИХ літерах ("COMPLETED", не
// "completed") — знайдено 2026-08-30, коли живий платіж пройшов на боці
// Revolut, а isOrderPaid() мовчки повертав false через порівняння з
// малими літерами. Типізуємо як string і порівнюємо регістронезалежно
// (isOrderPaid), щоб не повторити цю ж помилку, якщо Revolut колись
// поверне інший регістр.
export interface RevolutOrder {
	id: string;
	public_id: string;
	state: string;
	checkout_url?: string;
	[key: string]: unknown;
}

export async function createRevolutOrder(params: { amountCents: number; currency: string; description: string; email?: string; ref: string; redirectUrl?: string }): Promise<RevolutOrder> {
	const res = await fetch(`${API_BASE}/orders`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${secretKey()}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			amount: params.amountCents,
			currency: params.currency,
			description: params.description,
			capture_mode: 'AUTOMATIC',
			customer_email: params.email,
			merchant_order_ext_ref: params.ref,
			redirect_url: params.redirectUrl,
		}),
	});
	if (!res.ok) {
		const body = await res.text().catch(() => '');
		throw new Error(`Revolut createOrder failed: ${res.status} ${body}`);
	}
	return (await res.json()) as RevolutOrder;
}

export async function getRevolutOrder(orderId: string): Promise<RevolutOrder> {
	const res = await fetch(`${API_BASE}/orders/${orderId}`, {
		headers: { Authorization: `Bearer ${secretKey()}` },
	});
	if (!res.ok) {
		const body = await res.text().catch(() => '');
		throw new Error(`Revolut getOrder failed: ${res.status} ${body}`);
	}
	return (await res.json()) as RevolutOrder;
}

// 'COMPLETED' — платіж успішно пройшов і захоплений (AUTOMATIC capture_mode).
// Регістронезалежне порівняння — див. коментар над RevolutOrder.
export function isOrderPaid(order: RevolutOrder): boolean {
	return order.state.toUpperCase() === 'COMPLETED';
}
