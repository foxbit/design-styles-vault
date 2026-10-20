# Guia Completo de Reprodução de Design — VoiceStudio (`voicestudio.sh`)

Este diretório contém toda a coleta automatizada feita com o **Dembrandt (`v0.39.2`)**, acrescida dos **arquivos CSS originais, fontes `.woff2` e capturas de tela de página inteira** extraídos diretamente de `https://voicestudio.sh/`.

---

## 📁 Estrutura de Arquivos Salvos

- **[output/voicestudio.sh/DESIGN.md](./output/voicestudio.sh/DESIGN.md)**: Especificação de Design System gerada pelo Dembrandt para agentes de IA.
- **[output/voicestudio.sh/theme.css](./output/voicestudio.sh/theme.css)**: Tema `@theme` pronto para **Tailwind CSS v4**.
- **[output/voicestudio.sh/shadcn.css](./output/voicestudio.sh/shadcn.css)**: Variáveis `:root` e `@theme inline` prontas para **shadcn/ui**.
- **[output/voicestudio.sh/2026-10-20T15-18-08-243Z_v0.39.2.tokens.json](./output/voicestudio.sh/2026-10-20T15-18-08-243Z_v0.39.2.tokens.json)**: Tokens no padrão **W3C Design Tokens (DTCG)** (importável no Figma / Tokens Studio).
- **[output/voicestudio.sh/2026-10-20T15-18-08-243Z_v0.39.2.json](./output/voicestudio.sh/2026-10-20T15-18-08-243Z_v0.39.2.json)**: Dump JSON completo de todos os estilos computados, contrastes WCAG e animações.
- **[output/voicestudio.sh/2026-10-20T15-18-08-841Z_v0.39.2.html](./output/voicestudio.sh/2026-10-20T15-18-08-841Z_v0.39.2.html)**: Relatório visual interativo em HTML.
- **[output/voicestudio.sh/voicestudio.sh-brand-guide-2026-10-20-12-18.pdf](./output/voicestudio.sh/voicestudio.sh-brand-guide-2026-10-20-12-18.pdf)**: Brand Guide em PDF gerado pelo Dembrandt.
- **[screenshot-desktop.png](./screenshot-desktop.png)** & **[screenshot-fullpage.png](./screenshot-fullpage.png)**: Capturas de tela da viewport (1920x1080) e da página inteira (1440px).
- **[source-assets/](./source-assets/)**:
  - `css/`: Todos os CSS Modules originais da landing page (`LandingPage`, `LandingHeader`, `Footer`, `_marketing`, etc.) + `globals.css` e `t3-theme.css` do repositório oficial.
  - `fonts/`: Os 8 arquivos `.woff2` originais (`Bricolage Grotesque`, `Fraunces`, `Geist`, `Geist Mono`).
  - `img/`: `logo.svg` e `signal-field.webp`.
  - `index.html`: HTML SSR completo da página inicial.

---

## 🎨 1. Identidade Visual & Conceito Estético

O design do **VoiceStudio** segue uma estética **"Editorial Dark Tech / Audio Hardware"**:
- **Fundo escuro quente (Obsidian/Graphite)** (`#0a0a0a` a `#151515`) em vez de preto puro ou cinza azulado.
- **Tipografia e superfícies claras em tom "Bone / Warm Cream"** (`#f4f1ea`, `#f4ede0`, `#f0eee7`, `#f0f1ec`), criando alto contraste sem a frieza do `#ffffff` puro.
- **Textura de granulação analógica (SVG Fractal Noise)** sobreposta com `mix-blend-mode: overlay` (`opacity: 0.14` a `0.16`) nos cards.
- **Detalhes técnicos de engenharia**: cantoneiras em "L" (`0.6rem`) nos cantos internos dos painéis, marcadores `+` nos 4 cantos, labels em caixa alta com `letter-spacing: 0.14em–0.22em` usando fonte monoespaçada.
- **Bordas luminosas animadas (`conic-gradient`)** com `@property` CSS girando suavemente ao redor de caixas de destaque (terminal de instalação, CTA Cloud, card de newsletter).

---

## 🔤 2. Tipografia Real (Correção Importante sobre o `DESIGN.md`)

> **Nota técnica:** No servidor de produção do `voicestudio.sh`, o arquivo `/assets/globals-Dd1BfNQT.css` está retornando `404`, fazendo com que as variáveis `--font-display` e `--font-sans` ficassem sem resolução no navegador headless e o Dembrandt registrasse o fallback `"Times New Roman"`.
> Inspecionando os `@font-face` (`bricolage-grotesque-CipMe9lb.css` e `geist-mono-CquOsEIK.css`, já baixados em `source-assets/fonts/`), a **stack tipográfica real** do site é:

```css
:root {
  --font-display: 'Bricolage Grotesque Variable', 'Bricolage Grotesque', sans-serif;
  --font-serif: 'Fraunces Variable', 'Fraunces', serif;
  --font-sans: 'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono Variable', 'Geist Mono', ui-monospace, monospace;
}
```

### Escala Tipográfica Principal
| Papel | Fonte | Tamanho (`clamp`) | Peso | Line-Height | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `var(--font-display)` | `clamp(2.5rem, 4.6vw, 4.4rem)` (até `64px`) | `540` | `1.0` | `-0.048em` (`-3.07px`) |
| **Closing / Banner H2** | `var(--font-display)` | `clamp(2.6rem, 6vw, 5rem)` | `430`–`540` | `0.95` | `-0.045em` a `-0.055em` |
| **Section H2** | `var(--font-display)` | `clamp(1.75rem, 3.5vw, 3.25rem)` (`52px`) | `510`–`540` | `0.92`–`1.05` | `-0.035em` a `-0.045em` |
| **Card Title / Stat Number** | `var(--font-display)` | `clamp(1.3rem, 2vw, 1.7rem)` | `430`–`540` | `1.05` | `-0.035em` |
| **Hero Lead / Qualifier** | `var(--font-sans)` | `clamp(0.98rem, 1.2vw, 1.12rem)` | `420` | `1.55` | normal |
| **Nav Links / Buttons** | `var(--font-sans)` | `0.82rem` – `0.91rem` (`13px`–`14.5px`) | `510`–`650` | `1.0` | `-0.005em` |
| **Eyebrow / Kicker / Badges** | `var(--font-mono)` | `0.58rem` – `0.70rem` (`9.5px`–`11.2px`) | `500`–`650` | `1.0` | `0.14em` a `0.22em` (`uppercase`) |

---

## 🎯 3. Paleta de Cores Completa & Variáveis Semânticas

Copie este bloco `:root` diretamente para o seu projeto para ter todas as cores exatas do `voicestudio.sh`:

```css
:root {
  /* Fundos (Dark Obsidian / Graphite) */
  --landing-ink: #0b0b0b;           /* Fundo principal da página */
  --bg-deep: #080706;               /* Fundo de banners escuros / footer (#0a0a0a) */
  --card-bg: #0c0c0c;               /* Fundo padrão de cards e bento tiles (#0d0d0d) */
  --landing-panel: #121212;         /* Painéis e header flutuante */
  -- hero-graphite: #151515;        /* Fundo da seção Hero */
  --landing-panel-raised: #161616;  /* Superfícies elevadas */

  /* Textos & Superfícies Claras (Warm Bone / Cream) */
  --color-primary-cta: #f4f1ea;     /* Cor principal dos botões CTA (pill) */
  --landing-bone: #f4ede0;          /* Texto de destaque quente */
  --hero-bone: #f0eee7;             /* Texto principal do Hero e Header */
  --surface-ink: #f0f1ec;           /* Texto principal das seções internas */
  --landing-muted: #a9a49b;         /* Texto secundário sólido (rgb(169, 164, 155)) */
  --landing-faint: #858079;         /* Texto terciário / metadados */
  --text-muted-alpha: #f0f1ec99;    /* Texto secundário translúcido (60%) */
  --text-faint-alpha: #f0f1ec66;    /* Texto terciário translúcido (40%) */

  /* Bordas e Divisórias (Hairlines translúcidos) */
  --landing-rule: rgba(244, 237, 224, 0.08);        /* Borda sutil padrão (#f0f1ec17 / #ffffff17) */
  --landing-rule-strong: rgba(244, 237, 224, 0.17); /* Borda enfatizada */
  --border-hover: rgba(240, 241, 236, 0.26);        /* Borda de card em hover (#f0f1ec42) */
  --inner-sheen: inset 0 1px 0 rgba(255, 255, 255, 0.06); /* Brilho superior interno de vidro */

  /* Cores de Acento (Dourado Pro, Verde Terminal, Gradiente Pêssego/Rosa) */
  --accent-gold: #f5c26b;           /* Destaques Pro / Licenças / Estrelas */
  --accent-peach: #f7ae73;          /* Gráficos, ícones e gradientes quentes */
  --accent-pink: #f47fa3;           /* Gradiente de badges "NEW" e barras de voz */
  --accent-blush: #ffd0db;          /* Brilho suave rosado */
  --accent-peach-light: #ffd6b8;    /* Texto de badges quentes */
  --accent-green: #a9c8a0;          /* Prompt "$" no terminal, método GET, strings */
  --accent-live-dot: #7be0a0;       /* Ponto pulsante "live" */

  /* Layout */
  --landing-max: 80rem;             /* 1280px largura máxima */
  --landing-gutter: clamp(1.25rem, 4vw, 3rem);
}
```

---

## 🧩 4. Componentes & Efeitos Visuais Assinatura (Prontos para Copiar)

### 4.1. Header Flutuante em Pílula (Glassmorphism)
O cabeçalho fica fixo no topo (`inset: 0.75rem 0 auto`), centralizado com largura máxima de `66rem` e borda arredondada `999px`:

```css
.vs-header-pill {
  width: min(100%, 66rem);
  height: 3.4rem;
  padding: 0 0.8rem 0 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(16, 16, 16, 0.5);
  backdrop-filter: blur(22px) saturate(1.35);
  -webkit-backdrop-filter: blur(22px) saturate(1.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 14px 44px rgba(0, 0, 0, 0.5);
}
```

### 4.2. Botão Principal (Warm Bone Pill CTA)
Usado nos CTAs principais ("Download", "Cloud early access", botão de copiar comando):

```css
.vs-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 1.3rem;
  border-radius: 999px;
  background: #f4f1ea;
  color: #0c0c0c;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 650;
  text-decoration: none;
  box-shadow:
    inset 0 -1px 0 rgba(0, 0, 0, 0.12),
    0 6px 22px rgba(244, 241, 234, 0.14);
  transition: background-color 0.18s ease-out, box-shadow 0.18s ease-out, transform 0.18s cubic-bezier(0.25, 1, 0.5, 1);
}

.vs-btn-primary:hover {
  background: #ffffff;
  transform: translateY(-1px);
  box-shadow:
    inset 0 -1px 0 rgba(0, 0, 0, 0.12),
    0 8px 30px rgba(244, 241, 234, 0.26);
}
```

### 4.3. Borda Orbitante Animada (`conic-gradient` + `@property`)
Efeito usado na caixa de comando de instalação CLI e no card de Cloud CTA:

```css
@property --dl-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@keyframes dl-orbit {
  to { --dl-angle: 360deg; }
}

.vs-orbit-box {
  position: relative;
  isolation: isolate;
  border-radius: 1.5rem;
  border: 1px solid rgba(240, 238, 231, 0.12);
  background:
    radial-gradient(90% 120% at 50% 0%, rgba(240, 238, 231, 0.06), transparent 65%),
    rgba(14, 14, 14, 0.72);
  backdrop-filter: blur(14px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 30px 80px rgba(0, 0, 0, 0.55);
}

.vs-orbit-box::before {
  content: "";
  position: absolute;
  inset: -1px;
  z-index: -1;
  padding: 1px;
  border-radius: inherit;
  pointer-events: none;
  background: conic-gradient(
    from var(--dl-angle),
    transparent 0% 72%,
    rgba(240, 238, 231, 0.75) 86%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  animation: 7s linear infinite dl-orbit;
}
```

### 4.4. Card com Textura de Granulação SVG + Cantoneiras Técnicas
Padrão visual dos cards de áudio, API e Bento Grid:

```css
.vs-tech-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 0.35rem; /* ou 1.4rem para Bento Tiles maiores */
  border: 1px solid rgba(240, 241, 236, 0.09);
  background:
    radial-gradient(110% 80% at 50% 0%, rgba(247, 174, 115, 0.10), transparent 68%),
    linear-gradient(180deg, rgba(240, 241, 236, 0.025), rgba(0, 0, 0, 0.3)),
    #0c0c0c;
  transition: border-color 0.26s, box-shadow 0.26s;
}

/* Textura de ruído (Fractal Noise) embutida */
.vs-tech-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.15;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* Cantoneira técnica inferior direita */
.vs-tech-card::after {
  content: "";
  position: absolute;
  bottom: 0.55rem;
  right: 0.55rem;
  width: 0.6rem;
  height: 0.6rem;
  border-bottom: 1px solid rgba(240, 241, 236, 0.3);
  border-right: 1px solid rgba(240, 241, 236, 0.3);
  pointer-events: none;
  transition: border-color 0.26s;
}
```

### 4.5. Badge Quente ("NEW" / Destaque)
```css
.vs-badge-warm {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffd6b8;
  background: linear-gradient(100deg, rgba(244, 127, 163, 0.16), rgba(247, 174, 115, 0.16));
  border: 1px solid rgba(247, 174, 115, 0.35);
  border-radius: 999px;
  padding: 0.18rem 0.45rem;
}
```

### 4.6. Background ASCII Animado (`HeroAscii` / `AsciiBackdrop` em `<canvas>`)
O Dembrandt não extrai elementos `<canvas>` automaticamente (pois lê apenas estilos CSS computados do DOM), mas extraímos o código JavaScript original diretamente dos bundles `HeroAscii-C0OQNpWu.js` e `EarlyAccessForm-CDxYvBQ6.js` (salvos em [`source-assets/js/`](./source-assets/js/)) e descompilamos em um componente React pronto para uso em [`portable-kit/components/AsciiBackdrop.tsx`](./portable-kit/components/AsciiBackdrop.tsx):
- **Rampa de caracteres de 11 níveis (`idx = 0..10`):** `' .·:-=+*#%@'` (onde `0` é espaço vazio e `1..10` são desenhados em lote por nível de opacidade)
- **Taxa de quadros:** `30fps` (`FRAME_INTERVAL_MS = 1000 / 30`)
- **Fonte do Canvas:** `${cellH * 0.78}px monospace` (`Geist Mono Variable`), `textBaseline = 'middle'`, `textAlign = 'center'`
- **3 Variantes originais (dimensões de célula e ganho de pico):**
  - `hero`: `{ w: 13, h: 20, peak: 0.28, bandBias: 0.22 }`
  - `footer`: `{ w: 12, h: 19, peak: 0.36, bandBias: 0 }`
  - `card`: `{ w: 11, h: 17, peak: 0.5, bandBias: 0 }`
- **Fórmula Matemática — Variante `hero` / `card` (`heroWave`):**
  ```ts
  function heroWave(col: number, row: number, timeSec: number, cols: number, rows: number, bandBias: number): number {
    const nx = col / cols;
    const ny = row / rows;
    const field =
      0.5 +
      0.5 *
        (Math.sin(col * 0.085 + timeSec * 0.55 + Math.sin(row * 0.14 - timeSec * 0.35) * 1.7) * 0.5 +
          Math.sin(row * 0.12 - timeSec * 0.3 + col * 0.045) * 0.3 +
          Math.sin((col + row) * 0.052 + timeSec * 0.22) * 0.2);
    const ridgeCenter =
      0.5 -
      bandBias +
      Math.sin(nx * Math.PI * 2 * 1.5 + timeSec * 0.7) * 0.16 +
      Math.sin(nx * Math.PI * 2 * 3.7 - timeSec * 1.1) * 0.06;
    const ridge = Math.exp(-(((ny - ridgeCenter) / 0.085) ** 2));
    return Math.min(1, field * 0.42 + ridge * 0.95);
  }
  ```
- **Fórmula Matemática — Variante `footer` (`footerWave` com 3 harmônicos de voz):**
  ```ts
  function footerWave(col: number, row: number, timeSec: number, cols: number, rows: number, mx: number, my: number, strength: number): number {
    const nx = col / cols;
    const ny = row / rows;
    let val = 0.05 + 0.05 * Math.sin(nx * 9 + ny * 6 + timeSec * 0.4);
    const cursorXInfluence = Math.exp(-(((nx - mx) / 0.2) ** 2));
    for (let h = 0; h < 3; h++) {
      const baseLine = 0.3 + h * 0.22;
      const lineY = baseLine + (my - baseLine) * 0.35 * strength * cursorXInfluence;
      const amp = 0.035 + 0.02 * Math.sin(timeSec * 0.5 + h * 2) + cursorXInfluence * strength * (0.11 + 0.05 * h);
      const dist = (ny - (lineY + (Math.sin(nx * (16 + h * 5) - timeSec * (1.7 + h * 0.5) + h) * 0.6 + Math.sin(nx * (37 + h * 9) + timeSec * (2.3 + h * 0.4)) * 0.4) * amp)) / 0.028;
      val += Math.exp(-dist * dist) * (0.55 + 0.45 * cursorXInfluence * strength);
    }
    return Math.min(1, val);
  }
  ```
- **Interação ao mover o mouse (`pointermove`) e Decaimento:**
  - Quando o mouse se move sobre o container pai, `pointer.strength = Math.min(1, pointer.strength + (variant === 'footer' ? 0.35 : 0.25))` e a cada frame decai por `*= 0.96` (`hero`/`card`) ou `*= 0.975` (`footer`).
  - No `hero`/`card`, soma uma ondulação radial: `val += Math.exp(-(dx*dx + dy*dy)) * 0.6 * strength * (0.6 + 0.4 * Math.sin(dist * 7 - timeSec * 5))` onde `dx = (col * cellW - pointer.x) / 140`.
- **Cor e Opacidade de cada nível (`lvl = 1..10`, `norm = lvl / 10`):**
  - `ctx.fillStyle = rgba(244, 237, 224, ${(0.05 + norm * norm * peak).toFixed(3)})` (`#f4ede0` Warm Bone).
- **Máscaras CSS do `<canvas>`:**
  - `.vs-ascii-hero`: `mask-composite: intersect; mask-image: radial-gradient(32% 42% at 50% 34%, transparent 0% 52%, #000 100%), linear-gradient(180deg, #000 15%, transparent 92%);`
  - `.vs-ascii-footer`: `mask-image: linear-gradient(180deg, transparent 0%, #000 22% 100%);`

---

## 5. Efeitos Visuais Avançados & Micro-Interações (Extraídos dos Bundles JS/CSS)

Estes 7 elementos visuais e micro-interações não são capturados automaticamente por ferramentas de extração de CSS estático porque dependem de **animações SVG SMIL (`<animate>`), listeners de ponteiro (`onPointerMove`), `@property` CSS Houdini ou keyframes coreografados**. Todos foram extraídos do código-fonte original e implementados em [`central-servicos-light`](./central-servicos-light/):

### 5.1. Logo SVG com Onda de Voz "Morphing" + Brilho Pulsante (`AnimatedLogo.tsx`)
* **Fonte original:** [`source-assets/js/AnimatedLogo-CgUz7Y4_.js`](./source-assets/js/AnimatedLogo-CgUz7Y4_.js)
* **Implementação React:** [`central-servicos-light/src/components/ui/AnimatedLogo.tsx`](./central-servicos-light/src/components/ui/AnimatedLogo.tsx)
* **Especificação técnica:**
  * ViewBox `0 0 64 64`, tile arredondado (`rx="15"`) com gradiente linear escuro (`#211B2B` → `#120F18`) + brilho radial quente (`#6A2D4C` com `stopOpacity="0.44"` no canto superior direito) e borda interna `stroke="#FFFFFF" strokeOpacity="0.09"`.
  * **Curva de voz (`<path>`):** `stroke="url(#vs-logo-voice)"` (`#FFD0DB` → `#F47FA3` → `#F7AE73`), `strokeWidth="5.5"`, animada via `<animate attributeName="d" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.33;0.66;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1" />` alternando entre 3 vetores cúbicos:
    * Estado 1: `M6 34c4 0 5 -7 9 -7c4 0 5 14 9 14c4 0 5 -23 9 -23c4 0 5 28 9 28c4 0 5 -21 9 -21c4 0 5 9 8 9`
    * Estado 2: `M6 34c4 0 5 -12 9 -12c4 0 5 20 9 20c4 0 5 -14 9 -14c4 0 5 18 9 18c4 0 5 -26 9 -26c4 0 5 14 8 14`
    * Estado 3: `M6 34c4 0 5 -4 9 -4c4 0 5 8 9 8c4 0 5 -27 9 -27c4 0 5 32 9 32c4 0 5 -16 9 -16c4 0 5 7 8 7`
  * **Estrela cintilante (`<path>`):** `d="M50 9c.7 4.3 3.7 7.3 8 8-4.3.7-7.3 3.7-8 8-.7-4.3-3.7-7.3-8-8 4.3-.7 7.3-3.7 8-8Z"`, `fill="#FFE5B5"`, animada via `<animate attributeName="opacity" dur="2.8s" values="1;0.55;1;0.8;1" repeatCount="indefinite" />`.

### 5.2. Efeito "Spring Pop" no Sufixo da Marca (`.sh` / `.hub`) no Hover
* **Fonte original:** [`source-assets/css/LandingHeader-B66_ThY4.css`](./source-assets/css/LandingHeader-B66_ThY4.css) (`._tld_9j0ea_440`)
* **Especificação CSS:**
```css
.vs-brand-tld {
  background: linear-gradient(100deg, #ffd0db, #f47fa3 55%, #f7ae73);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 0.92em;
  letter-spacing: -0.04em;
  margin-left: 0.04em;
  display: inline-flex;
  opacity: 0;
  pointer-events: none;
}

.vs-brand-tld i {
  opacity: 0;
  font-style: normal;
  display: inline-block;
}

.vs-brand-link:hover .vs-brand-tld,
.vs-brand-link:focus-visible .vs-brand-tld {
  animation: 2.2s both vs-tld-wrap;
}

.vs-brand-link:hover .vs-brand-tld i,
.vs-brand-link:focus-visible .vs-brand-tld i {
  animation: 2.2s cubic-bezier(0.34, 1.56, 0.64, 1) both vs-tld-pop;
}

.vs-brand-link:hover .vs-brand-tld i:nth-child(2) { animation-delay: 70ms; }
.vs-brand-link:hover .vs-brand-tld i:nth-child(3) { animation-delay: 140ms; }
.vs-brand-link:hover .vs-brand-tld i:nth-child(4) { animation-delay: 210ms; }

@keyframes vs-tld-wrap {
  0%, 72% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes vs-tld-pop {
  0% {
    opacity: 0;
    transform: translateY(0.55em) scale(0.5) rotate(-12deg);
  }
  16%, 100% {
    opacity: 1;
    transform: none;
  }
}
```

### 5.3. Spotlight Radial que Segue o Mouse + Tilt 3D & Paralaxe nos Cards
* **Fonte original:** [`source-assets/js/_marketing.download-CEzhWchK.js`](./source-assets/js/_marketing.download-CEzhWchK.js) + [`source-assets/css/_marketing-Dl2zIAW0.css`](./source-assets/css/_marketing-Dl2zIAW0.css)
* **Handler JavaScript (`onPointerMove` / `onPointerLeave`):**
```ts
function handleCardPointerMove(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
  el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
  el.style.setProperty('--dx', (x - 0.5).toFixed(3));
  el.style.setProperty('--dy', (y - 0.5).toFixed(3));
  el.style.setProperty('--rx', `${((0.5 - y) * 5).toFixed(2)}deg`);
  el.style.setProperty('--ry', `${((x - 0.5) * 6).toFixed(2)}deg`);
}

function handleCardPointerLeave(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.removeProperty('--dx');
  el.style.removeProperty('--dy');
  el.style.removeProperty('--rx');
  el.style.removeProperty('--ry');
}
```
* **CSS correspondente:**
  * Feixe radial sobre o card: `background: radial-gradient(22rem circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--persona-hue, #f4ede0) 16%, transparent), transparent 62%);`
  * Inclinação 3D suave: `transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));`

### 5.4. Borda Rotativa Multicor (`Conic Sweep`) com Aura Difusa (`blur(16px)`)
* **Fonte original:** [`source-assets/css/Footer-Dm628KNY.css`](./source-assets/css/Footer-Dm628KNY.css) (`._signup_1y591_230`)
* **Especificação CSS:**
```css
@property --signup-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.vs-conic-sweep {
  --signup-angle: 0deg;
  --signup-sweep: conic-gradient(
    from var(--signup-angle),
    #ffffff0a 0deg,
    #ffffff0a 150deg,
    #ffb88ce6 195deg,
    #ffeeaae6 235deg,
    #96ecc8e6 275deg,
    #96beffe6 315deg,
    #ffffff0a 360deg
  );
  isolation: isolate;
  position: relative;
  animation: 9s linear infinite vs-signup-sweep;
}

.vs-conic-sweep::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  padding: 1px;
  border-radius: inherit;
  background: var(--signup-sweep);
  pointer-events: none;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}

.vs-conic-sweep::after {
  content: "";
  position: absolute;
  inset: -1px;
  z-index: -2;
  border-radius: inherit;
  background: var(--signup-sweep);
  filter: blur(16px);
  opacity: 0.28;
  pointer-events: none;
  transition: opacity 0.4s;
}

.vs-conic-sweep:hover::after,
.vs-conic-sweep:focus-within::after {
  opacity: 0.55;
}

@keyframes vs-signup-sweep {
  to { --signup-angle: 360deg; }
}
```

### 5.5. Ilustrações Vetoriais Animadas de Workflows (Bento Deck Art)
* **Fonte original:** [`source-assets/js/LandingPage.module-Dcamx75E.js`](./source-assets/js/LandingPage.module-Dcamx75E.js) (`Mc` / `Nc`) + [`source-assets/css/LandingPage-tYjisfd2.css`](./source-assets/css/LandingPage-tYjisfd2.css) (`._art_1w6sm_4`)
* **Implementação React:** [`central-servicos-light/src/components/ui/WorkflowArt.tsx`](./central-servicos-light/src/components/ui/WorkflowArt.tsx)
* **Como funciona:** Mini-cenas SVG (`viewBox="0 0 240 84"`) sobre um fundo pontilhado (`radial-gradient(#f0f1ec1c 1px, transparent 1.2px)` a cada `14px`), com barras de onda geradas por funções senoidais (`Math.sin(n * 1.7 + seed) * 0.6 + Math.sin(n * 0.63 + seed * 2.1) * 0.4`), playheads/scanners com `drop-shadow(0 0 4px var(--hue))`, páginas virando em 3D (`scaleX(1) -> scaleX(-1)`) e sliders animados com curva elástica `cubic-bezier(0.34, 1.3, 0.64, 1)`.

### 5.6. Avatares de Impressão Vocal Radial & Waveform Dupla com `clip-path`
* **Fonte original:** [`source-assets/js/LandingPage.module-Dcamx75E.js`](./source-assets/js/LandingPage.module-Dcamx75E.js) (funções `ce` e `le`) + [`source-assets/css/LandingPage-tYjisfd2.css`](./source-assets/css/LandingPage-tYjisfd2.css) (`._voiceprint_gocpy_1` e `._waveform_gocpy_13`)
* **Implementação React:** [`central-servicos-light/src/components/ui/VoiceWaveform.tsx`](./central-servicos-light/src/components/ui/VoiceWaveform.tsx)
* **Como funciona:**
  * **Radial Voiceprint:** 24 raios distribuídos em círculo (`angle = (i / 24) * 2π - π/2`), onde cada raio parte de `r = 22` até `r = 22 + 4 + peak * 12`, com um anel pontilhado externo (`strokeDasharray="1.5 4.5"`) que gira continuamente quando ativo.
  * **Dual-Layer Waveform:** Duas camadas `.vs-wave-layer` sobrepostas contendo barras verticais (`height: calc(0.14rem + var(--peak-h) * var(--wave-swing))`). A camada superior colorida usa `clip-path: inset(0 calc(100% - var(--playback-progress, 0%)) 0 0)` para preencher suavemente no hover ou durante reprodução.

### 5.7. Rodapé Monumental com Pedestal de Vidro & Wordmark Metálico (`13.2vw`)
* **Fonte original:** [`source-assets/js/Footer-DCaVaXrx.js`](./source-assets/js/Footer-DCaVaXrx.js) (função `S`)
* **Especificação:**
  * Pedestal central de vidro (`rounded-3xl border border-white/10 bg-black/20 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm`) exibindo o `AnimatedLogo` em tamanho grande.
  * Wordmark monumental logo abaixo com `font-family: var(--font-wordmark)` (`Fraunces`), `font-size: clamp(3.2rem, 11vw, 9.5rem)`, `line-height: 0.85`, `letter-spacing: -0.03em`, e gradiente metálico recortado no texto:
    `background: linear-gradient(100deg, #F7F6FB 0%, #cbcbcb 48%, #FFFFFF 62%, #F7F6FB 100%); -webkit-background-clip: text; color: transparent; filter: drop-shadow(0 4px 28px rgba(0,0,0,0.38));`
  * Sobreposição de `<AsciiBackdrop variant="footer" />` ao fundo do rodapé.

---

## 🚀 Kit Portátil e Como Reproduzir em Qualquer Outro Site no Futuro

Para garantir que você possa reproduzir 100% deste design em qualquer projeto futuro (mesmo sem o repositório de teste `central-servicos-light`), criamos a pasta dedicada **[`portable-kit/`](./portable-kit/)**:

- **[`portable-kit/voicestudio-complete.css`](./portable-kit/voicestudio-complete.css):** Arquivo CSS único e completo contendo todos os `@font-face`, variáveis `:root`, `@property` Houdini (`--dl-angle`, `--signup-angle`), classes utilitárias (`.vs-header-pill`, `.vs-deck-card`, `.vs-conic-sweep`, `.vs-orbit-box`, `.vs-brand-tld`, `.vs-ascii-canvas`, `.vs-wf-art`, `.vs-waveform`) e todos os `@keyframes`.
- **[`portable-kit/components/AsciiBackdrop.tsx`](./portable-kit/components/AsciiBackdrop.tsx):** Motor `<canvas>` ASCII interativo completo (`hero`, `footer`, `card`).
- **[`portable-kit/components/AnimatedLogo.tsx`](./portable-kit/components/AnimatedLogo.tsx):** Logo SVG 64x64 com onda de voz morphing (SMIL `<animate>`) e estrela pulsante.
- **[`portable-kit/components/WorkflowArt.tsx`](./portable-kit/components/WorkflowArt.tsx):** As 6 cenas vetoriais animadas de Bento Cards (`voice-clone`, `voice-design`, `video-dubbing`, `audiobook`, `voice-gallery`, `transcripts`).
- **[`portable-kit/components/VoiceWaveform.tsx`](./portable-kit/components/VoiceWaveform.tsx):** O avatar `RadialVoiceprint` (24 raios) e a barra de onda dupla `DualWaveform` com `clip-path`.
- **[`portable-kit/components/cardSpotlight.ts`](./portable-kit/components/cardSpotlight.ts):** Os handlers `handleCardPointerMove`, `handleCardPointerLeave` (spotlight radial `--mx`/`--my` + tilt 3D `--rx`/`--ry` + paralaxe `--dx`/`--dy`) e o gerador determinístico de picos de áudio.

### Passo a passo rápido para usar em outro projeto:
1. Copie as fontes `.woff2` de [`source-assets/fonts/`](./source-assets/fonts/) para a pasta `public/fonts/` do seu novo projeto.
2. Copie [`portable-kit/voicestudio-complete.css`](./portable-kit/voicestudio-complete.css) e os componentes de [`portable-kit/components/`](./portable-kit/components/) para o seu projeto.
3. Ou simplesmente aponte uma IA para a pasta `/home/angelorosa-pc/Documents/voicestudio-design/` e peça: *"Aplique o design system e todos os efeitos descritos em `GUIA-REPRODUCAO-DESIGN.md` e `portable-kit/` neste projeto"*.
