---
name: improve-harness
description: Use for the improver weekly run or a recurring failure pattern diagnosis.
---

# Improve harness

## Steps

1. Detect patterns deterministically first. Group reverts by failure class/path, review rejections by rubric, instruction conflicts by source pair, missing knowledge by topic tag and maintainer corrections by topic. Do not search transcripts for patterns.
2. A group becomes a pattern at 3 or more occurrences across at least 2 items, or at 2 maintainer corrections on the same topic. Read the linked logs and review reasons only after detection.
3. Propose the smallest prevention in order: a check; a skill or brief-template edit; a new/corrected context entry; deletion of a stale/conflicting rule. Each proposal names its pattern and evidence links.
4. In v0, read git-host signals only: integration-branch reverts, review-role comments and CI failure classes. Produce the weekly report for the coordinator; open no PRs. Later ledger delivery may turn proposals into ordinary items in their home lane.
5. Two weeks after an improvement merges, rerun the same query; revise or revert ineffective changes through the owning lane. Flag expired, unverifiable or unused entries for review; never delete them merely for age.

## Checks

Threshold counts and distinct items are reproducible, each proposal links evidence and chooses one home, and no constitution change bypasses the maintainer. Reports contain no credentials/customer data.

Follow the shared [finite acceptance contract](https://github.com/oyzuai/agent-workflows/blob/main/policy/working-agreements.md#finite-acceptance-contract) and the owning repository instructions. This skill grants no additional execution or publication authority.
