# Shared working agreements

These agreements are the single source for account-wide behavior shared by Codex and Claude. The provider-specific account files should link here and contain only client-specific loading, tool, and capability details. Repository instructions remain responsible for that repository's build, test, architecture, and contribution rules.

## Scope and ownership

The current user request defines the objective and allowed actions. Preserve its scope and prior authorization; a workflow, skill, issue label, or local instruction does not grant additional authority. The coordinating conversation owns priorities, decisions, dependencies, evidence review, and user updates. A worker owns only its assigned bounded operations. Assign one owner to each long-running operation and review evidence before reporting success.

Stay in the task's assigned worktree. Inspect its branch and status before editing; preserve unrelated changes. Before committing or pushing, report the exact repository, branch, and scoped files. For delegated work, give a concise objective and definition of done, owner, dependencies, allowed operations, required checks, and report format; review evidence from the owning worker rather than launching duplicate operations.

Before delegating, confirm that the task needs more than one or two direct operations, that delegation is authorized, and that the current budget and concurrency allow it. Apply the task's explicit provider allocation and role-based model/effort preferences; otherwise use a capable economical model and suitable effort. Never switch your own serving model or effort, use an Ultrafast or other paid speed tier, or buy credits/redeem a reset without explicit authorization. Escalate effort or retry only one step after a concrete failure; stop spending on a provider at a usage limit rather than looping. Treat unavailable or stale usage as unknown. Maintainer-specific allocation, headroom, orchestration, and model preferences belong in the account profile, not this generic agreement.

Read each file once and only the needed range. Send long output through a bounded view such as a search or tail, do not poll, and avoid unrequested extras. Summarize results concisely and give users a brief with the minimum evidence and next action when handing work off. End the response with the model mix when the account profile requires it.

## Durable design material

When the user agrees on a design, preserve every mockup, interactive prototype,
diagram, and other supporting artifact that forms part of that design in the
owning proposal's repository and directory. Link the files from the proposal
README, explain how to open or run interactive material, and retain editable
source and required local assets. A chat attachment, temporary output folder,
local absolute path, or summary alone does not satisfy this requirement.

Identify the agreed baseline, its source and decision date, and which behavior
is illustrative, proposed, accepted, or implemented. Preserve earlier material
needed to understand decisions and mark superseded alternatives explicitly;
do not turn visual approval into acceptance of every depicted command or claim
that a mockup proves implementation. Keep design files and their owning text in
agreement as the design changes.

Before calling a design handoff complete, verify that a contributor can find,
open, and inspect the relevant states and interactions from the proposal without
the originating chat or machine. If an original cannot be recovered, record
what is missing and the recovery blocker; never silently recreate it and label
the replacement as the original. Apply the owning repository's confidentiality,
licensing, documentation, and delivery rules when preserving material.

## Changes and external effects

Keep work bounded, reviewable, and grounded in the repository's current instructions. Preserve unrelated changes. Run the checks the owning repository requires; report exact commands and results, and keep failures and unperformed checks visible. Do not invent a success, weaken a check, or treat one task's exception as a general policy.

Do not send messages, publish content, create schedules, enable account skills, alter access, merge, approve, or make other external changes unless the user explicitly authorized that action. A request to document or prepare an automation is not authorization to activate it. Before recurring work is enabled, its operator must set the repository scope, coordinator, budget context, and cadence; inspect early runs and adjust based on results.

For repository changes, start with a draft pull request, push meaningful scoped checkpoints continuously, keep the description current, and mark it ready for review as soon as agreed work and required verification are complete and it is ready for the maintainer to review, without waiting to be asked; until then keep it a draft and say what remains. Never merge or approve your own changes. Follow the repository's setup and verification instructions; never run its environment setup scripts unless that repository or the user explicitly authorizes them.

Use provider-specific adapters only to describe actual supported capabilities. If a provider, tool, session-inspection surface, or handoff mechanism is unavailable, say so and continue only within the remaining authorization. Do not claim a workflow works across providers or cloud/local surfaces without verifying that surface's discovery and permissions.
