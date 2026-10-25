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
| Verification runs: executing a given test plan or real-flow proof on a named host (such as Windows tests on the desktop) and reporting exact results | Sonnet (`sonnet`), medium; investigation tier if a failure needs root-causing | GPT-6.1 Sol (`gpt-6.1-sol`), medium |
| Design or security judgment referred by the coordinator | Opus (`opus`), high | GPT-6.1 Sol (`gpt-6.1-sol`), high |

- Either provider can supply the first diff review. Use Opus or GPT-6.1 Sol at high effort in a separate reviewer pass; cross-provider review is optional. An AI review is not PR approval, and reviews do not count toward the substantial-work allocation.
- The coordinator hands design or security judgment calls to an Opus or GPT-6.1 Sol reviewer on the selected platform instead of deciding them alone.
- These current assignments supersede older routing instructions in project memories, handoffs, and task briefs while preserving direct user choices.
- Light-work models (Haiku, Luna) never touch security or contracts.
- Claude's Fable 5.1 (`claude-fable-5-1`) remains a last-resort escalation only after Opus has failed once on the same problem, or when explicitly requested; verify availability and preserve the no-purchase rule.
- Never choose xhigh, max, or ultra unless explicitly requested.
- **Sessions whose model is set at start.** Project threads, Remote Control sessions and other new sessions start on the surface's default model and effort, and some surfaces allow switching only at the user's own request. There, the coordinator cannot pick a model per session. Set the surface's default to the coordination tier (Sonnet, high), and have a session whose role needs another tier run that work through a supported per-call control (for example a Claude agent call with the role's `model` and effort) or ask the user to switch it. Do not report a session as running its role's model when it is on the default.
- Use the model selectors shown in backticks, not display labels such as `Sol`. The Claude Code selectors are documented aliases that resolve by provider; confirm the resolved model rather than assuming a particular version. For API or other surfaces that require a full Claude model ID, resolve and record that supported ID before dispatch. The Codex selectors are explicit IDs from the current local catalog. Confirm model availability and supported effort at dispatch; if the requested role or effort cannot be supplied, report the limitation rather than silently downgrading it.
- Codex carries its share of design-heavy work, not only routine tasks.

These are preferences, not an availability or pricing guarantee: use the live catalog, preserve the configured model when details are unavailable, and do not claim measured monetary savings from qualitative tiers. If a configured choice is a poor fit, say so briefly. End the response with a concise line naming the models, effort, and whether subagents were used.

## GitHub Actions execution policy

Micah's standing decision (2026-10-25): GitHub Actions is enabled again, on the self-hosted Linux runners of the OVH build server. This supersedes the 2026-10-24 pause. oyzuai/oyzu's Linux jobs run there in a fresh container per job (`oyzu-wsl` for pull requests and branches, `oyzu-main` for main); the server is configured in the platform repository's `deploy/ovh-farm`.

- Workflows run on push, pull request, schedule and dispatch as their definitions say. Use their results together with the applicable bounded local checks and real user-flow proofs. Record the revision, run and result; report a failed, skipped or not-run check as exactly that, never as passed.
- GitHub-hosted runners stay off by default. Leave `OYZU_HOSTED_RUNNERS` unset, and run a hosted-only job (macOS, Windows, release, signing, toolchain images) only with Micah's approval for that run.
- Do not move CI back onto the desktop's WSL runner, change runner counts or labels outside `deploy/ovh-farm`, or arrange other paid or cloud CI without Micah's approval.
- Preserve required safety, trust and compliance checks, observed failures and honest platform coverage. Do not silently change branch protection or merge/approval authority.
- Carry this policy into coordinator and worker briefs and relay it to existing workers; editing a file does not prove running sessions reloaded it. Do not confuse a permitted local Docker/WSL proof or an already-authorized remote development workspace with a GitHub Actions run.

## Proof and resource defaults

Apply the shared [acceptance evidence and resource ownership contract](../policy/working-agreements.md#acceptance-evidence-and-resource-ownership) to Micah's tasks. These defaults are cooperative admission rules; they do not install a quota manager, watcher or cleanup schedule. Repository-required verification and stricter existing host limits remain in force.

- **Host reserve:** on Micah's shared local Windows backing volumes, physical free space must cover a new heavy operation's estimated peak additional allocation plus a 50 GiB reserve. When already below that reserve, hold new heavy work and continue lightweight work or authorized cleanup. At less than 20 GiB free, checkpoint at a safe boundary and escalate urgently; never force-stop another owner's job. Do not use WSL's virtual free-space figure as the backing drive reading. On other hosts, use an explicitly assigned capacity/reserve appropriate to that environment; do not impose the Windows reserve on a smaller managed cloud workspace or invent unavailable provider-host measurements.
- **Concurrency:** one new heavy build/proof/cold install at a time per physical host by default, coordinated across local chats and children. Count existing CI and foreign jobs against capacity, but do not stop or reconfigure them under this instruction. An independently resourced host may proceed under its own admission check. Larger concurrency needs a measured reservation and a recorded bounded coordinator exception while preserving the host reserve.
- **Task footprint:** measure the aggregate disposable working output across all of a task's roots and workers, including WSL/container copies. Warn and reassess at 10 GiB; at 20 GiB, admit no further heavy phase without a recorded exception specifying purpose, maximum peak, owner, release condition and review time. Do not remove live inputs or skip required checks to fit the limit. Shared installed tools and uniquely authored source are accounted for in host capacity but are not automatically task-disposable output.
- **Evidence:** aim to retain no more than 100 MiB per completed claim by default. Keep concise receipts and relevant logs; record why a larger artifact or runnable reproducer is necessary. Retained working environments require a named owner/reason and review within seven days or at acceptance/abandonment, whichever comes first. Overdue review never creates automatic deletion authority for unique evidence or source. Durable accepted design material and required release/compliance artifacts are preserved under their existing rules.
- **Low-capacity response:** until measured capacity permits admission, coordinators hold new heavy launches on the constrained filesystem, identify their current allocations and safely release only their own no-longer-needed output. Existing jobs finish safely. These defaults do not authorize taking over CI, restarting WSL/Docker, changing cloud infrastructure or paid usage, or launching replacement work elsewhere without the task's existing authorization.

## Delegation preferences

Do one- or two-operation tasks directly when briefing costs more than it saves. Keep worker ownership bounded and leave scope, priorities, decisions, evidence review, and user updates with the coordinating conversation on either provider. Use no more than two Claude subagents at once; Codex threads remain subject to their surface's available concurrency. Never spawn workers to fill a quota: the share is a balance across tasks the work already needs, not a reason to create tasks.

The selectors follow the [Claude Code model configuration](https://code.claude.com/docs/en/model-config); the Codex role mapping follows the capability tiers in the [OpenAI model-selection guidance](https://developers.openai.com/api/docs/guides/model-selection) and the IDs exposed by the local catalog. Role and effort choices are maintainer preferences, not vendor performance guarantees.
