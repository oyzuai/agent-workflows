# Maintainer account profile

These are static personal preferences, not a current usage report or a claim about today's model availability. Check the live provider catalog and usage tools when the task requires them. Preserve these gates; unavailable readings remain unknown.

## Budget gates

- Below 50% used on the provider being spent: normal work is allowed.
- At 50% or more: small tasks only.
- At 65% or more: start no new substantial work.
- At 85% or more, or when a limit is reached: finish only work already in flight.
- If both providers are at 65% or more, stop and ask which provider to spend.
- Treat a missing reading or one older than two hours as the 50% gate. Do not use a stale or unavailable reading as evidence of headroom.
- Never buy credits or redeem a reset without explicit user authorization.

## Model and effort preferences

Choose the least expensive available model likely to complete the task and follow-up, and the lowest effort that fits it. Medium is the default; low suits read-only and routine checks. High is reserved for hard debugging when the brief calls for it. Never choose xhigh, max, or ultra unless explicitly requested. Do not claim to change the serving model or effort of an existing conversation without a supported control; if the configured choice is a poor fit, state that briefly.

For Codex, prefer the current catalog's economical option for easy work, its workhorse for normal implementation, and its strongest option only for hard problems. The current preference map is Luna for easy work, Sol for ordinary implementation, and Astra for difficult design or debugging; confirm the exact live identifiers and supported effort before selecting one.

For Claude, the saved preference map is Haiku 5.5 with low effort for short extraction, status checks, and known checks; Sonnet 5.5 with medium effort for clear implementation, docs, and tests; Opus 5.5 with medium effort for planning, difficult root-cause work, or review of another provider's changes; use high only for hard debugging. Fable 5.1 is a last-resort escalation only after Opus has failed once on the same problem or when explicitly requested. These are preferences, not an availability or pricing guarantee: use the live catalog, preserve the configured model when details are unavailable, and do not claim measured monetary savings from qualitative tiers.

## Delegation preferences

Use no subagents, new sessions, or `codex exec` runs unless the task authorizes them. Do one- or two-operation tasks directly when briefing costs more than it saves. For authorized delegation, keep worker ownership bounded and leave scope, priorities, decisions, evidence review, and user updates with the coordinator. Claude agent calls should specify model and effort when supported; use no more than two subagents at once. Never spawn workers to fill a quota.
