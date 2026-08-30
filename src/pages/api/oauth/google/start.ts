// Крок 1 Google OAuth — працює у двох режимах, розрізняється в callback за
// наявністю сесії на момент повернення (2026-08-30, розширено з
// "лише прив'язка" на "вхід/реєстрація теж через Google", пряме прохання
// користувача):
//  - є сесія (guestId) → прив'язка Google до вже залогіненого акаунта;
//  - нема сесії → вхід (якщо такий googleId/email вже є) або початок
//    реєстрації нового гостя (якщо це геть новий Google-акаунт).
// Генеруємо анти-CSRF state, кладемо в сесію разом з locale.
import type { APIRoute } from 'astro';
import { isLocale, defaultLocale } from '../../../../i18n/locales';
import { isGoogleOAuthConfigured, buildGoogleAuthUrl, randomState } from '../../../../lib/oauth';

export const prerender = false;

export const GET: APIRoute = async ({ request, session, redirect }) => {
	if (!isGoogleOAuthConfigured()) {
		return new Response('Google OAuth is not configured yet.', { status: 503 });
	}

	const url = new URL(request.url);
	const rawLocale = url.searchParams.get('locale');
	const locale = rawLocale && isLocale(rawLocale) ? rawLocale : defaultLocale;

	const state = randomState();
	await session?.set('oauthState', { token: state, locale, provider: 'google' });

	return redirect(buildGoogleAuthUrl(state));
};
