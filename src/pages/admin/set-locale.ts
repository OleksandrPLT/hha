import type { APIRoute } from 'astro';
import { isAdminLocale } from '../../i18n/admin';

export const prerender = false;

export const GET: APIRoute = ({ url, cookies, redirect }) => {
	const loc = url.searchParams.get('locale');
	if (isAdminLocale(loc)) {
		cookies.set('admin_locale', loc, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });
	}
	const ret = url.searchParams.get('return');
	return redirect(ret && ret.startsWith('/admin') ? ret : '/admin');
};
