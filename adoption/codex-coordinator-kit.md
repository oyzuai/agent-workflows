# Codex coordinator kit

How to get a coordinator-and-workers experience in Codex like the one in a Claude project: a coordinator that briefs bounded workers, independent review before a PR is ready, short status posts, and work that moves between your machine and the cloud. The shared rules already live in [`working-agreements.md`](../policy/working-agreements.md), the [maintainer profile](../accounts/maintainer-profile.md) and the [Codex adapter](../providers/codex.md); this kit only wires them into Codex and does not restate them.

Codex behavior below was read from the official docs (now served from `learn.chatgpt.com/docs`) on 2026-10-25. Nothing here was run in Codex. Items marked *unverified* need a quick test in your install before you rely on them.

## Where the experience comes from

Most of it is rules plus tooling, and Codex has the tooling. Three parts are harness features with no direct Codex twin.

| What you see | Source | Codex closest equivalent |
| --- | --- | --- |
| A coordinator that opens threads and relays between them | Claude project feature | One coordinator chat that spawns subagents. No persistent "project room" of top-level threads. **Gap.** |
| Workers that brief, report and are cleaned up | Your rules ([working agreements](../policy/working-agreements.md)) plus model behavior | Same rules in `AGENTS.md`, plus custom agents in `.codex/agents/` |
| Per-role models and effort | Your [profile](../accounts/maintainer-profile.md); Claude lets the caller set `model` per agent call | Custom agent TOML with `model` and `model_reasoning_effort` |
| Independent review | Your rules plus a separate agent | `reviewer` custom agent, `/review`, `review_model`, `@codex review` on GitHub |
| Team memory across threads | Harness memory service | `AGENTS.md`, repo files and Codex memories (not evaluated here). Weaker: no shared team store |
| Watchdog and hourly status | Harness scheduled wake-ups | Codex scheduled tasks inside an existing chat (minute, daily or weekly) |
| Cloud session reaching your machine, permission cards | Harness device routing and Remote Control | Desktop app, remote connections, phone approvals. Different shape, see below |
| Short, friendly, answer-first posts | Mostly your preferences plus model style | A few lines in `AGENTS.md` and the opening prompt |

So the trick is mostly written down: a coordinator section in `AGENTS.md`, custom agents with the right models, and an opening prompt that states the goal and the definition of done. The seamless local/cloud feel is the part Codex does least of, because you choose the surface per thread.

## Codex capabilities used

- **AGENTS.md.** Global file in the Codex home (`AGENTS.override.md` wins over `AGENTS.md`), then one file per directory from the repo root down to the working directory, closer files later. Combined size stops at `project_doc_max_bytes` (32 KiB by default). The docs do not describe imports, so the account template points at files that Codex must open explicitly, as the [Codex adapter](../providers/codex.md) already says.
- **Subagents.** Codex spawns them only when asked, or when `AGENTS.md` or a skill asks for delegation. Built-ins are `default`, `worker` and `explorer`. Custom agents are one TOML file each in `~/.codex/agents/` or `.codex/agents/`, with `name`, `description`, `developer_instructions` and optional `model` and `model_reasoning_effort`. A custom agent named like a built-in overrides it. `[agents]` in `config.toml` sets `max_concurrent_threads_per_session` and default subagent model and effort. Subagents use more tokens.
- **Sandbox and approvals.** Modes are Ask for approval (`workspace-write`, `on-request`), Approve for me (same sandbox, automatic review of eligible requests), Full access and Custom. **Subagents inherit the parent's sandbox and approvals; a custom agent file cannot set them**, so a "read-only reviewer" is a request in its instructions, not an enforced sandbox.
- **Review.** `/review` in the CLI, app and IDE reviews uncommitted changes, a commit or a base branch without modifying the tree. `review_model` in `config.toml` uses a different model for reviews. Detached review delivery runs reviews in a separate chat. `@codex review` on a GitHub PR runs a cloud review.
- **Cloud.** Cloud tasks run in a configured environment (repositories, install script, network allow-list, secrets), each in its own workspace, and keep running while your computer sleeps. Start them from web, mobile, desktop app or `codex cloud`; review the diff and open a PR from there.
- **Local, worktrees and remote.** The desktop app runs chats on your machine, can hand a thread between Local and a background worktree, and can control another Mac or Windows host from the phone or another desktop (the host must be awake, online and signed in; each phone is paired with each host). SSH hosts can be added as projects. Local-to-remote handoff moves the chat and Git state and needs a matching saved project on the destination.
- **Scheduled tasks.** The desktop app can schedule a task inside an existing chat (minute-based intervals allowed) so each run returns to that chat with its context; the computer must be on and the app running.
- **MCP, skills, hooks.** MCP servers in `config.toml` are shared by the app, CLI and IDE. Skills are invoked with `$name` or chosen implicitly. Hooks include `SessionStart` with `additionalContext`, which can load the shared files for you instead of relying on the prompt (*unverified*; format on the hooks page).

## Local or cloud

Start the coordinator **local, in the desktop app**, on the repository checkout. It has your toolchain, installed CLIs, credentials, Docker and the Windows host, and a local chat is where workers get worktrees and where scheduled check-ins can return. Run the repository's own build and test commands there, as its `AGENTS.md` requires.

Send work to **cloud** when it is whole, well briefed, needs nothing only your machine has, and you do not need to watch it: a bounded implementation, a long investigation, a review pass, anything you want running while the computer is asleep. Set up the environment first and keep the network allow-list narrow. A cloud task cannot see your local files or a private registry the environment cannot reach.

Switch back to local when a cloud result needs your toolchain, a real user-flow proof, a Windows or Docker run, or a signed-in tool. Pull the cloud diff down and finish there. From your phone, use the connected-computer mode for local work and Cloud for the rest; the phone only sends prompts and approvals, the host does the work.

Official docs describe local-to-worktree and local-to-remote-host handoff, but not a documented local-to-cloud handoff of one conversation. Plan on starting a cloud task from a written brief and bringing the result back as a diff. *Unverified:* IDE-initiated cloud tasks that carry conversation context.

## Opening prompt

Paste this at the start of a session, with the bracketed parts filled in. It assumes the three account files are readable and the coordinator section is in the project's `AGENTS.md` (see [`templates/codex-coordinator-AGENTS.md`](templates/codex-coordinator-AGENTS.md)).

```text
You are the coordinator for this workstream. Read <workflow-checkout>/policy/working-agreements.md, accounts/maintainer-profile.md and providers/codex.md, then this repo's AGENTS.md, and follow them, including its Coordinator mode section.

Goal: [one paragraph: the outcome and why].
Definition of done: [the real command or flow that proves it, and what "passed" looks like].
Files other work is changing: [list, or none].

Delegation is authorized for whole bounded tasks under the working agreements: spawn a worker per task with a written brief, wait for each, and verify the returned diff and test output yourself. Do small one- or two-step work directly.
Open a draft PR first and push checkpoints. Before marking it ready, run a separate reviewer pass on the branch and address its findings. Never merge or approve.
Post only results, blockers or decisions, in a few sentences, answer first, US Eastern time. Check in every [15 minutes] while work is running and say plainly when nothing changed.
```

## Independent review

Run the review as a pass the author did not influence. Any of these works, strongest first:

1. A fresh chat or cloud run on the PR branch with only the diff and the repo rules, using the `reviewer` agent or `/review`.
2. `@codex review` on the PR for a cloud review that is outside your chat.
3. A `reviewer` subagent in the coordinator chat, with `review_model` set differently from the session model if you want a different model's view.
4. Cross-provider: the working agreements allow Claude to review Codex work and the reverse; the profile makes this optional.

Use the high tier for the first review of every implementation PR and for security, locks, resolvers and contracts, as the [profile table](../accounts/maintainer-profile.md#models-by-role) says. Reviews do not count toward the provider split.

## Status cadence

Put a scheduled task inside the coordinator chat so each run returns with context. The prompt should say what to check, when to report, and when to stop or ask. Suggested: a short check every 15 minutes while workers run, and one summary an hour, each saying "nothing new" when that is true. Scheduling is an external effect: turn it on yourself, because the [working agreements](../policy/working-agreements.md#changes-and-external-effects) do not let an agent activate recurring work unasked. It needs the desktop app running; a cloud task cannot hold a local-chat schedule.

## Handing work to your machine

A cloud Claude session can reach your machine through the harness. In Codex the direction is reversed: you start on the machine, or you reach it from the phone.

- Want the machine to do it: start the thread locally, or open the phone app in connected-computer mode and pick the project.
- Cloud result needs local proof: apply the diff locally and run the proof in the local coordinator, or hand the local thread to a worktree for isolation.
- Approvals still prompt on the host and can be answered from the phone. Auto-review reduces prompts without widening the sandbox.

## Known gaps

- No persistent project room: you get one coordinator chat with subagents, not a set of independent top-level threads that the coordinator manages. Subagent depth beyond one level is not documented on the pages read.
- No shared team memory service. Put durable facts in repository files and `AGENTS.md`.
- Subagent sandbox and approvals cannot be tightened per agent.
- Local and cloud are separate surfaces; there is no documented one-click move of a conversation between them.
- Scheduled check-ins need the desktop app and computer to stay on.
- Codex usage is budgeted. Check the live reading before routing work, as the [route-work skill](../skills/route-work/SKILL.md) says, and use the other provider when Codex is at a limit.

## Sources

Official pages, checked 2026-10-25: [Codex docs index](https://learn.chatgpt.com/docs), [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [cloud](https://learn.chatgpt.com/docs/cloud), [CLI](https://learn.chatgpt.com/docs/cli), [permission modes](https://learn.chatgpt.com/docs/permission-modes), [code review](https://learn.chatgpt.com/docs/code-review), [scheduled tasks](https://learn.chatgpt.com/docs/automations), [remote connections](https://learn.chatgpt.com/docs/remote-connections), [mobile](https://learn.chatgpt.com/docs/mobile), [MCP](https://learn.chatgpt.com/docs/extend/mcp), [hooks](https://learn.chatgpt.com/docs/hooks), [skills and plugins](https://learn.chatgpt.com/docs/skills-and-plugins).
