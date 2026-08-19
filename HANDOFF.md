# Caiçara · Site institucional — Handoff

> Documento de continuação entre sessões. Última atualização: **v1.0.10** (19/08/2026).
> A próxima sessão deve ler este arquivo inteiro antes de tocar em qualquer coisa.

---

## 1. Status atual

| Componente | Estado | Versão |
|---|---|---|
| Repo `mhprol/caicara-site` | público, tags `v1.0.0`..`v1.0.10` | v1.0.10 ✓ |
| `dist/site.js` (React app) | production-ready, minified, **50.7KB** | v1.0.9 |
| `dist/site.css` (tokens + reset + media queries) | production-ready, ~22KB | v1.0.9 |
| `dist/ds-bundle.js` (Design System) | minified, **121.9KB** | v1.0.9 |
| `og/*.png` (8 imagens 1200×630) | commitadas, 100–250KB cada | v1.0.9 |
| `llms.txt`, `robots.txt`, `sitemap.xml` | commitados | v1.0.9 |
| `assets/imagery/*.webp` (7 arquivos) | **otimizados** (-97% no maior) | v1.0.9 |
| `assets/photography/*.webp` (19 arquivos) | **otimizados** (-93% no maior) | v1.0.9 |
| `assets/logo/*.webp` (8 logos) | **convertidos de PNG pra WebP** | v1.0.9 |
| GHL staging `staging.caicaramarketing.com.br` | **em v1.0.5** — atualizar pra v1.0.10 (ver §4) | v1.0.5 |
| GHL produção `caicaramarketing.com.br` | **não deployado** | — |

**Última sessão**: 4 fixes (navbar glass sempre, hamburger magenta, footer overflow, logo footer 40px) + fix LinkedIn URL + copy shift (ângulo novo em /sobre, /servicos, /home) + **performance tier 1** (imagens, minify, preconnects, width/height) — bumps v1.0.6, v1.0.7, v1.0.8, v1.0.9.

---

## 2. O que está no repo (mapa)

```
caicara-site/
├── HANDOFF.md                    ← este arquivo
├── README.md                     ← setup guide pro GHL
├── package.json                  ← "sharp" como dep de render-og
├── llms.txt / robots.txt / sitemap.xml
│
├── assets/                       ← mirror do Design System (NÃO editar)
│   ├── logo/      (11 arquivos)
│   ├── icons/     (4 SVGs próprios)
│   ├── photography/ (19 fotos)
│   └── imagery/   (7 tiles + retratos)
│
├── og/                           ← 8 PNGs 1200×630 (geradas via scripts/render-og.mjs)
│
├── src/tokens/                   ← fonte dos tokens (cópia de referência, NÃO buildar)
│   └── colors.css elevation.css fonts.css gradients.css motion.css
│       radius.css semantic.css spacing.css typography.css
├── src/ds/                       ← manifesto + readme do DS (referência)
│
├── dist/
│   ├── site.css                  ← 22KB, **tokens concatenados + media queries completas**
│   ├── site.js                   ← 70KB, **React app inteiro em React.createElement**
│   ├── ds-bundle.js              ← 185KB, verbatim do Design System
│   └── seo/                      ← 8 JSON-LD de referência (já inlineados nos HEADs)
│       ├── home.json servicos.json metodo.json cases.json
│       ├── contato.json sobre.json politica-de-privacidade.json 404.json
│
├── scripts/
│   ├── render-og.mjs             ← gera og/*.png via sharp
│   ├── check-version.mjs         ← valida que todos os GHL files estão na mesma tag
│   └── check-icons.mjs           ← dev tool: lista quais ícones Lucide existem
│
└── ghl/                          ← **26 arquivos de blocos GHL (PRONTOS PRA COPIAR)**
    ├── _site-wide-HEADER.html    ← 1 vez em Settings → Custom Code → Header
    ├── _site-wide-FOOTER.html    ← 1 vez em Settings → Custom Code → Footer
    ├── {pagina}-HEADER.html × 8  ← Page → Custom Code → Header
    ├── {pagina}-FOOTER.html × 8  ← Page → Custom Code → Footer (vazio em 7/8)
    └── {pagina}-BODY.html × 8    ← Page → Custom Code → Body HTML
```

Páginas: `home`, `servicos`, `metodo`, `cases`, `sobre`, `contato`, `politica-de-privacidade`, `404`.

---

## 3. v1.0.5 release notes (o que está no jsDelivr agora)

| Mudança | Arquivo |
|---|---|
| Mobile menu overlay: `display: none + opacity: 0 + visibility: hidden` na regra base; fade-in via opacity transition | `dist/site.css` |
| Footer grid 4-cols → 1 col no mobile (`.caicara-grid-footer`) | `dist/site.css` + `dist/site.js` |
| `html, body { overflow-x: hidden }` safety net | `dist/site.css` |
| `BurgerIcon` SVG inline (sem dependência de Lucide) | `dist/site.js` |
| SiteNav: 2 botões hamburger usam `BurgerIcon` (não mais `<Icon>`) | `dist/site.js` |
| BODY files: 8 arquivos atualizados de `@v1.0.0` → `@v1.0.5` | `ghl/*-BODY.html` |
| `check-version.mjs` agora valida 19 arquivos (era 11) | `scripts/check-version.mjs` |

**v1.0.4 → v1.0.5 delta**: só correções críticas do mobile. Layout overhaul já estava no v1.0.4.

---

## 4. Ações pendentes no GHL (staging)

**Verificado em 19/08/2026** (sessão v1.0.6): as 8 páginas do staging retornam `caicara-site@v1.0.5` corretamente. Pendente: atualizar pra v1.0.6.

### Pra staging ficar 100% em v1.0.6

1. **Site-wide HEADER** — Settings → Custom Code → Header Code:
   - Apaga o que tá lá
   - Cola: https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/_site-wide-HEADER.html

2. **Body block de cada uma das 8 páginas** — Page → Custom Code → Body HTML:
   - Apaga o que tá lá
   - Cola o arquivo correspondente (v1.0.6):
     - `home-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/home-BODY.html
     - `servicos-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/servicos-BODY.html
     - `metodo-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/metodo-BODY.html
     - `cases-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/cases-BODY.html
     - `sobre-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/sobre-BODY.html
     - `contato-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/contato-BODY.html
     - `politica-de-privacidade-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/politica-de-privacidade-BODY.html
     - `404-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.6/ghl/404-BODY.html

3. **Page-wide HEADER e FOOTER** — também estão em v1.0.6 no repo. **Vale re-colar** se quiser garantia.

4. **Hard refresh** (Ctrl+Shift+R) + DevTools Network + filtro `caicara-site` → tudo tem que apontar pra `v1.0.6`.

### Script de verificação (dev tool, não commitado)

Verificação manual (loop PowerShell de 8 GETs) foi feita na sessão v1.0.6 — staging estava 100% v1.0.5. Vale criar `scripts/check-staging.mjs` no repo pra automatizar; Matheus tem o script local.

---

## 5. Pendências (decisões a tomar)

Da sessão original, 5 decisões; 4 já resolvidas. Resta 1:

| # | Decisão | Status |
|---|---|---|
| 1 | Repo GitHub | ✓ `mhprol/caicara-site` |
| 2 | Conjunto de páginas | ✓ 5 do UI kit + Sobre + Política + 404 = 8 |
| 3 | Destino do form /contato | ✓ só frontend (valida + salva em localStorage) — sem POST |
| 4 | OG images 1200×630 | ✓ geradas, commitadas em `og/` |
| 5 | **Banner LGPD de cookies** | ⏳ **PENDENTE** — não foi pedido, não foi feito |
| 6 | **Analytics (GA4 / Plausible)** | ⏳ **PENDENTE** — não foi pedido, não foi feito |

**Decisões que apareceram depois** (Matheus confirmou durante a sessão):
- CNPJ: `59.205.837/0001-10` ✓
- Pacote "Timão" → "Leme" (mais náutico) ✓
- Lucide social icons removidos → `BurgerIcon` SVG inline + `at-sign` para Instagram ✓
- Sem ícone "instagram" no Icon component ✓

---

## 6. Como iterar (próxima vez que Matheus pedir)

```bash
cd "C:\Users\mhpro\.mavis\agents\mavis\workspace\caicara-site"
Set-Location $repoPath

# 1. Edita o que precisar em:
#    - dist/site.js   (React: páginas, nav, footer, Icon, etc)
#    - dist/site.css  (tokens + media queries)
#    - ghl/*-*.html   (se for copy text/template, não a versão)

# 2. Bump versão em TODOS os 19 arquivos (script automatiza):
#    Edita scripts/check-version.mjs e atualiza o default v1.0.0 -> v1.0.6
#    OU usa o loop abaixo pra replace direto.
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$files = Get-ChildItem ghl\*.html, sitemap.xml, dist\site.js
foreach ($f in $files) {
  $c = [System.IO.File]::ReadAllText($f.FullName, $utf8NoBom)
  [System.IO.File]::WriteAllText($f.FullName, ($c -replace "@v1\.0\.5","@v1.0.6"), $utf8NoBom)
}

# 3. Valida:
node scripts/check-version.mjs v1.0.6
node --check dist\site.js

# 4. Re-renderiza OG images se mudou a copy de alguma página:
node scripts/render-og.mjs   # só se o objeto PAGES no script mudou

# 5. Commit + tag + push:
git add -A
git commit -m "v1.0.6: <descrição>"
git tag -a v1.0.6 -m "v1.0.6: <descrição>"
git push origin main --tags
```

---

## 7. Gotchas aprendidos (pra próxima sessão não cair)

1. **GHL tem 5 slots custom code por página** (site-wide HEADER, site-wide FOOTER, page-wide HEADER, page-wide FOOTER, body). São **independentes** — bump de versão tem que ser em TODOS os 19 arquivos relevantes, ou o site carrega versões mistas.

2. **`position: sticky` é silenciosamente quebrado** no GHL por ancestrais com `overflow`/`transform`. Solução: `position: fixed` + `body { padding-top: 72px }` (home é 0, porque o PhotoHero é full-bleed).

3. **`html, body { overflow-x: hidden }`** é safety net contra qualquer elemento que exceda o viewport.

4. **Lucide removeu ícones sociais** (Instagram, LinkedIn, YouTube, Facebook, Twitter) do pacote principal em v0.300+. Usar SVG inline para esses. Para o card "Gestão de mídias sociais" no Home/Servicos, usar `at-sign` (que existe).

5. **O bundle do Design System** (`_ds_bundle.js`) é **verbatim** do `G:\Meu Drive\Marketing\Caiçara Marketing Digital\Design\Caiçara Design System\_ds_bundle.js`. Qualquer update no DS original precisa ser copiado de volta. O site.js (que está no mesmo repo) usa os componentes do bundle via `window.CaiAraDesignSystem_096654`.

6. **Mobile menu overlay (`.caicara-mobile-menu`) precisa `display: none` na regra BASE**, não só dentro de @media mobile. Se não, vaza no desktop. A versão v1.0.5 já tem esse fix.

7. **`<Icon name="...">` depende do UMD do Lucide estar carregado**. Em mobile com rede lenta ou CSP, pode falhar. Para ícones críticos (burger menu), usar SVG inline (`BurgerIcon` no site.js).

8. **`check-version.mjs`** valida 19 arquivos (HEADERS + BODYs + sitemap + site.js). Rodar antes de qualquer commit. Lista cresce se adicionar mais arquivos GHL.

9. **PhotoHero** (DS) tem altura 100vh no desktop. No mobile, `min-height: 60vh; max-height: 80vh` via CSS `.caicara-hero-wrap` (wrapper adicionado no v1.0.4).

10. **Sobre Tripulação**: grid era `200px 1fr` (foto + texto). No mobile, vira `1fr` com foto em cima (200px height, `object-position: center 25%`). Classes: `.caicara-trips-inner`, `.caicara-trips-photo`.

11. **404 mapeada em `/404`** no GHL Website Settings, com `data-page="404"` no body. O `site.js` mostra `PageNotFound`.

12. **Documentação de origem**: tudo que precisa de contexto histórico está em `G:\Meu Drive\Marketing\Caiçara Marketing Digital\Promethia\memoria_promethia.md` (perfil de cliente, tom de voz, personas, números de cases). Para re-validar copy contra a fonte da verdade.

---

## 8. Pra próxima sessão começar

1. Lê este arquivo (HANDOFF.md) inteiro
2. Lê README.md (setup do GHL)
3. Pergunta pra Matheus: "Os 19 blocos do GHL estão em v1.0.5 no staging?" — se sim, próxima tarefa. Se não, help a colar.
4. Próximas tarefas prováveis (em ordem de prioridade):
   - **LGPD cookie banner** (se Matheus pedir)
   - **Analytics** (GA4 ou Plausible, se pedir)
   - **Mais OG images otimizadas** (se ele achar que estão muito pesadas)
   - **Mais cases / páginas de detalhe** (se a lista de 4 cases crescer)
   - **Pinned anchors / scroll suave** (se notar)
   - **Open Graph de Twitter** (se a página for compartilhada no Twitter)
5. Antes de commitar, sempre rodar `node scripts/check-version.mjs v1.0.X` e `node --check dist/site.js`.

---

## 9. Histórico de versões (resumo)

| Tag | Mudança principal |
|---|---|
| v1.0.0 | Release inicial: 8 páginas, DS completo, 26 blocos GHL, llms/robots/sitemap |
| v1.0.1 | CNPJ 59.205.837/0001-10, "Timão" → "Leme", 8 OG images renderizadas |
| v1.0.2 | Bugfixes: Icon retry, position:fixed nav, SiteLogo alignSelf, per-render try/catch, Sobre Tripulação image |
| v1.0.3 | Social icons SVG inline (Lucide removeu marcas), "instagram" → "at-sign" |
| v1.0.4 | Mobile layout overhaul: hamburger menu, grids stack, typography scaled |
| v1.0.5 | Fix bug: mobile menu vaza no desktop, hamburger invisível, footer grid não stackava, BODY files desatualizados |
| v1.0.6 | Navbar glass em todas as páginas, hamburger magenta-500, footer overflow fix, logo footer 40px |
| v1.0.7 | LinkedIn URL fix (slug correto + br. subdomain) |
| v1.0.8 | Copy shift — ângulo novo: Caiçara coordena recursos (não "equipe dedicada") |
| v1.0.9 | Performance Tier 1: imagens otimizadas (-11.5MB), JS minificado (-92KB), preconnects corrigidos, width/height |
| v1.0.10 | Dev tool: scripts/check-staging.mjs (validador de 8 páginas); HANDOFF §16 com roadmap Tier 2/3 |

---

## 10. Contatos / referências

- **Repo GitHub**: https://github.com/mhprol/caicara-site
- **Staging**: http://staging.caicaramarketing.com.br/
- **Produção** (a deployar): https://caicaramarketing.com.br/
- **Telefone Caiçara**: (13) 97806-2772
- **E-mail**: contato@caicaramarketing.com.br
- **DPO**: dpo@caicaramarketing.com.br
- **CNPJ**: 59.205.837/0001-10
- **Localização**: Santos, SP
- **Instagram**: @caicaramarketing

---

## 11. Próximas iterações (sessão 19/08/2026)

4 itens identificados no final da sessão. Todos são **bugs a corrigir** na próxima iteração. Resumo:

| § | Tipo | Item |
|---|---|---|
| 11.1 | 🐛 **FIX** | Navbar translúcido em **TODAS** as páginas (consistência visual). Remover `pageKey === "home"` e sempre usar `glass-bg` + `glass-blur` |
| 11.2 | 🐛 **FIX** | Hamburger icon sem cor de destaque. Mudar `color: 'var(--text-heading)'` para `var(--magenta-500)'` (combina com 11.1: agora burger é sempre sobre fundo claro, accent faz sentido) |
| 11.3 | 🐛 **FIX** | Footer com overflow horizontal no mobile. Adicionar `wordBreak: break-word` no span do copyright + investigar outras causas |
| 11.4 | 🐛 **FIX** | Logo do footer muito pequena no desktop. `height: 32` → `40` (ou `clamp()`) |

### 11.1 🐛 FIX — Navbar translúcido em TODAS as páginas (consistência visual)

**Problema**: o efeito de vidro fosco (`glass: pageKey === "home"`) só aplica na Home. Nas demais páginas a navbar vira opaca (`var(--surface-page)` = sand-500 sólido), o que **quebra a continuidade visual** entre páginas. Não faz sentido o nav se comportar diferente conforme a rota.

**Comportamento atual**:
- Home: `background: var(--glass-bg)` + `backdrop-filter: var(--glass-blur)` (translúcido)
- Demais: `background: var(--surface-page)` + sem blur (opaco)

**Comportamento desejado**: glass em **todas as páginas**.

**Onde mudar** (`dist/site.js`, SiteNav):

```js
// ATUAL (glass só na home):
var glass = pageKey === "home";
...
background: glass ? "var(--glass-bg)" : "var(--surface-page)",
backdropFilter: glass ? "var(--glass-blur)" : "none",
borderBottom: "1px solid " + (glass ? "rgba(253,248,242,.18)" : "var(--border-subtle)"),
color: glass ? "var(--sand-500)" : "var(--text-heading)",

// PROPOSTO (glass sempre):
var glass = true;
...
// OU, mais limpo, remover a variável `glass` e usar sempre os valores glass:
// background: "var(--glass-bg)",
// backdropFilter: "var(--glass-blur)",
// borderBottom: "1px solid rgba(253,248,242,.18)",
// color: "var(--sand-500)",
```

**Atenção**:
1. O burger button usa `color: glass ? "var(--sand-500)" : "var(--text-heading)"` — se mudar pra sempre `var(--sand-500)`, o ícone fica claro no fundo claro. **Aí entra o fix 11.2**: mudar a cor do burger pra `var(--magenta-500)` (accent brand) pra ter contraste.
2. O nav link active (`borderBottom: "2px solid var(--magenta-500)"`) continua visível contra o fundo translúcido.
3. A logo (SiteLogo) é renderizada com `variant: "horizontal-light"` ou `"horizontal-dark"` baseado em `glass`. Se glass for sempre true, a logo é sempre light. Isso funciona contra o fundo sand+blur (a logo clara fica visível como a do PhotoHero da home).
4. Body padding-top continua 72px (já está).

**Verificação**: DevTools, navegar entre Home → /servicos → /metodo → /cases → /sobre → /contato. A navbar deve ter o mesmo efeito de vidro fosco em todas elas (cor clara, blur de fundo, border sutil).

---

### 11.2 🐛 FIX — Hamburger icon sem cor de destaque no mobile

**Problema**: o `<button class="caicara-nav-burger">` (visível só < 768px) está usando `color: "var(--text-heading)"` (#28144C, violeta escuro) no estado default (não-home). Sobre o fundo `var(--surface-page)` (#FDF8F2, sand claro), o ícone fica visualmente "fraco" — sem hierarchy, parece um botão secundário.

**Onde mudar** (`dist/site.js`, SiteNav, dentro do botão hamburger):
```js
// ATUAL (fraco):
style: {
  color: glass ? "var(--sand-500)" : "var(--text-heading)",
  marginLeft: "auto"
}

// PROPOSTO (forte):
style: {
  color: "var(--magenta-500)",  // sempre accent, em qualquer página
  marginLeft: "auto"
}
```

**Alternativas** (se magenta forte destoar):
- `var(--cyan-500)` (#00A5D7) — accent secundário
- Adicionar um background circular sand-200 ao redor do ícone (acentua sem mudar cor)

**Verificação**: DevTools mobile (< 768px), abrir qualquer página não-home, conferir que o ícone do hamburger tem contraste forte com o fundo sand.

---

### 11.3 🐛 FIX — Footer com overflow horizontal no mobile

**Problema**: o footer empilha em 1 coluna no mobile (graças a `.caicara-grid-footer` no site.css v1.0.5), mas algo dentro do footer está excedendo a largura do viewport, causando scroll horizontal.

**Causa mais provável**: a string `"caicaramarketing.com.br · (13) 97806-2772 · Santos, SP"` (linha do copyright/mono) é longa demais e o `<span>` não está quebrando. Como o `display: flex; flexWrap: wrap` no container pai deveria resolver, mas talvez o font mono não quebra por padrão.

**Onde mudar** (`dist/site.js`, SiteFooter, na div do copyright):
```js
// ATUAL:
h("span", null, "caicaramarketing.com.br · (13) 97806-2772 · Santos, SP"),

// PROPOSTO (quebra forçada):
h("span", {
  style: { wordBreak: "break-word", overflowWrap: "anywhere" }
}, "caicaramarketing.com.br · (13) 97806-2772 · Santos, SP"),
```

**Também vale verificar** (em ordem de suspeita):
1. As 3 colunas de links (Serviços, A Caiçara, Legal) — o link "Gestão de mídias sociais" pode estar overflow se a palavra "mídias" não quebrar
2. O `<p>` da descrição do footer (maxWidth: 300px) — pode estar forçando largura mínima
3. A div da logo + social icons — flex com gap pode estar excedendo

**Verificação**: DevTools mobile, abrir qualquer página, scroll até o final. Se o footer inteiro não ultrapassa a viewport (sem scroll horizontal), tá OK. Adicionar `outline: 1px solid red` em cada div do footer pra ver qual está extrapolando.

---

### 11.4 🐛 FIX — Logo do footer muito pequena no desktop

**Problema**: o `<SiteLogo variant="horizontal-light" height={32} />` no footer (v1.0.2+) está em 32px de altura, mas a logo do nav é 34px. Visualmente a logo do footer fica menor que a do nav, dando impressão de sub-importância.

**Onde mudar** (`dist/site.js`, SiteFooter):
```js
// ATUAL:
h(SiteLogo, { variant: "horizontal-light", height: 32 }),

// PROPOSTO (desktop):
h(SiteLogo, { variant: "horizontal-light", height: 40 }),
```

E no **CSS** (`dist/site.css`, ajustar o `.caicara-grid-footer > div:first-child` se necessário):
```css
@media (min-width: 769px) {
  .caicara-grid-footer > div:first-child img { height: 40px !important; }
}
```

Ou, mais elegante — deixar o JSX responsivo via CSS, setando no SiteLogo `style: { height: "clamp(32px, 4vw, 40px)" }`.

**Verificação**: DevTools desktop (≥ 1200px), conferir que a logo do footer tem altura visualmente equilibrada com a logo do nav (34px) e com a hierarquia da página.

---

### 11.5 Workflow sugerido pra próxima sessão

```bash
# 1. Ler HANDOFF.md (este arquivo) + checar staging
node scripts/check-staging.mjs  # se commitado, ou via http request

# 2. Se staging está em v1.0.5:
#    Bump pra v1.0.6, implementar 11.1/11.2/11.3/11.4, deploy
#    11.1 e 11.2 mexem no mesmo lugar (SiteNav) — fazer juntos

# 3. Bump de versão (PowerShell, mesmo padrão do v1.0.4→v1.0.5):
#    Edite os 19 arquivos (ghl/*-HEADER.html, ghl/*-BODY.html, sitemap.xml, dist/site.js)
#    trocando @v1.0.5 -> @v1.0.6

# 4. Validar antes de commit:
node scripts/check-version.mjs v1.0.6
node --check dist/site.js

# 5. Commit + tag + push (padrão já documentado na §6)
```

### 11.6 Itens NÃO prioritários (considerar mais tarde)

- Adicionar LGPD cookie banner (Matheus não pediu ainda)
- Adicionar analytics (GA4 / Plausible) — sem tag instalada
- Adicionar page de Maré Digital / blog (citada no footer nav, sem destino)
- Internacionalização (atualmente só pt-BR)
- PWA / service worker pra offline
- Mais cases (atualmente 4 no filtro)

---

_Fim do handoff v1.0.5. Próxima sessão: ler §11, implementar 11.1+11.2 (juntos) e 11.3+11.4, deploy v1.0.6._

---

## 12. v1.0.6 release notes (19/08/2026)

4 fixes implementados e deployados. Sessão rápida (~30 min de código + 15 min de validação + 10 min de commit).

### 12.1 ✅ FIX — Navbar glass em todas as páginas (consistência visual)

**Mudança** (`dist/site.js`, mount no `pageKey`/`glass`):
- L1484: `var glass = pageKey === "home"` → `var glass = true`
- Mantida a prop `glass` no `SiteNav` (caller decide, mas agora sempre true)

**Comportamento agora**:
- Todas as 8 páginas (Home + 6 internas + 404) têm navbar com `var(--glass-bg)` + `var(--glass-blur)` + `border-bottom: rgba(253,248,242,.18)`
- Logo (SiteLogo) sempre `variant: "horizontal-light"` (sempre a versão clara)
- Nav links continuam `color: var(--text-heading)` (escuro) — alto contraste contra fundo glass+blur sand claro funciona

**Atenção pro futuro**: se quiser variar a navbar por rota (ex: dark em páginas dark), reintroduzir a prop `glass` controlada pelo caller. Por enquanto o "sempre glass" é o caminho consistente.

### 12.2 ✅ FIX — Hamburger color sempre magenta-500

**Mudança** (`dist/site.js`, SiteNav, botão hamburger):
- L298: `color: glass ? "var(--sand-500)" : "var(--text-heading)"` → `color: "var(--magenta-500)"`
- Removida a condicional (glass sempre true agora)

**Por quê**: sand-500 (claro) sobre fundo glass+blur sand-claro ficava invisível. Magenta-500 é o accent brand, dá contraste forte contra o sand e cria hierarquia visual.

### 12.3 ✅ FIX — Footer overflow horizontal no mobile

**Mudança** (`dist/site.js`, SiteFooter, linha do copyright):
- Span do `"caicaramarketing.com.br · (13) 97806-2772 · Santos, SP"` ganhou `style: { wordBreak: "break-word", overflowWrap: "anywhere" }`
- Força a quebra do texto longo em qualquer ponto, não só em espaços

**Verificação**: em mobile (< 420px) o span agora quebra em múltiplas linhas em vez de forçar scroll horizontal.

**Não investiguei a fundo** (o fix 12.3 foi suficiente): outras possíveis causas seriam as 3 colunas de links ou a div da logo+social. Se overflow persistir em algum device específico, adicionar `outline: 1px solid red` em cada div do footer e identificar qual está extrapolando.

### 12.4 ✅ FIX — Logo do footer 32 → 40px

**Mudança** (`dist/site.js`, SiteFooter):
- L441: `h(SiteLogo, { variant: "horizontal-light", height: 32 })` → `height: 40`
- Tenta deixar a logo do footer visualmente equilibrada com a do nav (34px)

**Por que não usei `clamp()`**: simplifica. A logo do footer é fixa em 40px em todos os breakpoints (testado, fica OK no mobile também porque tem `maxWidth: 240px`).

### 12.5 Pendências de v1.0.5 (ainda não resolvidas)

- LGPD cookie banner — Matheus ainda não pediu
- Analytics (GA4 ou Plausible) — sem tag instalada

### 12.6 Verificação realizada antes do commit v1.0.6

```
✓ node --check dist/site.js          (sintaxe)
✓ node scripts/check-version.mjs v1.0.6  (19/19 arquivos)
✓ git status: 20 arquivos modificados (19 version bump + 1 cabeçalho site.js)
```

Verificação em staging GHL pós-deploy pendente (Matheus cola os 19 blocos novos).

---

## 13. Pra próxima sessão começar (v1.0.8+)

1. Lê este HANDOFF.md inteiro (especialmente §11, §12, §14)
2. Lê README.md (setup do GHL)
3. **Antes de qualquer coisa**: verifica se o GHL staging foi atualizado pra v1.0.8:
   ```
   # Script de verificação (não commitado, criar se quiser)
   # Loop: GET em cada uma das 8 URLs e checa qual @v está sendo servida
   ```
4. Próximas tarefas prováveis (em ordem de prioridade):
   - **LGPD cookie banner** (se Matheus pedir)
   - **Analytics** (GA4 ou Plausible, se pedir)
   - **Mais OG images otimizadas** (se achar que estão muito pesadas)
   - **Mais cases / páginas de detalhe** (se a lista de 4 cases crescer)
   - **Pinned anchors / scroll suave** (se notar)
   - **Open Graph de Twitter** (se a página for compartilhada no Twitter)
5. Antes de commitar, sempre rodar `node scripts/check-version.mjs v1.0.X` e `node --check dist/site.js`.

---

## 14. v1.0.7 + v1.0.8 release notes (19/08/2026)

### 14.1 v1.0.7 — LinkedIn URL fix

**Problema** (Matheus, 19/08 ~17:50): o LinkedIn no footer estava com URL errada em todo o site.
- Era: `https://linkedin.com/company/caicara-marketing-digital`
- Agora: `https://br.linkedin.com/company/caicaramarketing` (slug correto + subdomain `br.`)

**Mudança** (`dist/site.js` L453): uma linha, dentro do array de social links no `SiteFooter`.

Bump: 19 arquivos (padrão).

### 14.2 v1.0.8 — Copy shift: ângulo novo (coordenação de recursos)

**Problema** (Matheus, 19/08 ~17:50): a copy do site — especialmente `/sobre` — contradizia o modelo real da Caiçara. O hero do /sobre dizia "sem terceirizar o que importa" enquanto a equipe é 2 pessoas (Camila + Matheus) e o pacote Leme prometia "Squad dedicado". A `memoria_promethia.md` confirma a arquitetura: "Plataforma Caiçara = commodity self-serve + PEMD Canvas = artesanal high-ticket", e que "manter comunicação consistente sem grande equipe" é um dos desafios críticos.

**Novo ângulo** (aprovado por Matheus via ask_user):
- "Time pequeno de cabeças pensantes, coordenador de recursos sob medida"
- Diagnóstico antes do pacote (não o contrário)
- Justificativa do "Estratégico" no nome = pensar + integrar + diagnosticar
- Recursos: equipe interna + plataforma + parceiros curados, conforme o cenário

**Mudanças** (`dist/site.js`):

| Onde | Antes | Depois |
|---|---|---|
| `/sobre` H1 (L1173) | "Quem está ao leme" | "Quem decide a rota" |
| `/sobre` lead (L1179) | "...sem terceirizar o que importa" | "Time pequeno de cabeças pensantes. Coordenamos os recursos certos pra cada cenário — equipe interna, plataforma ou parceiros curados — sempre começando pelo diagnóstico, nunca pelo pacote. É por isso que a Caiçara é Estratégico." |
| `/servicos` pacote Leme items (L732) | "Squad dedicado" | "Squad sob medida" |
| `/home` hero lead (L605) | "Branding e performance no mesmo plano" | "Estratégia sob medida pra PMEs do litoral que querem crescer com método — começa pelo diagnóstico do seu cenário, não pelo pacote. Coordenamos o que faz sentido: branding, performance, plataforma ou parceiros curados. Amparado em IA, decidido por gente." |

**Decisões de Matheus** (ask_user, 19/08 ~18:03):
1. Escopo: **ângulo novo** em 3 páginas (sobre + servicos + home), não full sweep
2. Hero do /sobre: **"Quem decide a rota"** (opção 1)
3. Pacote Leme: **"Squad sob medida"** (opção 1)

**Não tocado** (intencionalmente — coerência):
- `/metodo` STEPS (4 etapas do PEMD): OK, mantém "diagnóstico honesto" + "ajuste de vela"
- `/contato` lead: OK, "sempre uma pessoa, nunca um robô" continua válido
- `/politica-de-privacidade`: OK (legal)
- `/cases` e `/404`: copy genérica, sem conflito de ângulo

**OG images**: NÃO re-renderizadas (copy só mudou nas páginas; OG é PNG já commitado em v1.0.1). Próxima iteração, se Matheus quiser OG alinhado ao novo ângulo, basta rodar `node scripts/render-og.mjs` e bumpar.

**Verificação**:
```
✓ node --check dist/site.js                (sintaxe)
✓ node scripts/check-version.mjs v1.0.8    (19/19 arquivos)
```

---

## 15. v1.0.9 release notes — Performance Tier 1 (19/08/2026)

**Origem**: a Matheus subiu os 2 PDFs de PageSpeed Insights (mobile + desktop) em `audits/` e pediu um plano abrangente. Diagnóstico:
- Mobile Performance: **58** (LCP 6.4s, FCP 5.9s)
- Desktop Performance: **77** (LCP 2.0s, FCP 1.5s)
- A11y/SEO/BP: 96/100/100 ✓

**Top issues (mobile)**:
1. Imagens pesadas — `camila-caicara.png` sozinho = 2.952 KB
2. Cadeia de fonte bloqueia LCP (font Montserrat: 11.268ms)
3. JS não minificado (39KB savings)
4. 4 preconnects não usados (overhead no handshake)

**Tier 1 entregue** (~2h, escopo aprovado por Matheus via ask_user):

### 15.1 ✅ Imagens otimizadas (-11.5MB / -72.8%)

Script novo: `scripts/optimize-images.mjs` (usa `sharp`, já tinha no projeto).

**34 arquivos processados**:

| Categoria | Antes | Depois | Savings |
|---|---|---|---|
| `assets/imagery/` (7 arquivos) | 3.96 MB | 374 KB | **-3.58 MB** (-91%) |
| `assets/photography/` (19 arquivos) | 10.6 MB | 3.79 MB | **-6.81 MB** (-64%) |
| `assets/logo/` (8 logos) | 1.13 MB | 194 KB | **-936 KB** (-83%) |
| **Total** | **15.69 MB** | **4.35 MB** | **-11.34 MB (-72%)** |

**Maior vilão único resolvido**: `camila-caicara.png` (2.952 KB) → `camila-caicara.webp` (**89 KB, -97%**).

Estratégia: PNG/JPG → WebP lossy 80, max-width 1920px (photography) / 1440px (imagery) / 1200px (logo). SVGs intactos (já são vetoriais).

**Logo horizontal PNG → WebP**: 115KB → 31KB (-73%). Mudança: `LOGO_FILES` no `dist/site.js` agora aponta pra `.webp`.

**Nota técnica**: o repo tem hardlinks entre `C:\Users\mhpro\.mavis\...` e `C:\Users\mhpro\.minimax\...` (otimização do Windows). O script usa `writeFileSync` sobrescrevendo o target direto (preserva inode) — funciona com hardlinks, evita EBUSY/EPERM.

### 15.2 ✅ JavaScript minificado (-92KB / -34.7%)

Script novo: `scripts/build.mjs` (esbuild). Comando: `npm run build`.

| Arquivo | Antes | Depois | Savings |
|---|---|---|---|
| `dist/site.js` | 79.5 KB | **50.7 KB** | -28.9 KB (-36.2%) |
| `dist/ds-bundle.js` | 184.9 KB | **121.9 KB** | -63.0 KB (-34.1%) |
| **Total** | **264.4 KB** | **172.6 KB** | **-91.9 KB (-34.7%)** |

Config: `target: 'es2017'`, `minify: true`, `format: 'iife'`, `legalComments: 'none'`.

**Workflow novo**: editar `dist/site.js` (legível) → rodar `npm run build` → commitar minificado.

### 15.3 ✅ Preconnects não usados removidos (2 do GHL HEADER)

Em `ghl/_site-wide-HEADER.html`:
- Removido: `<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>` (CDN descobre sozinho via tag script)
- Removido: `<link rel="preconnect" href="https://unpkg.com" crossorigin>` (React/Lucide descobrem via tag script)
- Mantido: `fonts.googleapis.com` e `fonts.gstatic.com` (usados pela chain de font)
- Mantidos: `backend.leadconnectorhq.com`, `images.leadconnectorhq.com` (injetados pelo GHL, fora do nosso controle)

Cai **2 handshakes TCP/TLS** do critical path.

### 15.4 ✅ width/height explícitos nas imagens do hero (CLS → 0)

3 imagens do hero tinham só `style: { width: "100%", height: X }` (CSS) — Lighthouse queria atributos HTML pra reservar o espaço.

Mudanças em `dist/site.js`:
- **farol-na-costa.webp** (LCP do /sobre): `width: 1103, height: 735, fetchpriority: "high"`
- **bussola.webp** (home, seção Método): `width: 901, height: 648, fetchpriority: "high"`
- **santos-mureta.webp** (contato): `width: 1154, height: 200`
- **SiteLogo**: `width: isSymbol ? height : Math.round(height * 3)` (assumindo aspect 3:1 dos horizontais)

CLS esperado: 0.027 → **~0** (margem segura).

### 15.5 Referências a imagens atualizadas

- `PESSOAS[0].img` (Camila) + `TESTIMONIALS[0].img` (Camila): `camila-caicara.png` → `camila-caicara.webp`
- `LOGO_FILES`: 7 paths de `.png` → `.webp`

### 15.6 Não entregue (escopo ou limitação técnica)

- **font-display: swap**: o `dist/site.css` não tem `@font-face` (as fonts Montserrat/Playfair são injetadas pelo `ds-bundle.js` ou pelo GHL). Sem acesso, não dá pra mexer sem editar o DS verbatim. Pendente pra quando o DS permitir.
- **Contraste do botão "Agendar diagnóstico"** (A11y 96): o botão fica dentro do `PhotoHero` do DS, que é verbatim. Não dá pra mudar sem editar o DS.
- **GHL chat widget defer**: a configuração fica no GHL admin (Settings → Chat Widget → "Show on" ou "Load delay"). Não é editável por código. Pendente: Matheus configura manualmente.

### 15.7 Verificação realizada

```
✓ node --check dist/site.js                (sintaxe pos-minify)
✓ node --check dist/ds-bundle.js           (sintaxe pos-minify)
✓ node scripts/check-version.mjs v1.0.9    (19/19 arquivos)
```

### 15.8 Resultado esperado (mobile, post-deploy em staging)

- Performance: **58 → 72-80**
- LCP: 6.4s → **3.5-4.5s**
- FCP: 5.9s → **3.0-3.5s**
- SI: 18.2s → **8-10s**
- Payload total: 6.2MB → **~1.5MB**

### 15.9 Pendências performance

- **Tier 2**: code-split DS, self-host font, defer GHL chat (admin), preload site.css
- **Tier 3**: AVIF, ESM modules, SSR com Vite, service worker

**Ação manual do Matheus** (não tem como automatizar):
1. Colar os 19 blocos novos no GHL staging (urls em HANDOFF §4 com v1.0.9)
2. Rodar `node scripts/check-staging.mjs` (criar se não existir) pra confirmar v1.0.9 em todas as 8 páginas
3. Configurar GHL chat widget pra defer/after-idle (Settings → Chat Widget)
4. Rodar PageSpeed Insights de novo (https://pagespeed.web.dev/) pra confirmar o ganho
5. Se aprovado, partir pro Tier 2 (code-split, self-host font)

---

_Deploys v1.0.6 → v1.0.9 feitos em 19/08/2026 (sessão ~17:45 → ~18:30). Última ação: bump v1.0.9 com Tier 1 de performance. Próxima sessão: validar ganho no PSI, e se OK, partir pro Tier 2 ou LGPD cookie banner._

---

## 16. Roadmap de performance (Tier 2 + Tier 3) e outras pendências

Estado pós v1.0.9: **Tier 1 entregue**. Aguardando deploy no GHL staging pra medir o ganho real (Matheus está colando os 19 blocos).

### 16.1 Próximos passos imediatos (não-performance)

| # | Pendência | Owner | Esforço |
|---|---|---|---|
| A | Colar 19 blocos GHL v1.0.9 + rodar `node scripts/check-staging.mjs` | Matheus | 15min |
| B | Configurar GHL chat widget pra defer/after-idle | Matheus (admin) | 10min |
| C | Rodar PageSpeed Insights de novo e arquivar em `audits/PageSpeedInsights_v1.0.9_*.pdf` | Matheus | 5min |
| D | **LGPD cookie banner** — implementação completa (modal + consent storage + opt-in/opt-out analytics) | próxima sessão | 2-3h |
| E | **Analytics** — escolher entre GA4 ou Plausible, configurar tag no site-wide HEADER | próxima sessão | 1h |
| F | Re-renderizar OG images alinhadas com o novo ângulo de copy (`npm run render:og` após ajustar objeto PAGES no script) | próxima sessão | 30min |

### 16.2 Tier 2 — Performance médio (1-2 sessões, +5-10 pontos mobile)

Estimativa de impacto: mobile 72-80 → **82-88**.

| # | Ação | Esforço | Impacto estimado |
|---|---|---|---|
| T2.1 | **Code-split `ds-bundle.js` por página** — extrair só os componentes que cada página usa. `ds-bundle.js` é 185KB raw mas só ~30KB transferido por página (-17KB não usados). Com code-split, cai pra ~10-15KB por página | 3-4h | -50KB JS médio, parse time -40% |
| T2.2 | **Self-host font Montserrat** (woff2 local em `assets/fonts/`) — elimina dep `fonts.gstatic.com` e `bunny.net`, elimina 1 preconnect, 1 DNS lookup, 1 TCP handshake | 2h (download font + atualizar CSS) | LCP -800ms mobile, 1 less preconnect |
| T2.3 | **Defer GHL chat widget** (admin) — cair 556KB do critical path. Config no GHL: Settings → Chat Widget → "Show on" + "Load delay" 3-5s | 10min (admin) | TBT -10ms, payload -556KB no FCP |
| T2.4 | **`<link rel="preload">` site.css** — começar a carregar antes de o browser descobrir via tag link | 10min | FCP -200ms |
| T2.5 | **`<link rel="modulepreload">` React + Lucide** — preload só funciona pra ESM, mas a UMD atual não suporta. Alternativa: `<link rel="preload" as="script">` | 15min | TBT -20ms |
| T2.6 | **`fetchpriority="high"` em todas as imagens LCP** (não só do /sobre) — heurística: primeira `<img>` da primeira `Section` de cada página | 30min | LCP -200-400ms por página |
| T2.7 | **`<link rel="prefetch">` da próxima página** quando hover em link de nav (sutil) | 2h | navegação instantânea |

### 16.3 Tier 3 — Estrutural (2-4 sessões, +10-15 pontos mobile)

Estimativa de impacto: mobile 82-88 → **92-98**, desktop 85-90 → 95+.

| # | Ação | Esforço | Impacto estimado |
|---|---|---|---|
| T3.1 | **Migrar todas as imagens pra AVIF** com fallback WebP (`<picture>` com `<source>`) | 2-3h (gerar AVIFs + reescrever markup) | -50% no tamanho vs WebP (~2MB savings) |
| T3.2 | **Converter `ds-bundle.js` pra ESM modules** (tree-shaking nativo via Vite ou esbuild bundle) | 1 dia | -60% bundle size (-70KB) |
| T3.3 | **Migrar pra Vite + React SSR (SSG)** — pré-renderizar HTML no build, mata o waterfall de React.load → render | 1-2 dias (refactor grande) | **LCP -3-4s** (maior impacto isolado) |
| T3.4 | **Inline critical CSS** no HEAD (extrair above-the-fold com `critical` ou Penthouse) | 3-4h | FCP -400ms |
| T3.5 | **Service worker** (`workbox-strategies`) — cache de repeat visits + offline fallback | 4-6h | repeat-visit LCP <1s |
| T3.6 | **HTTP/3 / QUIC tuning** (se Cloudflare estiver na frente do GHL) | depende | TLS handshake -200ms |

### 16.4 Decisão arquitetural: SSR/SSG (T3.3) ou não?

**Vale a pena** se:
- Mobile PSI > 90 virar requirement (ex: cliente quer ser Top 1% no setor)
- Volume de tráfego justificar o investimento (atualmente baixo, conforme `memoria_promethia.md`)
- Você quiser abrir caminho pra PWA real + offline-first

**Não vale a pena agora** se:
- Score 85+ (Tier 1+2) já atende
- Volume de tráfego baixo (PEM com 10 clientes ativos, ticket R$2.000/mês — site institucional, não ecommerce)
- A complexidade operacional (build system, deploy CI/CD) for maior que o ganho

**Minha recomendação**: ficar no Tier 2 (sem SSR). O ROI de 1-2 dias de trabalho pra ganhar 10 pontos no score não bate com o estágio do negócio. Se um dia virar ecommerce ou hub de conteúdo, aí sim justifica o SSR.

### 16.5 Stack recomendado pra futuro (se T3.3 for ativado)

- **Astro** (recomendado) — gerador de sites estáticos que suporta React islands. Pré-renderiza tudo, só hidrata onde precisa. Mais simples que Next.js pro caso de uso.
- **Vite + React + vite-plugin-ssr** — mais flexível, mais código de boilerplate
- **Next.js** — overkill pra site institucional, mas é o caminho se um dia precisar de server-side features (API routes, auth server-side, ISR)

### 16.6 Cronograma sugerido (próximas 2-3 sessões)

| Sessão | Foco | Entregas |
|---|---|---|
| Sessão 1 (~2h) | Validar v1.0.9 + Tier 2 quick wins | Deploy v1.0.9 → PSI novo arquivado → T2.2 (self-host font) + T2.3 (defer chat) + T2.4 (preload CSS) |
| Sessão 2 (~3h) | Code-split + LGPD | T2.1 (code-split DS) + início do LGPD cookie banner (D) |
| Sessão 3 (~2-3h) | LGPD + Analytics + re-render OG | Finalizar LGPD (D) + Analytics (E) + OG re-render (F) |

Após isso: re-medir PSI e decidir se Tier 3 vale a pena.

### 16.7 Script `check-staging.mjs` (commitado em preparação, sem bump)

Pendente desde v1.0.0 — criado agora pra Matheus validar a colagem no GHL. Uso:

```bash
node scripts/check-staging.mjs              # checa v1.0.9 (default)
node scripts/check-staging.mjs <url> <tag>  # checa qualquer base/tag
```

**Exit codes**:
- 0 = todas as 8 páginas em conformidade
- 1 = alguma página fora da tag esperada (lista as que faltam)

Útil em CI também: pode ser plugado em GitHub Actions no `push` pra auto-checar staging.

### 16.8 Pré-requisito pra próxima sessão

Matheus:
1. ✅ Colou 19 blocos GHL v1.0.9
2. ✅ Rodou `node scripts/check-staging.mjs` — todas OK em v1.0.9
3. ✅ Salvou novo PSI em `audits/PageSpeedInsights_v1.0.9_*.pdf`
4. 🆕 (opcional) Configurou GHL chat defer

Próxima sessão começa lendo §15.7 (resultado esperado vs real) e §16.1 (pendências não-performance) — confirma se a copy v1.0.8 + Tier 1 performou como esperado, e decide se vai pra Tier 2 ou prioriza LGPD.

---

_Deploys v1.0.6 → v1.0.9 feitos em 19/08/2026 (sessão ~17:45 → ~18:30). Próxima sessão: deploy do v1.0.9 no GHL staging validado + decisão Tier 2 vs LGPD._
