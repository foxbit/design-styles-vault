# 🎙️ Estilo Capturado: VoiceStudio.sh (`voicestudio.sh`)

| Propriedade | Valor |
| :--- | :--- |
| **Site de Origem** | [`https://voicestudio.sh/`](https://voicestudio.sh/) *(anteriormente OmniVoice Studio)* |
| **Data da Captura** | `2026-10-20` (Horário local: `12:18 - 14:15 BRT`) |
| **Ferramentas Utilizadas** | `Dembrandt v0.39.2` (Playwright Chromium) + Extração Direta de Bundles JS/CSS Modules & Fontes `.woff2` |
| **Estética / Direção de Arte** | *Dark Editorial & Technical Audio Luxury* — Fundo grafite profundo (`#0b0b0b`), tipografia editorial de alto contraste em tom *Warm Bone* (`#f4ede0`), detalhes técnicos em monospace e acentos quentes pastel/coral/menta |
| **Tema Principal** | Dark Mode Nativo (`color-scheme: dark`) |
| **Framework Original** | React 19 + TanStack Start / Router + CSS Modules + Tailwind CSS |

---

## 🎨 Resumo das Características Visuais

### 1. Tipografia (4 Famílias Variáveis Auto-Hospedadas)
- **Display / Títulos (`--font-display`):** `Bricolage Grotesque Variable` (pesos `430`, `520`, `540`, `560`, tracking apertado `-0.035em` a `-0.055em`)
- **Wordmark / Editorial Serif (`--font-wordmark` / `--font-serif`):** `Fraunces Variable` (usada no letreiro monumental de `13.2vw` e destaques editoriais)
- **Interface / Corpo (`--font-sans`):** `Geist Variable` (pesos `400`, `510`, `620`, `650`)
- **Técnica / Kickers / Badges / Canvas (`--font-mono`):** `Geist Mono Variable` (uppercase, tracking aberto `+0.14em` a `+0.22em`, números tabulares)

### 2. Paleta de Cores Assinatura
- **Superfícies:** `#0b0b0b` (Canvas principal), `#0a0a0a` (Footer), `#0c0c0c` (Cards Bento), `#121212` / `#161616` (Painéis elevados)
- **Textos (Warm Bone):** `#f4ede0` / `#f0eee7` (Primário), `#a9a49b` (Secundário), `#858079` (Terciário)
- **Acentos & Personas:**
  - **Peach / Coral:** `#f7ae73` → `#f47fa3` → `#ffd0db`
  - **Warm Gold:** `#f5c26b`
  - **Sage Mint:** `#a9c8a0` / `#7be0a0`
  - **Slate Blue:** `#8fa8c9`

### 3. Efeitos Visuais & Micro-Interações Extraídas (Além do CSS Estático)
1. **Motor `<canvas>` de Ondas ASCII Interativas (`AsciiBackdrop.tsx`):** Rampa de 11 caracteres (`' .·:-=+*#%@'`) a `30fps` com 3 variantes (`hero`, `footer`, `card`) e ondulação radial reativa ao ponteiro do mouse (`pointermove`).
2. **Logo SVG com Onda de Voz "Morphing" + Estrela Pulsante (`AnimatedLogo.tsx`):** Curva cúbica animada via SMIL `<animate attributeName="d" dur="2.8s" />` + estrela de 4 pontas pulsando.
3. **Sufixo `.sh` / `.hub` com "Spring Pop" no Hover (`.vs-brand-tld`):** Letras que saltam sequencialmente (`0ms`, `70ms`, `140ms`) com curva elástica `cubic-bezier(0.34, 1.56, 0.64, 1)`.
4. **Spotlight Radial que Segue o Mouse + Tilt 3D & Paralaxe (`cardSpotlight.ts`):** Atualiza `--mx`, `--my` (feixe radial de `22rem`), `--rx`, `--ry` (`perspective(900px)`) e `--dx`, `--dy` (marca d'água em paralaxe).
5. **Borda Rotativa Multicor (`Conic Sweep`) com Aura `blur(16px)` (`.vs-conic-sweep`):** Animação `@property --signup-angle` de `9s` com 4 tons pastel (`#ffb88c`, `#ffeeaa`, `#96ecc8`, `#96beff`).
6. **Ilustrações Vetoriais Animadas de Workflows (`WorkflowArt.tsx`):** 6 mini-cenas SVG (`viewBox="0 0 240 84"`) sobre grid pontilhado com scanners a laser, sliders elásticos e ondas senoidais.
7. **Avatares de Impressão Vocal Radial & Waveform Dupla (`VoiceWaveform.tsx`):** `RadialVoiceprint` de 24 raios rotativos + `DualWaveform` revelada via `clip-path: inset(...)`.
8. **Rodapé Monumental com Pedestal de Vidro & Wordmark Metálico:** Ícone em pedestal `backdrop-blur-sm` + letreiro gigante em `Fraunces` com gradiente metálico.

---

## 📂 Estrutura Desta Pasta

- [`GUIA-REPRODUCAO-DESIGN.md`](./GUIA-REPRODUCAO-DESIGN.md) — Especificação técnica completa, tokens, fórmulas matemáticas e receitas CSS/React prontas para copiar.
- [`portable-kit/`](./portable-kit/) — Kit independente pronto para importar em qualquer projeto:
  - [`voicestudio-complete.css`](./portable-kit/voicestudio-complete.css)
  - [`components/AsciiBackdrop.tsx`](./portable-kit/components/AsciiBackdrop.tsx)
  - [`components/AnimatedLogo.tsx`](./portable-kit/components/AnimatedLogo.tsx)
  - [`components/WorkflowArt.tsx`](./portable-kit/components/WorkflowArt.tsx)
  - [`components/VoiceWaveform.tsx`](./portable-kit/components/VoiceWaveform.tsx)
  - [`components/cardSpotlight.ts`](./portable-kit/components/cardSpotlight.ts)
- [`dembrandt-output/`](./dembrandt-output/) — Arquivos gerados pelo Dembrandt (`DESIGN.md`, `theme.css`, `shadcn.css`, tokens `.json` DTCG e capturas de tela originais).
- [`source-assets/`](./source-assets/) — Arquivos brutos originais baixados de `voicestudio.sh` (`fonts/*.woff2`, `css/*.css`, `js/*.js`, `img/*`).
- [`previews/`](./previews/) — Capturas de tela do estilo aplicado em um projeto real de teste (`central-servicos-light`).
