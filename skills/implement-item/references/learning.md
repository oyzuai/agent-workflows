# Candidate emission

Emit a candidate only when all of these hold:

- Another agent would otherwise ask again or repeat the mistake in a different session, on another host, a week from now.
- It isn't already recorded in code, git history, repository docs or an existing entry. Update an existing entry instead of adding a parallel one.
- It isn't run-specific. Receipts, chronology, temporary paths and status belong in the PR or ledger.
- It contains no secret, credential or customer data.

Route to exactly one home: a check for mechanically enforceable knowledge; a skill edit for a procedure; the owning repo's `docs/decisions/` for its product/design decisions; shared context for org decisions, agent feedback/lessons and current facts; native memory only for personal style.

Report kind, scope, proposed text, topic tags and evidence links. Attach the verbatim quote and source for maintainer decisions and corrections. Match INDEX.md ids and tags before proposing an update or supersede link. Facts need expiry or a verification source. Constitution changes wait for the maintainer.

Post `memory_candidate` to the ledger when available; before that, prepare a context PR directly within the task's authority, or hand the candidate to the coordinator who owns git delivery. Never silently write durable memory. Record opened entries as `context_read` with the context commit when the ledger is available; otherwise report the ids and commit in the handoff.

Source: the accepted factory memory lifecycle, sections Deciding, Writing and Reading. Consult the owning design supplied with the brief when routing a candidate.
