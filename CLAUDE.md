# Repository contributor instructions for Claude Code

@policy/working-agreements.md
@providers/claude-code.md

Read those shared instructions at the start of each task. `accounts/maintainer-profile.md` contains Micah's personal preferences; apply it only when the current user and task call for them, not as a default for every contributor.

This repository contains authored instructions and workflow skills. Keep shared policy in its canonical owner instead of copying it into provider adapters or skills. Each skill must remain useful when its own folder is copied outside this checkout; keep any needed reference inside that package. Do not include local paths, credentials, session records, or live usage data in public files.

For documentation-only changes, run `git diff --check`, review changed Markdown links and anchors, and copy each changed skill folder to a temporary location outside the checkout to check its internal references in isolation. Do not run product builds or introduce a runtime/dependency merely to validate Markdown. The repository has no bundled skill validator; report an unavailable optional validator honestly.

Use a draft PR and scoped checkpoints for repository changes. Mark it ready only after the agreed work and applicable checks are complete. Never merge or approve your own change. This repository does not activate schedules, account skills, or provider settings.
