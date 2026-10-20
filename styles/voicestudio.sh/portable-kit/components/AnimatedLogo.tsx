import { useEffect, useId, useState } from 'react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

function buildWavePath(heights: number[]) {
  const widths = [9, 9, 9, 9, 9, 8];
  return `M6 34${heights.map((h, idx) => `c4 0 5 ${h} ${widths[idx]} ${h}`).join('')}`;
}

const WAVE_1 = buildWavePath([-7, 14, -23, 28, -21, 9]);
const WAVE_2 = buildWavePath([-12, 20, -14, 18, -26, 14]);
const WAVE_3 = buildWavePath([-4, 8, -27, 32, -16, 7]);
const DURATION = '2.8s';
const SPLINE = '.45 0 .55 1';

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, '');
  const tileId = `vs-logo-tile-${rawId}`;
  const warmthId = `vs-logo-warmth-${rawId}`;
  const voiceId = `vs-logo-voice-${rawId}`;

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={tileId}
          x1="7"
          y1="4"
          x2="58"
          y2="62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#211B2B" />
          <stop offset="1" stopColor="#120F18" />
        </linearGradient>
        <radialGradient
          id={warmthId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(49 13) rotate(132) scale(42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A2D4C" stopOpacity="0.44" />
          <stop offset="1" stopColor="#6A2D4C" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id={voiceId}
          x1="7"
          y1="18"
          x2="59"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD0DB" />
          <stop offset="0.5" stopColor="#F47FA3" />
          <stop offset="1" stopColor="#F7AE73" />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="60" height="60" rx="15" fill={`url(#${tileId})`} />
      <rect
        x="2.5"
        y="2.5"
        width="59"
        height="59"
        rx="14.5"
        fill={`url(#${warmthId})`}
        stroke="#FFFFFF"
        strokeOpacity="0.09"
      />
      <path
        d={WAVE_1}
        fill="none"
        stroke={`url(#${voiceId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {!reducedMotion && (
          <animate
            attributeName="d"
            dur={DURATION}
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.33;0.66;1"
            keySplines={`${SPLINE};${SPLINE};${SPLINE}`}
            values={`${WAVE_1};${WAVE_2};${WAVE_3};${WAVE_1}`}
          />
        )}
      </path>
      <path
        d="M50 9c.7 4.3 3.7 7.3 8 8-4.3.7-7.3 3.7-8 8-.7-4.3-3.7-7.3-8-8 4.3-.7 7.3-3.7 8-8Z"
        fill="#FFE5B5"
      >
        {!reducedMotion && (
          <animate
            attributeName="opacity"
            dur={DURATION}
            repeatCount="indefinite"
            values="1;0.55;1;0.8;1"
          />
        )}
      </path>
    </svg>
  );
}
