import 'dotenv/config';
import nodemailer from 'nodemailer';

// SMTP-дані — в .env (SMTP_HOST/PORT/USER/PASS/FROM), файл в .gitignore,
// нізащо не в git. Якщо .env ще не заповнений — transporter створюється,
// але відправка впаде з зрозумілою помилкою (не мовчки).
function getTransporter() {
	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT || 587);
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;

	if (!host || !user || !pass) {
		throw new Error('SMTP не налаштований — заповніть SMTP_HOST/SMTP_USER/SMTP_PASS в .env');
	}

	return nodemailer.createTransport({
		host,
		port,
		secure: port === 465,
		auth: { user, pass },
	});
}

export async function sendMail(to: string, subject: string, html: string, text?: string) {
	const transporter = getTransporter();
	const from = process.env.SMTP_FROM || process.env.SMTP_USER;
	await transporter.sendMail({ from, to, subject, html, text: text ?? html.replace(/<[^>]+>/g, '') });
}
