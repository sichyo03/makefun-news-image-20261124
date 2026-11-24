// News Image 24 Nov 2026 — entry program (Node 22, standard library only).
// The entry image lives beside this file as entry.png; this program places
// a byte-identical copy at /output/entry.png for the grader to judge.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const dst = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(src);
writeFileSync(dst, bytes);
// Self-check: the copy must be byte-identical, so the sizes must match.
if (readFileSync(dst).length !== bytes.length) {
  throw new Error('entry.png copy size mismatch');
}
