import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Bottleneck";
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, WORD, "utf8");
