# Claude Code adapter

This adapter describes Claude Code-specific loading and delegation. Apply the shared [working agreements](../policy/working-agreements.md) and [maintainer profile](../accounts/maintainer-profile.md) alongside it.

## Account instructions and skills

Claude Code loads user instructions from `~/.claude/CLAUDE.md`. A `CLAUDE.md` can import shared files with an unquoted, un-fenced `@path` line. Absolute and relative imports are supported; relative imports resolve from the importing file. The current official documentation sets a four-hop import limit and requires escaping spaces in paths. The installed account adapter imports the common policy, profile, and provider details from this checkout.

Claude Code's personal filesystem skills live in `~/.claude/skills/<skill>/SKILL.md`; symlinked skill folders are supported. They apply to local terminal projects on that machine. Cowork and cloud sessions, including routines, do not read that local directory: they use skills enabled for the Claude account or committed project skills. Local desktop scheduled tasks do load personal skills. These are distinct installation and sharing paths; do not claim that a filesystem copy enables cloud or account skills.

Claude Code may read a repository `AGENTS.md` when supported by the configured Project instructions behavior. Verify the installed version and settings. When a repository also has `CLAUDE.md`, the chosen project-instruction setting controls which files load; do not assume both are read. Keep the project's Claude instructions specific to that repository.

See Anthropic's official [memory and instruction guide](https://code.claude.com/docs/en/memory) and [skills guide](https://code.claude.com/docs/en/skills) for current behavior.

## Delegation and session access

Claude can coordinate or perform any task role under "Splitting work between providers" in the working agreements. Set the supported model selector and effort on Claude agent calls, chosen by role from the maintainer profile, and name them in every brief. As coordinator, brief workers on either provider and own evidence review and PR delivery. As a worker, own the assigned whole task and return its diff, exact check results, and blockers to the designated coordinator; leave pushing and PR delivery to that coordinator unless the brief says otherwise.

To hand a whole task to Codex, use an actually available, authorized tool. The `codex-session` skill may provide a launcher when installed; inspect its instructions and capabilities before relying on it. If no connected handoff tool exists, report that Codex is unreachable rather than silently reallocating its task to Claude. An unreachable tool is distinct from an exhausted provider; only the latter triggers the all-work fallback in the profile. Do not assume session transcripts or cross-provider messaging are available. Do not post messages, merge, approve, or activate schedules unless explicitly authorized.

When coordinating a returned task, inspect its diff and verification evidence, run any outstanding required checks, obtain the required separate reviewer pass, and keep the draft PR current. Do not duplicate checks without a failure, changed inputs, or an applicable repository requirement.

Keep Claude worker status reports to 20 lines or fewer. When context becomes large, tell the user and suggest `/compact` or a fresh session; do not autonomously launch a new Claude session for a context handoff. Starting Codex threads for split work is separate and is authorized by the maintainer profile.
