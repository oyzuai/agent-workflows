# Adopt the shared workflows

This repository is the maintained source for the shared agreements, provider adapters, account templates, and skills. Adoption is a deliberate local or repository change; cloning this repository does not activate anything.

## Choose an installation scope

- **Account instructions** apply across a user's projects. Copy the appropriate template in `templates/` to the provider's documented user instruction location, replace `<workflow-checkout>` with the local checkout path, and keep the checkout available. Account instructions are pointers so shared policy has one maintained copy.
- **Personal skills** are installed separately in the provider's documented personal skill directory. Copy or link only the skill folders the user intends to use. Verify how the current client discovers them.
- **Project instructions and skills** belong in the project repository when every contributor should receive them. Adapt the templates to that repository and commit them with its own build, architecture, and verification rules.

Provider discovery differs. Follow [`../providers/codex.md`](../providers/codex.md) or [`../providers/claude-code.md`](../providers/claude-code.md), and verify current official documentation before changing installation paths. A local filesystem skill does not automatically become an account-synced or cloud skill. Do not assume symlinks, imports, or custom home directories work on every surface.

## Account setup

1. Clone or update this repository in a stable location on the relevant machine.
2. Review `accounts/maintainer-profile.md`; it contains static preferences, not current usage or availability.
3. Adapt `templates/codex-account.md` or `templates/claude-code-account.md` for the provider's supported account instruction location. Preserve existing user instructions and unrelated preferences.
4. Install desired skills using the provider-specific instructions. Keep each skill package's relative references together.
5. Open a fresh session and verify that the account instruction and one selected skill are discoverable. Report any unsupported surface rather than claiming universal activation.

## Project adoption

Use [`templates/project-AGENTS.md`](templates/project-AGENTS.md) and, where supported and needed, [`templates/project-CLAUDE.md`](templates/project-CLAUDE.md). Replace placeholders with repository-specific links and rules. Choose one coordinator and claim allocator for any shared issue queue; labels are cooperative signals, not locks. The guide does not create labels, schedules, claims, permissions, or automation.

For recurring coordination, the operator must separately decide repository scope, coordinator, cadence, and budget context, then configure and observe the schedule in the intended client. Treat a review-cap such as three pending items as a configurable recommendation, not a default requirement. This repository does not configure or activate recurring work.

## Updating and attribution

Pull updates to this repository, review the diff, and then update installed copies or links. Do not overwrite local changes silently. The [provenance map](../provenance.md) explains which authored workflow sources were consolidated and the intentional differences. The repository has not selected a license; do not infer permission to redistribute third-party content.
