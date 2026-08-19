# Caiçara Design System

**Caiçara Marketing Digital Estratégico** — agência de marketing e comunicação
digital estratégica de Santos/SP, Brasil, com operação fortemente amparada em
Inteligência Artificial.

> "Caiçara: seu porto seguro no marketing digital. ⚓ Juntos, vamos içar as velas
> do seu sucesso!"

- Site: `caicaramarketing.com.br`
- Portal do cliente: `app.caicaramarketing.com.br`
- Instagram: `@caicaramarketing` · Telefone: (13) 97806-2772 · Santos, SP
- Tagline de campanha usada em capas sociais: **"Marketing Digital, Impacto Real"**

---

## 1. Contexto de negócio

A Caiçara atende **PMEs de Santos e do litoral de São Paulo**, combinando
*branding* e *performance*. A operação é fortemente automatizada e assistida por
IA — o próprio método de atendimento (o **BOT Criativo**) é vendido como produto.

**Serviços**
- Gestão de mídias sociais (engajamento e construção de comunidade)
- Google Ads e Meta Ads (geração de leads, conversão)
- Branding e identidade visual
- Automações e mensageria (WhatsApp, Instagram DM, e-mail, SMS)
- Otimização de Perfil da Empresa no Google
- Consultoria estratégica / **BOT Criativo** (assistente de IA configurado com o
  Guia Estratégico da marca do cliente)

**Metodologia PEMD** — quatro etapas: `Setup` → `Onde estamos` →
`Para onde vamos` → `Como vamos chegar lá`.

**Personas** (nomeadas nos documentos de marca)
1. **O Empreendedor Visionário** — "tem uma ideia brilhante, mas precisa de um
   mapa para navegar até o tesouro."
2. **O Comerciante Local** — "quer atrair mais clientes para sua loja, mas se
   sente preso em um porto sem movimento."
3. **O Prestador de Serviços** — "oferece um serviço de qualidade, mas precisa de
   um farol para ser visto em meio à multidão."

**Arquétipos** — primário **Explorador** (inovação, descoberta, liberdade,
crescimento); secundário **Cuidador** (proteção, apoio, parceria, confiança).

**Linhas editoriais** — Caiçara Responde · Histórias de Sucesso à Beira-Mar ·
Dicas do Capitão · Por Dentro da Caiçara · Tendências da Maré Digital.

### Superfícies de produto representadas neste sistema
| Superfície | O que é | UI kit |
|---|---|---|
| **Site Institucional** | Site de marketing/captação em português | `ui_kits/site_institucional/` |
| **Portal Caiçara** | Plataforma do cliente (CRM/automação em *white-label*, domínio próprio) — dashboard, conversas, construtor de fluxos | `ui_kits/portal_caicara/` |
| **Social Kit** | Templates de feed Instagram/LinkedIn (citação, carrossel, serviço) | `ui_kits/social_kit/` |

---

## 2. Fontes recebidas (registre, não presuma acesso)

- **Codebase montada `Bot Criativo/`** — 14 documentos de estratégia de marca em
  português: Bússola de Posicionamento, Personalidade e Tom de Voz, Arquétipos,
  Proposta Única de Valor, Mapeamento de Público-Alvo, Análise SWOT, Análise de
  Mercado, Contexto Resumido de Marca, guia do BOT Criativo, mais duas planilhas
  `.xlsx` de prompts e um `.docx` de pontos de melhoria.
- **Codebase montada `Imagens/`** — biblioteca visual completa: logos (SVG + PNG,
  todas as variantes), `Paleta de Cores - PDF/` (folha Coolors com os 5 hexes),
  `Estilo Fotográfico/` (~45 fotos náuticas + subpasta `Santos/`),
  `Ícones e SVG/` (4 SVGs), `Placas/` (PDFs de sinalização impressa),
  `QR-Codes/`, `Produtos/`, `YouTube/`, capas sociais, papelaria, e capturas de
  tela do Portal Caiçara.
- **Sem repositório de código.** Não havia frontend, tokens, biblioteca de
  componentes ou arquivo Figma. Os componentes deste sistema foram **autorados
  aqui** a partir das peças reais de marca (capa de citação social, papel de
  carta, capas de rede social, capturas do portal) — não copiados de um fonte.
- **Sem arquivos de fonte.** Ver §5 (substituições sinalizadas).

O que **não** foi lido: as duas planilhas `.xlsx`, o `.docx` de pontos de
melhoria, os PDFs de `Placas/`, o `.psd` da capa do WhatsApp Business, e os
`QR-Codes/`. Nada neles afeta as decisões visuais aqui; se contiverem regras de
marca, avise.

Peças de referência que **não** são da marca (ignoradas intencionalmente):
`Identidade Visual.jpg` e `Identidade Visual Social Media.jpg` são mockups de
banco de imagens ("brand name." roxo/amarelo, grid Skol/criahype), e
`Metodologia PEMD.png` usa uma paleta verde/vermelho/amarelo de template que não
pertence à Caiçara. O gráfico PEMD deve ser refeito na paleta real.

---

## 3. CONTENT FUNDAMENTALS

### Idioma
**Português do Brasil, sempre.** Nenhum material de marca está em inglês. Termos
técnicos de mercado ficam em inglês quando é assim que o cliente os ouve (SEO,
Google Ads, leads, ROI, branding, performance, funil) — mas a frase ao redor é
portuguesa. O Portal Caiçara é a exceção: sendo plataforma *white-label*, mistura
rótulos traduzidos ("Conversas", "Ações manuais", "Fluxos de trabalho",
"Rascunhar/Publicar") com rótulos que ficaram em inglês ("Unread", "Recents",
"Starred", "Send", "Contact", "Tags", "DND"). **Ao recriar o portal, mantenha a
mistura** — é o estado real do produto.

### Pessoa e tratamento
- **"Nós" para a agência, "você" para o cliente.** Nunca "eu". Nunca "vocês"
  formal-corporativo, nunca "o cliente" em terceira pessoa.
- Convite em primeira pessoa do plural — **"Vamos …"** é a construção-assinatura:
  "Vamos crescer juntos?", "Vamos desbravar juntos novas fronteiras",
  "Vamos conversar?", "Vamos explorar juntos as possibilidades para a sua marca."
- Perguntas abertas fecham parágrafos e CTAs. A marca convida, não ordena.

### Tom
Inspirador · motivador · positivo · profissional com um toque de informalidade,
simpatia e bom humor. Acolhedor sem ser piegas. **Explorador + Cuidador**: ousa e
protege na mesma frase — "Desbravar o novo com você, mas sempre com um plano
sólido."

### A metáfora náutica é a regra, não um enfeite
Toda a copy navega. É o mecanismo central do tom de voz e deve aparecer em
praticamente toda peça — mas **uma metáfora por peça**, nunca empilhadas.

Vocabulário náutico canônico (extraído dos documentos): navegar, içar as velas,
porto seguro, farol, bússola, mapa, rota, maré, âncora, leme, tripulação, rede,
mergulhar fundo, desbravar, horizontes, águas turbulentas, ao leme, boa pescaria.

Exemplos reais aprovados:
- "Içar as velas do seu negócio rumo ao sucesso!"
- "Ser o farol que guia as pequenas e médias empresas de Santos e do litoral."
- "Mergulhamos fundo para entender o seu negócio e criar soluções sob medida."
- "Inovamos e nos adaptamos às mudanças do mercado, como um marinheiro que ajusta
  as velas ao vento."
- "Do diagnóstico ao destino: um mapa completo para alcançar o sucesso digital."
- "Quando a [Empresa] nos procurou, eles estavam navegando em águas turbulentas."

### Palavras preferidas / palavras proibidas
**Use:** crescimento, oportunidade, inovação, parceria, explorar, transformar,
cuidar, clareza, transparência, resultados mensuráveis, personalizado, próximo.
**Evite:** complexo, difícil, impessoal, complicado, burocrático. Também evite
"solução completa", "líder de mercado" e superlativos vazios — a marca prova com
números ("aumentar as vendas em 30% em 3 meses", "mais de 1000 leads
qualificados em uma única campanha").

### Caixa e pontuação
- **Sentence case** em títulos, subtítulos e botões. Sem Title Case Em Português.
- **CAIXA ALTA** só em dois lugares: *overlines/eyebrows* curtos
  (`SERVIÇOS`, `CASES`, `MÉTODO PEMD`) e a headline de capa social
  ("MARKETING DIGITAL IMPACTO REAL"). Nunca em parágrafo.
- Botões: verbo no infinitivo ou convite — "Falar com a gente", "Ver cases",
  "Começar agora", "Agendar diagnóstico". Sem ponto final.
- Exclamação é permitida e usada — com moderação, uma por bloco.

### Emoji: sim, com regra
Emoji **fazem parte** da voz da marca (os documentos internos e as peças sociais
os usam à vontade: ⚓ ⛵ 🚀 💡 📈 🎯 🔍 🤝 🖤). Mas:
- **Redes sociais, e-mail e material interno:** livres, 1–2 por bloco.
- **Site institucional, portal do cliente, UI, slides comerciais:** **não use
  emoji.** Ali o vocabulário visual náutico é feito de ícones e fotografia.
- Nunca use emoji como ícone funcional em UI. Nunca em botão, rótulo ou label.
- O 🖤 (coração preto) é a assinatura de encerramento em conteúdo educacional.

### Exemplos de copy por canal
- **Instagram:** "🔍 Está pronto para explorar novos caminhos no marketing
  digital? Na Caiçara, não temos medo de desbravar o desconhecido e transformar
  desafios em oportunidades! 🚀 Vamos crescer juntos?"
- **E-mail de boas-vindas:** assunto "Bem-vindo(a) à Caiçara! Vamos crescer
  juntos?" — corpo abre com "Olá, [Nome]! 👋" e fecha com "Um abraço, Equipe
  Caiçara."
- **Blog:** "Cada desafio traz consigo uma nova oportunidade."
- **Crise:** "Entendemos que esta situação possa ter gerado desconforto, e
  estamos aqui para resolver o mais rápido possível."
- **Público técnico:** "Na Caiçara, analisamos cada dado e transformamos insights
  em estratégias precisas." (menos metáfora, mesmo calor)

---

## 4. VISUAL FOUNDATIONS

### A ideia central
**Mar analógico × pixel digital.** O símbolo é um par de peixes formando um ∞,
com as bordas *pixeladas/dithered* — cultura caiçara encontrando tecnologia. Todo
o sistema vive nessa tensão: papel areia quente e fotografia oceânica real, com
um gradiente saturado e uma textura de pixel como as únicas notas "digitais".
O resultado é **minimalista**: muito espaço em branco, uma cor de acento por
tela, tipografia fazendo o trabalho pesado.

### Cor
Cinco valores exatos, da folha `Paleta de Cores - Caiçara Marketing`:

| Token | Hex | Nome na folha | Papel |
|---|---|---|---|
| `--sand-500` | `#FDF8F2` | Floral White | Fundo padrão. É o "papel" da marca. |
| `--magenta-500` | `#E3286C` | Razzmatazz | Acento primário, CTAs, item ativo. |
| `--violet-500` | `#543E8D` | Dark Slate Blue | Acento secundário, painéis. |
| `--deep-500` | `#28144C` | Russian Violet | Tinta institucional, seções escuras. |
| `--cyan-500` | `#00A5D7` | Cerulean Crayola | Mar, links, dados, estados info. |

Regras:
- **Nunca branco puro como fundo de página.** É sempre `--sand-500`. Branco puro
  (`#fff`) é reservado a cards *sobre* areia, e ao conteúdo do portal.
- **Nenhum cinza frio.** Os neutros são areia aquecida (`--sand-*`,
  `--neutral-*`, base `#1c1917`).
- **Um acento por tela.** Magenta OU ciano em destaque, não os dois com o mesmo
  peso. Violeta e *deep* são estruturais, não acentos.
- Os três acentos juntos aparecem **somente** no gradiente-assinatura e no
  próprio símbolo.
- Semânticos (`--success-500` `#0F9D8A`, `--warning-500` `#E8952F`,
  `--danger-500` `#D92D3F`) foram derivados para caber nas famílias de matiz da
  marca — não são verdes/vermelhos de biblioteca. `--info-500` **é** o ciano da
  marca.

### O gradiente-assinatura
`--gradient-brand`: `#E3286C → #543E8D → #00A5D7`, esquerda→direita, ponto médio
em 52% — a mesma leitura do símbolo. Onde ele aparece:
1. **Régua "linha d'água"** de 3px — rodapé do papel de carta, divisor de seção,
   borda superior de painel escuro. *É o uso mais frequente e o mais correto.*
2. Fundo do símbolo em app icon / avatar circular.
3. Preenchimento de **uma** palavra enfatizada num título (`--gradient-text`).

Onde **não** aparece: como fundo de página, atrás de texto corrido, em cards, em
botões grandes. Sem gradientes azul-violeta genéricos de SaaS; o único gradiente
permitido é este, com estes três hexes.

### Tipografia
- **Display / wordmark — `--font-display`** (Playfair Display, substituto): Didone
  de alto contraste. Só para *headlines* de herói, números grandes de resultado e
  citações. Nunca em UI, nunca abaixo de 20px, nunca em caixa alta.
- **Sans / trabalho — `--font-sans`** (Poppins, substituto): grotesca geométrica
  de 'a' de andar único. Faz tudo: subtítulos, corpo, botões, rótulos, dados.
  Cards sociais de citação usam **Poppins 700** grande e *ragged-right* alinhado à
  direita — é a assinatura tipográfica do feed.
- **Mono — `--font-mono`** (JetBrains Mono): números de coordenada, IDs, métricas
  tabulares, timestamps. Discreto, nunca decorativo.
- Escala de 16px base, razão ~1.28, arredondada em px inteiros. Nunca texto de
  corpo abaixo de 14px; nunca abaixo de 24px em slide 1920×1080.
- *Overlines* em caixa alta com `--ls-overline` (0.16em) e `--fs-overline` (11px),
  em magenta ou ciano.

### Fundos e texturas
- Padrão: `--surface-page` (areia lisa). A maioria das telas não tem textura.
- **Textura de pixel** (`--texture-pixel`, quadrado de 24px, opacidade ~3.5%):
  aparece nos cantos do papel de carta e pode ancorar um canto de seção. É um
  sussurro — se você a nota antes do conteúdo, está forte demais.
- **Grid de pontos** (`--texture-dotgrid`): exclusivo do canvas de fluxos do
  portal, porque é o que o produto real usa.
- **Fotografia full-bleed:** heróis e capas usam as fotos náuticas reais, sempre
  com `--scrim-bottom` (véu no violeta profundo, de baixo para cima) sob o texto.
- **Nunca:** ilustrações desenhadas à mão, blobs, formas orgânicas coloridas,
  ícones em cards de emoji, gradientes de malha.
- **Curva "vela"** (`--radius-sail`, 96px): um único canto arredondado enorme em
  painel de cor cheia — o device da capa do Portal. Um ou dois cantos, jamais
  quatro.

### Fotografia — vibe
A biblioteca é **real, contrastada e de luz natural** (~45 imagens), com dois
registros que convivem: o **azul frio** predominante (mar aberto, cartas
náuticas, marinas, veleiros no oceano) e um **âmbar de fim de tarde** nos faróis
ao pôr do sol e ao entardecer. Use o azul frio como padrão e o âmbar quando a
peça precisa de calor — nunca os dois na mesma composição. Assuntos: faróis (o
motivo mais frequente — o farol é a metáfora de visão da marca),
veleiros, âncoras, cartas náuticas, bandeiras de sinalização, marinas, capitão ao
timão. Mais um conjunto específico de **Santos**: Farol do Boqueirão, os
Jardins da Orla, as muretas, a escultura do Peixe, Tomie Ohtake.

Regras: sem filtro quente, sem grão adicionado, sem *duotone* forçado. Quando a
imagem precisa "virar marca", coloque o símbolo ou o véu violeta sobre ela — não
tinja a foto. A vela vermelha isolada no oceano azul é a imagem-herói recorrente
(um ponto magenta no azul = o próprio logo em fotografia).

### Cantos, bordas, cards
- Raios: `3 / 5 / 8 / 12 / 20 / 32 px`, pill `999`, `sail 96`. **`--radius-sm` é
  5px, não 4px** — é o valor do chrome do portal real; não arredonde para a grade
  de 4.
- **Card institucional:** `#fff` sobre areia, `--radius-lg` (12px),
  `--shadow-sm`, borda `1px --sand-200`. Borda **e** sombra suave, ambas fracas.
- **Card do portal:** `#fff`, `--radius-sm` (5px), borda hairline, sem sombra —
  o produto é denso e plano.
- **Nunca** card com borda-esquerda colorida como único acento. **Nunca** card com
  quatro cantos de 32px+.
- Bordas são sempre `1px` areia; `2px` só para estado ativo/selecionado.

### Sombras
Todas tintadas no violeta profundo `rgba(40,20,76,·)`, nunca preto neutro.
`xs → xl` com opacidade 6%→18%. Duas sombras coloridas existem
(`--shadow-magenta`, `--shadow-cyan`) e são só para CTA primário em hover.
`--shadow-inset` para campo pressionado. Elevação é econômica: o site
institucional usa `sm` e `md`; `xl` só em modal.

### Transparência e blur — quando
Só em dois casos: (1) *chrome* sobre fotografia — barra de navegação sticky que
passa por cima do herói ganha `--glass-bg` + `--glass-blur`; (2) cápsula de vidro
para um rótulo curto no meio de uma imagem, quando o véu de baixo não alcança.
Blur nunca em card sobre fundo sólido, nunca em painel de dados.
**Véu (scrim) vs cápsula:** texto longo ou headline → véu de baixo para cima;
rótulo/metadado curto no meio da imagem → cápsula de vidro.

### Movimento
Água: sai longo, nunca quica. `--ease-out` `cubic-bezier(.22,.61,.36,1)` é o
padrão; `--ease-swell` para revelações longas. Durações 80/140/220/380/700ms.
- Entradas: *fade* + 8–12px de subida, `--dur-slow`.
- Trocas de aba/painel: *cross-fade* `--dur-base` com `--ease-in-out`.
- **Sem** spring, bounce, elástico, overshoot, *scale* acima de 100%, parallax
  pesado, ou texto que digita sozinho.
- `prefers-reduced-motion`: cortar transform, manter opacidade.

### Estados de interação
- **Hover:** um passo mais escuro na rampa (500→600) **e** subida de 1px
  (`--hover-lift`). Em superfície escura, um passo mais claro. Links: troca de cor
  ciano→magenta + sublinhado. Nunca só opacidade.
- **Press:** `scale(0.985)` (`--press-scale`) + passo 700 da rampa. Um assentar,
  não um esmagamento. Sem sombra no estado pressionado.
- **Focus:** anel de 3px `rgba(0,165,215,.45)` deslocado 2px — sempre ciano,
  inclusive em botão magenta.
- **Selected/active:** pill magenta cheia (é assim que o rail do portal marca a
  seção ativa) ou borda de 2px magenta.
- **Disabled:** `opacity: .42`, cursor `not-allowed`, sem mudança de cor.

### Regras de layout
- Container 1200px, gutter 24px, coluna estreita de leitura 720px.
- Ritmo de seção 96px (`--section-y`), 64px em seções compactas.
- Navegação do site: sticky no topo, altura 72px, vira vidro sobre o herói.
- Portal: rail fixo de 56px (`--rail-width`) à esquerda, topbar de 56px, conteúdo
  rolável. Nada mais é fixo.
- Alinhamento: conteúdo institucional à esquerda; **cards de citação social
  alinham à direita** (assinatura da marca, ver o card real do Portal).
- Assimetria é bem-vinda: um canto "vela", uma foto sangrando de um lado só.
  Simetria total é o padrão errado para esta marca.

---

## 5. Substituições sinalizadas — precisamos da sua confirmação

1. **Fontes.** Nenhum binário de fonte veio nos assets. Adotei
   **Playfair Display** (display/wordmark) e **Poppins** (sans de trabalho) do
   Google Fonts, por serem os vizinhos mais próximos das letras nas peças reais.
   Se a Caiçara licenciou outras (o wordmark parece uma Didone comercial, e a sans
   das peças pode ser uma Gilroy/Sofia Pro), envie os arquivos e eu troco.
2. **Ícones.** A pasta `Ícones e SVG/` traz apenas 4 SVGs (bússola, dashboard,
   aperto de mão, câmera) — copiados para `assets/icons/`. Não é um sistema.
   Adotei **Lucide** via CDN como o conjunto de trabalho: traço de 1.5–2px,
   cantos arredondados, e um vocabulário náutico nativo (`anchor`, `compass`,
   `ship`, `sailboat`, `waves`, `lighthouse`, `map`, `navigation`). Ver §6.
3. **Gráfico da Metodologia PEMD.** O arquivo fornecido usa paleta de template
   fora da marca. Recriei os quatro passos na paleta real; se existe uma versão
   oficial aprovada, envie.
4. **Portal Caiçara.** É plataforma *white-label* de terceiro, personalizada com a
   marca. Recriei apenas o que aparece nas capturas de tela (dashboard, conversas,
   construtor de fluxos), mantendo a mistura PT/EN de rótulos. Não inventei telas.

---

## 6. ICONOGRAPHY

**Não existe fonte de ícone nem sprite proprietário.** O que a marca tem:

- **4 SVGs próprios** em `assets/icons/` — `compass.svg`, `dashboard.svg`,
  `handshake.svg`, `camera.svg`. Copiados dos assets originais. São ilustrativos
  (usados como ícones de serviço em tamanho grande), não um set de UI.
- **Selo de onda** `assets/logo/caicara-selo-onda.png` — marca circular
  secundária (sol nascendo sobre ondas, traço grosso, monolinha) usada como
  favicon/selo no site. É o único "ícone" de marca além do símbolo do peixe.
- **Ícones de contato** nas capas sociais: glifos brancos em disco violeta
  (globo, telefone, pin de localização) — estilo sólido simples, não é um set
  nomeável.
- **Ícones no Portal Caiçara:** vêm da plataforma *white-label* (traço fino,
  ~1.5px, estilo Feather/Lucide). Não são assets da Caiçara.

**Conjunto de trabalho adotado: Lucide** (substituição sinalizada).
`<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`.
Combina com o traço do selo de onda e com o chrome do portal, e cobre o
vocabulário náutico da marca sem desenho manual.

Regras:
- Tamanhos: `16` (inline/denso), `20` (UI padrão), `24` (nav/toolbar),
  `32`/`48` (ícone de serviço). Traço `1.75` até 24px, `1.5` acima.
- Cor herda o texto. Ícone colorido só quando é semântico (status) ou quando é o
  ícone de serviço num card, aí em magenta ou ciano.
- **Sem ícone preenchido** misturado com traço na mesma tela.
- **Sem emoji como ícone.** Nunca em UI. (Emoji vive na copy social — ver §3.)
- **Sem caracteres unicode como ícone** (`→` `⚓` `★`). Exceção única: a régua
  ponto-traço abaixo do símbolo no logo, que é parte do logotipo e vem no arquivo.
- **Não desenhe SVGs novos.** Se falta um ícone, peça ou pegue do Lucide.

**Nunca redesenhe o símbolo.** O peixe-infinito pixelado é irreproduzível à mão —
use sempre os arquivos em `assets/logo/`.

---

## 7. Índice do repositório

**Raiz**
- `styles.css` — ponto de entrada único (só `@import`s). Consumidores linkam este.
- `readme.md` — este guia.
- `SKILL.md` — invólucro de Agent Skill para uso no Claude Code.
- `thumbnail.html` — tile do sistema na home.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` ·
`radius.css` · `elevation.css` · `motion.css` · `gradients.css` · `semantic.css`

**`assets/`**
- `logo/` — 11 arquivos: SVG (nobg/whitebg/brandbg), horizontal preto/branco +
  mono, símbolo 1024, símbolo redondo, selo de onda, versão LinkedIn.
- `icons/` — os 4 SVGs próprios.
- `photography/` — 19 fotos náuticas selecionadas, incluindo 5 de Santos.
- `imagery/` — tiles de serviço (branding, automações, presença digital), retratos
  da equipe, papel de carta.

**`guidelines/`** — cards de especificação (Design System tab): cor, tipografia,
espaçamento, elevação, movimento, marca.

**`components/`**
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Logo`, `WaterlineRule`
- `forms/` — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- `navigation/` — `Tabs`, `NavBar`, `Breadcrumb`
- `feedback/` — `Dialog`, `Toast`, `Tooltip`, `EmptyState`
- `marketing/` — `SectionHeading`, `ServiceCard`, `StatBlock`, `TestimonialCard`,
  `CTAPanel`, `PhotoHero`

**Adições intencionais** (não derivadas de um fonte de componentes — não havia):
- `Logo` — encapsula as variantes de arquivo e as regras de espaço mínimo, para
  que ninguém redesenhe o símbolo.
- `WaterlineRule` — a régua de gradiente de 3px, o device mais usado da marca.
- `marketing/*` — os blocos que o site institucional exige; existem porque as
  peças reais (capas, papel de carta, cards sociais) definem esses padrões.

**`ui_kits/`** — `site_institucional/` · `portal_caicara/` · `social_kit/`
(cada um com `README.md`, `index.html` interativo e telas em JSX).
