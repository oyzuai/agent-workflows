# Codex adapter

This adapter describes Codex-specific loading and delegation. Apply the shared [working agreements](../policy/working-agreements.md) and [maintainer profile](../accounts/maintainer-profile.md) alongside it.

Before choosing or handing off verification, read the maintainer's [GitHub Actions execution policy](../accounts/maintainer-profile.md#github-actions-execution-policy). Carry that policy in cloud/worker briefs when the canonical local checkout is unavailable; do not assume a running session reloaded an edited file.

## Account instructions and skills

Codex reads one global `AGENTS.override.md` or `AGENTS.md` from its configured home directory, then concatenates project instruction files from the repository root toward the current directory. The configured home can differ from the default `~/.codex`; verify it on the machine before installing account instructions. Keep the account file a short pointer to one reviewed workflow snapshot and keep project-specific build and test rules in each repository. Apply the shared finite acceptance contract; do not restate its gates in adapters or role files. Identify an installed unmerged snapshot by its PR/head, never as main.

Codex discovers repository skills under `.agents/skills` and personal skills under `$HOME/.agents/skills`. It also supports symlinked skill folders. This shared repository is a source checkout, not automatically a skill root; copy or link each package into the configured user skill root, or add it to a repository's `.agents/skills`. Do not assume a custom `$CODEX_HOME/skills` directory is searched unless the live configuration documents it. When explicitly authorized to refresh instructions, back up changed installed files, reconcile account/compatibility pointers and copied skills/roles to the reviewed snapshot, and check fresh-session discovery with a minimal read-only task. Do not assume an active session adopted changes or alter settings merely to refresh prose.

See the official [AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [skill guide](https://learn.chatgpt.com/docs/build-skills) for current behavior.

## Delegation

Codex can coordinate or perform any task role under "Splitting work between providers" in the working agreements. As coordinator, brief workers on either provider, verify the returned diff and checks, obtain the required separate reviewer pass, and deliver the PR. As a worker, own the whole assigned task in its worktree: follow the repository rules, respect the in-flight file list, meet the definition of done, and report the diff summary, exact checks and results, and blockers. Leave pushing and PR delivery to the designated coordinator unless the brief says otherwise. Use the model selector and effort named in the brief; otherwise use the Codex column for the role in the maintainer profile's "Models by role" table. Resolve missing repository rules, in-flight file context, or completion criteria before starting.

Use the collaboration tools available in the current Codex surface only when the user/task authorizes delegation. Keep the parent task as the owner of scope, prioritization, decisions, integration, and evidence review. Assign one worker to each bounded operation, and wait for that same operation to complete instead of launching duplicate commands. Do not use `codex exec` or create new user-facing tasks unless explicitly allowed. Treat missing tools or inaccessible sessions as limits, not permission to fabricate results or change providers silently.

Never run repository Codex environment setup scripts. Follow the repository's own toolchain instructions for commands; do not install toolchains or fall back to host tools when the repository requires a managed runtime.

## Launching Claude from Codex

The provider split remains in force when a launch tool is missing. Inspect the installed Claude Code CLI and its `--help` before relying on a launcher; do not assume a Claude-to-Codex launcher also works in reverse. A supported local CLI can provide a bounded manual bridge: prepare a separate worktree, write the full brief, then start a new named session there with `claude --name <name> --model <selector> --effort <effort> <brief>`. Use the installed CLI spelling and inspect the resolved model and session ID. Preserve normal permission prompts; never add bypass flags or create credentials. A headless `--print` run is not automatically a findable interactive session. If using `--background`, verify its session ID, supported status/stop controls and permission behavior first.

Check authentication using the CLI status command, never credential-file contents. Record unavailable usage as unknown. Launch only when the current task authorizes communication with Claude; preparation and help inspection alone do not authorize sending a brief. If approval, authentication, visibility or permissions are missing, report the exact blocker and keep the task assigned to its intended provider. Do not silently convert the split into Codex-only routing.

## Worktree and review isolation

A custom agent name does not create an isolated checkout. Prepare and assign a distinct worktree before implementation and verify its real path, status and write access. Subagents inherit parent permissions; a read-only instruction is not a security boundary. Use a read-only parent session when enforced read-only review is needed.

Independent review requires fresh context. Use a supported spawn with no history inheritance (for example `fork_turns="none"` when exposed), or a new thread started without fork/resume history. Supply scope, diff/base/head and repository rules, not the author conversation or rationale. If the surface cannot establish this, report review as not independent and use an authorized fresh session. Confirm the actual agent, model and effort from runtime evidence instead of relying on the brief.

## Cleaning up

Apply "Cleaning up sessions, workers, and temporary files" from the working agreements. Close or archive the threads and workers you launched where the surface allows it, and remove the worktrees created for them with `git worktree remove` from the owning repository, as the policy describes.

## When started by another session

A coordinator may start a Codex thread through an app-server launcher. In that case work in the assigned worktree and edit the working tree. The sandbox may not let a thread create branches or commit in the main repository's git directory; if the brief asks for that and it is denied, say so, leave the changes in the working tree and report it rather than working around the sandbox. Do not push, open pull requests, merge or approve unless the brief says so. If the worktree directory or git metadata is unwritable, stop and report the exact path and error at once; do not implement elsewhere.
