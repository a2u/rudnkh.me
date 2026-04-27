# Image style for rudnkh.me

Visual conventions for any illustrations generated for this site (blog
posts, /now, /pages, etc.). Pass these to whichever model you're using
(Gemini, Imagen, Midjourney, DALL·E, Nano Banana, Stable Diffusion).

## The base style

**Hand-drawn pencil illustration on textured cream paper.**

- Medium: traditional graphite pencil, 2H–6B range, visible cross-hatching
  for depth.
- Reference aesthetic: naturalist field journal — Leonardo da Vinci's
  notebooks, Ernst Haeckel's natural history plates, John Muir Laws style
  nature journaling.
- Lines are loose, confident, sketchy. Lots of negative space.
- Subtle paper grain visible.
- Monochrome only. No color.
- No text, no labels, no signatures, no watermarks.
- Mood: quiet, contemplative, attentive. Slightly scientific, slightly
  poetic.

## Default technical specs

- Aspect ratio: **16:9** (post header) or **1:1** (in-line / thumbnails).
- High resolution.
- Format: **JPG** by default (pencil/paper textures compress well, file
  size matters for page load). Use PNG only when transparency is needed
  or for crisp line art with hard edges.

## File conventions

- Per-section subfolder under `static/images/`:
  - `static/images/notes/<slug>.jpg` — for `/notes/<slug>/`
  - `static/images/playing/<slug>.jpg` — etc.
- Filename matches the post slug. Keep lowercase, hyphenated.
- Reference in markdown by absolute path:
  `![alt text](/images/notes/<slug>.jpg)` (Hugo serves `static/` from site root).
- Remember: Hugo wipes `docs/` on `hugo --cleanDestinationDir`. Always
  store originals under `static/images/`, not directly in `docs/`.

## Composition guidelines

- One clear subject; supporting elements should breathe in negative space.
- Prefer evocative-over-literal: hint at the idea rather than spell it
  out. A single bird + wisps of sound > a labelled diagram of an ear.
- If illustrating a scientific/abstract idea, allow loose anatomical
  cross-sections, faint waveforms, or symbolic motifs (in pencil).

## Reusable prompt scaffold

When asking a model, fill in `{{SUBJECT}}` and `{{IDEA}}`:

> A delicate hand-drawn pencil illustration on textured cream paper.
> The composition shows {{SUBJECT}}, conveying {{IDEA}}. Style:
> traditional graphite pencil drawing, scientific-illustration meets
> nature journaling, in the spirit of Leonardo da Vinci's notebook
> sketches or Ernst Haeckel's natural history plates. Monochrome,
> graphite tones from soft 2H to dark 6B. Slight paper grain visible.
> Lines are light, sketchy, confident, with cross-hatching for depth.
> Lots of negative space. No color, no text, no labels, no signature.
> Mood: quiet, contemplative, attentive. Aspect ratio 16:9, high
> resolution.

## Variations (acceptable departures)

- **Vintage engraving** — when the post is about classic science /
  natural history, swap pencil for "vintage scientific engraving, fine
  cross-hatched ink, 19th-century plate."
- **Ultra-minimal** — for very short posts, drop to "single subject,
  graphite outline only, mostly white space."

Avoid: digital illustration look, watercolor, photorealism, neon, color
gradients, AI-stock-art clichés (glowing brains, generic infographics).
