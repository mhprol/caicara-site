// Analisa a página de staging e mostra quais versões do caicara-site estão carregadas
import { writeFileSync } from "node:fs";
const url = "http://staging.caicaramarketing.com.br/";
const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
const text = await res.text();
writeFileSync("staging.html", text);

// Procura todos os caicara-site@V...
const regex = /caicara-site@v[\d.]+/g;
const all = text.match(regex) || [];
const counts = {};
for (const v of all) counts[v] = (counts[v] || 0) + 1;

console.log("=== Versões do caicara-site encontradas em staging ===");
const sorted = Object.entries(counts).sort();
for (const [v, c] of sorted) console.log("  " + v + " — " + c + "x");

// Agora extrai cada contexto (60 chars antes e depois)
console.log("\n=== Contextos (onde cada versão aparece) ===");
const ctxRegex = /.{40}caicara-site@v[\d.]+.{40}/g;
const matches = [...text.matchAll(ctxRegex)];
for (const m of matches) {
  console.log("  > " + m[0]);
}

console.log("\n=== Tags <script src=...> (todas) ===");
const scripts = [...text.matchAll(/<script[^>]*src="([^"]+)"/g)];
for (const m of scripts) console.log("  " + m[1]);

console.log("\n=== Tags <link rel=stylesheet href=...> ===");
const links = [...text.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)];
for (const m of links) console.log("  " + m[1]);

console.log("\n=== data-base do caicara-page ===");
const dataBase = text.match(/caicara-page[^>]*data-base="([^"]+)"/);
console.log("  " + (dataBase ? dataBase[1] : "(nenhum)"));
