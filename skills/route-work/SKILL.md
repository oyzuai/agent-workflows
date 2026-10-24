---
name: route-work
description: Choose a provider, model, and effort for an authorized task using current usage headroom, task fit, and handoff cost. Use before substantial delegation or when a provider limit affects the plan.
---

# Route work between providers

Apply the shared account and project instructions supplied in the current task context. Route only work the user authorized; a model-routing decision does not authorize delegation, a new session, external action, account change, purchase, or reset redemption.

## Apply the account's split policy

If the account context sets a split between providers, follow it before choosing the cheapest model. Assign each substantial task, such as a spec to implement, a multi-file feature, a refactor, a long investigation, or a prototype, whole and end to end to one provider; never carve a task into small pieces to give the other provider a slice. Alternate whole tasks so each provider carries its target share by size, keep a running tally within the assigned workstream, and do not count code reviews toward the share. No global allocation conversation is required. When unsure, follow the account's tiebreak. Tilt away from a provider that is running hot, and when one is out of credits or at a limit, run everything on the other until the user says it is back. Use the account's role-to-model map when it has one, and name the model and effort in every brief.

## Check headroom and capability

For substantial tasks, inspect current short- and long-window usage, reset times, and applicable per-model limits using supported account tools. Use the current Codex usage tool for Codex and an available Claude usage tool or a user-provided reading for Claude. Never read credentials to obtain usage. Mark unavailable or stale data as unknown; do not infer spare capacity from past usage. Recheck after a limit error or before a material allocation decision, not continuously.

Choose the provider for the whole task using the supplied account's allocation and headroom rules, then select that platform's model selector and effort for the actual role. Either provider may coordinate, implement, investigate, review, verify, or deliver a PR. Apply an account role map before generic cost optimization; otherwise choose a capable economical model. Consider suitability, binding window, reset timing, handoff overhead, and existing workers. Provider percentages are not equivalent amounts of compute; do not invent a cost score or claim measured savings from qualitative tiers. If eligibility and usage readings disagree, state the discrepancy and continue only where allowed. If a provider is at a limit, do not retry it in a loop; use the account's authorized fallback and preserve its user-controlled return condition.

## Delegate and hand off

For authorized multi-part work, its workstream owner handles scope, priorities,
decisions, dependencies, evidence review and user updates. Multiple independently
authorized sessions may own different streams and deliver their own PRs without
a global coordinator. Delegated workers retain their bounded brief and report
exact outcomes or blockers; changing that ownership needs an authorized handoff.
Assign one worker to each long-running operation and let it finish. Keep resumable
source/results/next-action context in the owning issue/PR, not only in the chat.
Do small one- or two-step tasks directly when briefing overhead is greater.

The coordinator may run on either provider. Every worker brief names the provider, role, exact supported model selector, and effort, and includes the full ask, repository rules, assigned repository/branch/worktree, files concurrent work is changing, allowed operations, required checks, and concrete completion criteria. Either provider may supply required separate review passes at the account's specified model tier; cross-provider review is optional unless the task explicitly requires it. The coordinator verifies the diff and check evidence and delivers the PR under repository rules.

When tool-supported, use the live model catalog and supported effort values. Preserve the user's explicit model choice. Do not claim to change the serving model of an existing conversation without a supported control. If the configured model cannot do the task, escalate one step after a concrete failure and carry forward the evidence; avoid repeating identical failed attempts.

Never buy credits, change plans, or redeem reset credits without explicit authorization. When no provider has authorized capacity, stop new work and report what is in flight and what remains.
