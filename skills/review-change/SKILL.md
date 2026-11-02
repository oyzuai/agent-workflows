---
name: review-change
description: Use for an assigned independent review of a change against its brief and repository rules.
---

# Review change

## Steps

1. Start with fresh context: the brief, base/head diff, repository instructions, context commit and relevant docs. The reviewer must differ from the implementer under the routing policy. Do not repair the code being reviewed.
2. Try to reject the change against the outcome and rubric: correctness (including access and trust boundaries), scope creep, missing tests and missing documentation. Ground each rejection in a file/location, observable failure, evidence and the smallest required correction. Distinguish blockers from optional improvements.
3. Check that the actual commands/results support the claimed scope; helpers alone do not prove the user flow. Security-sensitive changes additionally need the designated security reviewer; no review waives a gate.
4. Return pass or reject with reasons. At most two review rounds: a second rejection returns to intake for redesign, never a third round. Do not merge, approve or mark ready unless explicitly assigned that operation.
5. For reusable signals, apply the candidate checks in [candidate emission](https://github.com/oyzuai/agent-workflows/blob/main/skills/implement-item/references/learning.md). Report `learning: <missing knowledge or surprise>` or `learning: none`.

## Checks

Every finding names a rubric item, evidence and affected obligation. Report unavailable verification honestly and leave repairs to the implementer.

Follow the shared [finite acceptance contract](https://github.com/oyzuai/agent-workflows/blob/main/policy/working-agreements.md#finite-acceptance-contract) and the owning repository instructions. This skill grants no additional execution or publication authority.
