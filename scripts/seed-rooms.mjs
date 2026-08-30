#!/usr/bin/env node
// Одноразовий seed таблиці rooms/room_photos реальними даними, які досі
// жили хардкодом в src/data/amenities.ts + src/data/pricing.ts +
// src/i18n/amenities.ts (room copy) — щоб перехід на БД-кероване
// керування номерами (Фаза 3, ТЗ §5.3) не загубив жодного факту й фото.
// Ціни — в центах (integer), як в схемі. Фото — ті самі jpg, що вже на
// сайті, закодовані в base64 (щоб лендінг виглядав ідентично одразу після
// переходу, поки адмін не завантажить свої).
//
// Використання: DATABASE_PATH=... node scripts/seed-rooms.mjs
// (не для повторного запуску на непорожній таблиці — просто зупиниться,
// якщо rooms вже щось містить.)
import Database from 'better-sqlite3';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dbPath = process.env.DATABASE_PATH || path.join(root, 'data/app.db');
const db = new Database(dbPath);

const existing = db.prepare('select count(*) as c from rooms').get();
if (existing.c > 0) {
	console.log(`rooms вже містить ${existing.c} рядків — seed пропущено.`);
	process.exit(0);
}

const roomsData = [
	{
		slug: 'family',
		sortOrder: 0,
		pricePerNightCents: 3500,
		priceWeekCents: 20500,
		priceTwoWeeksCents: 34000,
		pricePerMonthCents: 40000,
		titles: {
			en: 'Family room',
			et: 'Pere tuba',
			uk: 'Сімейний номер',
			ru: 'Семейный номер',
			lv: 'Ģimenes istaba',
			fi: 'Perhehuone',
		},
		beds: {
			en: '1 double bed',
			et: '1 kaheinimesevoodi',
			uk: '1 двоспальне ліжко',
			ru: '1 двуспальная кровать',
			lv: '1 divguļamā gulta',
			fi: '1 parisänky',
		},
		guests: {
			en: '2 guests',
			et: '2 külalist',
			uk: '2 гості',
			ru: '2 гостя',
			lv: '2 viesi',
			fi: '2 vierasta',
		},
		photo: 'src/assets/property/room-double.jpg',
	},
	{
		slug: 'dormBed',
		sortOrder: 1,
		pricePerNightCents: 2000,
		priceWeekCents: 11500,
		priceTwoWeeksCents: 19500,
		pricePerMonthCents: 25000,
		titles: {
			en: 'Bed in a 4-bed dorm',
			et: 'Voodikoht 4-kohalises unetoas',
			uk: 'Ліжко в 4-місному номері гуртожиткового типу',
			ru: 'Место в 4-местном номере хостела',
			lv: 'Gulta 4 vietu kopmītnes tipa istabā',
			fi: 'Sänky 4 hengen makuusalissa',
		},
		beds: {
			en: '1 single bed',
			et: '1 üheinimesevoodi',
			uk: '1 односпальне ліжко',
			ru: '1 односпальная кровать',
			lv: '1 vienguļamā gulta',
			fi: '1 erillinen sänky',
		},
		guests: {
			en: '1 guest',
			et: '1 külaline',
			uk: '1 гість',
			ru: '1 гость',
			lv: '1 viesis',
			fi: '1 vieras',
		},
		photo: 'src/assets/property/room-dorm.jpg',
	},
	{
		slug: 'triple',
		sortOrder: 2,
		pricePerNightCents: 5500,
		priceWeekCents: null,
		priceTwoWeeksCents: null,
		pricePerMonthCents: null,
		titles: {
			en: 'Triple room',
			et: 'Kolmekohaline tuba',
			uk: 'Тримісний номер',
			ru: 'Трёхместный номер',
			lv: 'Trīsvietīga istaba',
			fi: 'Kolmen hengen huone',
		},
		beds: {
			en: '3 single beds',
			et: '3 üheinimesevoodit',
			uk: '3 односпальні ліжка',
			ru: '3 односпальные кровати',
			lv: '3 vienguļamās gultas',
			fi: '3 erillistä sänkyä',
		},
		guests: {
			en: '3 guests',
			et: '3 külalist',
			uk: '3 гості',
			ru: '3 гостя',
			lv: '3 viesi',
			fi: '3 vierasta',
		},
		photo: 'src/assets/property/room-twin-a.jpg',
	},
	{
		slug: 'fourBed',
		sortOrder: 3,
		pricePerNightCents: 7000,
		priceWeekCents: null,
		priceTwoWeeksCents: null,
		pricePerMonthCents: null,
		titles: {
			en: 'Classic 4-bed room',
			et: 'Klassikaline neljakohaline tuba',
			uk: 'Класичний чотиримісний номер',
			ru: 'Классический четырёхместный номер',
			lv: 'Klasiskā četrvietīga istaba',
			fi: 'Klassinen neljän hengen huone',
		},
		beds: {
			en: '4 single beds',
			et: '4 üheinimesevoodit',
			uk: '4 односпальні ліжка',
			ru: '4 односпальные кровати',
			lv: '4 vienguļamās gultas',
			fi: '4 erillistä sänkyä',
		},
		guests: {
			en: '4 guests',
			et: '4 külalist',
			uk: '4 гості',
			ru: '4 гостя',
			lv: '4 viesi',
			fi: '4 vierasta',
		},
		photo: 'src/assets/property/room-twin-b.jpg',
	},
];

const insertRoom = db.prepare(
	`insert into rooms (slug, sort_order, is_active, price_per_night_cents, price_week_cents, price_two_weeks_cents, price_per_month_cents, titles, beds, guests)
	 values (@slug, @sortOrder, 1, @pricePerNightCents, @priceWeekCents, @priceTwoWeeksCents, @pricePerMonthCents, @titles, @beds, @guests)`,
);
const insertPhoto = db.prepare('insert into room_photos (room_id, photo_url, sort_order) values (?, ?, 0)');

for (const room of roomsData) {
	const info = insertRoom.run({
		slug: room.slug,
		sortOrder: room.sortOrder,
		pricePerNightCents: room.pricePerNightCents,
		priceWeekCents: room.priceWeekCents,
		priceTwoWeeksCents: room.priceTwoWeeksCents,
		pricePerMonthCents: room.pricePerMonthCents,
		titles: JSON.stringify(room.titles),
		beds: JSON.stringify(room.beds),
		guests: JSON.stringify(room.guests),
	});

	const imgPath = path.join(root, room.photo);
	const buf = readFileSync(imgPath);
	const dataUrl = `data:image/jpeg;base64,${buf.toString('base64')}`;
	insertPhoto.run(info.lastInsertRowid, dataUrl);

	console.log(`seeded ${room.slug} (room id ${info.lastInsertRowid}), photo ${(buf.byteLength / 1024).toFixed(0)}KB`);
}

console.log('done');
