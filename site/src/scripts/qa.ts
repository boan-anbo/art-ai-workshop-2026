export function openQuestionFromHash(container: HTMLElement) {
  let hash: string;
  try { hash = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(hash);
  if (target instanceof HTMLDetailsElement && target.matches('details.qa') && container.contains(target)) {
    target.open = true;
    target.querySelectorAll<HTMLDetailsElement>('details.original-question').forEach((item) => { item.open = true; });
    requestAnimationFrame(() => {
      target.scrollIntoView();
      target.querySelector('summary')?.focus({ preventScroll: true });
    });
  }
}

export function initializeQuestions(container: HTMLElement) {
  // Delegate from the persistent container so decrypted replacements work
  // without retaining removed questions or registering duplicate listeners.
  container.addEventListener('toggle', (event) => {
    const target = event.target;
    if (target instanceof HTMLDetailsElement && target.matches('details.qa') && target.open) {
      target.querySelectorAll<HTMLDetailsElement>('details.original-question').forEach((original) => { original.open = true; });
    }
  }, true);
  container.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const action = event.target.closest<HTMLButtonElement>('[data-qa]')?.dataset.qa;
    if (action === 'open' || action === 'close') container.querySelectorAll<HTMLDetailsElement>('details.qa').forEach((item) => { item.open = action === 'open'; });
  });
  addEventListener('hashchange', () => openQuestionFromHash(container));
  const beforePrint = new Map<HTMLDetailsElement, boolean>();
  addEventListener('beforeprint', () => {
    container.querySelectorAll<HTMLDetailsElement>('details').forEach((item) => { beforePrint.set(item, item.open); item.open = true; });
  });
  addEventListener('afterprint', () => {
    beforePrint.forEach((wasOpen, item) => { item.open = wasOpen; });
    beforePrint.clear();
  });
  return () => beforePrint.clear();
}
