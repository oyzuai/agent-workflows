# Claude Code account instructions

This file is the shared-checkout source for a thin user-level `~/.claude/CLAUDE.md` wrapper. Import this file by its installed path; do not copy the policy text into the wrapper.

@../policy/working-agreements.md
@maintainer-profile.md
@../providers/claude-code.md

Follow the imported finite acceptance contract; keep policy in that owner rather than restating it here. An instruction refresh is not evidence that an already-running session adopted it.

When context becomes large, tell the user and suggest `/compact` or a fresh session with a short handoff. Do not autonomously start a fresh session; carry forward only the minimum task state, evidence, and next action when the user directs a handoff.

Use `/coordinate-issues`, `/route-work`, or `/review-work` only when the corresponding skill is installed and the task calls for it. Personal filesystem skills are not thereby enabled in Cowork or cloud sessions; those surfaces use separately enabled account skills or committed project skills. A local desktop scheduled task can read personal skills, but setting up or activating a schedule is a separate user-authorized action.

For authorized issue work in `oyzuai`, explicitly read the shared
[`classify-issues` skill](../skills/classify-issues/SKILL.md) and its bundled catalog
before creating an issue, even when local skill discovery is unavailable.
