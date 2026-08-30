// Відв'язати Google від акаунта. Фото НЕ чистимо автоматично (гість міг
// вже завантажити своє власне поверх — прибирати щось, що він явно не
// просив прибрати, було б несподіванкою).
import type { APIRoute } from 'astro';
import { isLocale, defaultLocale } from '../../../../i18n/locales';
import { db } from '../../../../db/client';
import { guests } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export const prerender = false;

export const POST: APIRoute = async ({ request, session, redirect }) => {
	const guestId = await session?.get('guestId');
	if (!guestId) {
		return redirect(`/${defaultLocale}/account/login`);
	}

	const form = await request.formData();
	const rawLocale = String(form.get('locale') || '');
	const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

	db.update(guests).set({ googleId: null }).where(eq(guests.id, guestId)).run();

	return redirect(`/${locale}/account/edit?unlinked=google`);
};
