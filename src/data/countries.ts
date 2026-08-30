// Список країн для маски телефону (реєстрація гостя) — ISO 3166-1 alpha-2 +
// міжнародний код виклику. Прапорець НЕ зберігається як окремий емодзі-рядок
// на кожну країну (195 записів було б і важко звірити, і легко забути
// оновити) — рахується на льоту з ISO-коду через regional indicator symbols
// (isoToFlag нижче), тому єдине джерело правди — сам ISO-код.
export interface Country {
	iso2: string;
	name: string;
	dial: string;
}

export function isoToFlag(iso2: string): string {
	return iso2
		.toUpperCase()
		.replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

export const countries: Country[] = [
	{ iso2: 'EE', name: 'Estonia', dial: '+372' },
	{ iso2: 'LV', name: 'Latvia', dial: '+371' },
	{ iso2: 'LT', name: 'Lithuania', dial: '+370' },
	{ iso2: 'FI', name: 'Finland', dial: '+358' },
	{ iso2: 'SE', name: 'Sweden', dial: '+46' },
	{ iso2: 'NO', name: 'Norway', dial: '+47' },
	{ iso2: 'DK', name: 'Denmark', dial: '+45' },
	{ iso2: 'IS', name: 'Iceland', dial: '+354' },
	{ iso2: 'UA', name: 'Ukraine', dial: '+380' },
	{ iso2: 'PL', name: 'Poland', dial: '+48' },
	{ iso2: 'DE', name: 'Germany', dial: '+49' },
	{ iso2: 'FR', name: 'France', dial: '+33' },
	{ iso2: 'GB', name: 'United Kingdom', dial: '+44' },
	{ iso2: 'IE', name: 'Ireland', dial: '+353' },
	{ iso2: 'NL', name: 'Netherlands', dial: '+31' },
	{ iso2: 'BE', name: 'Belgium', dial: '+32' },
	{ iso2: 'LU', name: 'Luxembourg', dial: '+352' },
	{ iso2: 'CH', name: 'Switzerland', dial: '+41' },
	{ iso2: 'AT', name: 'Austria', dial: '+43' },
	{ iso2: 'IT', name: 'Italy', dial: '+39' },
	{ iso2: 'ES', name: 'Spain', dial: '+34' },
	{ iso2: 'PT', name: 'Portugal', dial: '+351' },
	{ iso2: 'GR', name: 'Greece', dial: '+30' },
	{ iso2: 'CY', name: 'Cyprus', dial: '+357' },
	{ iso2: 'MT', name: 'Malta', dial: '+356' },
	{ iso2: 'CZ', name: 'Czechia', dial: '+420' },
	{ iso2: 'SK', name: 'Slovakia', dial: '+421' },
	{ iso2: 'HU', name: 'Hungary', dial: '+36' },
	{ iso2: 'SI', name: 'Slovenia', dial: '+386' },
	{ iso2: 'HR', name: 'Croatia', dial: '+385' },
	{ iso2: 'BA', name: 'Bosnia and Herzegovina', dial: '+387' },
	{ iso2: 'RS', name: 'Serbia', dial: '+381' },
	{ iso2: 'ME', name: 'Montenegro', dial: '+382' },
	{ iso2: 'MK', name: 'North Macedonia', dial: '+389' },
	{ iso2: 'AL', name: 'Albania', dial: '+355' },
	{ iso2: 'XK', name: 'Kosovo', dial: '+383' },
	{ iso2: 'RO', name: 'Romania', dial: '+40' },
	{ iso2: 'BG', name: 'Bulgaria', dial: '+359' },
	{ iso2: 'MD', name: 'Moldova', dial: '+373' },
	{ iso2: 'BY', name: 'Belarus', dial: '+375' },
	{ iso2: 'RU', name: 'Russia', dial: '+7' },
	{ iso2: 'GE', name: 'Georgia', dial: '+995' },
	{ iso2: 'AM', name: 'Armenia', dial: '+374' },
	{ iso2: 'AZ', name: 'Azerbaijan', dial: '+994' },
	{ iso2: 'TR', name: 'Türkiye', dial: '+90' },
	{ iso2: 'IL', name: 'Israel', dial: '+972' },
	{ iso2: 'AE', name: 'United Arab Emirates', dial: '+971' },
	{ iso2: 'SA', name: 'Saudi Arabia', dial: '+966' },
	{ iso2: 'QA', name: 'Qatar', dial: '+974' },
	{ iso2: 'KW', name: 'Kuwait', dial: '+965' },
	{ iso2: 'EG', name: 'Egypt', dial: '+20' },
	{ iso2: 'MA', name: 'Morocco', dial: '+212' },
	{ iso2: 'TN', name: 'Tunisia', dial: '+216' },
	{ iso2: 'ZA', name: 'South Africa', dial: '+27' },
	{ iso2: 'NG', name: 'Nigeria', dial: '+234' },
	{ iso2: 'KE', name: 'Kenya', dial: '+254' },
	{ iso2: 'US', name: 'United States', dial: '+1' },
	{ iso2: 'CA', name: 'Canada', dial: '+1' },
	{ iso2: 'MX', name: 'Mexico', dial: '+52' },
	{ iso2: 'BR', name: 'Brazil', dial: '+55' },
	{ iso2: 'AR', name: 'Argentina', dial: '+54' },
	{ iso2: 'CL', name: 'Chile', dial: '+56' },
	{ iso2: 'CO', name: 'Colombia', dial: '+57' },
	{ iso2: 'PE', name: 'Peru', dial: '+51' },
	{ iso2: 'CN', name: 'China', dial: '+86' },
	{ iso2: 'JP', name: 'Japan', dial: '+81' },
	{ iso2: 'KR', name: 'South Korea', dial: '+82' },
	{ iso2: 'IN', name: 'India', dial: '+91' },
	{ iso2: 'PK', name: 'Pakistan', dial: '+92' },
	{ iso2: 'BD', name: 'Bangladesh', dial: '+880' },
	{ iso2: 'ID', name: 'Indonesia', dial: '+62' },
	{ iso2: 'TH', name: 'Thailand', dial: '+66' },
	{ iso2: 'VN', name: 'Vietnam', dial: '+84' },
	{ iso2: 'PH', name: 'Philippines', dial: '+63' },
	{ iso2: 'MY', name: 'Malaysia', dial: '+60' },
	{ iso2: 'SG', name: 'Singapore', dial: '+65' },
	{ iso2: 'AU', name: 'Australia', dial: '+61' },
	{ iso2: 'NZ', name: 'New Zealand', dial: '+64' },
	{ iso2: 'KZ', name: 'Kazakhstan', dial: '+7' },
	{ iso2: 'UZ', name: 'Uzbekistan', dial: '+998' },
];
