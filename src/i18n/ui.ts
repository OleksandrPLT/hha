import type { Locale } from './locales';

// Дрібні UI-лейбли, спільні для кількох сторінок (лендінг + privacy) —
// не варто дублювати в landing.ts і privacy.ts окремо.
export const ui: Record<Locale, { backToTop: string }> = {
	en: { backToTop: 'Back to top' },
	et: { backToTop: 'Üles' },
	uk: { backToTop: 'Нагору' },
	ru: { backToTop: 'Наверх' },
	lv: { backToTop: 'Uz augšu' },
	fi: { backToTop: 'Ylös' },
};
