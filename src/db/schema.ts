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

	// Прив'язка до організації (2026-08-30, "возможность привязать профиль
	// к организации") — на відміну від companyName/companyRegCode вище
	// (дані компанії, продубльовані на КОЖНОМУ гостьовому акаунті),
	// organizationId веде на ОДИН спільний запис, який може бути в кількох
	// гостей одразу (напр. кілька співробітників однієї компанії) —
	// дедуплікується по regCode при збереженні (organizations.regCode
	// unique), див. src/pages/[locale]/account/edit.astro.
	organizationId: integer('organization_id').references(() => organizations.id, { onDelete: 'set null' }),

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

	// Відновлення пароля — SMTP підключено (див. src/lib/mailer.ts),
	// посилання йде реальним листом.
	resetToken: text('reset_token'),
	resetTokenExpiresAt: text('reset_token_expires_at'),

	// Підтвердження email (Фаза 5, 2026-08-30) — "м'яка" верифікація: не
	// блокує вхід/бронювання, лише позначає акаунт як підтверджений
	// (видно в адмінці, і на майбутнє — можна буде вимагати для певних дій).
	// OAuth/Telegram-акаунти вважаються підтвердженими одразу (email прийшов
	// від довіреного провайдера, окрема верифікація не потрібна).
	emailVerified: integer('email_verified', { mode: 'boolean' }).notNull().default(false),
	emailVerificationToken: text('email_verification_token'),

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

// Номери, керовані адміном (ТЗ §5.3 "управление номерами: описание, цены,
// доступность"). Замінює хардкод в src/data/amenities.ts (roomTypes) +
// src/data/pricing.ts (rates) + src/i18n/amenities.ts (rooms.*) —
// landing.astro тепер читає звідси, а не з тих файлів (ті лишились як
// джерело seed-даних при міграції, самі більше на сторінку не впливають).
// titles/beds/guests — JSON-текст {en,et,uk,ru,lv,fi}, той самий набір
// текстів, що раніше жив у i18n-файлі, просто тепер редагований з панелі.
// isActive — вимкнути показ номера на сайті без видалення (проста форма
// "доступності", без прив'язки до конкретних дат — та вимагає системи
// бронювання, Фаза 4).
export const rooms = sqliteTable('rooms', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	slug: text('slug').notNull().unique(),
	sortOrder: integer('sort_order').notNull().default(0),
	isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),

	pricePerNightCents: integer('price_per_night_cents').notNull(),
	priceWeekCents: integer('price_week_cents'),
	priceTwoWeeksCents: integer('price_two_weeks_cents'),
	pricePerMonthCents: integer('price_per_month_cents'),

	titles: text('titles').notNull(),
	beds: text('beds').notNull(),
	guests: text('guests').notNull(),

	// Скільки фізичних одиниць цього типу можна бронювати одночасно
	// (Фаза 4, ТЗ §5.4 — календар бронювань). Наприклад: 1 сімейний номер,
	// але кілька окремих ліжок у спільній кімнаті — тоді quantity=4 і 4
	// різні бронювання на ті самі дати не конфліктують, доки їх < quantity.
	// За замовчуванням 1 (безпечне консервативне припущення) — РЕАЛЬНУ
	// кількість по кожному номеру має виставити власник в адмінці, я не
	// знаю фактичну кількість ліжок/кімнат кожного типу.
	quantity: integer('quantity').notNull().default(1),

	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Room = typeof rooms.$inferSelect;
export type NewRoom = typeof rooms.$inferInsert;

// Фото номера — data URL (base64), той самий підхід, що й фото профілю
// гостя (немає runtime-writable директорії, яку роздає Node standalone).
// sortOrder=0 — те, що показується на картці номера на лендінгу.
export const roomPhotos = sqliteTable('room_photos', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	roomId: integer('room_id')
		.notNull()
		.references(() => rooms.id, { onDelete: 'cascade' }),
	photoUrl: text('photo_url').notNull(),
	sortOrder: integer('sort_order').notNull().default(0),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type RoomPhoto = typeof roomPhotos.$inferSelect;
export type NewRoomPhoto = typeof roomPhotos.$inferInsert;

// Бронювання (Фаза 4, ТЗ §5.4). Власний календар без синхронізації з
// Booking.com (клієнт підтвердив 2026-08-29: доступу до Partner/Content
// API ще нема — "почни з власного календаря без синхронізації"). Тому це
// дублює лише ті ночі, що пройшли через наш власний віджет — overbooking
// щодо зовнішніх каналів (Booking.com і т.д.) можливий і має вирішуватись
// вручну адміном, поки немає реальної інтеграції.
//
// guestId — nullable: бронювання можливе без акаунта (guest checkout),
// onDelete: 'set null' — видалення акаунта гостя НЕ видаляє історію
// бронювань (потрібно для обліку/бухгалтерії), просто відв'язує запис.
// fullName/email/phone продубльовані тут навіть коли guestId є — бронь
// лишається самодостатньою навіть якщо акаунт гостя пізніше видалять.
//
// checkIn/checkOut — дати 'YYYY-MM-DD' (без часу; час заїзду/виїзду
// фіксований політикою готелю: заїзд 10:00–22:00, виїзд — див. FAQ).
//
// pricePerNightCents — знімок ціни номера на момент бронювання (щоб
// пізніша зміна ціни в адмінці не змінювала заднім числом вже оформлені
// брони). totalCents v1 = nights × pricePerNightCents — тижневі/місячні
// пакетні ціни (priceWeekCents і т.д.) поки НЕ застосовуються автоматично
// до бронювання, це лише інформаційні "пакети" на лендінгу; коли дійде
// платіжна інтеграція — можна додати автоматичний вибір найвигіднішого
// тарифу.
//
// status: pending (очікує підтвердження адміном) | confirmed | cancelled
// | completed (проживання завершилось — тригер для нарахування балів).
// paymentStatus: unpaid | paid | refunded. paymentMethod: null, доки
// гість не обрав на кроці оплати ('cash' | 'bank_transfer' | 'revolut' —
// Revolut Pay ще не підключено, чекаємо Merchant API ключі).
//
// pointsAwarded — прапорець, щоб не нарахувати бали двічі, якщо адмін
// випадково повторно позначить бронювання як completed.
export const bookings = sqliteTable('bookings', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	roomId: integer('room_id')
		.notNull()
		.references(() => rooms.id),
	guestId: integer('guest_id').references(() => guests.id, { onDelete: 'set null' }),

	fullName: text('full_name').notNull(),
	email: text('email').notNull(),
	phone: text('phone').notNull(),

	// Канал, яким прийшло бронювання — 'website' (наш власний флоу,
	// проставляється автоматично) | 'phone' | 'email' | 'booking_com'
	// (останні три — коли адмін вносить бронювання вручну, бо гість
	// звернувся не через сайт). За проханням користувача 2026-08-30.
	source: text('source').notNull().default('website'),

	// Мова, якою гість оформив бронювання (2026-08-30) — щоб автоматичні
	// листи (оплата підтверджена, нагадування, подяка) йшли ту ж мовою, що
	// й початкове підтвердження, а не завжди англійською "за замовчуванням".
	locale: text('locale').notNull().default('en'),

	checkIn: text('check_in').notNull(),
	checkOut: text('check_out').notNull(),
	nights: integer('nights').notNull(),
	guestsCount: integer('guests_count').notNull().default(1),

	pricePerNightCents: integer('price_per_night_cents').notNull(),
	// totalCents — вже ПІСЛЯ знижки (реальна сума до оплати). discountCents/
	// promotionId — знімок застосованої акції на момент бронювання (та
	// сама причина, що й pricePerNightCents-снепшот: пізніша зміна/
	// видалення акції не повинна заднім числом міняти вже оформлені брони).
	totalCents: integer('total_cents').notNull(),
	discountCents: integer('discount_cents').notNull().default(0),
	promotionId: integer('promotion_id').references(() => promotions.id, { onDelete: 'set null' }),

	status: text('status').notNull().default('pending'),
	paymentStatus: text('payment_status').notNull().default('unpaid'),
	paymentMethod: text('payment_method'),
	// Revolut Merchant API order id — для перевірки статусу оплати на
	// сервері (GET /orders/{id}) перед тим, як довіряти client-side onSuccess.
	paymentRef: text('payment_ref'),
	// Хостована сторінка оплати Revolut (order.checkout_url) — 2026-08-30:
	// відмовились від вбудованого JS-віджета (RevolutCheckout embed.js),
	// бо попап відкривався порожнім (ймовірно, домен hha.ee не
	// зареєстрований в налаштуваннях Merchant API для embed — Revolut
	// вимагає цього для вбудованих попапів). Проста навігація на
	// хостовану сторінку Revolut такого обмеження не має.
	paymentCheckoutUrl: text('payment_checkout_url'),

	specialRequests: text('special_requests'),

	pointsAwarded: integer('points_awarded', { mode: 'boolean' }).notNull().default(false),

	// Автоматичні тригерні листи (Фаза 5, 2026-08-30 — "нагадування,
	// подяка після виїзду"), надсилає src/lib/scheduler.ts. Часові мітки,
	// не boolean — щоб бачити КОЛИ надіслано (діагностика), і як прапорець
	// "не надсилати вдруге".
	reminderSentAt: text('reminder_sent_at'),
	thankYouSentAt: text('thank_you_sent_at'),

	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;

// Живий чат на сайті (Фаза 5, ТЗ §5.5 "онлайн-чат на сайте → Telegram-бот").
// visitorToken — випадковий рядок в cookie відвідувача (не потребує
// акаунта — і гість без реєстрації може написати); guestId — якщо гість
// залогінений, прив'язуємо для контексту (ім'я/email видно команді).
// Один visitorToken = один тред (проста модель, без "закриття" треду —
// нова розмова просто продовжує той самий тред, як в більшості
// live-chat віджетів).
export const chatThreads = sqliteTable('chat_threads', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	visitorToken: text('visitor_token').notNull().unique(),
	guestId: integer('guest_id').references(() => guests.id, { onDelete: 'set null' }),
	visitorName: text('visitor_name'),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
	lastMessageAt: text('last_message_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type ChatThread = typeof chatThreads.$inferSelect;
export type NewChatThread = typeof chatThreads.$inferInsert;

// sender: 'visitor' | 'team'. telegramMessageId — id повідомлення, яке МИ
// надіслали в Telegram при пересилці (не вхідного) — потрібен, щоб
// зв'язати "reply" команди в Telegram із конкретним тредом (команда
// відповідає через Telegram reply на конкретне повідомлення-пересилку,
// вебхук дивиться reply_to_message.message_id і шукає його тут).
export const chatMessages = sqliteTable('chat_messages', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	threadId: integer('thread_id')
		.notNull()
		.references(() => chatThreads.id, { onDelete: 'cascade' }),
	sender: text('sender').notNull(),
	body: text('body').notNull(),
	telegramMessageId: integer('telegram_message_id'),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type NewChatMessage = typeof chatMessages.$inferInsert;

// Külastajakaart / картка гостя (Фаза 2/3, закриває відкрите питання №1
// з ТЗ — точний перелік полів для обліку проживаючих за естонським
// законом, шаблон надав користувач 2026-08-30). Естонський закон вимагає
// зберігати заповнені картки 2 роки — тому НІЧОГО не видаляється
// автоматично; ручне видалення (адмін) можливе, але без auto-purge.
//
// bookingId — nullable: картку можна заповнити і без існуючого
// онлайн-бронювання (walk-in гість). Якщо є — дані бронювання (дати,
// контакти) підтягуються для автозаповнення.
//
// accompanying — JSON-текст [{name, dateOfBirth, citizenship}], бо
// кількість супроводжуючих осіб довільна (0 і більше).
//
// guestSignatureDataUrl — підпис гостя, намальований на canvas (той
// самий підхід, що й фото профілю/номерів — base64 data URL напряму в
// SQLite, без файлової системи). guestSignedAt — коли підписано.
//
// "Для адміністратора" (секція форми) — заповнюється НЕ гостем, а
// ресепшеном ПІСЛЯ звірки з оригіналом паспорта/ID: roomBedNumber,
// documentType/documentNumber, і хто саме перевірив (receptionistId +
// час) — це вже автентифікована адмін-сесія, тому окремий "підпис
// адміністратора" на canvas не потрібен (обрано свідомо, замість
// малювати ще один canvas — авторизований adminId вже дає надійніший
// аудиторський слід, ніж скан підпису).
export const checkinCards = sqliteTable('checkin_cards', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	bookingId: integer('booking_id').references(() => bookings.id, { onDelete: 'set null' }),
	// Прив'язка до акаунта лояльності (Фаза 2/5, 2026-08-30) — при поданні
	// картки: якщо гість з таким email вже є — прив'язуємо; якщо немає —
	// створюємо новий акаунт автоматично з даних анкети (само-чекін через
	// QR/посилання від адміна реєструє гостя в бонусній системі без
	// окремої форми реєстрації). newAccountCreated — щоб лист підтвердження
	// міг показати "ми створили для вас акаунт" лише один раз.
	guestId: integer('guest_id').references(() => guests.id, { onDelete: 'set null' }),
	newAccountCreated: integer('new_account_created', { mode: 'boolean' }).notNull().default(false),

	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	dateOfBirth: text('date_of_birth').notNull(),
	citizenship: text('citizenship').notNull(),

	country: text('country').notNull(),
	city: text('city').notNull(),
	street: text('street').notNull(),
	zipCode: text('zip_code').notNull(),

	phone: text('phone').notNull(),
	email: text('email').notNull(),

	accompanying: text('accompanying'),

	arrivalDate: text('arrival_date').notNull(),
	departureDate: text('departure_date').notNull(),

	consentAccepted: integer('consent_accepted', { mode: 'boolean' }).notNull().default(false),
	guestSignatureDataUrl: text('guest_signature_data_url'),
	guestSignedAt: text('guest_signed_at'),

	roomBedNumber: text('room_bed_number'),
	documentType: text('document_type'),
	documentTypeOther: text('document_type_other'),
	documentNumber: text('document_number'),
	receptionistId: integer('receptionist_id').references(() => admins.id),
	verifiedAt: text('verified_at'),

	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type CheckinCard = typeof checkinCards.$inferSelect;
export type NewCheckinCard = typeof checkinCards.$inferInsert;

// Акції/знижки (за проханням користувача 2026-08-30 — "розділ промоакцій
// щоб робити знижки"). Без кодів купонів (гість нічого не вводить) —
// автоматично застосовується, якщо дати бронювання перетинаються з
// [startDate, endDate] знижки і номер підходить (roomId=null — на всі
// номери). discountType: 'percent' (1-100) | 'fixed' (€, в центах, за всю
// бронь). Кілька активних знижок на ті самі дати теоретично можливі —
// застосовуємо ту, що дає найбільшу знижку (не сумуємо, щоб не піти в
// мінус і не заплутати гостя).
export const promotions = sqliteTable('promotions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	roomId: integer('room_id').references(() => rooms.id, { onDelete: 'cascade' }),
	label: text('label').notNull(),
	discountType: text('discount_type').notNull(),
	discountValue: integer('discount_value').notNull(),
	startDate: text('start_date').notNull(),
	endDate: text('end_date').notNull(),
	isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Promotion = typeof promotions.$inferSelect;
export type NewPromotion = typeof promotions.$inferInsert;

// Історія маркетингових розсилок (Фаза 5, 2026-08-30) — адмін пише
// тему+текст, надсилаємо одразу (синхронно в тому ж запиті) усім гостям
// з marketingConsent=true. Без черги/зовнішнього сервісу розсилок —
// об'єм бази гостей малий, синхронного надсилання в межах одного запиту
// достатньо; recipientCount — знімок на момент відправки (скільки
// реально отримали).
export const marketingCampaigns = sqliteTable('marketing_campaigns', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	subject: text('subject').notNull(),
	bodyHtml: text('body_html').notNull(),
	recipientCount: integer('recipient_count').notNull().default(0),
	sentByAdminId: integer('sent_by_admin_id').references(() => admins.id),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type MarketingCampaign = typeof marketingCampaigns.$inferSelect;
export type NewMarketingCampaign = typeof marketingCampaigns.$inferInsert;

// Організації (2026-08-30) — спільний запис компанії, до якого можуть
// прив'язатись кілька гостьових акаунтів (guests.organizationId). regCode
// unique — природний ключ для дедуплікації: якщо гість вказує вже відомий
// реєстраційний код, прив'язуємо до існуючого запису замість дублювання.
export const organizations = sqliteTable('organizations', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	regCode: text('reg_code').unique(),
	vat: text('vat'),
	address: text('address'),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;

// Інвойси (2026-08-30, "инвойсы данные компании ... должен быть на
// фирменом бланке") — прив'язані до конкретного бронювання, дані
// одержувача (bill-to) — знімок на момент видачі (щоб пізніша зміна
// профілю гостя/організації не міняла заднім числом вже видані інвойси).
// Платіжні реквізити відправника (P&G Grupp AS, IBAN/BIC) — статичні,
// беруться напряму з src/data/property.ts на бланку, в таблиці не
// дублюються.
export const invoices = sqliteTable('invoices', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	bookingId: integer('booking_id')
		.notNull()
		.references(() => bookings.id, { onDelete: 'cascade' }),
	organizationId: integer('organization_id').references(() => organizations.id),
	invoiceNumber: text('invoice_number').notNull().unique(),
	issueDate: text('issue_date').notNull(),
	dueDate: text('due_date'),
	billToName: text('bill_to_name').notNull(),
	billToAddress: text('bill_to_address'),
	billToRegCode: text('bill_to_reg_code'),
	billToVat: text('bill_to_vat'),
	amountExclVatCents: integer('amount_excl_vat_cents').notNull(),
	vatCents: integer('vat_cents').notNull(),
	amountTotalCents: integer('amount_total_cents').notNull(),
	status: text('status').notNull().default('issued'),
	createdByAdminId: integer('created_by_admin_id').references(() => admins.id),
	createdAt: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export type Invoice = typeof invoices.$inferSelect;
export type NewInvoice = typeof invoices.$inferInsert;
