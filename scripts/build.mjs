#!/usr/bin/env node
/* ── Caiçara · build.mjs ───────────────────────────────────────────────────
   Minifica dist/site.js e dist/ds-bundle.js in-place usando esbuild.

   Workflow:
   1. Editar dist/site.js (legível) + dist/ds-bundle.js (verbatim do DS)
   2. Rodar: node scripts/build.mjs
   3. Commitar os arquivos minificados

   Importante: dist/ds-bundle.js é "verbatim copy" do DS original
   (G:\Meu Drive\Marketing\Caiçara Marketing Digital\Design\Caiçara Design System\_ds_bundle.js).
   Minificar não altera comportamento — só whitespace + identifier shortening.
   ───────────────────────────────────────────────────────────────────────── */
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

const TARGETS = [
  "dist/site.js",
  "dist/ds-bundle.js"
];

function formatBytes(b) {
  if (b > 1024) return (b / 1024).toFixed(1) + " KB";
  return b + " B";
}

let totalBefore = 0;
let totalAfter = 0;

for (const rel of TARGETS) {
  const abs = join(repoRoot, rel);
  const before = statSync(abs).size;
  totalBefore += before;

  const source = readFileSync(abs, "utf8");

  // Detecta IIFE ("use strict"; etc) e mantém como format=iife
  // Senão usa format=iife também (default do site.js)
  const result = await transform(source, {
    loader: "js",
    minify: true,
    target: ["es2017"],
    format: "iife",
    legalComments: "none",
    charset: "utf8"
  });

  writeFileSync(abs, result.code);
  const after = statSync(abs).size;
  totalAfter += after;

  const ratio = ((1 - after / before) * 100).toFixed(1);
  const marker = after < before ? "↓" : "↑";
  console.log(`  ${marker} ${rel}: ${formatBytes(before)} → ${formatBytes(after)} [${ratio}% smaller]`);
}

console.log("\n────────────────────────────────────────────");
console.log(`Total antes:  ${formatBytes(totalBefore)}`);
console.log(`Total depois: ${formatBytes(totalAfter)}`);
const saved = totalBefore - totalAfter;
const savedPct = ((saved / totalBefore) * 100).toFixed(1);
console.log(`Economia:     ${formatBytes(saved)} (${savedPct}%)`);
console.log("────────────────────────────────────────────");
