# Maintainer account profile

These are static personal preferences, not a current usage report or a claim about today's model availability. Check the live provider catalog and usage tools when the task requires them. Preserve these rules; unavailable readings remain unknown.

## Allocation objective

Use Claude and Codex about equally. Both budgets are large, and Codex gets its fair half of the hard work, not the leftovers. The mechanism (whole tasks, alternation, orchestration, briefs) is in the shared working agreements under "Splitting work between providers"; this profile sets the numbers and models.

This profile is standing authorization for substantial work to start Codex threads and Claude subagents as described here, without asking per task. It authorizes nothing beyond the user's task: no schedules, purchases, merges, or other external effects.

## Split and headroom

- **Share:** about half of substantial work by size to each provider. Code reviews do not count toward Codex's share. When unsure where a single task goes, give it to Codex.
- **Tilt:** when one provider is running hot (its binding window is at 85% or more used, or it is well ahead of the other's), give new whole tasks to the other until the gap closes.
- **Out of credits or at a limit:** run everything on the other provider until the user says the first is back. If both are out, stop new work, report what is in flight, and ask.
- **Readings:** for a budgeted brief, record both providers' usage or unavailable status and the time read. A missing or stale reading is unknown, not evidence that either side is hot; keep splitting evenly and recheck after a limit error.
- Never buy credits or redeem a reset without explicit user authorization. Never use Ultrafast or another paid speed tier.

## Claude models by role

Name the model and effort in every Claude brief. Do not change the serving model or effort of the current conversation.

| Role | Model | Effort |
| --- | --- | --- |
| Coordination: briefing, sequencing, relaying, checking merge state | Sonnet 5.5 | high |
| Design-heavy implementation: new subsystems; security boundaries such as signing, trust, stores and locks; resolver logic; contract changes | Opus 5.5 | high |
| Clear-brief implementation: design settled, done is concrete | Sonnet 5.5 | high |
| Light work: mechanical edits, renames, doc link fixes, base merges, CI re-runs, gathering logs or PR state | Haiku 5.5 | low |
| First diff review of every implementation PR | Opus 5.5 | high |
| Later review rounds on PRs touching security, locks, resolvers or contracts | Opus 5.5 | high |
| Later review rounds on small, non-security fixes | Sonnet 5.5 | medium |
| Investigations: CI root-causing, reproductions, perf measurements | Sonnet 5.5, then Opus 5.5 if it stalls | high |

- The coordinator hands design or security judgment calls to an Opus reviewer instead of deciding them alone.
- Haiku never touches security or contracts.
- Fable 5.1 is a last-resort escalation only after Opus has failed once on the same problem, or when explicitly requested.
- Never choose xhigh, max, or ultra unless explicitly requested.

## Codex models

Prefer the current catalog's economical option for easy work, its workhorse for normal implementation, and its strongest option for hard problems. The current preference map is Luna for easy work, Sol for ordinary implementation, and Astra for difficult design or debugging; confirm the exact live identifiers and supported effort before selecting one. Hard tasks go to Astra at high effort; otherwise default to medium. Codex is expected to carry its share of design-heavy work, not only routine tasks.

These are preferences, not an availability or pricing guarantee: use the live catalog, preserve the configured model when details are unavailable, and do not claim measured monetary savings from qualitative tiers. If a configured choice is a poor fit, say so briefly. End the response with a concise line naming the models, effort, and whether subagents were used.

## Delegation preferences

Do one- or two-operation tasks directly when briefing costs more than it saves. Keep worker ownership bounded and leave scope, priorities, decisions, evidence review, and user updates with the Claude coordinator. Use no more than two Claude subagents at once; Codex threads are separate. Never spawn workers to fill a quota: the share is a balance across tasks the work already needs, not a reason to create tasks.
