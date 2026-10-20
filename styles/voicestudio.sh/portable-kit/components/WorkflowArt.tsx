import type { CSSProperties } from 'react';

export type WorkflowArtSlug =
  | 'voice-clone'
  | 'voice-design'
  | 'video-dubbing'
  | 'audiobook'
  | 'voice-gallery'
  | 'transcripts';

function generatePeaks(count: number, seed: number): number[] {
  return Array.from({ length: count }, (_, idx) => {
    const val = Math.abs(
      Math.sin(idx * 1.7 + seed) * 0.6 + Math.sin(idx * 0.63 + seed * 2.1) * 0.4
    );
    return Math.max(0.18, Math.min(1, val));
  });
}

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

const cssVar = (vars: Record<string, string>): CSSProperties =>
  vars as unknown as CSSProperties;

interface WaveBarsProps {
  x: number;
  y: number;
  count: number;
  seed: number;
  height: number;
  gap?: number;
  width?: number;
  className: string;
  step?: number;
}

function WaveBars({
  x,
  y,
  count,
  seed,
  height,
  gap = 7,
  width = 3.2,
  className,
  step = 0.09,
}: WaveBarsProps) {
  return (
    <>
      {generatePeaks(count, seed).map((peak, idx) => {
        const barH = peak * height;
        return (
          <rect
            key={idx}
            x={x + idx * gap}
            y={y - barH / 2}
            width={width}
            height={barH}
            rx={width / 2}
            className={className}
            style={delay(idx * step)}
          />
        );
      })}
    </>
  );
}

function PillBar(
  x: number,
  y: number,
  width: number,
  className: string,
  animDelay: number,
  height = 4
) {
  return (
    <rect
      key={`${x}-${y}-${animDelay}`}
      x={x}
      y={y}
      width={width}
      height={height}
      rx={height / 2}
      className={className}
      style={delay(animDelay)}
    />
  );
}

interface WorkflowArtProps {
  slug: WorkflowArtSlug;
  className?: string;
}

export function WorkflowArt({ slug, className = '' }: WorkflowArtProps) {
  const renderScene = () => {
    switch (slug) {
      case 'voice-clone':
        return (
          <>
            <g className="vs-wa-early">
              {generatePeaks(13, 1).map((peak, idx) => {
                const h = peak * 54;
                return (
                  <rect
                    key={idx}
                    x={10 + idx * 7}
                    y={42 - h / 2}
                    width={3.2}
                    height={h}
                    rx={1.6}
                    className="vs-wa-scanned"
                    style={delay(idx * 0.27)}
                  />
                );
              })}
              <rect
                x={8}
                y={6}
                width={1.6}
                height={72}
                rx={0.8}
                className="vs-wa-scan"
                style={cssVar({ '--travel': '88px' })}
              />
            </g>
            <g className="vs-wa-mid">
              {[6, 11, 16].map((r, idx) => (
                <circle
                  key={r}
                  cx={122}
                  cy={42}
                  r={r}
                  className="vs-wa-print"
                  pathLength={1}
                  style={delay(idx * 0.14)}
                />
              ))}
            </g>
            <g className="vs-wa-late">
              <WaveBars
                x={142}
                y={42}
                count={13}
                seed={1}
                height={54}
                className="vs-wa-speak"
              />
            </g>
          </>
        );

      case 'voice-design':
        return (
          <>
            {PillBar(12, 10, 132, 'vs-wa-type', 0, 5)}
            {PillBar(12, 21, 96, 'vs-wa-type', 0.7, 5)}
            <path
              d="M204 18l2.4 6.6L213 27l-6.6 2.4L204 36l-2.4-6.6L195 27l6.6-2.4Z"
              className="vs-wa-spark"
              style={delay(1.6)}
            />
            {[
              [40, 62],
              [52, 28],
              [64, 80],
            ].map(([yPos, travel], idx) => (
              <g key={yPos}>
                <rect
                  x={12}
                  y={yPos - 1}
                  width={92}
                  height={2}
                  rx={1}
                  className="vs-wa-track"
                />
                <circle
                  cx={12}
                  cy={yPos}
                  r={3.4}
                  className="vs-wa-knob"
                  style={{
                    ...delay(1.2 + idx * 0.3),
                    ...cssVar({ '--travel': `${travel}px` }),
                  }}
                />
              </g>
            ))}
            <g className="vs-wa-late">
              <WaveBars
                x={120}
                y={52}
                count={16}
                seed={3.4}
                height={40}
                gap={7.2}
                className="vs-wa-speak"
                step={0.07}
              />
            </g>
          </>
        );

      case 'video-dubbing':
        return (
          <>
            {[
              [10, 52],
              [70, 40],
              [118, 70],
              [194, 36],
            ].map(([xPos, w], idx) => (
              <rect
                key={`src-${idx}`}
                x={xPos}
                y={22}
                width={w}
                height={14}
                rx={4}
                className="vs-wa-source"
              />
            ))}
            {[
              [10, 52],
              [70, 40],
              [118, 70],
              [194, 36],
            ].map(([xPos, w], idx) => (
              <rect
                key={`dub-${idx}`}
                x={xPos}
                y={46}
                width={w}
                height={14}
                rx={4}
                className="vs-wa-dubbed"
                style={delay(0.5 + idx * 1.6)}
              />
            ))}
            <rect
              x={10}
              y={4}
              width={1.6}
              height={70}
              rx={0.8}
              className="vs-wa-playhead"
              style={cssVar({ '--travel': '218px' })}
            />
            {['PT', 'EN', 'AI'].map((lang, idx) => (
              <g key={lang} className="vs-wa-lang" style={delay(idx * 2.6)}>
                <rect x={150 + idx * 28} y={2} width={24} height={13} rx={6.5} />
                <text x={162 + idx * 28} y={11.4} textAnchor="middle">
                  {lang}
                </text>
              </g>
            ))}
          </>
        );

      case 'audiobook':
        return (
          <>
            <g transform="translate(12 12)">
              <path
                d="M0 0h26a4 4 0 0 1 4 4v52a4 4 0 0 0-4-4H0z"
                className="vs-wa-page"
              />
              <path
                d="M60 0H34a4 4 0 0 0-4 4v52a4 4 0 0 1 4-4h26z"
                className="vs-wa-page"
              />
              <path d="M30 4v52" className="vs-wa-spine" />
              <path
                d="M30 4h26a4 4 0 0 1 4 4v44a4 4 0 0 0-4-4H30z"
                className="vs-wa-flip"
              />
            </g>
            {[0, 1, 2, 3].map((idx) => (
              <g key={idx}>
                {PillBar(92, 10 + idx * 17, 100 - idx * 10, 'vs-wa-chapter', 0.6 + idx * 1.5, 5)}
                <circle
                  cx={214}
                  cy={12.5 + idx * 17}
                  r={5}
                  className="vs-wa-done"
                  style={delay(1.1 + idx * 1.5)}
                />
                <path
                  d={`m211.5 ${12.5 + idx * 17} 2 2 3.6-4`}
                  className="vs-wa-check"
                  pathLength={1}
                  style={delay(1.3 + idx * 1.5)}
                />
              </g>
            ))}
            <rect x={92} y={78} width={132} height={2} rx={1} className="vs-wa-rail" />
            <rect x={92} y={78} width={132} height={2} rx={1} className="vs-wa-fill" />
          </>
        );

      case 'voice-gallery':
        return (
          <>
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const xPos = 8 + (idx % 3) * 77;
              const yPos = 3 + Math.floor(idx / 3) * 40;
              const d = idx * 1.33;
              return (
                <g key={idx}>
                  <rect
                    x={xPos}
                    y={yPos}
                    width={70}
                    height={34}
                    rx={8}
                    className="vs-wa-cast-card"
                  />
                  <rect
                    x={xPos}
                    y={yPos}
                    width={70}
                    height={34}
                    rx={8}
                    className="vs-wa-cast-lit"
                    style={delay(d)}
                  />
                  <circle
                    cx={xPos + 15}
                    cy={yPos + 17}
                    r={8}
                    className="vs-wa-cast-avatar"
                    style={delay(d)}
                  />
                  {PillBar(xPos + 30, yPos + 11, 30, 'vs-wa-cast-line', d, 4)}
                  <g className="vs-wa-cast-wave" style={delay(d)}>
                    <WaveBars
                      x={xPos + 30}
                      y={yPos + 24}
                      count={7}
                      seed={idx + 2}
                      height={10}
                      gap={4.4}
                      width={2.4}
                      className="vs-wa-speak"
                      step={0.08}
                    />
                  </g>
                </g>
              );
            })}
          </>
        );

      case 'transcripts':
        return (
          <>
            <g opacity="0.9">
              <WaveBars
                x={10}
                y={12}
                count={31}
                seed={2}
                height={16}
                gap={7.2}
                width={2.6}
                className="vs-wa-strip"
              />
            </g>
            <rect
              x={10}
              y={2}
              width={1.6}
              height={22}
              rx={0.8}
              className="vs-wa-playhead"
              style={cssVar({ '--travel': '218px' })}
            />
            {[0, 1, 2].map((row) => {
              const widths = [
                [26, 34, 20, 30, 24],
                [30, 22, 36, 26],
                [18, 30, 28, 34, 22],
              ][row];
              let xCursor = 10;
              return (
                <g key={row}>
                  {widths.map((w, col) => {
                    const xStart = xCursor;
                    xCursor += w + 6;
                    return (
                      <rect
                        key={col}
                        x={xStart}
                        y={34 + row * 17}
                        width={w}
                        height={10}
                        rx={5}
                        className="vs-wa-word"
                        style={delay(row * 2.7 + col * 0.5)}
                      />
                    );
                  })}
                </g>
              );
            })}
          </>
        );
    }
  };

  return (
    <svg
      className={`vs-wf-art ${className}`.trim()}
      viewBox="0 0 240 84"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {renderScene()}
    </svg>
  );
}
