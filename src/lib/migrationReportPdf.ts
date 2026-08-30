// PDF-звіт для міграційної служби (PPA — Politsei- ja Piirivalveamet), ТЗ
// §5.3 "виведення документів для міграційної служби" + пряме прохання
// користувача 2026-08-30 ("на нашем бланке только скачать"). Естонською,
// завантажується напряму (Content-Disposition: attachment), не друк.
//
// Шрифт: pdfkit не має вбудованої кирилиці (лише 14 стандартних латинських
// PDF-шрифтів), а імена гостей можуть бути українською/російською.
// @openfonts/roboto_all покриває латиницю+кирилицю в одному файлі — АЛЕ
// лише .woff (не .woff2!) працює з поточною версією fontkit/pdfkit:
// woff2-варіант падає з "RangeError: Offset is outside the bounds of the
// DataView" під час subsetting (підтверджено емпірично 2026-08-30,
// однаково для noto-sans_all і roboto_all — це баг у fontkit з woff2,
// не з конкретним шрифтом). Тому свідомо беремо .woff, не .woff2.
import PDFDocument from 'pdfkit';
import path from 'node:path';
import type { CheckinCard } from '../db/schema';
import { property } from '../data/property';

const FONT_REGULAR = path.join(process.cwd(), 'node_modules/@openfonts/roboto_all/files/roboto-all-400.woff');
const FONT_BOLD = path.join(process.cwd(), 'node_modules/@openfonts/roboto_all/files/roboto-all-700.woff');

export interface MigrationReportRow {
	name: string;
	dateOfBirth: string;
	citizenship: string;
	documentType: string;
	documentNumber: string;
	arrivalDate: string;
	departureDate: string;
	roomBedNumber: string;
}

function documentTypeEt(type: string | null): string {
	if (type === 'passport') return 'Pass';
	if (type === 'id_card') return 'ID-kaart';
	if (type === 'other') return 'Muu';
	return '—';
}

// Основний гість + кожна супроводжуюча особа — окремим рядком (усі, хто
// фактично проживав, підлягають обліку). У супроводжуючих немає
// document-полів (форма чекіну їх не збирає) — лишаємо прочерк.
export function cardsToRows(cards: CheckinCard[]): MigrationReportRow[] {
	const rows: MigrationReportRow[] = [];
	for (const c of cards) {
		rows.push({
			name: `${c.lastName} ${c.firstName}`,
			dateOfBirth: c.dateOfBirth,
			citizenship: c.citizenship,
			documentType: documentTypeEt(c.documentType),
			documentNumber: c.documentNumber ?? '—',
			arrivalDate: c.arrivalDate,
			departureDate: c.departureDate,
			roomBedNumber: c.roomBedNumber ?? '—',
		});
		if (c.accompanying) {
			try {
				const acc = JSON.parse(c.accompanying) as { name: string; dateOfBirth: string; citizenship: string }[];
				for (const a of acc) {
					rows.push({
						name: a.name,
						dateOfBirth: a.dateOfBirth,
						citizenship: a.citizenship,
						documentType: '—',
						documentNumber: '—',
						arrivalDate: c.arrivalDate,
						departureDate: c.departureDate,
						roomBedNumber: c.roomBedNumber ?? '—',
					});
				}
			} catch {
				// пошкоджений JSON — пропускаємо супроводжуючих цього запису, основний гість вже доданий
			}
		}
	}
	return rows;
}

const COLS = [
	{ key: 'name', label: 'Nimi', width: 110 },
	{ key: 'dateOfBirth', label: 'Sünniaeg', width: 65 },
	{ key: 'citizenship', label: 'Kodakondsus', width: 75 },
	{ key: 'documentType', label: 'Dok. tüüp', width: 55 },
	{ key: 'documentNumber', label: 'Dok. nr', width: 65 },
	{ key: 'arrivalDate', label: 'Saabumine', width: 60 },
	{ key: 'departureDate', label: 'Lahkumine', width: 60 },
	{ key: 'roomBedNumber', label: 'Tuba', width: 40 },
] as const;

export function generateMigrationReportPdf(rows: MigrationReportRow[], periodFrom: string, periodTo: string): PDFKit.PDFDocument {
	const doc = new PDFDocument({ size: 'A4', margin: 40, layout: 'landscape' });
	doc.registerFont('body', FONT_REGULAR);
	doc.registerFont('bold', FONT_BOLD);

	const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
	const left = doc.page.margins.left;

	// Явні координати замість doc.y-математики — .text() сама посуває
	// курсор і легко зіштовхується з наступним рядком/прямокутником, якщо
	// покладатись на відносне позиціювання (перевірено емпірично 2026-08-30
	// — перша версія малювала текст поверх самого себе).
	function drawLetterhead(topY: number): number {
		const headHeight = 46;
		doc.rect(left, topY, pageWidth, headHeight).fill('#0b0d10');
		doc.fillColor('#f5f0e6').font('bold').fontSize(14).text(property.brand, left + 12, topY + 10, { lineBreak: false });
		doc.fillColor('#c3c7cd').font('body').fontSize(9).text(`${property.propertyName} · ${property.streetAddress}, ${property.city}, ${property.countryName}`, left + 12, topY + 29, { lineBreak: false });
		doc.fillColor('#14161a');
		return topY + headHeight + 16;
	}

	function drawTableHeader() {
		let x = left;
		doc.font('bold').fontSize(8.5).fillColor('#14161a');
		const headerY = doc.y;
		doc.rect(left, headerY, pageWidth, 18).fill('#e2e5ea');
		doc.fillColor('#14161a');
		for (const col of COLS) {
			doc.text(col.label, x + 4, headerY + 5, { width: col.width - 6 });
			x += col.width;
		}
		doc.y = headerY + 18;
	}

	let y = drawLetterhead(doc.page.margins.top);
	doc.fillColor('#14161a').font('bold').fontSize(12).text('Külaliste nimekiri Politsei- ja Piirivalveametile', left, y, { lineBreak: false });
	y += 20;
	doc.fillColor('#5b6068').font('body').fontSize(9).text(`Periood: ${periodFrom} – ${periodTo}`, left, y, { lineBreak: false });
	y += 14;
	doc.text(`Koostatud: ${new Date().toISOString().slice(0, 10)}`, left, y, { lineBreak: false });
	y += 22;
	doc.fillColor('#14161a');
	doc.y = y;

	drawTableHeader();

	doc.font('body').fontSize(8.5);
	for (const row of rows) {
		const rowY = doc.y;
		const rowHeight = 16;

		if (rowY + rowHeight > doc.page.height - doc.page.margins.bottom) {
			doc.addPage();
			doc.y = doc.page.margins.top;
			drawTableHeader();
			doc.font('body').fontSize(8.5);
		}

		let x = left;
		const y = doc.y;
		for (const col of COLS) {
			doc.fillColor('#14161a').text(String(row[col.key as keyof MigrationReportRow] ?? '—'), x + 4, y + 3, { width: col.width - 6, ellipsis: true });
			x += col.width;
		}
		doc.moveTo(left, y + rowHeight).lineTo(left + pageWidth, y + rowHeight).strokeColor('#e2e5ea').lineWidth(0.5).stroke();
		doc.y = y + rowHeight;
	}

	if (rows.length === 0) {
		doc.font('body').fontSize(9).fillColor('#5b6068').text('Selle perioodi kohta andmed puuduvad.', left, doc.y + 8);
	}

	return doc;
}
