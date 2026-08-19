#!/usr/bin/env node
/* ── Caiçara · check-version.mjs ──────────────────────────────────────────────
   Confere que todos os arquivos que referenciam o jsDelivr estão pinados na
   mesma tag. Roda antes de qualquer deploy.

   Uso: node scripts/check-version.mjs [tag]
        (default: v1.0.0)
   ─────────────────────────────────────────────────────────────────────────────── */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const expectedTag = process.argv[2] || "v1.0.0";
const needle = `mhprol/caicara-site@${expectedTag}`;

const TARGET_FILES = [
  "ghl/_site-wide-HEADER.html",
  "ghl/home-HEADER.html",
  "ghl/servicos-HEADER.html",
  "ghl/metodo-HEADER.html",
  "ghl/cases-HEADER.html",
  "ghl/sobre-HEADER.html",
  "ghl/contato-HEADER.html",
  "ghl/politica-de-privacidade-HEADER.html",
  "ghl/404-HEADER.html",
  "ghl/home-BODY.html",
  "ghl/servicos-BODY.html",
  "ghl/metodo-BODY.html",
  "ghl/cases-BODY.html",
  "ghl/sobre-BODY.html",
  "ghl/contato-BODY.html",
  "ghl/politica-de-privacidade-BODY.html",
  "ghl/404-BODY.html",
  "sitemap.xml",
  "dist/site.js"
];

let ok = true;
for (const rel of TARGET_FILES) {
  const abs = join(repoRoot, rel);
  let content;
  try {
    content = readFileSync(abs, "utf8");
  } catch (err) {
    console.error(`✘ ${rel}: não encontrado`);
    ok = false;
    continue;
  }
  if (!content.includes(needle)) {
    console.error(`✘ ${rel}: não referencia ${needle}`);
    ok = false;
  } else {
    console.log(`✓ ${rel}`);
  }
}

if (ok) {
  console.log(`\n✓ Todos os arquivos estão pinados em ${needle}.`);
  process.exit(0);
} else {
  console.error(`\n✘ Encontradas inconsistências. Verifique a tag antes de fazer deploy.`);
  process.exit(1);
}
