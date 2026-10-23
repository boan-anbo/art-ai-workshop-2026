// Build/server only. The password and derived key never enter the client bundle.
// This shared-password reading gate does not privatize the public source repo.
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { QA_AAD, type QaPayload } from './qa-payload';

export function encryptQa(html: string): QaPayload {
  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const iterations = 600_000;
  const key = pbkdf2Sync(process.env.WORKSHOP_PASSWORD || 'cuhk2026', salt, iterations, 32, 'sha256');
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(Buffer.from(QA_AAD));
  const encrypted = Buffer.concat([cipher.update(html, 'utf8'), cipher.final(), cipher.getAuthTag()]);
  key.fill(0);
  return { version: 1, iterations, salt: salt.toString('base64'), iv: iv.toString('base64'), ciphertext: encrypted.toString('base64') };
}
