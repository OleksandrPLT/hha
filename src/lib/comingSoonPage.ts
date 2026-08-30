// Публічна "Незабаром" сторінка з таймером до 01.09.2026 — те, що бачать усі
// відвідувачі БЕЗ preview-ключа, поки сайт у розробці (заміна Basic Auth
// пароля на прохання користувача 2026-08-30: "не потрібно логін пароль а
// щоб і залишився що в розробці з тамером"). Верстка/countdown-скрипт
// відновлені 1:1 зі старої статичної Coming Soon сторінки (яка досі стояла
// на проді до підключення mod_proxy) — просто оновлено джерело копірайтингу
// на src/i18n/coming-soon.ts, щоб не тримати текст задубльованим.
import { comingSoon } from '../i18n/coming-soon';
import { locales, localeNames, isLocale, type Locale } from '../i18n/locales';

export function detectLocaleFromPath(pathname: string): Locale {
	const seg = pathname.split('/')[1] ?? '';
	return isLocale(seg) ? seg : 'en';
}

export function renderComingSoonPage(locale: Locale): string {
	const c = comingSoon[locale];

	const langLinks = locales
		.map((l) => `<a href="/${l}" hreflang="${l}"${l === locale ? ' class="active" aria-current="page"' : ''}>${localeNames[l]}</a>`)
		.join('');

	return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Hostel &amp; Hotel Apartments — ${c.heading}</title><meta name="description" content="${c.metaDescription}"><meta name="robots" content="index, follow"><style>
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
img,svg{max-width:100%;display:block}
a{color:inherit}
.page{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;min-height:100vh;padding:2rem 1.25rem;background:#0d0f14;color:#f5f0e6}
.card{display:flex;flex-direction:column;align-items:center;gap:1.25rem;width:100%;max-width:34rem;text-align:center}
.tagline{margin:0;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:#9a9488}
h1{margin:0;font-size:clamp(1.75rem,5vw,2.5rem);font-weight:700;letter-spacing:-.01em}
.heading{margin:0;font-size:clamp(1.1rem,3vw,1.4rem);font-weight:600;color:#e2b676}
.body{margin:0;max-width:28rem;color:#c9c3b6;line-height:1.5}
.countdown{display:flex;gap:1rem;margin-top:.5rem}
.unit{display:flex;flex-direction:column;align-items:center;min-width:3.75rem;padding:.75rem .5rem;border-radius:.75rem;background:#12151c;border:1px solid #262b36}
.value{font-size:clamp(1.25rem,4vw,1.75rem);font-weight:700;font-variant-numeric:tabular-nums}
.label{margin-top:.25rem;font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;color:#83786a}
.contact{margin-top:.5rem;font-size:.95rem;color:#f5f0e6;text-decoration:none;border-bottom:1px solid #45403a;padding-bottom:.15rem}
.contact:hover{color:#e2b676;border-color:#e2b676}
.lang-switch{display:flex;flex-wrap:wrap;justify-content:center;gap:.4rem .9rem;margin-top:1rem}
.lang-switch a{color:#83786a;font-size:.8rem;text-decoration:none}
.lang-switch a.active{color:#f5f0e6;font-weight:600}
.lang-switch a:hover{color:#e2b676}
.credit a{display:inline-flex;align-items:center;gap:.4rem;color:#5b5548;font-size:.75rem;text-decoration:none}
.credit a:hover{color:#83786a}
</style></head><body><main class="page"><div class="card"><p class="tagline">${c.tagline}</p><h1>Hostel &amp; Hotel Apartments</h1><p class="heading">${c.heading}</p><p class="body">${c.body}</p><div class="countdown" id="countdown" data-launch="2026-09-01T00:00:00+03:00"><div class="unit"><span class="value" id="cd-days">–</span><span class="label">${c.units.days}</span></div><div class="unit"><span class="value" id="cd-hours">–</span><span class="label">${c.units.hours}</span></div><div class="unit"><span class="value" id="cd-minutes">–</span><span class="label">${c.units.minutes}</span></div><div class="unit"><span class="value" id="cd-seconds">–</span><span class="label">${c.units.seconds}</span></div></div><a class="contact" href="mailto:office@hha.ee">${c.contactLabel} — office@hha.ee</a><nav class="lang-switch" aria-label="Language">${langLinks}</nav></div><footer class="credit"><a href="https://intech.org.ua" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 40 40" width="16" height="16" aria-hidden="true"><rect x="1" y="1" width="38" height="38" rx="10" stroke="currentColor" stroke-width="2" fill="none"></rect><rect x="17" y="10" width="6" height="20" rx="3" fill="currentColor"></rect></svg><span>${c.poweredBy} Intech</span></a></footer></main><script type="module">
const el=document.getElementById('countdown');
const target=el?new Date(el.dataset.launch??'').getTime():NaN;
const d=document.getElementById('cd-days'),h=document.getElementById('cd-hours'),m=document.getElementById('cd-minutes'),s=document.getElementById('cd-seconds');
function pad(n){return String(n).padStart(2,'0')}
function tick(){
  if(Number.isNaN(target))return;
  const diff=Math.max(0,target-Date.now());
  const days=Math.floor(diff/86400000);
  const hours=Math.floor((diff%86400000)/3600000);
  const mins=Math.floor((diff%3600000)/60000);
  const secs=Math.floor((diff%60000)/1000);
  if(d)d.textContent=String(days);
  if(h)h.textContent=pad(hours);
  if(m)m.textContent=pad(mins);
  if(s)s.textContent=pad(secs);
}
tick();
setInterval(tick,1000);
</script></body></html>`;
}
