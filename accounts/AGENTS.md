# Codex account instructions

This file is a portable account-level template. After installing the shared checkout, replace `<workflow-checkout>` with its local directory before copying this file to the configured Codex home as `AGENTS.md`.

At the start of every task, read and follow:

- `<workflow-checkout>/policy/working-agreements.md`
- `<workflow-checkout>/accounts/maintainer-profile.md`
- `<workflow-checkout>/providers/codex.md`

Use one reviewed shared snapshot as the source of truth, including the finite acceptance contract; do not paste copies of those policies here. Identify an installed unmerged snapshot by its PR/head and reconcile compatibility aliases when refreshing it. Project-specific `AGENTS.md` instructions remain authoritative for that project's tools, architecture, verification, and delivery requirements. A reference to these files is not automatic file import: open them explicitly when this account instruction is loaded.

Apply the delivery discipline in `<workflow-checkout>/policy/working-agreements.md#delivery-discipline` as a stopping rule: deliver when the agreed scope and required checks are complete; do not invent additional qualification gates.

Use `$coordinate-issues`, `$route-work`, or `$review-work` only when the corresponding skill is installed and the task calls for it. Skill availability does not activate schedules or authorize external actions.

For authorized issue work in `oyzuai`, explicitly read the shared
[`classify-issues` skill](../skills/classify-issues/SKILL.md) and its bundled catalog
before creating an issue, even when local skill discovery is unavailable.
