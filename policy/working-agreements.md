# Shared working agreements

These agreements are the single source for account-wide behavior shared by Codex and Claude. The provider-specific account files should link here and contain only client-specific loading, tool, and capability details. Repository instructions remain responsible for that repository's build, test, architecture, and contribution rules.

## Scope and ownership

The current user request defines the objective and allowed actions. Preserve its scope and prior authorization; a workflow, skill, issue label, or local instruction does not grant additional authority. Multiple independently authorized workstreams may proceed concurrently, each with an accountable owner. A coordinating conversation owns priorities, decisions, dependencies, evidence review and user updates within its assigned workstream; it is not a repository-wide allocator or a prerequisite for unrelated sessions. An independently authorized owner may perform its own integration, verification and PR delivery. A delegated worker owns its assigned bounded operations and needs an authorized handoff to become the independent owner. Assign one owner to each long-running operation and review evidence before reporting success.

Keep resumable scope, source/PR revision, proof results, blockers and the next bounded action in the owning issue/PR rather than only in a conversation. Parent trackers summarize work; they do not implicitly claim every child slice. Coordinate overlapping contracts, edits or scarce resources with their actual owners, without stopping unrelated work. Lost-session reassignment must be explicit and recorded, but does not require an unavailable session to acknowledge an authorized user reassignment. A reassignment does not establish that old processes stopped or authorize deletion of their work.

Stay in the task's assigned worktree. Inspect its branch and status before editing; preserve unrelated changes. Before committing or pushing, report the exact repository, branch, and scoped files. For delegated work, give a concise objective and definition of done, owner, dependencies, allowed operations, required checks, and report format; review evidence from the owning worker rather than launching duplicate operations.

Before delegating, confirm that the task needs more than one or two direct operations, that delegation is authorized (the account profile may grant standing authorization for substantial work), and that the current budget and concurrency allow it. Use the least costly capable model and lowest suitable effort, unless the account profile assigns models and effort by role; preserve explicit user choices. Never switch your own serving model or effort, use an Ultrafast or other paid speed tier, or buy credits/redeem a reset without explicit authorization. Outside profile-assigned roles, escalate effort or retry only one step after a concrete failure; stop on a usage limit rather than looping. Treat unavailable or stale usage as unknown. Maintainer-specific thresholds and model preferences belong in the account profile, not this generic agreement.

Read each file once and only the needed range. Send long output through a bounded view such as a search or tail, do not poll, and avoid unrequested extras. Summarize results concisely and give users a brief with the minimum evidence and next action when handing work off. End the response with the model mix when the account profile requires it.

## Splitting work between providers

This applies when the account profile enables a Codex and Claude split. The profile sets the target share, thresholds, models, and effort; this section owns the mechanism.

- **Whole tasks.** Substantial work is a spec or brief to implement, a feature across several files or services, a refactor or migration, a long investigation, or a prototype. Assign each such task end to end to one provider. Never carve a task into small pieces so the other provider gets a slice. Small one- or two-operation work stays with whoever is already holding it.
- **Alternate by size.** Alternate whole tasks so each provider carries about its target share of effort by size. Within each assigned workstream, its owner keeps a running tally (task, rough size, provider) and gives the next task to the provider that is behind. This does not require one global allocation ledger or conversation. Code reviews do not count toward either provider's share. When unsure where a single task goes, give it to Codex.
- **Headroom.** Tilt new tasks away from a provider that is running hot, as the profile defines. When one provider is out of credits or at a limit, run everything on the other until the user says it is back. Do not retry a limited provider in a loop.
- **Either provider can coordinate.** Each workstream's owner handles its scope, sequencing, decisions, evidence review, user updates and pull request delivery, whether it runs on Claude or Codex. If it delegates, it briefs workers with the full ask, repository rules, assigned repository/branch/worktree, files other in-flight work is changing, allowed operations, required checks and a concrete definition of done. Every brief names the provider, role, model selector and effort. The owner verifies the returned diff and test evidence and delivers the pull request under the draft-first rules below. No role is reserved for one provider and no global coordinating conversation is required.
- **Worker reports.** The worker owns its whole task in its assigned worktree and reports the exact outcome, the checks it ran, and any blocker. It leaves pushing and the pull request to the coordinator unless the brief says otherwise.
- **The user's latest instruction wins over standing delegation.** Standing authorization to hand whole tasks to the other provider ends when the user says not to (for example "keep everything in Claude" or "do not launch Codex sessions"). Stop work already launched under it, tell the user what was stopped, and do not resume the other provider until the user says so. Say the same for any provider.
- **Cross-provider launches have a checked mechanism.** Before starting a worker on the other provider, use the adapter's launch steps, confirm the worker can write everything its task needs (working tree, and git metadata if it must commit), and make the user-visible session findable immediately. If the launch fails or blocks, report the exact error and fix the launch; do not hand the task to the other provider silently. Where a skill or tool default for model, effort, usage gates, reviewer tier or coordinator role differs from the profile, the profile wins.

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

## Cleaning up sessions, workers, and temporary files

Every session, subagent, worker thread, and background task leaves the machine as tidy as it found it. Clean up when the work is finished, merged, or abandoned, before reporting the task done, and make sure the same is done for everything you launched. This is standing authorization to remove what the task created and to archive or close (not delete) the sessions you started once nothing waits on the user's answer. Archiving is reversible; deleting sessions or transcripts, and any other action, is not authorized by it.

- **Your own footprint.** Stop the background processes, monitors, watchers, servers, and WSL or container jobs you started. Remove the temporary worktrees, scratch checkouts, archives, per-task copies, temporary files, and build output directories (such as a Cargo `target`) you created once their work is merged or abandoned. A worker that has reported its result keeps its worktree until its coordinator releases it; the coordinator removes it after merge or abandonment. Archive or close your own finished session where the tool allows it.
- **Children.** A parent owns the cleanup of every worker, subagent, thread, and session it launches. Before finishing, confirm each child is finished or stop it, unless you still need it for review fixes or follow-up; a child's reported result is not a release. Collect its result, then remove its worktree, temporary files, build directories, and copies and archive or close its session. Brief each child to clean up its own footprint and tell it where large output may go. A child that was stopped or abandoned is cleaned up the same way.
- **Boundaries.** Remove only what this task created: record the paths when creating them. Never delete another session's, person's, or program's worktrees, branches, caches, stores, or installed tools, and never force a removal past a lock, uncommitted work, or unpublished commits; keep that work until it is pushed or its owner takes it over, and report it instead. Low disk space is not a reason to delete anything you did not create: report the largest consumers and ask.
- **Report.** When finishing, say in one line what was removed and what remains (path, size, owner, and why).

## Proportional output

Output is proportional to the change: the code, the tests that matter, documentation only where user-facing behavior changed, and one short PR description.

- **Report checks plainly.** Give each check as its command and pass or fail, plus the failure output when it fails. Do not write narrative proofs, proof or results files, or one-off tooling to run or record checks.
- **Records only for milestones.** Add status, qualification or evidence records only for user-visible capability changes or release/platform milestones, or when the owning repository requires them.
- **Leave no bulk behind.** When done, remove the builds, workspaces, containers and images you created that will not be reused (never other people's data), and state the disk used.
- **Safeguards stay.** Signing, provenance, compliance checks and honest reporting of failures and unrun checks are not reduced by this rule.

Where the sections below ask for receipts, ledgers or handoff details, keep them as a few lines in the PR description or handoff, not as separate files.

## Acceptance evidence and resource ownership

Before substantial verification, name the user-visible claim, the smallest convincing end-to-end check, its expected result, and the evidence to retain. Give every temporary source copy, compiler output, captured environment and proof directory one owner and a disposal condition. A successful result is not permission to retain the entire working environment indefinitely. Coordinators own resource admission and release of returned workers' disposable output; preserve source, unpublished work and uniquely authored evidence.

### Finite acceptance contract

- **Honor the execution venue.** Follow the human's current local/CI execution policy when selecting verification. Local acceptance can be authoritative when the maintainer chooses it. A repository's historical hosted-check expectation, model-routing decision or recurring task does not grant permission to enable CI, dispatch workflows, rerun jobs or start self-hosted workers. Preserve applicable local checks and report deliberately unrun CI honestly; do not silently change branch protection or merge authority.
- **Define the claim.** Record the scenario, exact source revision and relevant tool/artifact identities, entry-point command, expected observable result, and the criterion that ends verification. Distinguish implemented, demonstrated, unverified and deferred behavior. A documentation-only change ordinarily needs documentation checks and review, not a product build. Existing required repository checks still apply.
- **Reuse valid evidence.** Prefer the existing owned checkout, provisioned tools and previously built artifacts when their identity and trust boundary match the claim. Do not copy a whole working environment just to retain evidence. Keep isolation where the scenario requires it; never share writable state across incompatible trust boundaries. Repeat an expensive check only for changed inputs that invalidate it, a concrete failure, a missing acceptance scenario, or an applicable repository/reviewer requirement; state which reason applies.
- **Keep the result compact.** Retain a receipt naming the claim, revision, command, exit/result, artifact identity and relevant logs. Include limitations and whether the actual user flow ran. Keep the source of durable evidence in the owning repository or its approved evidence store; private operational receipts stay private. Full compiler trees, dependency installations and captured workspaces are working files, not evidence by default. Required runnable reproducers, accepted design material and distribution/compliance artifacts keep their existing preservation rules.

### Resource admission and temporary-output ledger

Before a heavy build, cold installation, archive extraction or large source/environment copy, the coordinator records the affected host and backing filesystem, current physical free space, estimated peak additional footprint, task budget, running heavy operations, owner and cleanup plan. Include child workers in the same task budget. Use the maintainer's current resource defaults when applicable and respect stricter repository or host limits. Unknown capacity means hold the new heavy operation and continue useful lightweight work; it does not mean zero usage or permission to stop somebody else's job.

For WSL, containers, remote workers and redirected directories, distinguish guest filesystem capacity from physical backing-volume capacity. A guest's large virtual `df` value is not evidence of free space on its Windows host. If that host reading is unavailable, obtain it from its coordinator before admitting the heavy operation. For a managed cloud workspace, use its assigned storage quota/free capacity and explicit task budget; do not demand inaccessible provider-host measurements. Do not independently reserve the same free space in several chats: name the resource coordinator, record reservations and release them at completion. An absent admission controller means these are cooperative operating rules, not an enforced quota; never claim a lock, cap or reservation exists merely because instructions describe it.

Keep one small task-owned ledger for substantial temporary output; extend an existing task manifest or handoff rather than creating parallel records. Record:

| Field | Required information |
| --- | --- |
| Ownership | Task/issue and responsible coordinator/worker; physical host and backing filesystem |
| Paths | Exact created roots, purpose and class: source, scratch, compiler cache, tool installation, evidence or delivered artifact |
| Budget | Estimated peak, allowed total, measured current size and active heavy operation/reservation |
| Evidence | Claim, revision/artifact identity, receipt/log location and acceptance status |
| Disposal | What may be removed, who releases it, retention reason and next review/expiry time |

Measure before and after heavy phases and before handoff. Recheck before the next allocation when the footprint crosses its warning threshold or host capacity changes. At a stop threshold, admit no additional heavy work and retain a resumable checkpoint; allow active work to reach a safe boundary rather than killing it or deleting its inputs. A retry or larger budget needs a concrete reason and an explicit bounded exception from the resource coordinator; the coordinator cannot waive a human-set host reserve without the human's approval.

### Release, retention and adoption

After reviewing a worker's result, the coordinator explicitly releases its disposable working output or records a bounded retention exception. A returned worker is not automatically released. Keep one verified evidence set per accepted claim, plus any intentionally required reproducer, rather than every failed attempt's environment. After acceptance, remove task-owned scratch/caches/duplicate copies that are no longer required, subject to the existing cleanup boundaries and lock checks. Never infer deletion authority from a directory's name, age, expired timestamp or missing owner. An expiry triggers review; it does not authorize deleting source, unpublished work, accepted design material, credentials, application state or uniquely authored evidence. Preserve diagnostics still needed to resolve an observed failure.

Every final handoff states acceptance results, evidence location and retained size, disposable paths removed, remaining paths with owner/reason/review time, and reservations released. A preservation or permission blocker is a visible exception with a next action, not a claim that cleanup completed. A cleanup report does not itself prove the product scenario.

For in-flight work, deliver the current contract through the supported session channel; changing an instruction file does not prove an already-running agent reloaded it. Each coordinator acknowledges adoption in its own chat, relays it to its existing workers through supported internal channels, inventories only its own existing output, and applies admission checks before its next heavy operation. Do not restart, interrupt or cancel another owner's work merely to adopt this policy. Unreachable sessions remain explicitly unconfirmed. This contract does not create schedules, authorize new workers, relax required verification or grant cleanup authority over another task's files.

## Changes and external effects

Keep work bounded, reviewable, and grounded in the repository's current instructions. Preserve unrelated changes. Run the checks the owning repository requires; report exact commands and results, and keep failures and unperformed checks visible. Do not invent a success, weaken a check, or treat one task's exception as a general policy.

Do not send messages, publish content, create schedules, enable account skills, alter access, merge, approve, or make other external changes unless the user explicitly authorized that action. A request to document or prepare an automation is not authorization to activate it. Before recurring work is enabled, its operator must set the repository scope, coordinator, budget context, and cadence; inspect early runs and adjust based on results.

For repository changes, start with a draft pull request, push meaningful scoped checkpoints continuously, keep the description current, and mark it ready for review as soon as agreed work and required verification are complete and it is ready for the maintainer to review, without waiting to be asked; until then keep it a draft and say what remains. Never merge or approve your own changes. Follow the repository's setup and verification instructions; never run its environment setup scripts unless that repository or the user explicitly authorizes them.

Use provider-specific adapters only to describe actual supported capabilities. If a provider, tool, session-inspection surface, or handoff mechanism is unavailable, say so and continue only within the remaining authorization. Do not claim a workflow works across providers or cloud/local surfaces without verifying that surface's discovery and permissions.
