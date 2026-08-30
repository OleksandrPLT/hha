// Крок 2 Google OAuth. Звіряємо state з сесією (анти-CSRF), обмінюємо code
// на access_token, тягнемо userinfo (sub/email/picture). Далі три сценарії
// (2026-08-30, розширено на пряме прохання користувача "авторизацію теж
// через гугл"):
//
//  1) Є сесія (guestId) → ПРИВʼЯЗКА до вже залогіненого акаунта.
//  2) Нема сесії, googleId вже належить комусь → ВХІД під тим гостем.
//  3) Нема сесії, googleId новий, але email збігається з існуючим гостем
//     І Google підтверджує email_verified → авто-прив'язка + вхід (Google
//     сам перевірив володіння поштою, це прийнятний рівень довіри).
//  4) Нема сесії, зовсім новий гість → НЕ створюємо рядок одразу (бракує
//     обов'язкових полів, яких Google не дає: телефон, згода на обробку
//     даних). Кладемо профіль у сесію (pendingGoogle) і ведемо на
//     /account/register?google=1, де форма додає лише телефон+анкету,
//     без пароля — register.astro сам вставить googleId + фото.
import type { APIRoute } from 'astro';
import { isLocale, defaultLocale } from '../../../../i18n/locales';
import { exchangeGoogleCode, fetchGoogleUserInfo, fetchAndEncodeAvatar } from '../../../../lib/oauth';
import { db } from '../../../../db/client';
import { guests } from '../../../../db/schema';
import { eq, and, ne } from 'drizzle-orm';

export const prerender = false;

export const GET: APIRoute = async ({ request, session, redirect, cookies }) => {
	const storedState = (await session?.get('oauthState')) as { token: string; locale: string; provider: string } | undefined;
	await session?.set('oauthState', undefined);

	const rawLocale = storedState?.locale;
	const locale = rawLocale && isLocale(rawLocale) ? rawLocale : defaultLocale;

	const url = new URL(request.url);
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	const errorParam = url.searchParams.get('error');

	const currentGuestId = await session?.get('guestId');
	const failTarget = currentGuestId ? `/${locale}/account/edit?oauthError=1` : `/${locale}/account/login?oauthError=1`;

	if (errorParam) {
		// Гість сам натиснув "Скасувати" на екрані Google — не помилка.
		return redirect(currentGuestId ? `/${locale}/account/edit` : `/${locale}/account/login`);
	}

	if (!code || !state || !storedState || state !== storedState.token || storedState.provider !== 'google') {
		return redirect(failTarget);
	}

	const tokens = await exchangeGoogleCode(code);
	if (!tokens) {
		return redirect(failTarget);
	}

	const info = await fetchGoogleUserInfo(tokens.access_token);
	if (!info?.sub) {
		return redirect(failTarget);
	}

	// --- Сценарій 1: прив'язка до вже залогіненого акаунта ---
	if (currentGuestId) {
		const conflict = db
			.select()
			.from(guests)
			.where(and(eq(guests.googleId, info.sub), ne(guests.id, currentGuestId)))
			.get();
		if (conflict) {
			return redirect(`/${locale}/account/edit?oauthError=taken`);
		}

		const guest = db.select().from(guests).where(eq(guests.id, currentGuestId)).get();
		if (!guest) {
			return redirect(`/${locale}/account/login`);
		}

		const updates: Partial<typeof guests.$inferInsert> = { googleId: info.sub };
		if (!guest.avatarUrl && info.picture) {
			const encoded = await fetchAndEncodeAvatar(info.picture);
			if (encoded) {
				updates.avatarUrl = encoded;
				updates.avatarSource = 'google';
			}
		}
		db.update(guests).set(updates).where(eq(guests.id, currentGuestId)).run();

		return redirect(`/${locale}/account/edit?linked=google`);
	}

	// --- Сценарій 2: googleId вже прив'язаний — просто вхід ---
	const byGoogleId = db.select().from(guests).where(eq(guests.googleId, info.sub)).get();
	if (byGoogleId) {
		await session?.set('guestId', byGoogleId.id);
		cookies.set('hha_signed_in', '1', { path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 });
		return redirect(`/${locale}/account`);
	}

	// --- Сценарій 3: email збігається з існуючим гостем, Google підтвердив ---
	if (info.email && info.email_verified) {
		const byEmail = db.select().from(guests).where(eq(guests.email, info.email.toLowerCase())).get();
		if (byEmail) {
			const updates: Partial<typeof guests.$inferInsert> = { googleId: info.sub };
			if (!byEmail.avatarUrl && info.picture) {
				const encoded = await fetchAndEncodeAvatar(info.picture);
				if (encoded) {
					updates.avatarUrl = encoded;
					updates.avatarSource = 'google';
				}
			}
			db.update(guests).set(updates).where(eq(guests.id, byEmail.id)).run();

			await session?.set('guestId', byEmail.id);
			cookies.set('hha_signed_in', '1', { path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 });
			return redirect(`/${locale}/account`);
		}
	}

	// --- Сценарій 4: зовсім новий гість — довести реєстрацію анкетою ---
	await session?.set('pendingGoogle', {
		sub: info.sub,
		email: info.email ?? '',
		name: info.name ?? '',
		picture: info.picture ?? '',
	});

	return redirect(`/${locale}/account/register?google=1`);
};
