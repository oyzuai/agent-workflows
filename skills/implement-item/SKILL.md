---
name: implement-item
description: Use when an implementer starts an assigned item and delivers its bounded change.
---

# Implement item

## Steps

1. Read the brief and repository instructions, inspect the assigned worktree's branch and status, and preserve unrelated work. Load the named skills and context entries; report the context commit.
2. Follow the delivery and execution rules below. A worker leaves reserved git operations to its coordinator when the brief says so.

- Read and follow the repo's AGENTS.md first. Draft PR first: in oyzuai/oyzu, branch from the latest origin/dev and target dev (other repositories: origin/main); push a first commit, open a DRAFT PR from .github/pull_request_template.md, then push once per turn at the end (license and docs checks run on every push). Keep the PR description short and current.
- Claude designs and reviews. You implement. Don't redesign, don't run your own review rounds, and don't mark the PR ready. When the definition of done passes, update the PR description with the real commands and results, leave it draft and report. Claude reviews it and marks it ready. Never merge or approve.
- Update the user-facing docs that the change affects (docs/reference/ in oyzu, docs/ in fleet, the deploy README in platform) in the same PR. Don't write status, qualification, evidence or proof files, and don't paste run receipts into docs. Results go in the PR description.
- Never skip or weaken signing, provenance, compliance, isolation or access checks, and never hide a failure.
- Clean up containers, images and build dirs you created; say how much disk you used. Use the host's assigned task-owned build directory and clean it before finishing.
- Stay on the user flow. Stop rule: after about an hour, or five commits, without the outcome getting closer, stop and report the blocker with one or two options. Post a one-line progress note at least hourly.
- Local Linux is optional. Linux evidence comes from OVH CI. Don't add the `ci` label yourself: Claude adds it when a turn finishes and Linux evidence is wanted, and removes it while the next turn works (the 4 PR runners are shared by ~40 drafts). A stale WSL or installed oyzu is never a reason to stop; build oyzu from your worktree with cargo and use that.

3. Prove the whole user flow first. Isolated helpers, mocked success, discovery and unit-test counts do not prove the product flow. Complete remaining functional scenarios after the first demonstration; defer unrequested hardening. Required safety controls and observed failures remain binding.
4. Run the brief's checks and applicable repository checks, update affected user-facing documentation, and report exact commands and actual results. Finish the agreed scope without adding qualification rounds.
5. Apply [candidate emission](references/learning.md) when a reusable signal appears. Every item report includes `learning: <missing knowledge or surprise>` or `learning: none`.

## Checks

The outcome and checks in the brief pass; failures, skipped and not-run checks remain visible. Report scoped files, remaining coordinator actions and task-owned disk use/cleanup. Leave the PR draft for the designated reviewer.

Follow the shared [finite acceptance contract](https://github.com/oyzuai/agent-workflows/blob/main/policy/working-agreements.md#finite-acceptance-contract) and the owning repository instructions. This skill grants no additional execution or publication authority.
