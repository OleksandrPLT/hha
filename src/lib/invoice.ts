// Інвойси (2026-08-30) — номер формату HHA-<рік>-<порядковий, 4 цифри>,
// наскрізна нумерація в межах року (не по бронюванню/організації).
import { db } from '../db/client';
import { invoices } from '../db/schema';
import { sql } from 'drizzle-orm';
import { vatRatePercent } from '../data/pricing';

export function nextInvoiceNumber(): string {
	const year = new Date().getFullYear();
	const prefix = `HHA-${year}-`;
	const countRow = db
		.select({ c: sql<number>`count(*)` })
		.from(invoices)
		.where(sql`${invoices.invoiceNumber} LIKE ${prefix + '%'}`)
		.get();
	const seq = (countRow?.c ?? 0) + 1;
	return `${prefix}${String(seq).padStart(4, '0')}`;
}

// totalCents вже включає ПДВ (той самий підхід, що й bookings.pricePerNightCents) —
// розкладаємо назад на суму без ПДВ + сам ПДВ для бланку інвойсу.
export function splitVat(totalCents: number): { exclVatCents: number; vatCents: number } {
	const exclVatCents = Math.round(totalCents / (1 + vatRatePercent / 100));
	return { exclVatCents, vatCents: totalCents - exclVatCents };
}
