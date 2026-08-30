// Завантаження PDF-звіту для міграційної служби (2026-08-30, "только
// скачать а не как у тебя сейчас печать") — на відміну від інвойсу
// (браузерний друк), тут справжній файл з Content-Disposition: attachment.
import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { checkinCards } from '../../../db/schema';
import { and, gte, lte } from 'drizzle-orm';
import { generateMigrationReportPdf, cardsToRows } from '../../../lib/migrationReportPdf';

export const prerender = false;

export const GET: APIRoute = async ({ url, session, redirect }) => {
	const adminId = await session?.get('adminId');
	if (!adminId) return redirect('/admin/login');

	const from = url.searchParams.get('from') || '';
	const to = url.searchParams.get('to') || '';
	if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
		return new Response('Invalid date range', { status: 400 });
	}

	// Картки, де перебування перетинається з періодом (заїзд у межах
	// періоду АБО виїзд у межах періоду — так не губимо гостей, що
	// заїхали до початку періоду й виїхали під час нього).
	const cards = db
		.select()
		.from(checkinCards)
		.where(and(gte(checkinCards.arrivalDate, from), lte(checkinCards.arrivalDate, to)))
		.all();

	const rows = cardsToRows(cards);
	const doc = generateMigrationReportPdf(rows, from, to);

	const chunks: Buffer[] = [];
	const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
		doc.on('data', (chunk: Buffer) => chunks.push(chunk));
		doc.on('end', () => resolve(Buffer.concat(chunks)));
		doc.on('error', reject);
		doc.end();
	});

	return new Response(new Uint8Array(pdfBuffer), {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="hha-migration-report-${from}_${to}.pdf"`,
		},
	});
};
