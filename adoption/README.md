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

## Oyzu issue classification

For every `oyzuai` repository, include the issue-taxonomy section from the project
templates in `AGENTS.md`; ensure `CLAUDE.md` imports that file or includes the same
read instruction. Install the complete [`classify-issues`](../skills/classify-issues/SKILL.md)
folder when local skill discovery is desired. The instruction also supports an
explicit repository-tool read, so cloud sessions do not depend on personal
installation. Apply this when creating new repositories too. Keep label names and
descriptions in the bundled catalog; do not maintain per-repository copies.
These files take effect when adopted on the branch a session reads; PR creation
alone does not activate them on the default branch.

## Cloud session context

Repository `.claude/settings.json` hooks cannot cover a session started outside
a checkout. For that case, provision
[`claude-cloud-load-context.sh`](claude-cloud-load-context.sh) as a **user-level**
SessionStart hook in the Claude cloud environment. This PR supplies the script
and instructions only; it does not install or activate user settings.

The environment needs Bash, Git, a writable user cache, and authenticated read
access to private `oyzuai/context`. Before starting a session, copy the script
from the reviewed agent-workflows checkout into the cloud session user's home
(run these in that checkout during environment provisioning):

```bash
install -d -m 700 "$HOME/.claude/hooks"
install -m 700 adoption/claude-cloud-load-context.sh "$HOME/.claude/hooks/load-oyzu-context.sh"
```

In the cloud environment's **user-level Claude settings**, merge this entry into
the user's `~/.claude/settings.json`. Append to any existing `hooks.SessionStart`
array and preserve all other hooks and settings. Do not put this entry only in a
repository's settings. If the cloud environment recreates the home directory,
include both the script copy and settings merge in its provisioning/setup so
they exist before SessionStart runs.

```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash \"$HOME/.claude/hooks/load-oyzu-context.sh\"",
            "timeout": 60
          }
        ]
      }
    ]
  }
}
```

The standalone script ignores the working directory and `CLAUDE_PROJECT_DIR`.
It clones or fast-forwards `main` in `$XDG_CACHE_HOME/oyzu/context`, falling back
to `$HOME/.cache/oyzu/context`, and prints the committed constitution, INDEX and
`context commit <sha>`. Cache paths must be absolute. On failure it prints
`ERROR: ... context load FAILED` to stderr **and** session stdout, with no success
SHA. It exits zero with that failure marker so an offline session can continue;
restore private Git access or repair the cache branch/origin and retry before
relying on shared policy. An outer timeout is reported by the host. It neither
installs skills nor changes account instructions.

For the offline proof, run
`bash .claude/test-load-context.sh adoption/claude-cloud-load-context.sh cloud`.
It runs the actual script from a non-repository directory with
`CLAUDE_PROJECT_DIR` unset, local bare remotes and network protocols disabled.
After provisioning, separately start a fresh cloud session in a non-repository
directory such as the user's home and confirm the documents and SHA appear in
SessionStart output. That fresh-session settings check has not been performed
by committing these files.

## Updating and attribution

Pull updates to this repository, review the diff, and then update installed copies or links. Do not overwrite local changes silently. The repository has not selected a license; do not infer permission to redistribute third-party content.

## Verification venue in portable instructions

Record the maintainer's current local/CI execution policy in project instructions and cloud/worker briefs when account files are unavailable. A local account pointer alone does not cover cloud sessions. Preserve applicable local checks, report each check as it actually ran (passed, failed or not run), and obtain explicit approval for anything that policy reserves, such as a hosted-only job or a runner change. Relay changes to existing sessions; do not assume an edited file was reloaded.
