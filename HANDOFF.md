# Caiçara · Site institucional — Handoff

> Documento de continuação entre sessões. Última atualização: **v1.0.5** (19/08/2026).
> A próxima sessão deve ler este arquivo inteiro antes de tocar em qualquer coisa.

---

## 1. Status atual

| Componente | Estado | Versão |
|---|---|---|
| Repo `mhprol/caicara-site` | público, tags `v1.0.0`..`v1.0.5` | v1.0.5 ✓ |
| `dist/site.js` (React app) | production-ready, ~70KB | v1.0.5 |
| `dist/site.css` (tokens + reset + media queries) | production-ready, ~22KB | v1.0.5 |
| `dist/ds-bundle.js` (Design System) | verbatim copy, 185KB | v1.0.5 |
| `og/*.png` (8 imagens 1200×630) | commitadas, 100–250KB cada | v1.0.5 |
| `llms.txt`, `robots.txt`, `sitemap.xml` | commitados | v1.0.5 |
| GHL staging `staging.caicaramarketing.com.br` | **parcialmente em v1.0.5** — ver §4 | misto |
| GHL produção `caicaramarketing.com.br` | **não deployado** | — |

**Última sessão**: layout mobile overhaul + bugfixes do menu desktop vazao / hamburger invisível / footer grid não stackava / BODY files desatualizados.

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

A **staging estava com 3 versões misturadas** (v1.0.0 body + v1.0.1 site.js + v1.0.4 page header). Provavelmente Matheus atualizou só o page-wide HEADER na primeira passada.

### Pra staging ficar 100% em v1.0.5

1. **Site-wide HEADER** — Settings → Custom Code → Header Code:
   - Apaga o que tá lá
   - Cola: https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/_site-wide-HEADER.html

2. **Body block de cada uma das 8 páginas** — Page → Custom Code → Body HTML:
   - Apaga o que tá lá
   - Cola o arquivo correspondente (v1.0.5):
     - `home-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/home-BODY.html
     - `servicos-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/servicos-BODY.html
     - `metodo-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/metodo-BODY.html
     - `cases-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/cases-BODY.html
     - `sobre-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/sobre-BODY.html
     - `contato-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/contato-BODY.html
     - `politica-de-privacidade-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/politica-de-privacidade-BODY.html
     - `404-BODY.html` https://raw.githubusercontent.com/mhprol/caicara-site/v1.0.5/ghl/404-BODY.html

3. **Page-wide HEADER e FOOTER** — esses já estavam em v1.0.4 e foram re-bumpados pra v1.0.5 no repo. **Vale re-colar** se quiser garantia.

4. **Hard refresh** (Ctrl+Shift+R) + DevTools Network + filtro `caicara-site` → tudo tem que apontar pra `v1.0.5`.

### Script de verificação (pronto, dev tool)

`node scripts/check-staging.mjs` (no repo, versionado). Ele faz GET em cada uma das 8 URLs e mostra exatamente quais caicara-site@V... estão sendo carregadas. Se aparecer v1.0.0/v1.0.1/v1.0.4 em algum slot, esse bloco precisa update.

**Não** está commitado ainda — Matheus tem o `check-staging.mjs` local mas não no GitHub. Se quiser, próxima sessão commita ele.

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

_Fim do handoff. Qualquer dúvida, ler o README.md, os comentários inline no `dist/site.js`, ou o `memoria_promethia.md` no Drive._
