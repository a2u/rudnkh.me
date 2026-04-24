# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Vitalii Rudnykh's personal site (https://rudnkh.me) built with **Hugo 0.160.1+extended**. No theme — all templates live in `/layouts`.

## Commands

```bash
hugo server                    # dev at http://localhost:1313 (in-memory, does NOT write to docs/)
hugo --cleanDestinationDir     # production build into docs/
```

There is no test suite, linter, or CI workflow.

## Deployment — important

The site is served by **GitHub Pages from the `docs/` directory on `master`** (no build action). This means:

- After editing source, you MUST run `hugo --cleanDestinationDir` and commit `docs/` together with the source changes — otherwise the live site lags behind `master`.
- `CNAME` in the repo root maps the custom domain; Hugo copies it into `docs/` on each build.
- `publishDir: 'docs'` is set in `config.yaml`.

## Content structure

Top-level sections live under `content/` and each has custom permalinks configured in `config.yaml`:

- `notes/` — blog-style dated posts (`/notes/<slug>/`)
- `playing/`, `watching/`, `writeups/` — dated lists with content frontmatter (rating, year, platform)
- `pages/` — topic index (vinc.cc-style)

Standalone pages at the root of `content/`: `about.md`, `now.md`, `uses.md`, `links.md`.

## Layouts

One layout family covers the whole site:

- `layouts/index.html` — homepage (hand-written, not driven by `content/_index.html`)
- `layouts/_default/list.html` — every section index; renders `.Content` then a `<ul class="entries">` of children sorted by date desc
- `layouts/_default/single.html` — every single page; shows title, date, and `.Content`
- `layouts/_default/404.html`
- `layouts/partials/{header,footer}.html` — shared chrome

Adding a new section **does not** require new layout files — `_default/*` handles it. Per-section layouts were deliberately removed; don't recreate `layouts/<section>/*` unless a section needs a truly different shape.

## Body-class convention (CSS depends on this)

`header.html` sets `<body class="...">` based on the page kind:

- Homepage → `home`
- Section index → `section <name> <name>-list` (e.g. `section notes notes-list`)
- Single page → `section <name> <name>-single`

CSS selectors in `static/css/style.css` (e.g. `body.home nav.primary`, `ul.entries`) rely on this. If you change the convention, update the CSS.

## Design tokens

Defined as CSS custom properties at the top of `static/css/style.css`:

- `--bg: #15161d` (near-black)
- `--fg: rgba(255, 255, 255, 0.8)`
- `--green: #00FE8B` (accent — links, h1, code, blockquote bar)
- Monospace stack led by `Menlo`

Dark-only — no `prefers-color-scheme: light` rules. If adding light mode, do it as an explicit feature, not by mirroring dark.

## Git

Repo-local git config: `Vitalii Rudnykh <i@rudnkh.me>`. Do not change it. Commit messages in this repo use short imperative subjects ("Redesign ...", "Update ...").
