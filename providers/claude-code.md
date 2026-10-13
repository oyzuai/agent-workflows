# Claude Code adapter

This adapter describes Claude Code-specific loading and delegation. Apply the shared [working agreements](../policy/working-agreements.md) and [maintainer profile](../accounts/maintainer-profile.md) alongside it.

## Account instructions and skills

Claude Code loads user instructions from `~/.claude/CLAUDE.md`. A `CLAUDE.md` can import shared files with an unquoted, un-fenced `@path` line. Absolute and relative imports are supported; relative imports resolve from the importing file. The current official documentation sets a four-hop import limit and requires escaping spaces in paths. The installed account adapter imports the common policy, profile, and provider details from this checkout.

Claude Code's personal filesystem skills live in `~/.claude/skills/<skill>/SKILL.md`; symlinked skill folders are supported. They apply to local terminal projects on that machine. Cowork and cloud sessions, including routines, do not read that local directory: they use skills enabled for the Claude account or committed project skills. Local desktop scheduled tasks do load personal skills. These are distinct installation and sharing paths; do not claim that a filesystem copy enables cloud or account skills.

Claude Code may read a repository `AGENTS.md` when supported by the configured Project instructions behavior. Verify the installed version and settings. When a repository also has `CLAUDE.md`, the chosen project-instruction setting controls which files load; do not assume both are read. Keep the project's Claude instructions specific to that repository.

See Anthropic's official [memory and instruction guide](https://code.claude.com/docs/en/memory) and [skills guide](https://code.claude.com/docs/en/skills) for current behavior.

## Delegation and session access

Set model and effort on Claude agent calls when the surface supports them, using the current catalog and maintainer preferences. Do not assume a `codex-session` launcher, Codex collaboration API, session transcripts, or cross-provider messaging is available in Claude. Use only an actually connected, authorized inspection or handoff tool; otherwise report that the session is unavailable. Do not post messages, merge, approve, or activate schedules unless explicitly authorized.
