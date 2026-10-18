# Maintainer account profile

These are shared routing instructions for Claude and Codex. Choose the provider for the task, then choose that provider's model for the role. Either provider can coordinate, implement, investigate, review, verify, and deliver a PR. These preferences supersede the former percentage-based budget gates, cheapest-model default, medium-effort default, and Claude-only orchestration rule. They are not live usage or availability reports.

## Allocate whole tasks between providers

Use Claude and Codex about equally. Both have large budgets; Codex receives its fair half of hard work. Substantial work includes implementing a spec or brief, a feature across files or services, a refactor or migration, a long investigation, or a prototype. Assign each task whole and end to end to one provider, including implementation, required verification, and delivery.

Alternate substantial assignments, adjusting for estimated size so each provider carries about half the effort over time. Keep the provider, approximate size, and completion in the existing task record. Never carve a task into small pieces to give Codex a slice. Code reviews and routine coordination do not count toward Codex's share. When the assignment is otherwise uncertain, give the whole task to Codex. Small one- or two-operation tasks stay with the current provider when a handoff would cost more than it saves.

## Account for headroom

Before a material allocation decision, record available short- and long-window usage, reset times, and applicable model limits for both providers, or mark them unavailable, with the time read. A snapshot older than two hours is stale and remains unknown. Unknown usage does not restrict a provider to small tasks; continue balanced allocation without claiming verified headroom.

Tilt new whole-task assignments toward the provider with more usable headroom when the other is running hot. Consider the binding window and reset time; percentages are not equivalent compute budgets. There are no fixed 50%, 65%, or 85% stop gates. Do not repeatedly poll usage.

If one provider is out of credits or reaches a blocking usage limit, run all roles on the other provider until the user says the exhausted provider is back. Record that state in the existing coordination record; do not probe or resume it automatically after a predicted reset. Preserve completed work and hand off a blocked task as a whole. If both are exhausted, stop and report what remains. Never buy credits, change plans, redeem resets, or use Ultrafast or another paid speed tier without explicit user authorization.

## Choose the model by platform and role

Choose the role from the actual work, then use the matching model on the selected platform. The same role and quality requirements apply to both providers. A task involving design judgment does not become light work because the requested edit is small. Do not reserve design-heavy tasks for Claude or reduce Codex to implementation or review leftovers.

| Task or role | Claude model | Codex model | Effort |
| --- | --- | --- | --- |
| Coordination: briefing, sequencing, relaying, checking merge state, verifying worker evidence, PR delivery | Sonnet | GPT-6.1 Sol (`gpt-6.1-sol`) | High |
| Design-heavy implementation: new subsystems, signing, trust, stores, locks, resolver logic, contract changes | Opus | GPT-6 Astra (`gpt-6-astra`) | High |
| Clear-brief implementation: settled design, concrete definition of done | Sonnet | GPT-6.1 Sol (`gpt-6.1-sol`) | High |
| Light work: mechanical edits, renames, doc link fixes, base merges, CI reruns, gathering logs or PR state | Haiku | GPT-6 Luna (`gpt-6-luna`) | Low, where supported |
| First diff review of every implementation PR | Opus | GPT-6 Astra (`gpt-6-astra`) | High |
| Every review round touching security, locks, resolvers, or contracts | Opus | GPT-6 Astra (`gpt-6-astra`) | High |
| Later-round checks of small fixes outside security, locks, resolvers, and contracts | Sonnet | GPT-6.1 Sol (`gpt-6.1-sol`) | Medium |
| Investigations: CI root cause, reproductions, performance measurements | Sonnet; move to Opus if stalled | GPT-6.1 Sol; move to GPT-6 Astra if stalled | High |
| Design or security judgment referred by the coordinator | Opus | GPT-6 Astra (`gpt-6-astra`) | High |

The coordinator can run on either provider and refers design or security judgment to the strongest reviewer on that provider rather than deciding alone. Haiku and Luna never change security or contracts. Base merges that require resolving security or contract changes use the appropriate implementation and review roles.

Reviews can run on either provider; cross-provider review is optional rather than mandatory. A separate reviewer pass uses the reviewer's platform column. Every implementation PR receives a first review from Opus or Astra at high effort, and all rounds touching security, locks, resolvers, or contracts retain that tier. Reviews do not count toward the whole-task implementation allocation. An AI diff review is not PR approval.

Use the current catalog to resolve the Claude family identifiers and confirm the Codex identifiers and supported effort before dispatch. Do not pin unverified Claude versions, invent effort support, or silently substitute an older model. The [official model-selection guidance](https://developers.openai.com/api/docs/guides/model-selection) identifies Astra as the strongest option, Sol as a balance of capability and cost, and Luna for lighter work. The table above is the maintainer's routing policy rather than a vendor performance or access guarantee.

These preferences authorize the listed effort for newly dispatched work, not changing the serving model or effort of an existing conversation. Preserve explicit user model choices. Never select xhigh, max, or ultra unless explicitly requested. Escalate a stalled task once with concrete failure evidence rather than looping.

## Coordinate, brief, and deliver

The coordinating conversation owns scope, sequencing, dependencies, decisions, user updates, evidence review, and PR delivery regardless of provider. A worker owns its assigned whole task. The coordinator gives every worker the full ask, repository rules, repository/branch/worktree, files concurrent work is changing, dependencies, allowed operations, required checks, and a concrete definition of done. Every brief names the provider, model, effort, and role.

Workers return their diff, exact check results, and remaining limitations. The coordinator verifies the diff and evidence, obtains the required reviewer pass, and delivers the PR under repository rules. Delivery does not authorize merging or approving one's own changes. If a required handoff or review is unavailable, report the limitation and keep the PR draft until required review is complete. Do not claim another provider coordinated or reviewed work unless that happened.

For user-authorized substantial work, this profile gives standing authorization to delegate whole tasks through available Claude and Codex tools within the task's scope. It does not authorize unrelated tasks, schedules, purchases, merges, or changing the current conversation's model. Keep one owner per task and no more than two subagents at once. Never spawn workers or create artificial tasks to fill a quota. Routing instructions do not activate unavailable tools or handoff mechanisms.

End the response with a concise line naming the models and effort actually used, and whether subagents were used. Mark unavailable model/effort information as unknown rather than guessing.
