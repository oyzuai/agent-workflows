---
name: coordinate-issues
description: Coordinate authorized issue work across independent workstreams using cooperative claims, durable handoffs, bounded queues, design escalation, and closing-reference checks. Use when a user asks to triage or continue recurring issue work.
---

# Coordinate issues

Follow the portable [workflow reference](references/workflow.md). It defines ownership records, label states, stale-claim handoff, escalation, and pull-request closure. Determine the repository and default branch from the current task; do not assume a hosting organization.

## Each run

1. Continue existing owned work first: reconcile worker results, review evidence and pull-request feedback, handle merges or blockers, and update the claim.
2. Keep at most one active implementation in this coordinator's queue and pick up no more than one new issue per run. Do not let this queue limit restrict independently authorized work outside this coordinator.
3. Only select a candidate when this queue has no active implementation. Prioritize explicit maintainer direction, then severity and user-flow impact, dependencies, and age. Check the issue, claims and existing pull requests; reproduce against latest default-branch state when practical.
4. Independently authorized sessions may claim different eligible slices without a global allocator. Inspect claims and PRs before posting a claim, then re-read before deep work. Labels are cooperative signals, not atomic locks; resolve any overlapping claim without taking over another live owner.
5. Keep each owner responsible for its assigned scope, decisions and evidence; any coordinator serves only that workstream or queue. Assign delegated workers bounded operations. Basic localized fixes that preserve existing contracts may proceed on judgment; material product, architecture, public-contract, security-authority, or dependency tradeoffs need a concise design and recorded maintainer approval before implementation.
6. Keep normal repository checks and failures visible. Follow its draft-first workflow. Use a closing keyword only when a PR fully resolves the issue and targets the PR repository's default branch; use an ordinary reference for design-only or partial work. Verify the issue's post-merge state before reporting closure.

Waiting-state work remains owned and is skipped for new pickup. Resume only for the recorded approval, new evidence, resolved prerequisite, review feedback, or changed condition. A stale timestamp requires an owner-state check and explicit handoff; never silently take the claim. Do not repeat the same failed attempt without a changed condition.

Notify the maintainer only about a meaningful design decision, review readiness, or actionable blocker, through a channel authorized for the current task. Do not post issue comments or messages without authorization. This skill does not configure schedules, labels, or claims.
