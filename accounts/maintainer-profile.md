# Maintainer account profile

These are static personal preferences, not a current usage report or a claim about today's model availability. Check the live provider catalog and usage tools when the task requires them. Preserve these rules; unavailable readings remain unknown.

## Allocation objective

Use Claude and Codex about equally. Both budgets are large, and Codex gets its fair half of the hard work, not the leftovers. The mechanism (whole tasks, alternation, orchestration, briefs) is in the shared working agreements under "Splitting work between providers"; this profile sets the numbers and models.

This profile is standing authorization for either provider to delegate whole substantial tasks through available Codex or Claude tools as described here, without asking per task. It authorizes nothing beyond the user's task: no schedules, purchases, merges, or other external effects.

## Split and headroom

- **Share:** about half of substantial work by size to each provider. Code reviews do not count toward either provider's share. When unsure where a single task goes, give it to Codex.
- **Tilt:** when one provider is running hot (its binding window is at 85% or more used, or it is well ahead of the other's), give new whole tasks to the other until the gap closes.
- **Out of credits or at a limit:** run everything on the other provider until the user says the first is back. If both are out, stop new work, report what is in flight, and ask.
- **Readings:** for a budgeted brief, record both providers' usage or unavailable status and the time read. A missing or stale reading is unknown, not evidence that either side is hot; keep splitting evenly and recheck after a limit error.
- Never buy credits or redeem a reset without explicit user authorization. Never use Ultrafast or another paid speed tier.

## Models by role

Any task and role can run on either provider, including coordination, implementation, investigation, review, verification, and PR delivery. Choose the provider by the split rules above, then the model and effort by role. The former Claude-only orchestration and first-review requirements are superseded. Name the provider, role, model selector, and effort in every brief. Do not change the serving model or effort of the current conversation.

| Role | Claude | Codex |
| --- | --- | --- |
| Coordination: briefing, sequencing, relaying, checking merge state, verifying worker evidence, PR delivery | Sonnet (`sonnet`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Design-heavy implementation: new subsystems; security boundaries such as signing, trust, stores and locks; resolver logic; contract changes | Opus (`opus`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Clear-brief implementation: design settled, done is concrete | Sonnet (`sonnet`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Light work: mechanical edits, renames, doc link fixes, base merges, CI re-runs, gathering logs or PR state | Haiku (`haiku`), low where supported | GPT-6 Luna (`gpt-6-luna`), low |
| First diff review of every implementation PR | Opus (`opus`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Every review round on PRs touching security, locks, resolvers or contracts | Opus (`opus`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Later review rounds on small fixes outside security, locks, resolvers and contracts | Sonnet (`sonnet`), medium | GPT-6.1 Sol (`gpt-6.1-sol`), medium |
| Investigations: CI root-causing, reproductions, perf measurements | Sonnet (`sonnet`), high; Opus (`opus`), high if stalled | GPT-6.1 Sol (`gpt-6.1-sol`), high |
| Design or security judgment referred by the coordinator | Opus (`opus`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |

- Either provider can supply the first diff review. Use Opus or GPT-6.1 Sol at high effort in a separate reviewer pass; cross-provider review is optional. An AI review is not PR approval, and reviews do not count toward the substantial-work allocation.
- The coordinator hands design or security judgment calls to an Opus or GPT-6.1 Sol reviewer on the selected platform instead of deciding them alone.
- These current assignments supersede older routing instructions in project memories, handoffs, and task briefs while preserving direct user choices.
- Light-work models (Haiku, Luna) never touch security or contracts.
- Claude's Fable 5.1 (`claude-fable-5-1`) remains a last-resort escalation only after Opus has failed once on the same problem, or when explicitly requested; verify availability and preserve the no-purchase rule.
- Never choose xhigh, max, or ultra unless explicitly requested.
- Use the model selectors shown in backticks, not display labels such as `Sol`. The Claude Code selectors are documented aliases that resolve by provider; confirm the resolved model rather than assuming a particular version. For API or other surfaces that require a full Claude model ID, resolve and record that supported ID before dispatch. The Codex selectors are explicit IDs from the current local catalog. Confirm model availability and supported effort at dispatch; if the requested role or effort cannot be supplied, report the limitation rather than silently downgrading it.
- Codex carries its share of design-heavy work, not only routine tasks.

These are preferences, not an availability or pricing guarantee: use the live catalog, preserve the configured model when details are unavailable, and do not claim measured monetary savings from qualitative tiers. If a configured choice is a poor fit, say so briefly. End the response with a concise line naming the models, effort, and whether subagents were used.

## Delegation preferences

Do one- or two-operation tasks directly when briefing costs more than it saves. Keep worker ownership bounded and leave scope, priorities, decisions, evidence review, and user updates with the coordinating conversation on either provider. Use no more than two Claude subagents at once; Codex threads remain subject to their surface's available concurrency. Never spawn workers to fill a quota: the share is a balance across tasks the work already needs, not a reason to create tasks.

The selectors follow the [Claude Code model configuration](https://code.claude.com/docs/en/model-config); the Codex role mapping follows the capability tiers in the [OpenAI model-selection guidance](https://developers.openai.com/api/docs/guides/model-selection) and the IDs exposed by the local catalog. Role and effort choices are maintainer preferences, not vendor performance guarantees.
