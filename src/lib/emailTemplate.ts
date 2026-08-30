// Спільний HTML-шаблон для всіх email-листів сайту (бронювання, чекін,
// в майбутньому — нагадування/подяка, Фаза 5). Table-based верстка +
// inline-стилі — так робиться в усіх поштових клієнтах надійно (Outlook
// ігнорує <style>/flex/grid); ніяких зображень (шрифти/лого як картинки
// заблоковані за замовчуванням в більшості клієнтів) — назва готелю й
// монограма Intech виведені текстом/CSS, той самий підхід, що й
// self-hosted шрифти на сайті (без сторонніх запитів на завантаження).
import { property } from '../data/property';

export function renderEmailHtml(params: { heading: string; bodyHtml: string; footerNote?: string }): string {
	const { heading, bodyHtml, footerNote } = params;
	return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f5f6f8;font-family:Georgia,'Times New Roman',serif;">
	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f8;padding:2rem 1rem;">
		<tr>
			<td align="center">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e5ea;">
					<tr>
						<td style="background:#14161a;padding:1.75rem 2rem;">
							<p style="margin:0;color:#f5f5f3;font-size:1.1rem;font-weight:700;letter-spacing:0.01em;">Hostel &amp; Hotel Apartments</p>
							<p style="margin:0.2rem 0 0;color:#c3c7cd;font-size:0.78rem;letter-spacing:0.04em;">Hostel 3A · ${property.city}, ${property.countryName}</p>
						</td>
					</tr>
					<tr>
						<td style="padding:2rem;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#14161a;">
							<h1 style="margin:0 0 1rem;font-size:1.3rem;font-weight:800;">${heading}</h1>
							<div style="font-size:0.92rem;line-height:1.6;color:#14161a;">${bodyHtml}</div>
							${footerNote ? `<p style="margin:1.25rem 0 0;font-size:0.8rem;color:#5b6068;">${footerNote}</p>` : ''}
						</td>
					</tr>
					<tr>
						<td style="padding:1.25rem 2rem;border-top:1px solid #e2e5ea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
							<p style="margin:0 0 0.5rem;font-size:0.78rem;color:#5b6068;">${property.streetAddress}, ${property.city}, ${property.postalCode} · ${property.phoneDisplay} · <a href="mailto:${property.email}" style="color:#0072ce;">${property.email}</a></p>
							<p style="margin:0;font-size:0.72rem;color:#8a8f98;">
								<a href="https://intech.org.ua" style="color:#8a8f98;text-decoration:none;">Website by <strong style="color:#5b6068;">intech</strong><span style="color:#0072ce;">.</span>org.ua</a>
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>`;
}
