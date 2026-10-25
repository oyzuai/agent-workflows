# Adopt the shared workflows

This repository is the maintained source for the shared agreements, provider adapters, account instruction files, and skills. Adoption is a deliberate local or repository change; cloning this repository does not activate anything.

## Choose an installation scope

- **Account instructions** apply across a user's projects. Point the provider's documented user instruction file at the matching file in `../accounts/` (`CLAUDE.md` for Claude Code, `AGENTS.md` for Codex), using the local checkout path, and keep the checkout available. Account instructions are pointers so shared policy has one maintained copy.
- **Personal skills** are installed separately in the provider's documented personal skill directory. Copy or link only the skill folders the user intends to use. Verify how the current client discovers them.
- **Project instructions and skills** belong in the project repository when every contributor should receive them. Adapt the templates to that repository and commit them with its own build, architecture, and verification rules.

Provider discovery differs. Follow [`../providers/codex.md`](../providers/codex.md) or [`../providers/claude-code.md`](../providers/claude-code.md), and verify current official documentation before changing installation paths. A local filesystem skill does not automatically become an account-synced or cloud skill. Do not assume symlinks, imports, or custom home directories work on every surface.

## Account setup

1. Clone or update this repository in a stable location on the relevant machine.
2. Review `accounts/maintainer-profile.md`; it contains static preferences, not current usage or availability.
3. Point the provider's account instruction location at `accounts/CLAUDE.md` (import it with `@path`) or `accounts/AGENTS.md` (copy it, replacing `<workflow-checkout>`). Preserve existing user instructions and unrelated preferences.
4. Install desired skills using the provider-specific instructions. Keep each skill package's relative references together.
5. Open a fresh session and verify that the account instruction and one selected skill are discoverable. Report any unsupported surface rather than claiming universal activation.

## Codex coordinator kit

To get a coordinator, workers, independent review and status check-ins in Codex, follow [`codex-coordinator-kit.md`](codex-coordinator-kit.md). It has an `AGENTS.md` coordinator section ([`templates/codex-coordinator-AGENTS.md`](templates/codex-coordinator-AGENTS.md)), custom agent files ([`templates/codex-agents/`](templates/codex-agents/)) and a session-opening prompt.

## Project adoption

Use [`templates/project-AGENTS.md`](templates/project-AGENTS.md) and, where supported and needed, [`templates/project-CLAUDE.md`](templates/project-CLAUDE.md). Replace placeholders with repository-specific links and rules. Choose one coordinator and claim allocator for any shared issue queue; labels are cooperative signals, not locks. The guide does not create labels, schedules, claims, permissions, or automation.

For recurring coordination, the operator must separately decide repository scope, coordinator, cadence, and budget context, then configure and observe the schedule in the intended client. Treat a review-cap such as three pending items as a configurable recommendation, not a default requirement. This repository does not configure or activate recurring work.

## Updating and attribution

Pull updates to this repository, review the diff, and then update installed copies or links. Do not overwrite local changes silently. The repository has not selected a license; do not infer permission to redistribute third-party content.

## Verification venue in portable instructions

Record the maintainer's current local/CI execution policy in project instructions and cloud/worker briefs when account files are unavailable. A local account pointer alone does not cover cloud sessions. Preserve applicable local checks, report intentionally unrun CI honestly, and obtain explicit scope before enabling workflow execution. Relay changes to existing sessions; do not assume an edited file was reloaded.
