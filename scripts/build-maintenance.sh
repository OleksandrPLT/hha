#!/usr/bin/env bash
# Тимчасовий build для тех-режиму (пароль на весь сайт, src/middleware.ts,
# MAINTENANCE_PASSWORD). Причина скрипта: @astrojs/node standalone роздає
# prerender=true сторінки статичною роздачею (ETag/Last-Modified), ще ДО
# того, як спрацює наш SSR-middleware — тобто пароль на них інакше НЕ діє
# (перевірено емпірично 2026-08-30). Astro вимагає, щоб `export const
# prerender` був статичним літералом true/false в кожному файлі окремо —
# імпорт змінної туди не підхоплюється роутером (build видає "getStaticPaths
# ignored" і ламає sitemap). Тому на час цього build'а тимчасово підміняємо
# `prerender = true` на `false` напряму в файлах, білдимо, і одразу
# повертаємо назад — trap гарантує відкат навіть якщо build впаде.
#
# Використання: ./scripts/build-maintenance.sh
# (звичайний фінальний build перед реальним запуском — просто `npm run build`)
set -euo pipefail
cd "$(dirname "$0")/.."

FILES=(
	"src/pages/index.astro"
	"src/pages/[locale]/privacy.astro"
	"src/pages/[locale]/terms.astro"
	"src/pages/[locale]/index.astro"
	"src/pages/[locale]/news/index.astro"
	"src/pages/[locale]/news/[slug].astro"
)

restore() {
	echo "→ повертаю prerender = true у вихідних файлах..."
	for f in "${FILES[@]}"; do
		sed -i '' 's/^export const prerender = false;$/export const prerender = true;/' "$f"
	done
}
trap restore EXIT

echo "→ тимчасово вимикаю prerender (буде SSR + захист паролем на всіх сторінках)..."
for f in "${FILES[@]}"; do
	sed -i '' 's/^export const prerender = true;$/export const prerender = false;/' "$f"
done

npm run build
