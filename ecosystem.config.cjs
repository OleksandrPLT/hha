// PM2-конфіг для запуску на Zone.ee (панель my.zone.eu → PM2 and Node.js →
// у полі "script path" вказати шлях ДО ЦЬОГО файлу, не напряму до
// dist/server/entry.mjs). Причина: звичайний `node dist/server/entry.mjs`
// не бачить .env взагалі (PORT/HOST з .env ігнорувались, стартувало на
// дефолтних localhost:4321 замість заданих) — Astro-адаптер читає
// process.env одразу при старті, а наш dotenv/config підключений лише
// всередині окремих модулів (mailer.ts/middleware.ts), які довантажуються
// вже ПІСЛЯ. node_args: '--env-file=.env' (нативний прапорець Node 20.6+,
// на сервері Node 24) гарантує .env завантажений ще ДО першого рядка коду.
module.exports = {
	apps: [
		{
			name: 'hha',
			script: './dist/server/entry.mjs',
			cwd: __dirname,
			node_args: '--env-file=.env',
			max_memory_restart: '512M',
		},
	],
};
