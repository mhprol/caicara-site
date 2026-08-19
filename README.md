# Caiçara · Site institucional

Repositório de **assets, código e blocos GoHighLevel** que alimentam o site institucional da **Caiçara Marketing Digital Estratégico** — [caicaramarketing.com.br](https://caicaramarketing.com.br).

O site é uma SPA React 18 montada em runtime: o `site.js` carrega o bundle do Design System (hospedado aqui mesmo, no GitHub) e renderiza a página de acordo com um `data-page` no DOM. Não há build step; tudo é CDN.

---

## Estrutura

```
caicara-site/
├── README.md                       # este arquivo
├── llms.txt                        # descrição da empresa p/ crawlers de LLM
├── robots.txt                      # regras de crawling
├── sitemap.xml                     # 7 URLs canônicas
│
├── assets/                         # mirror da pasta assets/ do Design System
│   ├── logo/                       # 11 logos (PNG + SVG, todas variantes)
│   ├── icons/                      # 4 SVGs próprios da marca
│   ├── photography/                # 19 fotos náuticas
│   └── imagery/                    # retratos, papel de carta, tiles
│
├── og/                             # 8 OG images 1200x630 (PNG) — geradas pelo script
│
├── src/                            # fonte de referência do Design System
│   ├── tokens/                     # 9 token CSS (colors, typography, spacing…)
│   └── ds/                         # readme, manifest, skill do DS original
│
├── dist/                           # artefatos servidos via jsDelivr
│   ├── site.css                    # tokens concatenados + page rules (15 KB)
│   ├── ds-bundle.js                # bundle UMD do Design System (185 KB)
│   ├── site.js                     # app React: nav, router, 8 páginas, footer (70 KB)
│   └── seo/                        # JSON-LD por página (referência; já inline nos GHL blocks)
│       ├── home.json
│       ├── servicos.json
│       ├── metodo.json
│       ├── cases.json
│       ├── contato.json
│       ├── sobre.json
│       ├── politica-de-privacidade.json
│       └── 404.json
│
├── scripts/
│   └── render-og.mjs               # renderiza og/*.png com sharp
│
└── ghl/                            # 26 arquivos de blocos custom do GoHighLevel
    ├── _site-wide-HEADER.html      # (idêntico em todas as páginas)
    ├── _site-wide-FOOTER.html      # (idêntico em todas as páginas)
    ├── home-HEADER.html
    ├── home-BODY.html
    ├── home-FOOTER.html
    ├── servicos-HEADER.html
    ├── servicos-BODY.html
    ├── servicos-FOOTER.html
    ├── metodo-HEADER.html
    ├── metodo-BODY.html
    ├── metodo-FOOTER.html          # contém o JSON-LD extra (HowTo + FAQ)
    ├── cases-HEADER.html
    ├── cases-BODY.html
    ├── cases-FOOTER.html
    ├── sobre-HEADER.html
    ├── sobre-BODY.html
    ├── sobre-FOOTER.html
    ├── contato-HEADER.html
    ├── contato-BODY.html
    ├── contato-FOOTER.html
    ├── politica-de-privacidade-HEADER.html
    ├── politica-de-privacidade-BODY.html
    ├── politica-de-privacidade-FOOTER.html
    ├── 404-HEADER.html
    ├── 404-BODY.html
    └── 404-FOOTER.html
```

---

## Setup no GoHighLevel (passo a passo)

São 8 páginas no GHL. Cada uma tem 5 slots de custom code:

| Slot GHL | Arquivo neste repo | Mesmo em todas as páginas? |
|---|---|---|
| **Settings → Custom Code → Site Header** | `ghl/_site-wide-HEADER.html` | sim — cola uma vez |
| **Settings → Custom Code → Site Footer** | `ghl/_site-wide-FOOTER.html` | sim — cola uma vez |
| **Page → Custom Code → Page Header** | `ghl/{pagina}-HEADER.html` | não — específico |
| **Page → Custom Code → Page Footer** | `ghl/{pagina}-FOOTER.html` | não — específico (vazio em algumas) |
| **Page → Custom Code → Body HTML** | `ghl/{pagina}-BODY.html` | não — específico |

### 1. Site-wide (cola uma vez)

Em **Settings → Custom Code**:

- **Header Code (Site-wide)** → conteúdo de `ghl/_site-wide-HEADER.html`
- **Footer Code (Site-wide)** → conteúdo de `ghl/_site-wide-FOOTER.html`

### 2. Por página (repete para as 8)

Para cada página (`/`, `/servicos`, `/metodo`, `/cases`, `/sobre`, `/contato`, `/politica-de-privacidade`, `/404`):

- **Header Code** → conteúdo de `ghl/{pagina}-HEADER.html`
- **Footer Code** → conteúdo de `ghl/{pagina}-FOOTER.html`
- **Body HTML** → conteúdo de `ghl/{pagina}-BODY.html`

> **Importante**: o `data-page` no BODY precisa bater com o nome do arquivo:
> `/` → `data-page="home"`, `/servicos` → `data-page="servicos"`, etc.

### 3. Slugs e 404

Configure os slugs das páginas no GHL:

| Página | Slug | Notas |
|---|---|---|
| Início | `/` | página padrão |
| Serviços | `/servicos` | |
| Método | `/metodo` | |
| Cases | `/cases` | |
| A Caiçara | `/sobre` | |
| Contato | `/contato` | |
| Política de privacidade | `/politica-de-privacidade` | footer aponta pra cá |
| 404 | `/404` | marque como **404 page** no GHL Website Settings |

### 4. Arquivos do domínio raiz

Estes 3 arquivos precisam estar **na raiz do domínio** (`https://caicaramarketing.com.br/llms.txt` etc) para serem respeitados pelos crawlers. O jsDelivr não ajuda aqui — eles têm que ser servidos pelo seu domínio.

No GHL, vá em **Website Settings → Custom Domain / Files** (ou via FTP/SFTP do host por trás do domínio) e faça upload de:

- `llms.txt` (na raiz)
- `robots.txt` (na raiz)
- `sitemap.xml` (na raiz)

Se o GHL não permitir upload de arquivos arbitrários, peça ao seu host (geralmente Cloudflare) para criar redirects 301:

```
/llms.txt        → https://cdn.jsdelivr.net/gh/mhprol/caicara-site@v1.0.0/llms.txt
/robots.txt      → https://cdn.jsdelivr.net/gh/mhprol/caicara-site@v1.0.0/robots.txt
/sitemap.xml     → https://cdn.jsdelivr.net/gh/mhprol/caicara-site@v1.0.0/sitemap.xml
```

---

## Versionamento (pinar uma versão)

Todos os arquivos referenciam a tag `@v1.0.0` no jsDelivr. Para atualizar:

```bash
# 1. Faça as mudanças que precisar (em dist/, ghl/, og/…)
# 2. Renderize as OG images se mudou a copy:
node scripts/render-og.mjs

# 3. Commit + tag
git add -A
git commit -m "v1.0.1: <descrição>"
git tag v1.0.1
git push origin main --tags

# 4. Atualize a string @v1.0.0 → @v1.0.1 em todos os arquivos:
#    ghl/_site-wide-HEADER.html
#    ghl/*-HEADER.html
#    ghl/*-FOOTER.html
#    ghl/*-BODY.html
#    sitemap.xml
#    dist/site.js (const FALLBACK_BASE)
git add -A
git commit -m "v1.0.1: bump jsDelivr version"
git push origin main
```

> **Por que duas tags?** Porque o `site.js` precisa referenciar a mesma tag que está rodando. Se você só atualizar a tag mas o `site.js` ainda aponta pra `@v1.0.0`, o site vai continuar servindo o código antigo. As duas precisam subir juntas.

---

## Renderizar OG images

Pré-requisito: Node 18+ e `sharp` instalado.

```bash
npm i sharp --no-save       # ou: npm i (crie um package.json com { "dependencies": { "sharp": "*" } })
node scripts/render-og.mjs
```

O script lê 8 configurações hardcoded (em `scripts/render-og.mjs`, no objeto `PAGES`) e gera:

- `og/home.png` (1200x630)
- `og/servicos.png`
- `og/metodo.png`
- `og/cases.png`
- `og/sobre.png`
- `og/contato.png`
- `og/politica-de-privacidade.png`
- `og/404.png`

Cada OG tem: foto da marca de fundo + scrim violeta profundo + título da página + selo Caiçara + régua "linha d'água" no rodapé.

Para mudar copy/foto, edite o objeto `PAGES` no script.

---

## Customização

### Mudar uma frase no site

Edite `dist/site.js` (procure a página correspondente em `PAGE_MAP`). Os textos das páginas estão inline nos componentes `PageHome`, `PageServicos`, `PageMetodo`, `PageCases`, `PageContato`, `PageSobre`, `PagePolitica`. Não esqueça de bumpar a versão.

### Adicionar uma página nova

1. Crie o componente `Page{Nova}` em `dist/site.js` (use `PageSobre` como modelo).
2. Adicione a entrada em `PAGE_MAP`.
3. Crie `dist/seo/{slug}.json` com o JSON-LD.
4. Crie `ghl/{slug}-HEADER.html`, `ghl/{slug}-FOOTER.html`, `ghl/{slug}-BODY.html`.
5. Adicione entrada no objeto `PAGES` em `scripts/render-og.mjs` e rode o script.
6. Adicione `<url>` no `sitemap.xml`.
7. Commit + tag + push.

### Mudar a paleta

A paleta está em `src/tokens/colors.css` (referência) e **inline** em `dist/site.css` (build output). Edite o `dist/site.css` diretamente — é o que vai pra produção. Os 5 hexes da marca são fixos (`#FDF8F2`, `#E3286C`, `#543E8D`, `#28144C`, `#00A5D7`); rampas são tints/shades desses 5.

### Trocar a logo ou foto

Substitua o arquivo correspondente em `assets/`. Não precisa rebuildar nada — o site referencia por path.

---

## Stack técnica

- **Frontend**: React 18.3.1 (production minified) + ReactDOM 18.3.1, sem JSX, via `React.createElement` (mais rápido, sem Babel em runtime).
- **Design System**: bundle UMD em `dist/ds-bundle.js` (26 componentes: Button, Card, ServiceCard, PhotoHero, CTAPanel, NavBar, Footer, SectionHeading, StatBlock, TestimonialCard, Tabs, Input, Textarea, Select, Checkbox, Toast, Dialog, Logo, WaterlineRule, etc).
- **Ícones**: Lucide via unpkg, wrapper customizado em `site.js`.
- **CSS**: tokens concatenados em `dist/site.css` (15 KB). Tudo via custom properties — o sistema é tema-friendly.
- **CDNs**: jsDelivr (assets + bundle + site.js), unpkg (React, Lucide), Google Fonts (Playfair Display, Poppins, JetBrains Mono).
- **Hospedagem do site**: GoHighLevel CMS Website com custom code blocks.

---

## Manutenção periódica

- **Trimestral**: revisar copy das páginas (especialmente números de cases), bumpar tag.
- **Anual**: revisar Política de Privacidade, datas em JSON-LD (`dateModified`), sitemap.
- **Sob demanda**: novas OG images se entrar página nova.

---

## Créditos

- **Design System**: gerado a partir do material de marca em `G:\Meu Drive\Marketing\Caiçara Marketing Digital\Design\Caiçara Design System` (prompts, paleta, logos, fotos, biblioteca de componentes).
- **Bundle DS**: `mhprol/caicara-design-system` (componentes autorados a partir das peças reais, sem fonte de componente externo).
- **Implementação**: Mavis · mhprol · agosto 2026.
