import bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';

export async function hashPassword(password: string): Promise<string> {
	return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
	return bcrypt.compare(password, hash);
}

export function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function generateResetToken(): string {
	return randomBytes(24).toString('hex');
}
