import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

// Новини/блог — прості markdown-файли в src/content/news/*.md, поле locale
// у фронтматтері визначає мову (окремий файл на кожну мову для одного посту,
// той самий slug-корінь, суфікс -en/-et/-uk/... в імені файлу).
const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		locale: z.enum(['en', 'et', 'uk', 'ru', 'lv', 'fi']),
		// Ключ картинки з src/data/news-images.ts (не шлях у файлі — фото
		// централізовано лежать в src/assets/property, щоб не дублювати).
		image: z.string(),
	}),
});

export const collections = { news };
