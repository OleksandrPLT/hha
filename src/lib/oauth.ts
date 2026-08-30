// Google OAuth — прив'язка ІСНУЮЧОГО акаунта (гість уже увійшов паролем),
// не окремий спосіб реєстрації з нуля — свідомо простіший/безпечніший
// обсяг для першої версії (2026-08-30, пряме прохання користувача:
// "приєднати телеграм та гугл" + автопідтяжка фото). Потребує
// GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET в .env — без них isGoogleOAuthConfigured()
// повертає false і кнопка в UI лишається задизейбленою "Coming soon".
// Telegram — ті самі поля в схемі (googleId/telegramId) готові, але сам
// Login Widget + HMAC-перевірка ще НЕ підключені (немає бот-токена).
import 'dotenv/config';

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

export function isGoogleOAuthConfigured(): boolean {
	return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

export function googleRedirectUri(): string {
	return process.env.GOOGLE_REDIRECT_URI || 'https://hha.ee/api/oauth/google/callback';
}

export function buildGoogleAuthUrl(state: string): string {
	const params = new URLSearchParams({
		client_id: process.env.GOOGLE_CLIENT_ID || '',
		redirect_uri: googleRedirectUri(),
		response_type: 'code',
		scope: 'openid email profile',
		state,
		prompt: 'select_account',
	});
	return `${GOOGLE_AUTH_URL}?${params.toString()}`;
}

interface GoogleTokenResponse {
	access_token: string;
	id_token?: string;
	token_type: string;
	expires_in: number;
}

export interface GoogleUserInfo {
	sub: string;
	email?: string;
	email_verified?: boolean;
	name?: string;
	picture?: string;
}

export async function exchangeGoogleCode(code: string): Promise<GoogleTokenResponse | null> {
	const res = await fetch(GOOGLE_TOKEN_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			client_id: process.env.GOOGLE_CLIENT_ID || '',
			client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
			code,
			grant_type: 'authorization_code',
			redirect_uri: googleRedirectUri(),
		}),
	});
	if (!res.ok) return null;
	return (await res.json()) as GoogleTokenResponse;
}

export async function fetchGoogleUserInfo(accessToken: string): Promise<GoogleUserInfo | null> {
	const res = await fetch(GOOGLE_USERINFO_URL, {
		headers: { authorization: `Bearer ${accessToken}` },
	});
	if (!res.ok) return null;
	return (await res.json()) as GoogleUserInfo;
}

// Завантажує зображення за URL (напр. Google avatar) і кодує в data URL —
// той самий підхід, що й для ручного завантаження фото (немає окремого
// файлового сховища на цьому хостингу, див. коментар в db/schema.ts).
// Ліміт 2MB — фото профілю більшими не бувають, це просто запобіжник від
// випадково величезного файлу.
export async function fetchAndEncodeAvatar(url: string): Promise<string | null> {
	try {
		const res = await fetch(url);
		if (!res.ok) return null;
		const contentType = res.headers.get('content-type') || 'image/jpeg';
		if (!contentType.startsWith('image/')) return null;
		const buf = Buffer.from(await res.arrayBuffer());
		if (buf.byteLength > 2 * 1024 * 1024) return null;
		return `data:${contentType};base64,${buf.toString('base64')}`;
	} catch {
		return null;
	}
}

export function randomState(): string {
	return crypto.randomUUID();
}
