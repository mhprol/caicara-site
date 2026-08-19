#!/usr/bin/env node
/* ── Caiçara · optimize-images.mjs ──────────────────────────────────────────
   Otimiza imagens in-place com sharp.

   Estratégia:
   - PNG/JPG em imagery/    → WebP lossy 80, max-width 1440px
   - WebP em imagery/       → recomprime lossy 80, max-width 1440px
   - PNG/JPG em photography/ → WebP lossy 80, max-width 1920px
   - WebP em photography/   → recomprime lossy 80, max-width 1920px
   - logo/                  → INTOCADO (o site.js troca pra SVG)

   Uso: node scripts/optimize-images.mjs
   ───────────────────────────────────────────────────────────────────────── */
import { readdirSync, statSync, unlinkSync, renameSync, existsSync, writeFileSync, copyFileSync, readFileSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

const RULES = [
  { dir: "assets/imagery",    maxWidth: 1440, quality: 80 },
  { dir: "assets/photography", maxWidth: 1920, quality: 80 },
  { dir: "assets/logo",       maxWidth: 1200, quality: 85, skipSvgSource: true }
];

function formatBytes(b) {
  if (b > 1024 * 1024) return (b / 1024 / 1024).toFixed(2) + " MB";
  if (b > 1024) return (b / 1024).toFixed(1) + " KB";
  return b + " B";
}

function shouldSkip(file, rule) {
  // Pula SVGs (são vetoriais, não otimiza pra WebP)
  if (file.endsWith(".svg")) return true;
  // Em logo/, pula só os SVGs
  if (rule.skipSvgSource && file.endsWith(".svg")) return true;
  return false;
}

let totalBefore = 0;
let totalAfter = 0;
let fileCount = 0;
const log = [];

for (const rule of RULES) {
  const absDir = join(repoRoot, rule.dir);
  if (!existsSync(absDir)) continue;

  const files = readdirSync(absDir);
  for (const file of files) {
    const abs = join(absDir, file);
    const stat = statSync(abs);
    if (!stat.isFile()) continue;

    const ext = extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;
    if (shouldSkip(file, rule)) continue;

    const base = basename(file, ext);
    const targetName = base + ".webp";
    const targetPath = join(absDir, targetName);

    const before = stat.size;
    totalBefore += before;

    // Ler o source num buffer ANTES de passar pro sharp.
    // (evita que o sharp segure o file handle e cause EBUSY/EPERM no Windows)
    const sourceBuf = readFileSync(abs);

    const pipeline = sharp(sourceBuf, { failOn: "none" }).resize({
      width: rule.maxWidth,
      withoutEnlargement: true,
      fit: "inside"
    }).webp({
      quality: rule.quality,
      effort: 6,
      smartSubsample: true
    });

    const buf = await pipeline.toBuffer();
    const after = buf.length;
    totalAfter += after;

    // Sobrescreve o target com o buffer processado.
    // Estratégia: writeFileSync sobrescreve diretamente (preserva inode,
    // funciona com hardlinks do Windows).
    writeFileSync(targetPath, buf);

    // Se o source era PNG/JPG (e é diferente do target), deleta o original
    if (ext !== ".webp" && abs !== targetPath) {
      try { unlinkSync(abs); } catch (e) { /* pode estar locked via hardlink */ }
    }

    const ratio = ((1 - after / before) * 100).toFixed(1);
    const marker = after < before ? "↓" : "↑";
    const line = `  ${marker} ${rule.dir}/${file} (${formatBytes(before)}) → ${targetName} (${formatBytes(after)}) [${ratio}%]`;
    log.push(line);
    console.log(line);
    fileCount++;
  }
}

console.log("\n────────────────────────────────────────────");
console.log(`Arquivos processados: ${fileCount}`);
console.log(`Total antes:  ${formatBytes(totalBefore)}`);
console.log(`Total depois: ${formatBytes(totalAfter)}`);
const saved = totalBefore - totalAfter;
const savedPct = ((saved / totalBefore) * 100).toFixed(1);
console.log(`Economia:     ${formatBytes(saved)} (${savedPct}%)`);
console.log("────────────────────────────────────────────");
