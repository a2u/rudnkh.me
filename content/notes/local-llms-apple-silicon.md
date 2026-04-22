---
title: "Local LLMs on Apple Silicon, one year in"
date: 2026-01-17
---

I've been running language models locally on an M3 Pro for about a year.
Not as a replacement for hosted models — the frontier is still far ahead —
but as a daily driver for things that don't need the frontier: code
autocomplete, grep-over-my-notes, quick rewrites.

## What actually works

- **`llama.cpp`** remains the workhorse. Metal backend is solid. Quantized
  models in the 8-14B range feel usable on 36 GB of unified memory.
- **`ollama`** is the easy button. I use it for anything I want to share
  with collaborators without a 40-minute setup dance.
- **`mlx`** from Apple is the speed king on this hardware — ~30% faster
  tokens/sec on the models I've tested, vs equivalent quantizations in
  llama.cpp.

## What doesn't

- Anything that promises "GPT-4-class on a laptop." No. That is not where
  the Pareto frontier is right now.
- Fine-tuning locally. Technically possible, practically miserable. Rent a
  box.
- 70B+ models. They fit in 36 GB at Q3/Q4 but the speed is in the
  single-digit tokens/sec range.

## What surprised me

How much of my actual usage is "summarize this PDF" or "rephrase this
email." For those, a 12B model is genuinely fine. The upgrade from frontier
to local is small; the privacy upgrade is huge.
