# 🎨 Design Styles Vault — Biblioteca & Protocolo de Captura de Design Systems para LLMs

Este repositório armazena **Design Systems completos, tokens, fontes variáveis, componentes interativos e motores de animação** extraídos de sites de referência com nível de fidelidade de engenharia reversa (*Deep Extraction*).

O objetivo deste repositório é permitir que **qualquer LLM ou Agente de Código** (Antigravity, Claude Code, Cursor, Windsurf, ChatGPT, etc.):
1. **Capture novos sites** seguindo exatamente a metodologia de 5 fases documentada abaixo (indo muito além do CSS estático — capturando também `<canvas>`, shaders/ASCII, animações SVG SMIL, `@property` Houdini e micro-interações `onPointerMove`).
2. **Aplique qualquer estilo armazenado aqui** em outro site ou aplicação existente com fidelidade visual e interativa de 100%.

---

## 🗂️ Catálogo de Estilos Capturados (`styles/`)

| Estilo / Pasta | Site de Origem | Data da Captura | Estética & Características | Fontes Principais | Efeitos Especiais Extraídos | Documentação & Kit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **[`voicestudio.sh`](./styles/voicestudio.sh/)** | [`https://voicestudio.sh/`](https://voicestudio.sh/) | `2026-10-20` | **Dark Editorial & Technical Audio Luxury** (`#0b0b0b` + *Warm Bone* `#f4ede0` + acentos Peach/Rose/Mint `#f7ae73`, `#f47fa3`, `#a9c8a0`) | `Bricolage Grotesque`, `Fraunces`, `Geist`, `Geist Mono` (`.woff2` inclusas) | Motor `<canvas>` ASCII interativo (`30fps`), Logo SVG Morphing (SMIL), `.sh`/`.hub` Spring Pop, Spotlight Radial + Tilt 3D (`--mx`/`--my`/`--rx`/`--ry`), Borda `Conic Sweep` com aura `blur(16px)`, 6 Cenas SVG de Workflows, Voiceprint Radial + Waveform `clip-path`, Rodapé Monumental `13.2vw` | [📋 METADATA](./styles/voicestudio.sh/METADATA.md) · [📘 Guia Completo](./styles/voicestudio.sh/GUIA-REPRODUCAO-DESIGN.md) · [🧰 Portable Kit](./styles/voicestudio.sh/portable-kit/) |

---

## 🏗️ Estrutura Padronizada de Cada Estilo

Toda captura salva dentro de [`styles/<dominio-do-site>/`](./styles/) **DEVE** seguir obrigatoriamente esta estrutura de diretórios:

```text
styles/<dominio-do-site>/
├── METADATA.md                  # Ficha técnica da captura (URL, data, estética, fontes, paleta e lista de efeitos)
├── capture-metadata.json        # Manifesto estruturado em JSON (para leitura rápida por scripts e LLMs)
├── GUIA-REPRODUCAO-DESIGN.md    # Receitas completas de CSS, tokens, equações matemáticas e instruções passo a passo
├── portable-kit/                # Kit 100% independente pronto para copiar para qualquer projeto
│   ├── <site>-complete.css      # CSS único contendo @font-face, :root, @property, classes utilitárias e @keyframes
│   └── components/              # Componentes descompilados (Canvas, SVGs animados, hooks de ponteiro, etc.)
├── dembrandt-output/            # Saída bruta da ferramenta Dembrandt
│   ├── DESIGN.md                # Relatório automático de estilos computados
│   ├── theme.css                # Variáveis CSS @theme (Tailwind v4)
│   ├── shadcn.css               # Variáveis mapeadas para shadcn/ui
│   ├── *.tokens.json            # Tokens no padrão W3C DTCG
│   ├── screenshot-desktop.png   # Screenshot original do viewport
│   └── screenshot-fullpage.png  # Screenshot original da página inteira
├── source-assets/               # Arquivos brutos originais baixados diretamente do site-alvo
│   ├── fonts/                   # Arquivos .woff2 / .ttf originais
│   ├── css/                     # Folhas de estilo CSS / CSS Modules originais
│   ├── js/                      # Bundles JS originais (usados para extrair efeitos de Canvas/SVG/Ponteiro)
│   └── img/                     # SVGs, ícones, texturas e imagens principais
└── previews/                    # (Opcional) Capturas de tela do estilo aplicado em projetos de teste
```

---

## 🔬 Metodologia de Captura "Deep Extraction" (5 Fases)

Ferramentas tradicionais de extração de design (como o [Dembrandt](https://github.com/dembrandt/dembrandt)) inspecionam apenas `getComputedStyle()` do DOM estático. Isso captura bem cores e tamanhos de fonte (~70% do design), mas **perde os 30% mais importantes** que fazem um site parecer incrível:
- Animações renderizadas em `<canvas>` (ASCII art, partículas, ondas, shaders WebGL);
- Animações nativas dentro de tags `<svg>` (`<animate>`, `stroke-dasharray`, morphing de `path`);
- Micro-interações controladas por JavaScript (`onPointerMove` injetando `--mx`, `--my`, `--rx`, `--ry` para feixes de luz e inclinação 3D);
- Gradientes rotativos via CSS Houdini (`@property --angle`) e máscaras compostas (`mask-composite: exclude` / `intersect`);
- Texturas procedurais embutidas via Data URI (`<feTurbulence type="fractalNoise">`).

Por isso, toda captura realizada para este repositório **DEVE executar as 5 fases abaixo**:

---

### Fase 1: Extração Automatizada Base com `dembrandt`
Execute o `dembrandt` (via Playwright Chromium) ativando todas as flags de exportação e direcionando a saída para `styles/<dominio>/dembrandt-output/`:

```bash
npx dembrandt https://<dominio-do-site>/ \
  --save-output \
  --output-dir ./styles/<dominio>/dembrandt-output \
  --dtcg \
  --design-md \
  --extract-theme \
  --shadcn \
  --screenshots
```
*(Nota: se o `dembrandt` criar uma subpasta com o nome do domínio dentro de `--output-dir`, mova os arquivos para a raiz de `dembrandt-output/`).*

---

### Fase 2: Coleta dos Assets Brutos Originais (`source-assets/`)
Extraia do HTML e das folhas de estilo do site-alvo todas as URLs reais de recursos estáticos e salve em `styles/<dominio>/source-assets/`:

1. **CSS Originais (`source-assets/css/`):**
   ```bash
   curl -sL https://<dominio-do-site>/ | grep -oE 'href="[^"]+\.css[^"]*"'
   ```
   Baixe todos os arquivos `.css` referenciados. Em sites modernos (Next.js, Vite, TanStack, Astro, Remix), os CSS Modules contêm os `@keyframes`, `@property` e pseudo-elementos (`::before`/`::after`) exatos que não aparecem completos no `getComputedStyle()`.
2. **Fontes Variáveis `.woff2` (`source-assets/fonts/`):**
   Varra os arquivos `.css` baixados procurando por `url(...woff2)` e baixe todas as fontes `.woff2` para que o estilo funcione 100% offline/self-hosted.
3. **Bundles JavaScript da Página (`source-assets/js/`):**
   Extraia do HTML e do manifesto de rotas os bundles `.js` da landing page (ex: `Hero*.js`, `Landing*.js`, `Header*.js`, `Footer*.js`, `Animated*.js`). **Valide com `file` ou `head` se nenhum arquivo baixado é uma página 404 HTML.**
4. **Imagens e SVGs (`source-assets/img/`):**
   Baixe o `logo.svg`, `favicon.svg` e texturas/imagens de destaque.

---

### Fase 3: Auditoria Profunda dos Bundles JS & CSS (Caça aos Efeitos Ocultos)
A LLM **DEVE** inspecionar o código dos arquivos em `source-assets/js/` e `source-assets/css/` procurando especificamente pelos **8 padrões abaixo**:

1. **Elementos `<canvas>` e Motores 2D / WebGL (`getContext('2d')`, `webgl`, `requestAnimationFrame`):**
   - Extraia a função matemática exata do loop de renderização, a paleta/rampa de caracteres ou partículas, o FPS (`1000/30` ou `60fps`) e a resposta a eventos de mouse (`pointermove`).
2. **SVGs com Animação Nativa SMIL ou Coreografia CSS (`<animate>`, `attributeName="d"`, `stroke-dasharray`, `pathLength`):**
   - Extraia os vetores `d="..."`, `keySplines`, `keyTimes` e durações exatas.
3. **Rastreamento de Cursor nos Cards/Banners (`onPointerMove`, `getBoundingClientRect`, `setProperty('--mx', ...)`):**
   - Verifique quais variáveis CSS o JS injeta no elemento (`--mx`, `--my`, `--dx`, `--dy`, `--rx`, `--ry`) e como o CSS as consome (`radial-gradient(... at var(--mx) var(--my))`, `perspective(900px) rotateX(var(--rx))`).
4. **CSS Houdini `@property` e Bordas Cônicas (`@property --*-angle`, `conic-gradient`, `mask-composite: exclude`):**
   - Extraia os ângulos de parada de cor e os pseudo-elementos `::before` (borda de `1px` recortada com máscara) e `::after` (aura difusa com `filter: blur(...)`).
5. **Micro-interações de Hover na Marca / Botões / Navegação:**
   - Ex: sufixos que saltam com curvas de mola (`cubic-bezier(0.34, 1.56, 0.64, 1)`), ícones que transladam, indicadores deslizantes de abas (`--ind-x`, `--ind-w`).
6. **Texturas Procedurais e Molduras Técnicas:**
   - Ex: Data URIs de `<feTurbulence type="fractalNoise">` com `mix-blend-mode: overlay`, cantoneiras em L (`border-bottom` + `border-right`), miras nos 4 cantos (`linear-gradient` `no-repeat`) e grids de pontos radiais (`radial-gradient(#f0f1ec1c 1px, transparent 1.2px)`).
7. **Visualizações de Dados / Áudio / Progresso:**
   - Ex: barras ou ondas duplas reveladas com `clip-path: inset(0 calc(100% - var(--progress)) 0 0)` e gráficos radiais gerados via `Math.sin` / `Math.cos`.
8. **Seções de Fechamento / Rodapés Monumentais:**
   - Ex: letreiros gigantes em `vw` com `background-clip: text` metálico, pedestais com `backdrop-blur`, etc.

---

### Fase 4: Descompilação no `portable-kit/` e Documentação Completa
Depois de auditar tudo na Fase 3:
1. **Descompile o código minificado** dos efeitos encontrados em componentes limpos, tipados e reutilizáveis dentro de `styles/<dominio>/portable-kit/components/`.
2. **Consolide todo o CSS** (fontes, variáveis `:root`, `@property`, classes utilitárias e todos os `@keyframes`) em `styles/<dominio>/portable-kit/<site>-complete.css`.
3. **Crie os 3 arquivos de documentação na raiz de `styles/<dominio>/`:**
   - `METADATA.md` (ficha técnica com data, URL, resumo estético e índice);
   - `capture-metadata.json` (manifesto JSON padronizado);
   - `GUIA-REPRODUCAO-DESIGN.md` (documentação exaustiva com todas as cores, pesos tipográficos, receitas CSS, equações matemáticas do canvas/ponteiro e exemplos de uso).
4. **Atualize a tabela do Catálogo** neste `README.md` raiz adicionando a nova linha.

---

### Fase 5: Teste Prático e Captura de Previews (Opcional, Altamente Recomendado)
Ao testar o estilo em um projeto local, capture screenshots em alta resolução (`1440x1000` via Playwright) e salve em `styles/<dominio>/previews/`.

---

## 🤖 Prompts Prontos para Usar com LLMs

### 📋 Prompt 1: Capturar um Novo Site e Salvar Neste Repositório
Copie e envie para o agente:

> Quero capturar o design system completo do site `https://EXEMPLO.COM` e salvá-lo neste repositório dentro de `styles/EXEMPLO.COM/`.
> Siga rigorosamente todas as **5 Fases da Metodologia "Deep Extraction"** descritas no `README.md` deste repositório:
> 1. Rode o `dembrandt` completo salvando em `styles/EXEMPLO.COM/dembrandt-output/`.
> 2. Baixe todas as fontes `.woff2`, arquivos `.css`, imagens/SVGs e bundles `.js` originais para `styles/EXEMPLO.COM/source-assets/`.
> 3. Faça a auditoria profunda dos bundles JS e CSS procurando por `<canvas>` animados, SVGs com `<animate>` ou keyframes coreografados, listeners `onPointerMove` (`--mx`, `--my`, tilt 3D), `@property` `conic-gradient`, texturas `feTurbulence` e micro-interações de hover que o Dembrandt não captura sozinho.
> 4. Descompile todos esses efeitos em componentes prontos dentro de `styles/EXEMPLO.COM/portable-kit/`, gere o CSS consolidado `styles/EXEMPLO.COM/portable-kit/EXEMPLO-complete.css` e crie os arquivos `METADATA.md`, `capture-metadata.json` e `GUIA-REPRODUCAO-DESIGN.md` no mesmo nível de detalhe da pasta `styles/voicestudio.sh/`.
> 5. Atualize a tabela de catálogo no `README.md` raiz do repositório.

---

### 🎨 Prompt 2: Aplicar um Estilo Deste Repositório em Outro Projeto Existente
Copie e envie para o agente:

> Quero aplicar o design system e todos os efeitos visuais capturados em `styles/voicestudio.sh/` (deste repositório) no meu projeto localizado em `/caminho/do/meu/projeto`.
> 1. Leia o `styles/voicestudio.sh/METADATA.md` e o `styles/voicestudio.sh/GUIA-REPRODUCAO-DESIGN.md` completos.
> 2. Copie as fontes `.woff2` de `styles/voicestudio.sh/source-assets/fonts/` para o projeto e importe as regras e variáveis de `styles/voicestudio.sh/portable-kit/voicestudio-complete.css`.
> 3. Integre os componentes especiais de `styles/voicestudio.sh/portable-kit/components/` (`AsciiBackdrop.tsx`, `AnimatedLogo.tsx`, `WorkflowArt.tsx`, `VoiceWaveform.tsx`, `cardSpotlight.ts`) adaptando o cabeçalho, o hero, os cards, a barra de busca e o rodapé monumental para a identidade completa do estilo capturado.
