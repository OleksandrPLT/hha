// Дані для попап-кабінету (AccountModal.astro) — окрема JSON-ручка, бо сам
// попап рендериться в BaseLayout глобально (в т.ч. на статичних сторінках,
// які не мають доступу до сесії на етапі білда). Клік по "Мій кабінет", коли
// гість вже залогінений, більше НЕ веде на окрему сторінку — фетчить це і
// малює попап поверх сайту. Повна сторінка /account лишається (прямі
// посилання, no-JS, друк).
import type { APIRoute } from 'astro';
import { isLocale, htmlLang, type Locale } from '../../../i18n/locales';
import { db } from '../../../db/client';
import { guests } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { pointsToEuros } from '../../../data/loyalty';
import { countries, isoToFlag } from '../../../data/countries';
import { formatMemberId, memberVerifyUrl, generateMemberQrSvg } from '../../../lib/memberCard';

export const prerender = false;

function countryLabel(iso: string | null): string | null {
	if (!iso) return null;
	const c = countries.find((c) => c.iso2 === iso);
	return c ? `${isoToFlag(c.iso2)} ${c.name}` : iso;
}

function formatDate(raw: string | null, locale: Locale): string | null {
	if (!raw) return null;
	const d = new Date(raw.includes(' ') ? raw.replace(' ', 'T') + 'Z' : raw);
	if (Number.isNaN(d.getTime())) return raw;
	return new Intl.DateTimeFormat(htmlLang[locale], { dateStyle: 'medium' }).format(d);
}

export const GET: APIRoute = async ({ params, session, site, url }) => {
	const rawLocale = params.locale;
	const locale: Locale = rawLocale && isLocale(rawLocale) ? rawLocale : 'en';

	const guestId = await session?.get('guestId');
	if (!guestId) {
		return new Response(JSON.stringify({ error: 'not_signed_in' }), { status: 401, headers: { 'content-type': 'application/json' } });
	}

	const guest = db.select().from(guests).where(eq(guests.id, guestId)).get();
	if (!guest) {
		return new Response(JSON.stringify({ error: 'not_found' }), { status: 401, headers: { 'content-type': 'application/json' } });
	}

	const initials = guest.fullName
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((p) => p[0]!.toUpperCase())
		.join('');

	const memberId = formatMemberId(guest.id);
	const verifyUrl = memberVerifyUrl(site ?? url, locale, memberId);
	const qrSvg = await generateMemberQrSvg(verifyUrl);

	return new Response(
		JSON.stringify({
			fullName: guest.fullName,
			initials,
			avatarUrl: guest.avatarUrl,
			memberId,
			qrSvg,
			email: guest.email,
			phone: guest.phone,
			isCompany: guest.isCompany,
			loyaltyPoints: guest.loyaltyPoints,
			loyaltyEuros: pointsToEuros(guest.loyaltyPoints).toFixed(2),
			memberSince: formatDate(guest.createdAt, locale),
			nationality: countryLabel(guest.nationality),
			dateOfBirth: formatDate(guest.dateOfBirth, locale),
			addressLine: guest.addressLine,
			city: guest.city,
			postalCode: guest.postalCode,
			countryOfResidence: countryLabel(guest.countryOfResidence),
			marketingConsent: guest.marketingConsent,
			companyName: guest.companyName,
			companyRegCode: guest.companyRegCode,
			companyVat: guest.companyVat,
			companyAddress: guest.companyAddress,
		}),
		{ status: 200, headers: { 'content-type': 'application/json' } },
	);
};
