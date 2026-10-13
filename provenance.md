# Migration provenance

This map records the authored sources migrated into this repository and intentional changes made during consolidation. It is not a transcript of source sessions. The shared files are the canonical versions; account adapters should point to them rather than duplicate them.

| Existing authored source | Canonical destination | Intentional differences |
| --- | --- | --- |
| Codex account instructions (`AGENTS.md`) | `policy/working-agreements.md`, `accounts/maintainer-profile.md`, and `accounts/AGENTS.md` | Cross-provider rules live once in shared policy; static spend/model thresholds remain in the maintainer profile; the Codex adapter retains Codex discovery and delegation behavior. |
| Claude account instructions (`CLAUDE.md`) | `policy/working-agreements.md`, `accounts/maintainer-profile.md`, and `accounts/CLAUDE.md` | Shared routing, safety, and coordination are consolidated; `providers/claude-code.md` documents Claude-specific instruction imports and skill scopes. |
| `claude-codex-workflow` skill | `skills/route-work/SKILL.md` and the two provider adapters | Keeps the usage-aware routing policy and saved model preferences while requiring a live catalog and capability check. Earlier equal-split and Claude-only coordination wording is explicitly superseded. |
| `hourly-work-review` prompt | `skills/review-work/SKILL.md` | Preserves the request to review in-flight work and report useful action items; makes the workflow read-only and scope-authorized. |
| `hourly-review-on-work` prompt | `skills/review-work/SKILL.md` | Consolidates open-PR and cross-provider session review into the same single-report workflow; does not create or enable a schedule. |
| Oyzu repository issue-coordination skill and guide | `skills/coordinate-issues/SKILL.md` and `skills/coordinate-issues/references/workflow.md` | Removes Oyzu-only and local-path assumptions; retains cooperative labels, claim records, escalation/resume, bounded queue cadence, and PR closure rules. Oyzu's product-specific instructions remain in Oyzu. |

Do not migrate bundled system/plugin skills, upstream project instructions, local sessions or logs, provider credentials/configuration, live usage readings, or private platform design. Content is authored guidance; no upstream implementation code is included.
