import { initializeQaGate } from './qa-gate';

// Static content remains readable without JavaScript. Enhance only navigation,
// clipboard controls and the existing native Q&A disclosures.
const root = document.documentElement;
const sections = [...document.querySelectorAll<HTMLElement>('[data-book-section]')];
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
const progress = document.querySelector<HTMLElement>('.reading-progress');
const runningHead = document.querySelector<HTMLElement>('.running-head');
const toggle = document.querySelector<HTMLButtonElement>('.rail-toggle');
const mobileToc = document.querySelector<HTMLDetailsElement>('.mobile-toc');

function setCollapsed(collapsed: boolean) {
  root.dataset.spineCollapsed = String(collapsed);
  toggle?.setAttribute('aria-expanded', String(!collapsed));
  toggle?.setAttribute('aria-label', collapsed ? '展開目錄' : '收起目錄');
  if (toggle) toggle.title = collapsed ? '展開目錄' : '收起目錄';
}

if (toggle) {
  toggle.hidden = false;
  try { setCollapsed(sessionStorage.getItem('art-workshop-spine-collapsed') === 'true'); } catch { setCollapsed(false); }
  toggle.addEventListener('click', () => {
    const collapsed = root.dataset.spineCollapsed !== 'true';
    setCollapsed(collapsed);
    try { sessionStorage.setItem('art-workshop-spine-collapsed', String(collapsed)); } catch { /* Optional reading preference. */ }
  });
}

let frame = 0;
function updateReadingPosition() {
  frame = 0;
  const max = root.scrollHeight - innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0})`;
  const current = sections.filter((section) => section.getBoundingClientRect().top <= 128).at(-1);
  links.forEach((link) => {
    if (link.dataset.sectionLink === current?.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (runningHead) runningHead.textContent = current?.dataset.bookSection ?? '';
}
function scheduleReadingPosition() {
  if (!frame) frame = requestAnimationFrame(updateReadingPosition);
}
addEventListener('scroll', scheduleReadingPosition, { passive: true });
addEventListener('resize', scheduleReadingPosition);
new ResizeObserver(scheduleReadingPosition).observe(document.body);
updateReadingPosition();

links.forEach((link) => link.addEventListener('click', () => { if (mobileToc) mobileToc.open = false; }));
addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileToc?.open) {
    mobileToc.open = false;
    mobileToc.querySelector('summary')?.focus();
  }
});
document.addEventListener('click', (event) => {
  if (mobileToc?.open && event.target instanceof Node && !mobileToc.contains(event.target)) mobileToc.open = false;
});

document.querySelectorAll<HTMLButtonElement>('[data-copy-target]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const targetId = button.dataset.copyTarget;
    const prompt = targetId ? document.getElementById(targetId) : null;
    const status = button.closest('.doc-frame')?.querySelector<HTMLElement>('.copy-status');
    if (!prompt || !status) return;
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(prompt.textContent?.trim() ?? '');
      status.textContent = '已複製，可貼進你的 coding agent。';
    } catch {
      const selection = getSelection();
      const range = document.createRange();
      range.selectNodeContents(prompt);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = '未能自動複製。已選取提示，請手動複製。';
    }
  });
});


void initializeQaGate();
