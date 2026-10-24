# Shared agent workflows

This public repository is the canonical source for reusable Codex and Claude account guidance and portable agent skills. Provider adapters stay separate where the clients discover files or expose tools differently; shared policies have one owner in `policy/`.

## Start here

- [`AGENTS.md`](AGENTS.md) and [`CLAUDE.md`](CLAUDE.md): repository contributor instructions for the two provider surfaces.
- [`policy/working-agreements.md`](policy/working-agreements.md): shared scope, safety, ownership, [durable design material](policy/working-agreements.md#durable-design-material), and [acceptance evidence and resource ownership](policy/working-agreements.md#acceptance-evidence-and-resource-ownership) rules.
- [`accounts/`](accounts/): thin provider-specific account instruction files and the maintainer profile.
- [`skills/`](skills/): portable workflows, each packaged as a `SKILL.md` with any focused references beside it.
- [`adoption/`](adoption/): installation guidance and reusable project instruction templates.
- [`provenance.md`](provenance.md): source mapping and intentional migration differences.

Skills and instructions are inert files until a supported local client reads or installs them. This repository does not activate schedules, account-synced skills, plugins, GitHub labels, or automation.

The repository is under review and has no license selection. Do not infer permission to redistribute third-party material; migrated content is authored workflow text only.
