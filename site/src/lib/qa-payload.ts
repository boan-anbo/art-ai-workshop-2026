export const QA_AAD = 'art-ai-workshop-2026:qa:v1';
export interface QaPayload {
  version: 1;
  iterations: number;
  salt: string;
  iv: string;
  ciphertext: string;
}
export function isQaPayload(value: unknown): value is QaPayload {
  return typeof value === 'object' && value !== null
    && 'version' in value && value.version === 1
    && 'iterations' in value && value.iterations === 600_000
    && 'salt' in value && typeof value.salt === 'string'
    && 'iv' in value && typeof value.iv === 'string'
    && 'ciphertext' in value && typeof value.ciphertext === 'string';
}
