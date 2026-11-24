// Make the AI Judge Laugh: Office Jokes
// Writes one single-line office joke to /output/entry.txt, deterministically.
//
// The joke: a raise request answered with a pizza party, then the escalation
// to being "paid in pepperoni" — a real setup with a double turn, true to
// office life (pizza parties standing in for raises), tight, and fresh.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked for a raise and got a pizza party \u2014 turns out I'm paid in pepperoni.";

// Gate self-check: the entry must be UTF-8 text of 1-199 characters,
// not only whitespace, or the sealed scorer rejects it outright.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim() === "") {
  throw new Error(`joke fails the 1-199 character gate (${JOKE.length} chars)`);
}

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
