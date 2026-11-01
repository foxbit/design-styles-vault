# 📘 Guia de Reprodução — Artor (`artor.app`)

Como aplicar o estilo Artor (versão light, com dark opcional) em qualquer app React + Tailwind + shadcn/ui.

---

## 1. Princípios do estilo

1. **Um acento só.** Tudo é neutro quente; o laranja `#e97a00` aparece no botão primário, foco, item selecionado em gráficos e pouco mais.
2. **Sem bordas sólidas em superfícies.** Cards e painéis usam sombra em camadas com hairline interna (`inset 0 0 1px #0009`). Bordas (`--hair`, 10% de preto quente) ficam para divisores e campos.
3. **Navegação no canvas, conteúdo flutuando.** A sidebar não tem fundo próprio; o conteúdo vive num painel branco elevado com raio de `14px`.
4. **Tipografia única e apertada.** Geist em todo lugar, pesos 500–550 para títulos com tracking negativo, UI em `13.5px`.
5. **Profundidade tátil nos controles.** Botões têm brilho interno no topo (`inset 0 1px 0 #fff9`) e sombra curta embaixo; o item ativo da sidebar é uma "pílula" branca levemente elevada.

---

## 2. Instalação rápida

1. Copie `source-assets/fonts/Geist-Variable.woff2` e `GeistMono-Variable.woff2` para o projeto (licença OFL).
2. Importe `portable-kit/artor-complete.css` **ou** use os tokens prontos abaixo:
   - **Tailwind v4:** `dembrandt-output/theme.css` (`@theme`) + bloco `.dark` do portable kit.
   - **Tailwind v3 + shadcn (formato HSL):** `dembrandt-output/shadcn.css` no `index.css` e o `tailwind.config` da seção 4.
3. Tema: classe `light`/`dark` no `<html>` (o site usa `next-themes` com `attribute: ["class","data-theme"]`).

---

## 3. Tokens

### 3.1 Cores (light → dark)
| Papel | Light | Dark | shadcn |
| :--- | :--- | :--- | :--- |
| Canvas | `#f4f3ef` | `#18181b` | `--background`, `--sidebar` |
| Texto | `#1a1a18` | `#f2f1ee` | `--foreground` |
| Texto secundário | `#726f65` | `#8c8a85` | `--muted-foreground` |
| Painel flutuante | `#ffffff` | `#0b0b0c` | `--surface` (custom), `--sidebar-accent` |
| Card | `#fbfbf9` | `#141416` | `--card` |
| Popover | `#ffffff` | `#1f1f23` | `--popover` |
| Acento | `#e97a00` | `#f59331` | `--primary`, `--ring` |
| Texto sobre acento | `#1a1a18` | `#0b0b0c` | `--primary-foreground` |
| Acento como texto | `#9c5000` | `#f59331` | `--primary-text` (custom) |
| Preenchimento neutro | `#eceae3` | `#222019` | `--secondary`, `--muted` |
| Tint quente | `#efe9e2` | `#241f1a` | `--accent` |
| Hairline | `#14120c1a` | `#ffffff1a` | `--border`, `--input` |
| Erro / sucesso / aviso | `#e40014` `#15803d` `#b45309` | `#ff6568` `#4ade80` `#fbbf24` | `--destructive`, `--success`, `--warning` |

> ⚠️ **Acessibilidade:** a demo do site usa `#84817a` para texto secundário (3.5:1) e texto branco no botão laranja (2.9:1). Ambos reprovam WCAG AA. Use `#726f65` (4.5:1) e tinta escura `#1a1a18` no laranja (6:1) — que é exatamente o que o CTA "Start free" do próprio site faz (`--button-primary-ink`).

> **Tailwind v3 com `hsl(var(--x))`:** modificadores de opacidade (`bg-primary/90`) geram `hsl(var(--x) / .9)`. Por isso a hairline com alfa deve ser "achatada" sobre o canvas: light `45 8% 87%` (≈ `#e0dfdb`), dark `240 3% 19%` (≈ `#2f2f32`).

### 3.2 Sombras
| Token | Uso |
| :--- | :--- |
| `--sh-segment` | Campos, controles segmentados |
| `--sh-raised` | Item ativo de navegação, chips elevados |
| `--sh-btn` | Botão secundário/outline |
| `--sh-btn-primary` | Botão primário |
| `--sh-panel` / `--sh-panel-hover` | Cards e painel de conteúdo |
| `--sh-card` / `--sh-card-hover` | Cards de destaque (marketing) |
| `--sh-drawer` | Popovers, menus, dialogs, sheets |
| `--shadow` | Sombra ampla de seções flutuantes |

Valores completos em `portable-kit/artor-complete.css`.

### 3.3 Tipografia
| Estilo | Spec |
| :--- | :--- |
| Display (H1) | Geist 500, 64px / 1.08, `-0.045em` |
| Seção (H2) | Geist 500, 48px / 1.02, `-0.04em` |
| Título de bloco (H3) | Geist 550, 20px / 1.3, `-0.025em` |
| Títulos em app | 600, 18–24px, `tracking-tight` |
| UI (botões, nav) | 500, 13.5px, `-0.01em` |
| Corpo | 400, 16px / 1.5 (app: 14px) |

### 3.4 Raio
`--radius: .625rem` (10px) → botões e campos `10px`, cards e painéis `14px` (`radius + 4px`), pílulas `999px`.

---

## 4. Mapeamento Tailwind v3 (`tailwind.config.ts`)

```ts
colors: {
  surface: 'hsl(var(--surface))',
  success: 'hsl(var(--success))',
  warning: 'hsl(var(--warning))',
  primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))', text: 'hsl(var(--primary-text))' },
  sidebar: { /* ... */ 'foreground-muted': 'hsl(var(--sidebar-foreground-muted))' },
},
borderRadius: { xl: 'calc(var(--radius) + 4px)', lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
fontFamily: { sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'], mono: ['Geist Mono', 'ui-monospace', 'monospace'] },
boxShadow: {
  segment: 'var(--shadow-segment)', raised: 'var(--shadow-raised)', btn: 'var(--shadow-btn)',
  'btn-primary': 'var(--shadow-btn-primary)', panel: 'var(--shadow-panel)', 'panel-hover': 'var(--shadow-panel-hover)',
  card: 'var(--shadow-card)', drawer: 'var(--shadow-drawer)', float: 'var(--shadow-float)',
},
```

---

## 5. Receitas de componentes (shadcn)

| Componente | Classes |
| :--- | :--- |
| **Button base** | `rounded-lg text-[13.5px] font-medium tracking-[-0.01em] transition-[background-color,box-shadow] active:translate-y-px` |
| Button `default` | `bg-primary text-primary-foreground shadow-btn-primary hover:bg-primary/90` |
| Button `outline` | `bg-surface shadow-btn hover:bg-accent` (sem `border`) |
| Button `secondary` | `bg-secondary shadow-btn hover:bg-secondary/70` |
| Tamanhos | `h-9 px-3.5` · sm `h-8 px-3 text-[13px]` · lg `h-10 px-5` |
| **Card** | `rounded-xl bg-card shadow-panel` · header `p-5` · título `text-base font-semibold` |
| **Input / Select / Textarea** | `h-9 rounded-lg border border-input bg-surface shadow-segment focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20` |
| **Tabs** | lista `h-9 rounded-lg bg-secondary p-0.5`; aba ativa `bg-surface shadow-raised rounded-md` |
| **Badge** | `rounded-md px-2 text-xs font-medium`; default `bg-primary/15 text-primary-text` |
| **Dialog / Sheet** | overlay `bg-black/40 backdrop-blur-[2px]`; conteúdo `bg-surface shadow-drawer sm:rounded-2xl` |
| **Menu / Popover / Select content** | `rounded-xl bg-popover shadow-drawer`; itens `rounded-md` |
| **Table** | cabeçalho `h-10 text-xs font-medium text-muted-foreground`; célula `px-3 py-2.5`; hover `bg-accent/50` |

### App shell
```tsx
<div className="flex h-screen bg-background">
  <aside className="w-64 px-3 py-4">{/* brand, seções, NavLinks */}</aside>
  <div className="flex-1 p-2 pl-0">
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-panel">
      <header className="h-12 border-b px-5">{/* breadcrumb text-muted-foreground */}</header>
      <main className="flex-1 overflow-auto px-10 py-8">{children}</main>
    </div>
  </div>
</div>
```
Item de navegação: `h-8 rounded-lg px-2.5 text-[13.5px] text-sidebar-foreground-muted` → ativo `bg-sidebar-accent text-foreground font-medium shadow-raised` + `ChevronRight` à direita.

---

## 6. Efeitos de marketing (opcionais)

- **Nav pill de vidro:** `background: var(--glass-tint); box-shadow: var(--glass-shadow); backdrop-filter: blur(12px) saturate(1.4); border-radius: 999px`.
- **CTA laranja de vidro:** gradiente `var(--orange-glass-top)` → `var(--orange-glass-bottom)` + `var(--orange-glass-shadow)`, texto `--button-primary-ink`.
- **Hero:** fundo pêssego (`--peach #ffd9b3`) em gradiente radial suave para o canvas + `--grain` com `background-blend-mode: overlay`; entrada com `hero-frame-rise` (18px, opacidade).
- Respeite `prefers-reduced-motion` (bloco incluso no portable kit).

---

## 7. Checklist de aplicação
- [ ] Geist carregando (verifique `document.fonts.check("16px Geist")`)
- [ ] Nenhuma cor fixa `gray-*`/`white` nas telas (use tokens) — garante o dark
- [ ] Texto secundário com `#726f65` ou mais escuro
- [ ] Botão laranja com label escuro
- [ ] Cards sem `border`, só `shadow-panel`
- [ ] Um único botão primário por área
