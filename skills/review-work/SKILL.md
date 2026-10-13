---
name: review-work
description: Prepare a read-only summary of authorized in-flight work, sessions, and pull requests, highlighting decisions or actions the user may need to take. Use when asked for a work review or recurring status review.
---

# Review in-flight work

Use the [shared working agreements](../../policy/working-agreements.md) and current task scope. This is a read-only review. Do not create or change schedules, post comments, send messages, merge, approve, close issues, or change repository state unless the user separately authorizes that action.

## Review

1. Establish which repositories, sessions, and review sources the user authorized. Inspect only through tools actually connected to this session.
2. Gather active Codex and Claude sessions when supported, plus open pull requests in the authorized repositories. Distinguish current state from stale or unavailable information. Do not invent access to Claude sessions, private repositories, or provider usage.
3. De-duplicate the two kinds of work review: report each session or PR once, link it when a real link is available, and connect it to its current owner or issue if verifiable.
4. Lead with work that needs a decision or action from the user. Include blockers, review requests, meaningful status changes, and next actions. Separate confirmed facts from inference; state missing access and checks that did not run.
5. Keep routine open work concise. Do not report completed/unchanged items unless they materially affect an outstanding decision.

An hourly task can invoke this skill, but the schedule is configured separately. Do not create a duplicate schedule or alter an existing scheduled task while preparing a review.
