# Cooperative issue-queue workflow

This workflow is portable across repositories and providers. Repository instructions define implementation and verification rules; this reference only defines shared coordination behavior. A label or skill grants no authority.

## Claim records and states

Use one coordinator as the claim allocator. Before deep work, confirm the issue has no other live owner and record the claim on the issue. Every agent inspects the current owner, state, and open PRs and skips another owner's claim. Labels are cooperative signals, not atomic locks, and cannot prevent a concurrent race.

Use exactly one state label per owned issue:

| State label | Meaning | New pickup |
| --- | --- | --- |
| `agent:active` | Bounded investigation or implementation is underway. | Skip |
| `agent:needs-design` | A material decision awaits recorded maintainer direction. | Skip |
| `agent:blocked` | A named prerequisite or external change is outstanding. | Skip |
| `agent:escalated` | A bounded attempt failed; proceeding needs stronger investigation, a new brief, or a maintainer decision. | Skip |
| `agent:review` | The scoped PR awaits review or has feedback to reconcile. | Skip |
| *(none)* | No active claim is recorded; verify the issue before considering it. | Candidate only |

Keep the claim record brief. Include an opaque owner-session reference (never a conversation share link), worker identity, branch/PR if any, current state and last-update time, next action, and resume condition. Do not record credentials, private context, customer data, or local absolute paths. Keep the owner through waiting states. On escalation, record the bounded attempt and why stronger investigation, a new brief, or maintainer judgment is required.

When a claim appears stale, check whether the owner or PR is still active and arrange an explicit handoff. Never silently steal or replace a claim. Resume waiting work only when the record identifies approval, new evidence, a resolved prerequisite, review feedback, or another changed condition. Do not repeat the same failed attempt every run. When requeueing or closing, clear the owner and old state label explicitly so at most one state remains.

## Decisions and verification

Routine internal fixes preserving existing contracts may use engineering judgment. For a material product, architecture, public-contract, security-authority, or dependency tradeoff, prepare a concise design note: behavior owner, existing contract, real proof, options and recommendation, scope, and required checks. Wait for recorded maintainer approval before implementing the disputed decision. Reuse approved designs where they fit.

Run the repository's required checks, keep failures visible, and report exact commands and limits. Any exception is specific to the check and authorization that granted it. A check failure does not become a general precedent, and a passing helper does not imply an untested end-to-end flow passed.

## Issue closure

Target the PR repository's default branch. A supported closing keyword such as `Fixes #123` is for a fully resolving PR; for an issue in another repository, use `Fixes OWNER/REPO#123` only when the PR fully resolves that issue. GitHub interprets closing keywords only when the PR targets its own repository's default branch. Use ordinary references such as `Refs #123` for design-only or partial work. Confirm GitHub recorded the intended closing issue and verify its state after merge. See [GitHub's linking rules](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).
