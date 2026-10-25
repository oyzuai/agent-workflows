# Codex coordinator kit

How to get a coordinator-and-workers experience in Codex like the one in a Claude project: a coordinator that briefs bounded workers, independent review before a PR is ready, short status posts, and work that moves between your machine and the cloud. The shared rules already live in [`working-agreements.md`](../policy/working-agreements.md), the [maintainer profile](../accounts/maintainer-profile.md) and the [Codex adapter](../providers/codex.md); this kit only wires them into Codex and does not restate them.

Codex behavior below was read from the official docs (now served from `learn.chatgpt.com/docs`) on 2026-10-25. Nothing here was run in Codex. Items marked *unverified* need a quick test in your install before you rely on them.

## Where the experience comes from

Most of it is rules plus tooling, and Codex has the tooling. Three parts are harness features with no direct Codex twin.

| What you see | Source | Codex closest equivalent |
| --- | --- | --- |
| A coordinator that opens and relays between threads | Claude project feature | One coordinator chat that spawns subagents. No persistent "project room" of top-level threads. **Gap.** |
| Workers that are briefed, report and are cleaned up | Your rules ([working agreements](../policy/working-agreements.md)) plus model behavior | Same rules in `AGENTS.md`, plus custom agents in `.codex/agents/` |
| Per-role models and effort | Your [profile](../accounts/maintainer-profile.md); Claude lets the caller set `model` per agent call | Set model and effort when spawning; custom agent files can pin them, but a pin overrides the brief |
| Independent review | Your rules plus a separate agent | `reviewer` subagent, `/review` (typed by the user), `review_model` for `/review`, `@codex review` on GitHub |
| Team memory across threads | Harness memory service | `AGENTS.md`, repository files and Codex memories (not evaluated here). Weaker: no shared team store |
| Watchdog and status check-ins | Harness scheduled wake-ups | A scheduled task inside an existing chat (minute, daily or weekly) |
| Cloud session reaching your machine, permission cards | Harness device routing and Remote Control | Desktop app, remote connections, phone approvals. Different shape, see below |
| Short, friendly, answer-first posts | Mostly personal preference plus model style | A style line in the opening prompt; not in the shared policy |

So the trick is mostly written down: a coordinator section in `AGENTS.md`, custom agents, and an opening prompt that states the goal and the definition of done. The seamless local/cloud feel is the part Codex does least of, because you choose the surface per thread.

## Codex capabilities used

- **AGENTS.md.** Global file in the Codex home (`AGENTS.override.md` wins over `AGENTS.md`), then one file per directory from the repo root down to the working directory, closer files later. Combined size stops at `project_doc_max_bytes` (32 KiB by default), so **a section appended to an already large `AGENTS.md` can be cut off**. Put the coordinator section in the account file, a nested directory file, or raise the limit in `config.toml`. The docs do not describe imports, so the account template points at files that Codex must open explicitly, as the [Codex adapter](../providers/codex.md) says.
- **Subagents.** In current local Codex releases they are spawned only when asked, or when `AGENTS.md` or a skill asks for delegation (ChatGPT Work at Ultra can delegate on its own). Built-ins are `default`, `worker` and `explorer`. Custom agents are one TOML file each in `~/.codex/agents/` or `.codex/agents/`, with required `name`, `description` and `developer_instructions` and optional `model` and `model_reasoning_effort`. A custom agent with a built-in's name replaces it, so the template `worker` replaces the built-in. A `model` or `model_reasoning_effort` in the file overrides the spawn value, so the templates leave them out and the brief sets them from the profile's role table. `[agents]` in `config.toml` sets `max_concurrent_threads_per_session` and default subagent model and effort. Subagents use more tokens.
- **Sandbox and approvals.** Permission modes are Ask for approval, Approve for me (automatic review of eligible requests), Full access and Custom. **Subagents inherit the parent's sandbox and approvals; a custom agent file cannot set them.** A "read-only reviewer" is a request in its instructions, not an enforced sandbox. You can reduce a subagent's capabilities with `features.*` keys such as `features.shell_tool = false`.
- **Review.** `/review` is typed by the user in the CLI, app or IDE; it reviews uncommitted changes, a commit or a base branch without modifying the tree, and an agent cannot call it. `review_model` in `config.toml` sets the model for `/review` only, not for a `reviewer` subagent. Detached delivery (Settings > General > Code review, or `chatgpt.reviewDelivery` in the IDE) runs reviews in a separate chat. `@codex review` on a GitHub PR runs a cloud review and posts to the PR.
- **Cloud.** Cloud tasks run in a configured environment (repositories, install script, network allow-list, secrets), each in its own workspace, and keep running while your computer sleeps. Start them from web, mobile, the desktop app or `codex cloud`; review the diff, open a PR, or apply the result locally.
- **Local, worktrees and remote.** The desktop app runs chats on your machine and can hand a thread between Local and a background worktree. The phone can control a connected Mac or Windows host (awake, online, signed in; each phone is paired with each host), and one desktop can control another through "Control other devices", whose availability varies by rollout. SSH hosts can be added as projects. Local-to-remote handoff moves the chat and Git state and needs a matching saved project on the destination. The docs do not say that subagents get their own worktree (*unverified*): worktrees belong to chats.
- **Scheduled tasks.** The desktop app can schedule a task inside an existing chat (minute-based intervals allowed) so each run returns to that chat with its context; the computer must be on and the app running. Scheduled tasks run unattended, with approvals off where organization policy allows, so keep their prompts read-only.
- **MCP, skills, hooks.** MCP servers in `config.toml` are shared by the app, CLI and IDE. Skills are invoked with `$name` or chosen implicitly. A `SessionStart` hook can inject `additionalContext` (*unverified* as a way to load the shared files); non-managed hooks must be reviewed and trusted before they run.

## Local or cloud

Start the coordinator **local, in the desktop app**, on the repository checkout. It has your toolchain, installed CLIs, credentials, Docker and the Windows host, and a local chat is where scheduled check-ins can return. Run the repository's own build and test commands there, as its `AGENTS.md` requires.

Send work to **cloud** when it is whole, well briefed, needs nothing only your machine has, and you do not need to watch it: a bounded implementation, a long investigation, a review pass, anything you want running while the computer is asleep. Starting a cloud task creates a new user-facing task, so the [Codex adapter](../providers/codex.md) requires the user's explicit authorization for it. Set up the environment first and keep the network allow-list narrow. Put the verification execution policy from the [profile](../accounts/maintainer-profile.md#github-actions-execution-policy) in the task brief, because a cloud task does not read local account files. A cloud task cannot see your local files or a registry the environment cannot reach.

Switch back to local when a cloud result needs your toolchain, a real user-flow proof, a Windows or Docker run, or a signed-in tool. Apply the diff and finish there. From your phone, use connected-computer mode for local work and Cloud for the rest; the phone only sends prompts and approvals, the host does the work.

Official docs describe local-to-worktree and local-to-remote-host handoff, but not a local-to-cloud handoff of one conversation. Plan on starting a cloud task from a written brief and bringing the result back as a diff. *Unverified:* IDE-initiated cloud tasks that carry conversation context.

## Opening prompt

Paste this at the start of a session, with the bracketed parts filled in. It assumes the coordinator section ([`templates/codex-coordinator-AGENTS.md`](templates/codex-coordinator-AGENTS.md)) is in the account `AGENTS.md` and the custom agents are installed.

```text
You are the coordinator for this workstream. Follow the coordinator section of AGENTS.md: read the three shared files it names, then this repo's AGENTS.md.

Goal: [one paragraph: the outcome and why].
Definition of done: [the real command or flow that proves it, and what "passed" looks like].
Files other work is changing: [list, or none].

Route each whole task under the working agreements and delegate with written briefs. Open a draft PR first and push checkpoints. Before marking it ready, run a separate reviewer pass on the branch and address its findings. Never merge or approve.
Style for this session: [for example: short posts, answer first, only results, blockers and decisions; times in your time zone].
```

Style preferences like these are personal and are not in the shared policy. Add them to your [maintainer profile](../accounts/maintainer-profile.md) if you want every session to follow them.

## Independent review

Run the review as a pass the author did not influence. Any of these works, strongest first:

1. A fresh chat or cloud run on the PR branch with only the diff and the repository rules, using the `reviewer` agent. Starting a new task needs the user's authorization.
2. `@codex review` on the PR for a cloud review outside your chat. It posts to the PR, so the user must authorize it for that PR.
3. A `reviewer` subagent in the coordinator chat, with its model set at spawn. Ask the user to run `/review` on the branch too if they want it.
4. Cross-provider: the working agreements allow Claude to review Codex work and the reverse; the profile makes this optional.

Use the high tier for the first review of every implementation PR and for security, locks, resolvers and contracts, as the [profile table](../accounts/maintainer-profile.md#models-by-role) says. Reviews do not count toward the provider split.

## Status cadence

Ask the user to set up a scheduled task inside the coordinator chat so each run returns with context; the [working agreements](../policy/working-agreements.md#changes-and-external-effects) do not let an agent create recurring work unasked, and the agent should not poll. Make the scheduled prompt read-only, for example invoke `$review-work` and say what to check, when to report, and when to stop or ask. Suggested cadence: a short check every 15 minutes while workers run and a summary every hour, each saying nothing is new when that is true. It needs the desktop app running; the docs do not say whether a cloud task can hold a schedule.

## Handing work to your machine

A cloud Claude session can reach your machine through the harness. In Codex the direction is reversed: you start on the machine, or you reach it from the phone.

- Want the machine to do it: start the thread locally, or open the phone app in connected-computer mode and pick the project.
- Cloud result needs local proof: apply the diff locally and run the proof in the local coordinator. For isolation, start a separate worktree chat for each parallel worker and check that it can write there under your sandbox.
- Approvals still prompt on the host and can be answered from the phone. Auto-review reduces prompts without widening the sandbox.

## Known gaps

- No persistent project room: you get one coordinator chat with subagents, not independent top-level threads that the coordinator manages. Subagent depth is not documented on the pages read.
- No shared team memory service. Put durable facts in repository files and `AGENTS.md`.
- Subagent sandbox and approvals cannot be tightened per agent.
- Local and cloud are separate surfaces; there is no documented one-click move of a conversation between them.
- Scheduled check-ins need the desktop app and computer to stay on.
- A Codex coordinator can only launch Claude workers if its surface offers a launch mechanism; otherwise the split cannot be honored and it should say so.
- Codex usage is budgeted. Check the live reading before routing work, as the [route-work skill](../skills/route-work/SKILL.md) says, and use the other provider when Codex is at a limit.

## Sources

Official pages, checked 2026-10-25: [Codex docs index](https://learn.chatgpt.com/docs), [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [config reference](https://learn.chatgpt.com/docs/config-file/config-reference), [cloud](https://learn.chatgpt.com/docs/cloud), [CLI](https://learn.chatgpt.com/docs/cli), [permission modes](https://learn.chatgpt.com/docs/permission-modes), [code review](https://learn.chatgpt.com/docs/code-review), [scheduled tasks](https://learn.chatgpt.com/docs/automations), [remote connections](https://learn.chatgpt.com/docs/remote-connections), [mobile](https://learn.chatgpt.com/docs/mobile), [MCP](https://learn.chatgpt.com/docs/extend/mcp), [hooks](https://learn.chatgpt.com/docs/hooks), [skills and plugins](https://learn.chatgpt.com/docs/skills-and-plugins).
