import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Фаза 2 (кабінет гостя). "Максимальна анкета" — за прямим проханням
// користувача 2026-08-29: збираємо ширший профіль одразу (не тільки
// ім'я/телефон/email), навіть до того як клієнт підтвердив точний список
// обов'язкових полів для міграційної служби (відкрите питання №1 в ТЗ).
// Тому nationality/dateOfBirth/address* — NULLABLE і НЕ гарантовано
// відповідають вимогам естонського закону про облік проживаючих; коли
// клієнт підтвердить точний перелік — звірити й, якщо треба, зробити
// обов'язковими або додати поля, яких бракує.
export const guests = sqliteTable('guests', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	fullName: text('full_name').notNull(),
	email: text('email').notNull().unique(),
	phone: text('phone').notNull(),
	passwordHash: text('password_hash').notNull(),
	loyaltyPoints: integer('loyalty_points').notNull().default(0),

	// Юрособа замість фізособи (перемикач у формі реєстрації, 2026-08-29).
	// Автопідтяжка даних компанії з е-Äriregister НЕ підключена — офіційний
	// real-time API RIK вимагає окремої угоди + логін/пароль з реєстром
	// (не публічний ключ), це має оформити власник бізнесу. Скрапити
	// публічну сторінку/сторонні агрегатори (як inforegister.ee) для
	// продакшн-фічі не варто — той самий ризик, що й з Booking.com.
	isCompany: integer('is_company', { mode: 'boolean' }).notNull().default(false),
	companyName: text('company_name'),
	companyRegCode: text('company_reg_code'),
	companyVat: text('company_vat'),
	companyAddress: text('company_address'),

	// Розширений профіль — усе нижче необов'язкове на рівні БД.
	nationality: text('nationality'),
	dateOfBirth: text('date_of_birth'),
	addressLine: text('address_line'),
	city: text('city'),
	postalCode: text('postal_code'),
	countryOfResidence: text('country_of_residence'),
	marketingConsent: integer('marketing_consent', { mode: 'boolean' }).notNull().default(false),

	// Згода на обробку персональних даних (GDPR) — ОБОВ'ЯЗКОВА при
	// реєстрації (на відміну від marketingConsent, який опціональний).
	// dataProcessingConsentAt — часова мітка для аудиту (коли саме дали
	// згоду), окремо від createdAt на випадок майбутнього re-consent flow.
	dataProcessingConsent: integer('data_processing_consent', { mode: 'boolean' }).notNull().default(false),
	dataProcessingConsentAt: text('data_processing_consent_at'),

	// Фото профілю — data URL (base64), не файл на диску. Причина: Node
	// standalone на Zone.ee роздає лише те, що зібрано в dist/client на
	// етапі build — runtime-завантажені файли поза цим не роздати без
	// окремого streaming-роута. Малі фото (ресайз до ~200x200 на клієнті
	// перед відправкою, canvas) в SQLite як text — простіше й достатньо
	// для масштабу хостела. avatarSource — "upload"/"google"/"telegram",
	// щоб при повторному вручну-завантаженні не плутати походження.
	avatarUrl: text('avatar_url'),
	avatarSource: text('avatar_source'),

	// Прив'язка Google/Telegram (2026-08-30, користувач попросив "приєднати
	// телеграм та гугл" + автопідтяжку фото профілю). ЛИШЕ лінкування до
	// існуючого акаунта (гість вже залогінений паролем) — не окремий
	// спосіб входу з нуля, це свідомо простіший/безпечніший обсяг для
	// першої версії. googleId/telegramId — унікальні ID з відповідного
	// провайдера, не токени доступу (ті не зберігаються).
	googleId: text('google_id').unique(),
	telegramId: text('telegram_id').unique(),

	// Відновлення пароля. Email ще не підключено (немає SMTP) — посилання
	// поки просто показуємо на екрані замість листа, див.
	// src/pages/[locale]/account/forgot-password.astro.
	resetToken: text('reset_token'),
	resetTokenExpiresAt: text('reset_token_expires_at'),

	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Guest = typeof guests.$inferSelect;
export type NewGuest = typeof guests.$inferInsert;

// Фаза 3 (кабінет адміністратора), 2026-08-30. Проста пара логін/пароль —
// НЕ Kursor SSO (ТЗ §5.1 передбачав SSO через id.intech.org.ua з
// loopback-перевіркою до Kursor CRM, але H&H на Zone.ee shared hosting,
// не на сервері Intech (31.42.188.51) — loopback туди не дотягнеться.
// Рішення користувача 2026-08-30: простий пароль зараз, Kursor SSO —
// окрема задача пізніше, коли вирішать питання зв'язку між серверами.
// Немає публічної самореєстрації — акаунти створює лише сам розробник
// напряму в БД.
export const admins = sqliteTable('admins', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	fullName: text('full_name').notNull(),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Admin = typeof admins.$inferSelect;
export type NewAdmin = typeof admins.$inferInsert;

// Внутрішні нотатки адміна про гостя (CRM, ТЗ §5.3 "внутрішня CRM-функція
// — ліди, гості, замітки по бронюваннях"). authorId — хто написав
// (пізніше, з кількома адмінами/персоналом, буде видно хто саме).
export const guestNotes = sqliteTable('guest_notes', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	guestId: integer('guest_id')
		.notNull()
		.references(() => guests.id, { onDelete: 'cascade' }),
	authorId: integer('author_id').references(() => admins.id),
	body: text('body').notNull(),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type GuestNote = typeof guestNotes.$inferSelect;
export type NewGuestNote = typeof guestNotes.$inferInsert;
