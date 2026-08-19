#!/usr/bin/env node
/* ── Caiçara · render-og.mjs ──────────────────────────────────────────────────
   Gera 8 OG images 1200x630 (PNG) para o site institucional.
   Cada OG recebe uma foto de fundo da marca + scrim violeta profundo +
   título da página + selo Caiçara.

   Uso:
     1. npm i sharp   (apenas na primeira vez)
     2. node scripts/render-og.mjs
     3. As PNGs aparecem em og/{slug}.png
     4. git add og/ && git commit && git push
     5. O sitemap.xml e os blocos GHL já referenciam essas PNGs.
   ─────────────────────────────────────────────────────────────────────────────── */

import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const ogDir = join(repoRoot, "og");
const photographyDir = join(repoRoot, "assets", "photography");
const logoPath = join(repoRoot, "assets", "logo", "caicara-horizontal-branco.png");

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// ── Configuração por página ───────────────────────────────────────────────────
// slug → { title, subtitle, photo, accent }
const PAGES = {
  home: {
    title: "Seu porto seguro no marketing digital",
    subtitle: "Caiçara Marketing Digital Estratégico · Santos, SP",
    photo: "farol-ao-por-do-sol.webp",
    accent: "magenta"
  },
  servicos: {
    title: "Serviços de marketing digital",
    subtitle: "Branding · Performance · Conteúdo · Automação",
    photo: "veleiros-oceano-azul.webp",
    accent: "cyan"
  },
  metodo: {
    title: "Método PEMD",
    subtitle: "Do diagnóstico ao destino, em quatro etapas",
    photo: "bussola.webp",
    accent: "violet"
  },
  cases: {
    title: "Histórias à beira-mar",
    subtitle: "Resultados reais de clientes reais",
    photo: "veleiro-vela-vermelha.webp",
    accent: "magenta"
  },
  sobre: {
    title: "Quem está ao leme",
    subtitle: "A tripulação da Caiçara · Santos, SP",
    photo: "capitao-e-tripulante.webp",
    accent: "cyan"
  },
  contato: {
    title: "Vamos traçar a rota?",
    subtitle: "Diagnóstico de 30 minutos, sem compromisso",
    photo: "santos-mureta.webp",
    accent: "magenta"
  },
  "politica-de-privacidade": {
    title: "Política de privacidade",
    subtitle: "Como tratamos seus dados · LGPD",
    photo: "mar-na-praia.webp",
    accent: "cyan"
  },
  "404": {
    title: "Fora de rota.",
    subtitle: "A página não está em nenhum porto nosso",
    photo: "farol-na-costa.webp",
    accent: "violet"
  }
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildOverlaySvg({ title, subtitle, accent, logoBase64, logoWidth = 168, logoHeight = 56 }) {
  // Brand colors
  const colors = {
    magenta: "#E3286C",
    cyan: "#00A5D7",
    violet: "#543E8D"
  };
  const accentColor = colors[accent] || colors.magenta;

  // Title: split into lines if it has a comma+space, or just a single line.
  // Wrap on whitespace to keep under ~22 chars/line.
  function wrap(text, max = 22) {
    const words = text.split(/\s+/);
    const lines = [];
    let current = "";
    for (const w of words) {
      const candidate = current ? current + " " + w : w;
      if (candidate.length > max && current) {
        lines.push(current);
        current = w;
      } else {
        current = candidate;
      }
    }
    if (current) lines.push(current);
    return lines.slice(0, 3);
  }

  const titleLines = wrap(title);
  const titleLineHeight = 78;
  const titleStartY = OG_HEIGHT - 110 - (titleLines.length - 1) * titleLineHeight;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="rgb(19,10,37)" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="rgb(19,10,37)" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="rgb(19,10,37)" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="waterline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E3286C"/>
      <stop offset="52%" stop-color="#543E8D"/>
      <stop offset="100%" stop-color="#00A5D7"/>
    </linearGradient>
  </defs>

  <!-- Scrim -->
  <rect x="0" y="0" width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#scrim)"/>

  <!-- Brand overline: uppercase eyebrow -->
  <text x="60" y="100" font-family="Poppins, -apple-system, Segoe UI, system-ui, sans-serif" font-size="18" font-weight="700" fill="${accentColor}" letter-spacing="3">
    CAIÇARA MARKETING
  </text>

  <!-- Title (wrapped, large) -->
  ${titleLines.map((line, i) => `
  <text x="60" y="${titleStartY + i * titleLineHeight}" font-family="Poppins, -apple-system, Segoe UI, system-ui, sans-serif" font-size="62" font-weight="800" fill="#FDF8F2" letter-spacing="-1">
    ${escapeXml(line)}
  </text>
  `).join("")}

  <!-- Subtitle -->
  <text x="60" y="${OG_HEIGHT - 60}" font-family="Poppins, -apple-system, Segoe UI, system-ui, sans-serif" font-size="22" font-weight="500" fill="rgba(253,248,242,0.78)">
    ${escapeXml(subtitle)}
  </text>

  <!-- Waterline rule (3px) -->
  <rect x="0" y="${OG_HEIGHT - 3}" width="${OG_WIDTH}" height="3" fill="url(#waterline)"/>

  <!-- Logo (top right) -->
  <image href="data:image/png;base64,${logoBase64}" x="${OG_WIDTH - logoWidth - 60}" y="60" width="${logoWidth}" height="${logoHeight}"/>
</svg>`;
}

// ── Pipeline ──────────────────────────────────────────────────────────────────
async function renderOne(slug, config) {
  const photoPath = join(photographyDir, config.photo);
  if (!existsSync(photoPath)) {
    throw new Error(`Foto não encontrada para "${slug}": ${photoPath}`);
  }
  if (!existsSync(logoPath)) {
    throw new Error(`Logo não encontrada: ${logoPath}`);
  }

  // Load logo as base64
  const logoBase64 = readFileSync(logoPath).toString("base64");

  // Build overlay SVG
  const overlaySvg = buildOverlaySvg({
    title: config.title,
    subtitle: config.subtitle,
    accent: config.accent,
    logoBase64
  });

  // Background: resize photo to 1200x630 cover
  const background = await sharp(photoPath)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: "attention" })
    .toBuffer();

  // Render overlay SVG to a buffer
  const overlayPng = await sharp(Buffer.from(overlaySvg)).png().toBuffer();

  // Composite
  const out = await sharp(background)
    .composite([{ input: overlayPng, top: 0, left: 0 }])
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer();

  const outPath = join(ogDir, `${slug}.png`);
  writeFileSync(outPath, out);
  console.log(`✓ ${slug}.png  (${(out.length / 1024).toFixed(1)} KB)`);
  return outPath;
}

async function main() {
  if (!existsSync(ogDir)) mkdirSync(ogDir, { recursive: true });

  // Quick sharp sanity check
  try {
    await sharp({ create: { width: 1, height: 1, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).png().toBuffer();
  } catch (err) {
    console.error("✘ Erro: a biblioteca 'sharp' não está instalada. Rode: npm i sharp");
    process.exit(1);
  }

  const slugs = Object.keys(PAGES);
  console.log(`Renderizando ${slugs.length} OG images (1200x630) em og/ ...\n`);
  const t0 = Date.now();
  for (const slug of slugs) {
    try {
      await renderOne(slug, PAGES[slug]);
    } catch (err) {
      console.error(`✘ ${slug}:`, err.message);
      process.exit(1);
    }
  }
  const dt = Date.now() - t0;
  console.log(`\n✓ Pronto em ${dt}ms. As imagens estão em og/ e o sitemap/blocos GHL já as referenciam.`);
  console.log("  Próximo passo: git add og/ && git commit && git push && git tag v1.0.0 && git push --tags");
}

main().catch((err) => {
  console.error("✘ Erro fatal:", err);
  process.exit(1);
});
