> Shared workflows and skills now belong in [oyzuai/context](https://github.com/oyzuai/context).
> This repository is retained for history and existing installations. New work
> belongs in Context; the instructions below describe the historical source.
> See [Context installation](https://github.com/oyzuai/context/blob/main/adoption/README.md)
> for Claude and Codex plugins. Keep old installations until their replacement
> is reviewed, merged and verified. No repository archival or history rewrite is
> performed by this redirect.

# Shared agent workflows

This public repository is the canonical source for reusable Codex and Claude account guidance and portable agent skills. Provider adapters stay separate where the clients discover files or expose tools differently; shared policies have one owner in `policy/`.

## Start here

- [`AGENTS.md`](AGENTS.md) and [`CLAUDE.md`](CLAUDE.md): repository contributor instructions for the two provider surfaces.
- [`policy/working-agreements.md`](policy/working-agreements.md): shared scope, safety, ownership, [durable design material](policy/working-agreements.md#durable-design-material), [being practical](policy/working-agreements.md#be-practical), and [acceptance evidence and resource ownership](policy/working-agreements.md#acceptance-evidence-and-resource-ownership) rules.
- [`accounts/`](accounts/): thin provider-specific account instruction files and the maintainer profile.
- [`classify-issues`](skills/classify-issues/SKILL.md): required Oyzu issue classification and the canonical label catalog.
- [`write-brief`](skills/write-brief/SKILL.md): bounded item briefs with relevant context ids.
- [`implement-item`](skills/implement-item/SKILL.md): implementation, draft delivery and memory candidate emission.
- [`review-change`](skills/review-change/SKILL.md): independent review with a rejection rubric and learning report.
- [`fix-failure`](skills/fix-failure/SKILL.md): bounded repair after an integration failure or revert.
- [`improve-harness`](skills/improve-harness/SKILL.md): deterministic pattern detection and smallest-fix proposals.
- [`skills/`](skills/): portable workflows, each packaged as a `SKILL.md` with any focused references beside it.
- [`adoption/`](adoption/): installation guidance and reusable project instruction templates.

Skills and instructions are inert files until a supported local client reads or installs them. This repository does not activate schedules, account-synced skills, plugins, GitHub labels, or automation.

The repository is under review and has no license selection. Do not infer permission to redistribute third-party material; migrated content is authored workflow text only.

## Instruction checks

With the repository's managed Node runtime, run
`node checks/instructions.mjs <repo> <context> <agent-workflows>`.
It checks root/directory instructions, skill bodies (excluding frontmatter), context bodies,
briefs and the 400-word constitution budget,
and flags copied paragraphs of at least 40 words across the supplied checkouts
after normalizing leading list markers.
`node --test checks/instructions.test.mjs` exercises budget boundaries and deduplication.
For Oyzu added-line owned-schema labels and new scripts under `tooling/`
(including untracked and extensionless scripts, with `tooling/check-*` repository
checks allowed), set `OYZU_INSTRUCTION_BASE=origin/dev`.
Status-file shape remains owned by Oyzu's existing `tooling/check-docs.mjs`.
These are local checks; fleet has no repository workflow to extend and this
command does not install Node or activate CI.

Owned-schema label checks distinguish schema/contract contexts from upstream action tags,
tool pins, semantic versions and OCI Distribution `/v2/` probes and repository
routes. Owned schema paths and other successor labels on the same line remain
checked. Diff output is captured in a
temporary file, removed after checking, so large diffs do not exceed Node's
subprocess stdout buffer.
