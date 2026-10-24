# Cooperative issue-queue workflow

This workflow is portable across repositories and providers. Repository instructions define implementation and verification rules; this reference only defines shared coordination behavior. A label or skill grants no authority.

## Independent workstreams and claims

Multiple independently authorized workstreams may proceed concurrently. Each
bounded slice has one accountable owner; no repository-wide allocator is
required. A coordinator can organize a named stream or dependency, but unrelated
sessions do not need its permission or availability to start eligible authorized
work. Recurring-queue limits apply only within that queue, not across a repository.

A claim covers its issue. Independently owned parallel slices use linked child
issues, each with its own owner/state/PR; multiple agents may still collaborate
under one issue owner through bounded delegated briefs. A parent tracking owner
summarizes dependencies and decisions without implicitly claiming its child
implementations. Splitting already claimed implementation scope requires a
recorded boundary agreed with its owner or explicit user direction; do not
carve up another live claim unilaterally. This preserves one owner/state per
issue without a shared-label aggregation or last-writer-wins allocator.

Before claiming, inspect the issue, live claim records, dependencies and open
PRs. Post the bounded claim, then re-read before deep work. Labels and comments
are cooperative signals, not atomic locks; this does not prevent every race.
If competing claims or incompatible changes appear, pause only the overlapping
work and reconcile scope/handoff with its owners or user direction. Do not
unilaterally choose a winner, discard work or stop unrelated streams.

Separate worktrees and PRs isolate edits. A shared filename alone need not stop
both streams; conflicting contract decisions or integration require an explicit
boundary and order. Claim and respect actual scarce build/runtime resources
under repository rules; source ownership does not reserve every machine. Check
relevant concurrent changes again before integration and retain required review.

## Claim records and states

Use exactly one state label per owned issue:

| State label | Meaning | New pickup |
| --- | --- | --- |
| `agent:active` | Bounded investigation or implementation is underway. | Skip |
| `agent:needs-design` | A material decision awaits recorded maintainer direction. | Skip |
| `agent:blocked` | A named prerequisite or external change is outstanding. | Skip |
| `agent:escalated` | A bounded attempt failed; proceeding needs stronger investigation, a new brief, or a maintainer decision. | Skip |
| `agent:review` | The scoped PR awaits review or has feedback to reconcile. | Skip |
| *(none)* | No active claim is recorded; verify the issue before considering it. | Candidate only |

Keep the claim record brief and in the existing issue/PR. Include:

- Opaque owner-session reference (never a conversation share link), assigned
  worker if any, included/excluded scope and shared dependencies.
- Branch/PR and recoverable head revision, current state and last-update time.
- Actual proof/check results and accessible retained evidence references,
  including which source/artifact revision they cover and what remains unverified.
- Next bounded action, blocker/resume condition and outstanding owned operations
  or shared-resource reservations; unknown process state stays unknown.

Do not record credentials, private context, customer data or local absolute paths.
The record should let another authorized session continue without the original
chat. Keep the owner through waiting states. On escalation, record the bounded
attempt and why stronger investigation, a new brief or maintainer judgment is
required. A checkpoint grants no additional authority.

When a claim appears stale, check whether the owner or PR is still active and arrange an explicit handoff. Never silently steal or replace a claim. Resume waiting work only when the record identifies approval, new evidence, a resolved prerequisite, review feedback, or another changed condition. Do not repeat the same failed attempt every run. When requeueing or closing, clear the owner and old state label explicitly so at most one state remains.

If the user explicitly reassigns lost-session work, record the supersession and
new owner; acknowledgment from the unavailable prior session is not required.
Resume from recoverable source/evidence, identify unpublished/unavailable work,
and preserve it rather than assume it is disposable. Reassignment does not
prove old processes stopped or authorize their deletion. Delegated workers
retain their brief until an authorized handoff changes it.

## Decisions and verification

Routine internal fixes preserving existing contracts may use engineering judgment. For a material product, architecture, public-contract, security-authority, or dependency tradeoff, prepare a concise design note: behavior owner, existing contract, real proof, options and recommendation, scope, and required checks. Wait for recorded maintainer approval before implementing the disputed decision. Reuse approved designs where they fit.

Run the repository's required checks, keep failures visible, and report exact commands and limits. Any exception is specific to the check and authorization that granted it. A check failure does not become a general precedent, and a passing helper does not imply an untested end-to-end flow passed.

## Issue closure

Target the PR repository's default branch. A supported closing keyword such as `Fixes #123` is for a fully resolving PR; for an issue in another repository, use `Fixes OWNER/REPO#123` only when the PR fully resolves that issue. GitHub interprets closing keywords only when the PR targets its own repository's default branch. Use ordinary references such as `Refs #123` for design-only or partial work. Confirm GitHub recorded the intended closing issue and verify its state after merge. See [GitHub's linking rules](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).
