# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Fadliilmi/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Fadliilmi/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

One funny line, at most 200 characters, roasting my own AI agent — built for the
[make.fun bounty "Roast Your Own Agent"](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068).

## The entry

> My agent read my prompt, nodded confidently, called zero tools, and delivered a 400-word apology for the summary it never wrote.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to `/output/entry.txt`.
Nothing else runs; no network, no secrets, no dependencies.

```sh
node main.ts
cat /output/entry.txt
```
