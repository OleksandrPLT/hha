// ТЗ §1/§8: UKR/EST/ENG/RUS/LAT/FIN, кожна мова — окремий URL-префікс.
// Тримаємо єдиний список тут і в astro.config.mjs синхронізованим вручну —
// Astro поки не дає імпортувати конфіг назад у рантайм-код сторінок.

export const locales = ['en', 'et', 'uk', 'ru', 'lv', 'fi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
	en: 'English',
	et: 'Eesti',
	uk: 'Українська',
	ru: 'Русский',
	lv: 'Latviešu',
	fi: 'Suomi',
};

// Мова HTML-документа (lang атрибут) — окремо, бо коди збігаються з locale тут,
// але залишаємо явним на випадок майбутніх регіональних варіантів (напр. en-GB).
export const htmlLang: Record<Locale, string> = {
	en: 'en',
	et: 'et',
	uk: 'uk',
	ru: 'ru',
	lv: 'lv',
	fi: 'fi',
};

/**
 * Підбирає найкращий підтримуваний locale з заголовка Accept-Language.
 * Використовується на "/" для редіректу гостя на його мову (fallback — defaultLocale).
 */
export function pickLocaleFromAcceptLanguage(header: string | null): Locale {
	if (!header) return defaultLocale;

	const candidates = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';q=');
			const q = qPart ? parseFloat(qPart) : 1;
			return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 1 : q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of candidates) {
		const primary = tag.split('-')[0];
		if (isLocale(primary)) return primary;
	}

	return defaultLocale;
}
