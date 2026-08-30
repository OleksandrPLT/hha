// Telegram Login Widget callback. На відміну від Google тут немає окремого
// "start" роута й обміну code→token — сам віджет (скрипт telegram.org)
// редиректить сюди з даними гостя прямо в query-рядку (data-auth-url,
// обраний користувачем через офіційний генератор), підписаними hash.
// Спочатку ОБОВ'ЯЗКОВО перевіряємо підпис (verifyTelegramAuth) — інакше
// будь-хто міг би підробити query-рядок. Сценарії ті самі, що й у Google
// (лінк/вхід/реєстрація), МІНУС авто-лінк по email — Telegram email не дає.
import type { APIRoute } from 'astro';
import { isLocale, defaultLocale } from '../../../../i18n/locales';
import { verifyTelegramAuth, type TelegramAuthData } from '../../../../lib/telegram';
import { fetchAndEncodeAvatar } from '../../../../lib/oauth';
import { db } from '../../../../db/client';
import { guests } from '../../../../db/schema';
import { eq, and, ne } from 'drizzle-orm';

export const prerender = false;

export const GET: APIRoute = async ({ request, session, redirect, cookies }) => {
	const url = new URL(request.url);
	const rawLocale = url.searchParams.get('locale');
	const locale = rawLocale && isLocale(rawLocale) ? rawLocale : defaultLocale;

	const currentGuestId = await session?.get('guestId');
	const failTarget = currentGuestId ? `/${locale}/account/edit?oauthError=1` : `/${locale}/account/login?oauthError=1`;

	const data: TelegramAuthData = {
		id: url.searchParams.get('id') || '',
		first_name: url.searchParams.get('first_name') || undefined,
		last_name: url.searchParams.get('last_name') || undefined,
		username: url.searchParams.get('username') || undefined,
		photo_url: url.searchParams.get('photo_url') || undefined,
		auth_date: url.searchParams.get('auth_date') || '',
		hash: url.searchParams.get('hash') || '',
	};

	if (!data.id || !data.hash || !verifyTelegramAuth(data)) {
		return redirect(failTarget);
	}

	const telegramId = data.id;
	const displayName = [data.first_name, data.last_name].filter(Boolean).join(' ') || data.username || 'Telegram user';

	// --- Сценарій 1: прив'язка до вже залогіненого акаунта ---
	if (currentGuestId) {
		const conflict = db
			.select()
			.from(guests)
			.where(and(eq(guests.telegramId, telegramId), ne(guests.id, currentGuestId)))
			.get();
		if (conflict) {
			return redirect(`/${locale}/account/edit?oauthError=taken`);
		}

		const guest = db.select().from(guests).where(eq(guests.id, currentGuestId)).get();
		if (!guest) {
			return redirect(`/${locale}/account/login`);
		}

		const updates: Partial<typeof guests.$inferInsert> = { telegramId };
		if (!guest.avatarUrl && data.photo_url) {
			const encoded = await fetchAndEncodeAvatar(data.photo_url);
			if (encoded) {
				updates.avatarUrl = encoded;
				updates.avatarSource = 'telegram';
			}
		}
		db.update(guests).set(updates).where(eq(guests.id, currentGuestId)).run();

		return redirect(`/${locale}/account/edit?linked=telegram`);
	}

	// --- Сценарій 2: telegramId вже прив'язаний — просто вхід ---
	const byTelegramId = db.select().from(guests).where(eq(guests.telegramId, telegramId)).get();
	if (byTelegramId) {
		await session?.set('guestId', byTelegramId.id);
		cookies.set('hha_signed_in', '1', { path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 });
		return redirect(`/${locale}/account`);
	}

	// --- Сценарій 3: зовсім новий гість — довести реєстрацію анкетою ---
	// (Telegram не дає email взагалі, тож авто-лінку по email тут немає —
	// відрізняється від Google.)
	await session?.set('pendingTelegram', {
		id: telegramId,
		name: displayName,
		photoUrl: data.photo_url ?? '',
	});

	return redirect(`/${locale}/account/register?telegram=1`);
};
