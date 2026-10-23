import { isQaPayload, QA_AAD, type QaPayload } from '../lib/qa-payload';
import { initializeQuestions, openQuestionFromHash } from './qa';

const encoder = new TextEncoder();
function decode(value: string): Uint8Array<ArrayBuffer> {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}
function encode(value: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(value)));
}
async function decrypt(payload: QaPayload, rawKey: Uint8Array<ArrayBuffer>) {
  const key = await crypto.subtle.importKey('raw', rawKey, 'AES-GCM', false, ['decrypt']);
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(payload.iv), additionalData: encoder.encode(QA_AAD), tagLength: 128 }, key, decode(payload.ciphertext));
  return new TextDecoder().decode(plain);
}

export async function initializeQaGate() {
  const form = document.querySelector<HTMLFormElement>('#qa-unlock-form');
  const input = document.querySelector<HTMLInputElement>('#qa-password');
  const gate = document.querySelector<HTMLElement>('#qa-gate');
  const content = document.querySelector<HTMLElement>('#qa-content');
  const status = document.querySelector<HTMLElement>('#qa-gate-status');
  const bar = document.querySelector<HTMLElement>('.qa-unlocked-bar');
  const lockButton = document.querySelector<HTMLButtonElement>('#qa-lock');
  const submit = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
  const source = document.querySelector<HTMLScriptElement>('#qa-payload');
  if (!form || !input || !gate || !content || !status || !bar || !lockButton || !source || !submit) return;
  form.addEventListener('submit', (event) => event.preventDefault());
  if (!crypto.subtle) {
    status.textContent = '此瀏覽器未能使用本機解密。請以支援 Web Crypto 的瀏覽器，透過 HTTPS 或本機預覽開啟。';
    submit.disabled = true;
    return;
  }
  let rawPayload: unknown;
  try { rawPayload = JSON.parse(source.textContent ?? ''); } catch { status.textContent = '問答資料未能載入，請重新整理頁面。'; return; }
  if (!isQaPayload(rawPayload)) { status.textContent = '問答資料格式不符，請聯絡講者。'; return; }
  submit.disabled = false;
  const payload = rawPayload;
  const storageKey = 'art-workshop-qa-session';
  const clearPrintState = initializeQuestions(content);
  const unlock = (html: string) => {
    // Only authenticated, locally built markup is inserted; no remote HTML.
    content.innerHTML = html;
    content.hidden = false;
    gate.hidden = true;
    bar.hidden = false;
    input.value = '';
    status.textContent = '';
    openQuestionFromHash(content);
    if (!location.hash.startsWith('#q-')) content.querySelector<HTMLButtonElement>('[data-qa]')?.focus({ preventScroll: true });
  };
  const forget = () => { try { sessionStorage.removeItem(storageKey); } catch { /* Browser storage may be disabled. */ } };
  lockButton.addEventListener('click', () => {
    forget();
    clearPrintState();
    content.replaceChildren();
    content.hidden = true;
    bar.hidden = true;
    gate.hidden = false;
    form.reset();
    status.textContent = '問答已鎖定。';
    input.focus({ preventScroll: true });
    gate.closest('section')?.scrollIntoView();
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    submit.disabled = true;
    input.disabled = true;
    input.removeAttribute('aria-invalid');
    status.textContent = '正在本機解鎖…';
    try {
      const password = await crypto.subtle.importKey('raw', encoder.encode(input.value), 'PBKDF2', false, ['deriveBits']);
      const rawKey = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: decode(payload.salt), iterations: payload.iterations }, password, 256);
      const html = await decrypt(payload, new Uint8Array(rawKey));
      try { sessionStorage.setItem(storageKey, JSON.stringify({ salt: payload.salt, key: encode(rawKey) })); } catch { /* Reading still works without session persistence. */ }
      new Uint8Array(rawKey).fill(0);
      unlock(html);
    } catch {
      forget();
      input.setAttribute('aria-invalid', 'true');
      status.textContent = '未能解鎖。請檢查工作坊密碼；若仍失敗，請重新整理或向講者查詢。';
    } finally {
      submit.disabled = false;
      input.disabled = false;
      if (!gate.hidden) input.focus();
    }
  });
  addEventListener('hashchange', () => {
    if (content.hidden && location.hash.startsWith('#q-')) gate.closest('section')?.scrollIntoView();
  });
  // Cache only the derived key for this build's salt, never the password or
  // plaintext. A changed build or explicit lock invalidates the session.
  try {
    const saved: unknown = JSON.parse(sessionStorage.getItem(storageKey) ?? 'null');
    if (typeof saved === 'object' && saved !== null && 'salt' in saved && saved.salt === payload.salt && 'key' in saved && typeof saved.key === 'string') {
      unlock(await decrypt(payload, decode(saved.key)));
      return;
    }
    forget();
  } catch { forget(); }
  if (location.hash.startsWith('#q-')) requestAnimationFrame(() => gate.closest('section')?.scrollIntoView());
}
