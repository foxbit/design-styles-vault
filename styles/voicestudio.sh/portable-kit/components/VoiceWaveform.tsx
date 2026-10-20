import type { CSSProperties } from 'react';

interface RadialVoiceprintProps {
  peaks: readonly number[];
  monogram: string;
  hue: string;
  active?: boolean;
  className?: string;
}

export function RadialVoiceprint({
  peaks,
  monogram,
  hue,
  active = false,
  className = '',
}: RadialVoiceprintProps) {
  const rays = 24;
  return (
    <svg
      viewBox="0 0 96 96"
      className={`vs-voiceprint ${className}`.trim()}
      aria-hidden="true"
    >
      <circle
        cx="48"
        cy="48"
        r="43"
        fill="none"
        stroke={hue}
        strokeOpacity={active ? 0.55 : 0.22}
        strokeWidth="1"
        strokeDasharray="1.5 4.5"
        style={
          active
            ? {
                transformOrigin: '48px 48px',
                animation: 'vs-spin-slow 14s linear infinite',
              }
            : undefined
        }
      />
      {Array.from({ length: rays }, (_, idx) => {
        const peak = peaks[Math.floor((idx / rays) * peaks.length)] ?? 0.3;
        const angle = (idx / rays) * Math.PI * 2 - Math.PI / 2;
        const rInner = 22;
        const rOuter = rInner + 4 + peak * 12;
        const x1 = 48 + Math.cos(angle) * rInner;
        const y1 = 48 + Math.sin(angle) * rInner;
        const x2 = 48 + Math.cos(angle) * rOuter;
        const y2 = 48 + Math.sin(angle) * rOuter;
        return (
          <line
            key={idx}
            x1={x1.toFixed(2)}
            y1={y1.toFixed(2)}
            x2={x2.toFixed(2)}
            y2={y2.toFixed(2)}
            stroke={hue}
            strokeOpacity={(0.35 + peak * 0.55).toFixed(2)}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        );
      })}
      <circle
        cx="48"
        cy="48"
        r="19"
        fill="#0D0C0A"
        stroke={hue}
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <text
        x="48"
        y="53"
        textAnchor="middle"
        fill="#F4EDE0"
        fontSize="14"
        fontWeight="500"
      >
        {monogram}
      </text>
    </svg>
  );
}

interface DualWaveformProps {
  peaks: readonly number[];
  className?: string;
}

export function DualWaveform({ peaks, className = '' }: DualWaveformProps) {
  return (
    <span className={`vs-waveform ${className}`.trim()} aria-hidden="true">
      <span className="vs-wave-layer">
        {peaks.map((peak, idx) => (
          <span
            key={idx}
            className="vs-wave-bar"
            style={{ '--peak-h': peak.toFixed(3) } as CSSProperties}
          />
        ))}
      </span>
      <span className="vs-wave-layer vs-wave-fill">
        {peaks.map((peak, idx) => (
          <span
            key={idx}
            className="vs-wave-bar"
            style={{ '--peak-h': peak.toFixed(3) } as CSSProperties}
          />
        ))}
      </span>
    </span>
  );
}
