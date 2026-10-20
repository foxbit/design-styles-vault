import { useEffect, useRef } from 'react';

type AsciiVariant = 'hero' | 'footer' | 'card';

interface AsciiBackdropProps {
  variant?: AsciiVariant;
  className?: string;
}

const CHARS = ' .·:-=+*#%@';

const VARIANT_CONFIG: Record<
  AsciiVariant,
  { w: number; h: number; peak: number; bandBias: number }
> = {
  card: { w: 11, h: 17, peak: 0.5, bandBias: 0 },
  footer: { w: 12, h: 19, peak: 0.36, bandBias: 0 },
  hero: { w: 13, h: 20, peak: 0.28, bandBias: 0.22 },
};

const FRAME_MS = 1000 / 30;
const TAU = Math.PI * 2;

/**
 * Exact Hero/Card wave field function extracted from voicestudio.sh (EarlyAccessForm-CDxYvBQ6.js)
 */
function sampleHeroWave(
  col: number,
  row: number,
  time: number,
  cols: number,
  rows: number,
  bandBias: number
): number {
  const nx = col / cols;
  const ny = row / rows;
  const field =
    0.5 +
    0.5 *
      (Math.sin(col * 0.085 + time * 0.55 + Math.sin(row * 0.14 - time * 0.35) * 1.7) * 0.5 +
        Math.sin(row * 0.12 - time * 0.3 + col * 0.045) * 0.3 +
        Math.sin((col + row) * 0.052 + time * 0.22) * 0.2);

  const ridge =
    0.5 -
    bandBias +
    Math.sin(nx * TAU * 1.5 + time * 0.7) * 0.16 +
    Math.sin(nx * TAU * 3.7 - time * 1.1) * 0.06;

  const band = Math.exp(-(((ny - ridge) / 0.085) ** 2));
  return Math.min(1, field * 0.42 + band * 0.95);
}

/**
 * Exact Footer 3-harmonic voice wave function extracted from voicestudio.sh (EarlyAccessForm-CDxYvBQ6.js)
 */
function sampleFooterWave(
  col: number,
  row: number,
  time: number,
  cols: number,
  rows: number,
  px: number,
  py: number,
  strength: number
): number {
  const nx = col / cols;
  const ny = row / rows;
  let val = 0.05 + 0.05 * Math.sin(nx * 9 + ny * 6 + time * 0.4);
  const focusX = Math.exp(-(((nx - px) / 0.2) ** 2));

  for (let i = 0; i < 3; i++) {
    const base = 0.3 + i * 0.22;
    const center = base + (py - base) * 0.35 * strength * focusX;
    const amp = 0.035 + 0.02 * Math.sin(time * 0.5 + i * 2) + focusX * strength * (0.11 + 0.05 * i);
    const dist =
      (ny -
        (center +
          (Math.sin(nx * (16 + i * 5) - time * (1.7 + i * 0.5) + i) * 0.6 +
            Math.sin(nx * (37 + i * 9) + time * (2.3 + i * 0.4)) * 0.4) *
            amp)) /
      0.028;
    val += Math.exp(-dist * dist) * (0.55 + 0.45 * focusX * strength);
  }

  if (strength > 0.02) {
    const dx = (nx - px) * (cols / rows);
    const dy = ny - py;
    const d = Math.sqrt(dx * dx + dy * dy);
    val +=
      Math.exp(-(((d - ((time * 0.18) % 0.45)) / 0.03) ** 2)) *
      0.25 *
      strength *
      (1 - d / 0.6 > 0 ? 1 - d / 0.6 : 0);
  }

  return Math.min(1, val);
}

export function AsciiBackdrop({ variant = 'hero', className = '' }: AsciiBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !parent || !ctx) return;

    const { w: cellW, h: cellH, peak, bandBias } = VARIANT_CONFIG[variant];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let fontFamily = 'monospace';
    let rafId = 0;
    let lastFrameTime = 0;
    let isVisible = true;
    let isDisposed = false;
    const pointer = { x: -1, y: -1, strength: 0 };
    const startTime = performance.now();

    function renderFrame(elapsedSec: number) {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cols * cellW, rows * cellH);
      ctx.font = `${cellH * 0.78}px ${fontFamily}`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      const buckets: number[][] = CHARS.split('').map(() => []);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let val =
            variant === 'footer'
              ? sampleFooterWave(
                  c,
                  r,
                  elapsedSec,
                  cols,
                  rows,
                  pointer.x / (cols * cellW),
                  pointer.y / (rows * cellH),
                  pointer.strength
                )
              : sampleHeroWave(c, r, elapsedSec, cols, rows, bandBias);

          if (variant !== 'footer' && pointer.strength > 0.01) {
            const dx = (c * cellW - pointer.x) / 140;
            const dy = (r * cellH - pointer.y) / 140;
            const dist = Math.sqrt(dx * dx + dy * dy);
            val +=
              Math.exp(-dist * dist) *
              0.6 *
              pointer.strength *
              (0.6 + 0.4 * Math.sin(dist * 7 - elapsedSec * 5));
          }

          const idx = Math.max(0, Math.min(10, Math.floor(val * 11)));
          if (idx > 0) {
            buckets[idx].push(c, r);
          }
        }
      }

      for (let i = 1; i < 11; i++) {
        const coords = buckets[i];
        if (!coords.length) continue;
        const norm = i / 10;
        ctx.fillStyle = `rgba(244, 237, 224, ${(0.05 + norm * norm * peak).toFixed(3)})`;
        const ch = CHARS[i];
        for (let j = 0; j < coords.length; j += 2) {
          ctx.fillText(ch, coords[j] * cellW + cellW / 2, coords[j + 1] * cellH + cellH / 2);
        }
      }
    }

    function measureAndDraw() {
      if (!canvas || !parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      cols = Math.ceil(rect.width / cellW);
      rows = Math.ceil(rect.height / cellH);
      fontFamily = getComputedStyle(canvas).fontFamily || 'monospace';
      renderFrame(reducedMotion.matches ? 0 : (performance.now() - startTime) / 1000);
    }

    function tick(now: number) {
      rafId = 0;
      if (isDisposed || !isVisible || document.hidden || reducedMotion.matches) return;
      rafId = requestAnimationFrame(tick);
      if (now - lastFrameTime < FRAME_MS) return;
      lastFrameTime = now;
      pointer.strength *= variant === 'footer' ? 0.975 : 0.96;
      renderFrame((now - startTime) / 1000);
    }

    function startLoop() {
      if (!rafId && isVisible && !document.hidden && !reducedMotion.matches) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function stopLoop() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    function onPointerMove(e: PointerEvent) {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.strength = Math.min(1, pointer.strength + (variant === 'footer' ? 0.35 : 0.25));
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
        if (isVisible) startLoop();
        else stopLoop();
      },
      { rootMargin: '120px' }
    );

    const ro = new ResizeObserver(measureAndDraw);
    const onVisibility = () => (document.hidden ? stopLoop() : startLoop());
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        stopLoop();
        renderFrame(0);
      } else {
        startLoop();
      }
    };

    measureAndDraw();
    document.fonts?.ready.then(() => {
      if (!isDisposed) measureAndDraw();
    });

    io.observe(parent);
    ro.observe(parent);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      isDisposed = true;
      stopLoop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, [variant]);

  const variantClass =
    variant === 'hero'
      ? 'vs-ascii-canvas vs-ascii-hero'
      : variant === 'footer'
        ? 'vs-ascii-canvas vs-ascii-footer'
        : 'vs-ascii-canvas';

  return <canvas ref={canvasRef} className={`${variantClass} ${className}`} aria-hidden="true" />;
}
