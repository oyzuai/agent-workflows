# Shared workflow pointers

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

For work coordination, follow the shared [finite acceptance contract](https://github.com/oyzuai/agent-workflows/blob/main/policy/working-agreements.md#finite-acceptance-contract) and, when issue coordination is requested, the [`coordinate-issues` skill](<PUBLIC_SKILL_URL>). Adapt the links to the reviewed public source and pin a commit or release if this project's policy requires reproducibility.

This project remains responsible for its own architecture, build, test, security, and contribution instructions. The shared workflow does not grant permission to change project state, message others, merge, approve, or activate automation.
