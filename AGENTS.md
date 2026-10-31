# Repository contributor instructions

## Issue taxonomy

Before creating, splitting, transferring or reclassifying an issue in any
`oyzuai` repository, read and apply the shared
[`classify-issues` skill](https://github.com/oyzuai/agent-workflows/blob/main/skills/classify-issues/SKILL.md) and its bundled
[taxonomy catalog](https://github.com/oyzuai/agent-workflows/blob/main/skills/classify-issues/references/taxonomy.json).
Explicitly fetch these files with repository tools if the skill is not installed;
a link is not an automatic import. Apply exactly one `type:*` and one or two
`area:*` labels, with relevant optional ecosystem, surface, host and concern
labels. Leave priority unset without recorded triage. Preserve `agent:*` and
other workflow labels; read back the issue to verify classification. Keep the
vocabulary in the shared catalog rather than copying it into this repository.
This applies only to authorized issue work and grants no additional authority.

At the start of every task, read `policy/working-agreements.md` and `providers/codex.md`. The `accounts/maintainer-profile.md` file contains Micah's personal preferences; apply it only when the current user and task call for those preferences, not as a default for every contributor.

This repository contains authored instructions and workflow skills. Keep shared policy in its canonical owner instead of copying it into provider adapters or skills. Each skill must remain useful when its own folder is copied outside this checkout; keep any needed reference inside that package. Do not include local paths, credentials, session records, or live usage data in public files.

For documentation-only changes, run `git diff --check`, review changed Markdown links and anchors, and copy each changed skill folder to a temporary location outside the checkout to check its internal references in isolation. Do not run product builds or introduce a runtime/dependency merely to validate Markdown. The repository has no bundled skill validator; report an unavailable optional validator honestly.

Use a draft PR and scoped checkpoints for repository changes. Mark it ready only after the agreed work and applicable checks are complete. Never merge or approve your own change. This repository does not activate schedules, account skills, or provider settings.

## Verification execution policy

This repository defines no workflows, so its acceptance path is bounded local documentation checks and review. Follow the maintainer's [GitHub Actions execution policy](accounts/maintainer-profile.md#github-actions-execution-policy) for any workflow, runner or CI decision: Actions runs on the self-hosted Linux runners of the OVH build server, GitHub-hosted runners stay off by default, and a hosted-only job needs Micah's approval for that run. Report each check as it actually ran: passed, failed, or not run. Preserve branch protection and merge authority.
