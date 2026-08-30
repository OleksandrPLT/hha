// Генерує 6 Open Graph зображень (1200×630, по одному на мову) — за
// проханням користувача 2026-08-30 при запуску сайту ("одне красиве сео
// створи в залежності від мови"). До цього og:image взагалі не було —
// посилання на сайт при шарингу (Telegram/WhatsApp/Facebook) показувались
// без картинки. Фото — hero-exterior.jpg (те саме, що на лендінгу),
// текстовий оверлей — SVG, композиція через sharp (вже є в проєкті,
// astro:assets використовує його під капотом). Запускати одноразово
// (`node scripts/generate-og-images.mjs`) і повторно, якщо зміниться
// текст/фото — файли лежать в public/og/, не перегенеровуються on-the-fly.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroPath = path.join(__dirname, '../src/assets/property/hero-exterior.jpg');
const outDir = path.join(__dirname, '../public/og');
mkdirSync(outDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

const copy = {
	en: { eyebrow: 'Hostel 3A · Maardu, Estonia', heading: 'Hostel & Hotel Apartments', tagline: 'Private & shared rooms near Tallinn' },
	et: { eyebrow: 'Hostel 3A · Maardu, Eesti', heading: 'Hostel & Hotel Apartments', tagline: 'Privaat- ja jagatud toad Tallinna lähedal' },
	uk: { eyebrow: 'Hostel 3A · Маарду, Естонія', heading: 'Hostel & Hotel Apartments', tagline: 'Приватні та спільні номери біля Таллінна' },
	ru: { eyebrow: 'Hostel 3A · Маарду, Эстония', heading: 'Hostel & Hotel Apartments', tagline: 'Частные и общие номера рядом с Таллинном' },
	lv: { eyebrow: 'Hostel 3A · Maardu, Igaunija', heading: 'Hostel & Hotel Apartments', tagline: 'Privātas un kopīgas istabas netālu no Tallinas' },
	fi: { eyebrow: 'Hostel 3A · Maardu, Viro', heading: 'Hostel & Hotel Apartments', tagline: 'Yksityisiä ja jaettuja huoneita lähellä Tallinnaa' },
};

function escapeXml(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function svgOverlay({ eyebrow, heading, tagline }) {
	return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#0b0d10" stop-opacity="0.35" />
				<stop offset="55%" stop-color="#0b0d10" stop-opacity="0.55" />
				<stop offset="100%" stop-color="#0b0d10" stop-opacity="0.88" />
			</linearGradient>
		</defs>
		<rect width="${WIDTH}" height="${HEIGHT}" fill="url(#scrim)" />
		<text x="72" y="430" font-family="Georgia, 'Times New Roman', serif" font-size="26" letter-spacing="2" fill="#e2b676">${escapeXml(eyebrow.toUpperCase())}</text>
		<text x="70" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="#f5f0e6">${escapeXml(heading)}</text>
		<text x="72" y="548" font-family="-apple-system, Arial, sans-serif" font-size="28" fill="#c9c3b6">${escapeXml(tagline)}</text>
	</svg>`;
}

for (const [locale, c] of Object.entries(copy)) {
	const overlay = Buffer.from(svgOverlay(c));
	const outPath = path.join(outDir, `${locale}.jpg`);
	await sharp(heroPath)
		.resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
		.composite([{ input: overlay, top: 0, left: 0 }])
		.jpeg({ quality: 85 })
		.toFile(outPath);
	console.log('✓', outPath);
}
console.log('Done —', Object.keys(copy).length, 'OG images generated in public/og/');
