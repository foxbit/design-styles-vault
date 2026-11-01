# 🧡 Estilo Capturado: Artor (`artor.app`)

| Propriedade | Valor |
| :--- | :--- |
| **Site de Origem** | [`https://artor.app/`](https://artor.app/) |
| **Data da Captura** | `2026-11-01` |
| **Ferramentas Utilizadas** | Playwright Chromium (script próprio: screenshots + `getComputedStyle`) + extração direta de CSS/JS/fontes. O `dembrandt` não foi executado nesta captura (ver nota abaixo). |
| **Estética / Direção de Arte** | *Warm Paper SaaS* — canvas de papel quente (`#f4f3ef`), tinta quase preta (`#1a1a18`), um único acento laranja (`#e97a00`), sombras em várias camadas com hairline interna, vidro translúcido no marketing |
| **Tema Principal** | Light por padrão (com Dark completo via `next-themes`, classe `light`/`dark` no `<html>`) |
| **Framework Original** | Next.js (Turbopack) + Tailwind CSS v4 + shadcn/ui |

---

## 🎨 Resumo das Características Visuais

### 1. Tipografia
- **Única família:** `Geist Variable` (UI, títulos) + `Geist Mono Variable` (código). Licença SIL OFL, auto-hospedadas em `source-assets/fonts/`.
- **Escala do site:** H1 `64px/1.08` peso `500` tracking `-0.045em` · H2 `48px/1.02` peso `500` tracking `-0.04em` · H3 `20px/1.3` peso `550` tracking `-0.025em` · UI `13.5px` peso `500` tracking `-0.01em` · corpo `16px/1.5`.

### 2. Paleta (Light)
| Token | Hex | Uso |
| :--- | :--- | :--- |
| `--bg` | `#f4f3ef` (app) / `#f7f6f2` (marketing) | Canvas |
| `--ink` | `#1a1a18` | Texto principal |
| `--muted` | `#726f65` | Texto secundário (AA 4.5:1) |
| `--muted-ink` | `#84817a` | Secundário da demo (3.5:1 — só para texto grande) |
| `--accent` | `#e97a00` | Laranja assinatura (botões, foco, gráficos) |
| `--accent-text` | `#9c5000` | Laranja para texto em superfícies claras |
| `--panel` / `--float` | `#fbfbf9` / `#ffffff` | Cards / painel flutuante e popovers |
| `--s1`…`--s4` | `#eceae3` `#e3e7e6` `#efe9e2` `#e6e3ec` | Preenchimentos neutros e tints |
| `--hair` | `#14120c1a` | Hairline (bordas) |
| Semânticas | `#e40014` `#15803d` `#b45309` | Destructive / success / warning |

### 3. Paleta (Dark)
`--bg #18181b` · `--ink #f2f1ee` · `--muted #8c8a85` · `--accent #f59331` · `--panel #141416` · `--float #0b0b0c` · `--popover #1f1f23` · `--hair #ffffff1a`.

### 4. Elevação (a alma do estilo)
Sombras em 3–5 camadas: contato + difusão + hairline interna (`inset 0 0 1px #0009`) — dispensa bordas sólidas. Tokens: `--sh-segment`, `--sh-raised`, `--sh-btn`, `--sh-btn-primary`, `--sh-panel(-hover)`, `--sh-card(-hover)`, `--sh-drawer`, `--shadow`.

### 5. Layout de App (demo `.artor-demo`)
Sidebar transparente sobre o canvas → item ativo vira pílula branca com `--sh-raised` e chevron; conteúdo em painel branco flutuante (`--float` + `--sh-panel`, raio `14px`); barra superior com breadcrumb em `--muted`; botão primário laranja; controles segmentados.

---

## 🔬 Efeitos Especiais Encontrados (Fase 3)
| Padrão | Resultado |
| :--- | :--- |
| `<canvas>` / WebGL | Não encontrado (`getContext` = 0) |
| SVG SMIL | Não encontrado |
| Ponteiro (`pointermove`) | 7 ocorrências nos bundles (demo interativa de comentários) — sem variáveis CSS `--mx/--my` |
| `@property` Houdini | Apenas os do Tailwind v4 (`--tw-*`) |
| Glass | `backdrop-filter` (27× no CSS), tokens `--glass-*` e `--orange-glass-*` |
| Textura | `--grain` com `feTurbulence fractalNoise` |
| Keyframes | `hero-frame-rise`, `nav-menu-in`, `thumb-pan` (+ `enter`/`exit` do tw-animate) |

---

## 📁 Índice
- [`GUIA-REPRODUCAO-DESIGN.md`](./GUIA-REPRODUCAO-DESIGN.md) — receitas e mapeamento para shadcn/Tailwind v3 e v4
- [`portable-kit/artor-complete.css`](./portable-kit/artor-complete.css) — CSS único (fontes, tokens light/dark, mapeamento shadcn, receitas, keyframes)
- [`dembrandt-output/`](./dembrandt-output/) — screenshots, `computed-styles.json`, `theme.css` (Tailwind v4) e `shadcn.css`
- [`source-assets/`](./source-assets/) — HTML, CSS, JS, fontes e ícones originais
- [`previews/`](./previews/) — estilo aplicado no Design Hub (light e dark)

> **Nota:** o `npx dembrandt` foi bloqueado pela política de execução do agente nesta sessão. A pasta `dembrandt-output/` segue a estrutura padrão, mas o conteúdo foi gerado por um script Playwright próprio e pela leitura direta do CSS. Rode o dembrandt manualmente se quiser o relatório automático (`DESIGN.md`, `*.tokens.json`).
