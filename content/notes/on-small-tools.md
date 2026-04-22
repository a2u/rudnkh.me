---
title: "On small tools"
date: 2025-10-14
---

There's a specific kind of joy in tools that do one thing, do it well, and
stay out of your way. `fzf` is the canonical example — a single fuzzy finder
that quietly becomes the glue between everything else.

## What makes a good small tool

- **Composable.** Speaks stdin/stdout by default. Every feature exposed as
  a flag, not a config file.
- **Fast.** You don't notice it's running. If you notice, it's too slow.
- **Boring.** No surprises. No auto-update prompts. No telemetry.
- **Readable source.** You can sit down on a weekend and understand the
  whole thing.

The inverse — the "platform" tool that tries to absorb five adjacent
workflows — almost always rots. Either the maintainer burns out, or the
feature surface becomes a museum of deprecated ideas.

## Current small tools I depend on

```
rg    - ripgrep, grep replacement
fd    - find replacement
bat   - cat with syntax highlighting
eza   - ls replacement
jq    - JSON swiss army knife
gh    - GitHub CLI
mise  - runtime version manager
```

None of these are clever. They all just work.
