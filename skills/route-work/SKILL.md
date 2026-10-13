---
name: route-work
description: Choose a provider, model, and effort for an authorized task using current usage headroom, task fit, and handoff cost. Use before substantial delegation or when a provider limit affects the plan.
---

# Route work between providers

Apply the shared [working agreements](../../policy/working-agreements.md) and [maintainer profile](../../accounts/maintainer-profile.md). Route only work the user authorized; a model-routing decision does not authorize delegation, a new session, external action, account change, purchase, or reset redemption.

## Check headroom and capability

For substantial tasks, inspect current short- and long-window usage, reset times, and applicable per-model limits using supported account tools. Use the current Codex usage tool for Codex and an available Claude usage tool or a user-provided reading for Claude. Never read credentials to obtain usage. Mark unavailable or stale data as unknown; do not infer spare capacity from past usage. Recheck after a limit error or before a material allocation decision, not continuously.

Choose the least costly available model likely to complete the task and its review. Consider suitability, binding window, reset timing, handoff overhead, and existing workers. Provider percentages are not equivalent amounts of compute; do not invent a cost score or claim measured savings from qualitative tiers. If eligibility and usage readings disagree, state the discrepancy and continue only where allowed. If a provider is at a limit, do not retry it in a loop; use another provider only when its headroom and an authorized handoff are verified.

## Delegate and hand off

For authorized multi-part work, the current user conversation remains coordinator for scope, priorities, decisions, dependencies, evidence review, and user updates. Workers own bounded execution tasks and report exact outcomes or blockers. Assign one worker to each long-running operation and let it run through completion. Do small one- or two-step tasks directly when briefing overhead is greater.

When tool-supported, use the live model catalog and supported effort values. Preserve the user's explicit model choice. Do not claim to change the serving model of an existing conversation without a supported control. If the configured model cannot do the task, escalate one step after a concrete failure and carry forward the evidence; avoid repeating identical failed attempts.

Never buy credits, change plans, or redeem reset credits without explicit authorization. When no provider has authorized capacity, stop new work and report what is in flight and what remains.
