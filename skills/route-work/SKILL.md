---
name: route-work
description: Choose a provider, model, and effort for an authorized task using current usage headroom, task fit, and handoff cost. Use before substantial delegation or when a provider limit affects the plan.
---

# Route work between providers

Apply the shared account and project instructions supplied in the current task context. Route only work the user authorized; a model-routing decision does not authorize delegation, a new session, external action, account change, purchase, or reset redemption.

## Check headroom and capability

For substantial tasks, inspect current short- and long-window usage, reset times, and applicable per-model limits using supported account tools. Use the current Codex usage tool for Codex and an available Claude usage tool or a user-provided reading for Claude. Never read credentials to obtain usage. Mark unavailable or stale data as unknown; do not infer spare capacity from past usage. Recheck after a limit error or before a material allocation decision, not continuously.

Apply the supplied account profile's provider allocation and role-based model/effort rules before cost optimization. Keep substantial tasks whole from the full ask through implementation and verification; do not split a task merely to distribute provider credit. When the profile calls for balanced work, account for approximate task size, exclude reviews from implementation credit, and use its tie-break rule. Record the routing reason in the existing task record.

Consider suitability, binding window, reset timing, handoff overhead, and existing workers. Provider percentages are not equivalent amounts of compute; do not invent a cost score or claim measured savings from qualitative tiers. Unknown usage stays unknown; apply the profile's rule rather than inventing a restrictive budget gate. If eligibility and usage readings disagree, state the discrepancy. At a provider limit, stop retrying and use the profile's authorized fallback. Preserve any user-controlled exhaustion latch until the user explicitly clears it; a forecast reset is not permission to resume spending.

## Delegate and hand off

For authorized delegation, follow the account profile's coordinator ownership and exhaustion fallback. When no coordinator preference applies, the current user conversation owns scope, priorities, decisions, dependencies, evidence review, and user updates. Workers own whole assigned tasks and report exact outcomes or blockers. Assign one worker to each long-running operation and let it run through completion. Do small one- or two-step tasks directly when briefing overhead is greater.

Every brief names the selected model and supported effort, includes the full ask and repository rules, identifies the repository/branch/worktree and files concurrent work is changing, and states dependencies, allowed operations, required checks, and concrete completion criteria. Return the diff, exact verification evidence, and limitations to the designated coordinator for verification and PR delivery. Preserve required independent review roles; unavailable handoff or review tools are limitations to report, not evidence that a review happened.

When tool-supported, use the live model catalog and supported effort values. Preserve the user's explicit model choice. Do not claim to change the serving model of an existing conversation without a supported control. If the configured model cannot do the task, escalate one step after a concrete failure and carry forward the evidence; avoid repeating identical failed attempts.

Never buy credits, change plans, or redeem reset credits without explicit authorization. When no provider has authorized capacity, stop new work and report what is in flight and what remains.
