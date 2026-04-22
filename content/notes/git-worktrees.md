---
title: "Git worktrees changed how I work"
date: 2026-02-09
---

I avoided `git worktree` for years because "stash and switch branches"
felt fine. It wasn't fine; I'd just never felt the alternative.

The pitch: instead of switching branches in place (which nukes your
working directory and forces you to rebuild, re-run tests, restart the
dev server), you have multiple branches checked out in sibling
directories, all sharing the same `.git`.

```bash
git worktree add ../repo-feature-x feature-x
cd ../repo-feature-x
# separate working tree, separate node_modules if you want,
# separate everything except the .git store
```

## Where this wins

- **Reviewing a PR** without losing your current branch's build state.
- **Comparing behavior across branches** with two running dev servers.
- **Long-running tasks** (a heavy test suite, a migration) that you don't
  want to interrupt just to fix a typo on main.
- **Agent-based workflows** — if you let an AI agent work on a branch,
  you don't want it touching the files your editor is sitting in.

## Gotchas

- `node_modules` isn't shared by default. Solvable with pnpm's store,
  bun's global cache, or just biting the bullet.
- Editors that track file paths (not content) sometimes get confused if
  you open the same file in two worktrees. Restart the editor; it's fine.

Small workflow change. Big quality-of-life delta.
