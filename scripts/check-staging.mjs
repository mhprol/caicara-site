#!/usr/bin/env node
/* ── Caiçara · check-staging.mjs ──────────────────────────────────────────
   Verifica qual versão do caicara-site está sendo servida em cada uma das
   8 páginas do GHL staging. Útil após colar os 19 blocos pra garantir que
   não ficou nenhuma versão misturada.

   Uso: node scripts/check-staging.mjs [base_url] [expected_tag]
        defaults: http://staging.caicaramarketing.com.br  v1.0.9
        exit 0 = todas em conformidade
        exit 1 = alguma página fora do expected_tag

   Pendente desde v1.0.0 — adicionado no v1.0.10 (preparação pra Tier 2).
   ───────────────────────────────────────────────────────────────────────── */
import { argv, exit } from "node:process";

const BASE = argv[2] || "http://staging.caicaramarketing.com.br";
const EXPECTED = argv[3] || "v1.0.9";

const PAGES = [
  "home",
  "servicos",
  "metodo",
  "cases",
  "sobre",
  "contato",
  "politica-de-privacidade",
  "404"
];

const NEEDLE = `caicara-site@${EXPECTED}`;
const OTHER_NEEDLE = /caicara-site@(v[\d.]+)/g;

async function checkPage(page) {
  const url = `${BASE}/${page === "home" ? "" : page}`;
  try {
    const r = await fetch(url, { redirect: "follow" });
    if (!r.ok) {
      return { page, status: r.status, versions: ["FETCH FAILED"], url };
    }
    const body = await r.text();
    // Headers também podem ter link rel=canonical ou meta que referenciam
    const haystack = body;

    const versions = new Set();
    let m;
    // Reset regex state por causa do global
    OTHER_NEEDLE.lastIndex = 0;
    while ((m = OTHER_NEEDLE.exec(haystack)) !== null) {
      versions.add(m[1]);
    }
    return {
      page,
      status: r.status,
      versions: [...versions].sort() || ["(no match)"],
      url
    };
  } catch (err) {
    return { page, status: "ERR", versions: [err.message], url };
  }
}

(async function main() {
  console.log(`\nVerificando ${BASE} para tag ${EXPECTED}...\n`);
  const results = await Promise.all(PAGES.map(checkPage));

  let allOk = true;
  const rows = [];
  for (const r of results) {
    const hasExpected = r.versions.includes(EXPECTED);
    const hasOther = r.versions.some(v => v !== EXPECTED && v !== "FETCH FAILED");
    const status = hasExpected && !hasOther ? "OK" : (hasExpected ? "MIXED" : "MISSING");
    if (status !== "OK") allOk = false;
    rows.push({ Page: "/" + (r.page === "home" ? "" : r.page), HTTP: r.status, Versions: r.versions.join(", "), Status: status });
  }

  // Print table
  const colWidths = {
    Page: Math.max(4, ...rows.map(r => r.Page.length)),
    HTTP: 6,
    Versions: Math.max(8, ...rows.map(r => r.Versions.length)),
    Status: 7
  };
  const sep = "+" + "-".repeat(colWidths.Page + 2) + "+" + "-".repeat(colWidths.HTTP + 2) + "+" + "-".repeat(colWidths.Versions + 2) + "+" + "-".repeat(colWidths.Status + 2) + "+";
  console.log(sep);
  console.log(`| ${"Page".padEnd(colWidths.Page)} | ${"HTTP".padEnd(colWidths.HTTP)} | ${"Versions".padEnd(colWidths.Versions)} | ${"Status".padEnd(colWidths.Status)} |`);
  console.log(sep);
  for (const r of rows) {
    console.log(`| ${r.Page.padEnd(colWidths.Page)} | ${String(r.HTTP).padEnd(colWidths.HTTP)} | ${r.Versions.padEnd(colWidths.Versions)} | ${r.Status.padEnd(colWidths.Status)} |`);
  }
  console.log(sep);

  console.log();
  if (allOk) {
    console.log(`✓ Todas as 8 páginas estão em ${EXPECTED}.`);
    exit(0);
  } else {
    console.log(`✗ Encontradas inconsistências. Páginas fora de ${EXPECTED}:`);
    for (const r of rows) if (r.Status !== "OK") console.log(`    ${r.Page} (${r.Versions})`);
    console.log(`\n  → Cole os blocos GHL que faltam (urls em HANDOFF.md §4).`);
    exit(1);
  }
})();
