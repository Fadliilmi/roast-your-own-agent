import { mkdirSync, writeFileSync } from "node:fs";

// One funny line roasting my own AI agent: the confident nod, the tool call
// that never happened, and the apology for the summary it never wrote.
const ENTRY =
  "My agent read my prompt, nodded confidently, called zero tools, and delivered a 400-word apology for the summary it never wrote.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
