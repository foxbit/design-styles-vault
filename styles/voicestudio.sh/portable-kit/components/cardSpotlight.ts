import type { PointerEvent } from 'react';

export function handleCardPointerMove(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
  el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
  el.style.setProperty('--dx', (x - 0.5).toFixed(3));
  el.style.setProperty('--dy', (y - 0.5).toFixed(3));
  el.style.setProperty('--rx', `${((0.5 - y) * 4.5).toFixed(2)}deg`);
  el.style.setProperty('--ry', `${((x - 0.5) * 5.5).toFixed(2)}deg`);
}

export function handleCardPointerLeave(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.removeProperty('--dx');
  el.style.removeProperty('--dy');
  el.style.removeProperty('--rx');
  el.style.removeProperty('--ry');
}

export function generateDeterministicPeaks(seedText: string, length = 32): number[] {
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) {
    hash = (hash * 31 + seedText.charCodeAt(i)) % 10000;
  }
  return Array.from({ length }, (_, idx) => {
    const v = Math.abs(
      Math.sin(idx * 1.45 + hash * 0.13) * 0.62 +
        Math.cos(idx * 0.58 - hash * 0.07) * 0.38
    );
    return Math.max(0.14, Math.min(1, v));
  });
}
