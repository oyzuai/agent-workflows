---
name: write-brief
description: Use when intake turns an authorized request into one bounded work item.
---

# Write brief

## Steps

1. A brief is one Markdown file per task: the problem, scope, files to stay out of, and a concrete definition of done. Check existing claims and open PRs before assigning; never launch the same row twice.
2. Assign one whole task, its repository/base, lane, role, skills, exact checks and budget. Respect the owner's reserved operations and identify files other items touch. Keep the brief under 500 words.
3. Choose relevant entry ids from INDEX.md topic tags matching the item's paths and skills; put them in `context:`. Always load the constitution and index at session start, and record the context commit and opened ids.
4. Use this template, changing example values for the actual item:

```markdown
---
item: L-1432
repo: oyzuai/oyzu  base: dev  lane: auto
role: implementer  skills: [implement-item, rust-change, builder-work]
context: [branch-model, verification-execution]
checks: ["oyzu build --full --affected origin/dev"]
touching_elsewhere: [src/config/ (L-1428)]
budget: {hours: 2, rounds: 2}
---
## Outcome
One or two sentences a user would recognise.
## Scope
In: ...  Out (follow-ups, don't do): ...
## Done when
The checks pass and these observable results hold: ...
```

A brief never restates a rule. Needing to repeat one signals a missing skill or check, which becomes an improver item.

## Checks

The outcome is observable, scope and exclusions are explicit, checks resolve that outcome, relevant context ids exist and overlapping work is identified. Verify the assigned host can read the brief before launch.

Follow the shared [finite acceptance contract](https://github.com/oyzuai/agent-workflows/blob/main/policy/working-agreements.md#finite-acceptance-contract) and the owning repository instructions. This skill grants no additional execution or publication authority.
