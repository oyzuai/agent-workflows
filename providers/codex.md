# Codex adapter

This adapter describes Codex-specific loading and delegation. Apply the shared [working agreements](../policy/working-agreements.md) and [maintainer profile](../accounts/maintainer-profile.md) alongside it.

## Account instructions and skills

Codex reads one global `AGENTS.override.md` or `AGENTS.md` from its configured home directory, then concatenates project instruction files from the repository root toward the current directory. The configured home can differ from the default `~/.codex`; verify it on the machine before installing account instructions. Keep the account file a short pointer and keep project-specific build and test rules in each repository.

Codex discovers repository skills under `.agents/skills` and personal skills under `$HOME/.agents/skills`. It also supports symlinked skill folders. This shared repository is a source checkout, not automatically a skill root; copy or link each package into the configured user skill root, or add it to a repository's `.agents/skills`. Do not assume a custom `$CODEX_HOME/skills` directory is searched unless the live configuration documents it. After changes, restart or reload the client if discovery is stale.

See the official [AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [skill guide](https://learn.chatgpt.com/docs/build-skills) for current behavior.

## Delegation

Codex can coordinate or perform any task role under "Splitting work between providers" in the working agreements. As coordinator, brief workers on either provider, verify the returned diff and checks, obtain the required separate reviewer pass, and deliver the PR. As a worker, own the whole assigned task in its worktree: follow the repository rules, respect the in-flight file list, meet the definition of done, and report the diff summary, exact checks and results, and blockers. Leave pushing and PR delivery to the designated coordinator unless the brief says otherwise. Use the model selector and effort named in the brief; otherwise use the Codex column for the role in the maintainer profile's "Models by role" table. Resolve missing repository rules, in-flight file context, or completion criteria before starting.

Use the collaboration tools available in the current Codex surface only when the user/task authorizes delegation. Keep the parent task as the owner of scope, prioritization, decisions, integration, and evidence review. Assign one worker to each bounded operation, and wait for that same operation to complete instead of launching duplicate commands. Do not use `codex exec` or create new user-facing tasks unless explicitly allowed. Treat missing tools or inaccessible sessions as limits, not permission to fabricate results or change providers silently.

Never run repository Codex environment setup scripts. Follow the repository's own toolchain instructions for commands; do not install toolchains or fall back to host tools when the repository requires a managed runtime.
