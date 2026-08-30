// Прив'язка гостя до організації (2026-08-30) — find-or-create по
// regCode (унікальний природний ключ organizations.regCode). Викликається
// з register.astro/edit.astro, коли гість заповнює дані компанії.
import { db } from '../db/client';
import { organizations } from '../db/schema';
import { eq } from 'drizzle-orm';

export function linkOrganization(params: { name: string; regCode: string; vat: string; address: string }): number | null {
	const name = params.name.trim();
	const regCode = params.regCode.trim();
	if (!name && !regCode) return null;

	if (regCode) {
		const existing = db.select().from(organizations).where(eq(organizations.regCode, regCode)).get();
		if (existing) {
			// Оновлюємо назву/реквізити на актуальні, якщо гість їх змінив —
			// організація одна на всіх прив'язаних гостей, тримаємо дані свіжими.
			db.update(organizations)
				.set({ name: name || existing.name, vat: params.vat.trim() || existing.vat, address: params.address.trim() || existing.address })
				.where(eq(organizations.id, existing.id))
				.run();
			return existing.id;
		}
	}

	const inserted = db
		.insert(organizations)
		.values({ name: name || regCode, regCode: regCode || null, vat: params.vat.trim() || null, address: params.address.trim() || null })
		.run();
	return Number(inserted.lastInsertRowid);
}
