#!/usr/bin/env node
// Кросплатформний (Mac + Linux/сервер) build для тех-режиму. Замінив
// build-maintenance.sh (той був на macOS-специфічному `sed -i ''`) — цей
// скрипт МАЄ вміти запускатись прямо на сервері по SSH: unstorage-драйвер
// сесій (`fs-lite`) резолвить свій абсолютний шлях під час виконання
// astro.config.mjs, тобто під час білда — якщо білдити на Маку й заливати
// dist/, шлях сесій назавжди лишається "/Users/oleksandr/hha/..." і на
// сервері падає з ENOENT (перевірено на проді 2026-08-30). Тому build
// повинен запускатись НА СЕРВЕРІ.
//
// Причина тимчасової підміни prerender: @astrojs/node standalone роздає
// prerender=true сторінки статичною роздачею файлів, ще ДО того, як
// спрацює наш SSR-middleware (тех-режим/Coming-Soon-гейт) — інакше гейт на
// них просто не діє.
//
// Використання: MAINTENANCE_PASSWORD=xxx node scripts/build-maintenance.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const FILES = [
	'src/pages/index.astro',
	'src/pages/[locale]/privacy.astro',
	'src/pages/[locale]/terms.astro',
	'src/pages/[locale]/index.astro',
	'src/pages/[locale]/news/index.astro',
	'src/pages/[locale]/news/[slug].astro',
].map((f) => path.join(root, f));

function toggle(from, to) {
	for (const file of FILES) {
		const content = readFileSync(file, 'utf-8');
		const marker = `export const prerender = ${from};`;
		if (content.includes(marker)) {
			writeFileSync(file, content.replace(marker, `export const prerender = ${to};`));
		}
	}
}

toggle('true', 'false');
try {
	execSync('npm run build', { cwd: root, stdio: 'inherit' });
} finally {
	toggle('false', 'true');
}
