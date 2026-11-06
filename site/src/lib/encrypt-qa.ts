// Build/server only. The password and derived key never enter the client bundle.
// This shared-password reading gate does not privatize the public source repo.
import { QA_AAD, type QaPayload } from './qa-payload';

function toBase64(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export async function encryptQa(html: string): Promise<QaPayload> {
  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const iterations = 600_000;
  // The password comes only from the environment (a GitHub Actions secret when deployed;
  // set WORKSHOP_PASSWORD in your shell to build locally). Never write it in this file.
  const password = import.meta.env.WORKSHOP_PASSWORD;
  if (!password) throw new Error('WORKSHOP_PASSWORD is not set: the Q&A cannot be encrypted.');
  const baseKey = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey']);
  const aesKey = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );
  const encrypted = new Uint8Array(
    await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv, additionalData: encoder.encode(QA_AAD) },
      aesKey,
      encoder.encode(html),
    ),
  );
  return {
    version: 1,
    iterations,
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(encrypted),
  };
}
