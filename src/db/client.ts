import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// data/app.db — в .gitignore (реальні дані гостей нізащо не в git). На
// проді шлях можна перевизначити через DATABASE_PATH (env). Файл і
// директорію SQLite створює сам при першому записі — заздалегідь нічого
// готувати не треба, крім `npm run db:push` (drizzle-kit) для схеми.
const dbPath = process.env.DATABASE_PATH || './data/app.db';

const sqlite = new Database(dbPath);
sqlite.pragma('journal_mode = WAL');

export const db = drizzle(sqlite, { schema });
