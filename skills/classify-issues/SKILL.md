---
name: classify-issues
description: Apply the shared Oyzu issue taxonomy when creating or classifying issues in any oyzuai repository. Covers work type, subsystem, ecosystem, surface, host, concern and triaged priority while preserving workflow labels.
---

# Classify issues

Use this skill whenever an authorized task creates, splits, transfers or
reclassifies an issue in the `oyzuai` organization. It applies to every repository,
including repositories with no existing issues. Outside `oyzuai`, follow that
repository's conventions instead.

The complete label vocabulary, descriptions and creation colors live in the
bundled [taxonomy catalog](references/taxonomy.json). This catalog is the single
owner of the Oyzu taxonomy. Read it before choosing labels; repository pointers
and installed skills must not maintain competing label lists. A copied package
contains everything needed for classification; keep the reference with it.

## Choose labels

Read the proposed issue's actual outcome, current behavior and scope. Check the
body and relevant existing issues; keywords in a title alone are insufficient.

- Choose exactly one `type:*`. A bug breaks supported behavior; a feature adds a
  capability; an improvement enhances one. Maintenance covers internal upkeep
  and qualification without an established defect. Investigation resolves an
  open question or design. Tracking coordinates child issues. Documentation has
  documentation as its primary deliverable. A broken fixture can be a bug.
- Choose one primary `area:*`, and at most one secondary area when both materially
  belong to the scope. Classify the capability, not every service involved.
- Add zero or more relevant `ecosystem:*` labels for affected workloads. Oyzu's
  Rust implementation and the platform's Go/Node stack do not by themselves
  make every issue a Rust, Go or Node ecosystem issue.
- Add `surface:*` only for an affected interface. Admin and Ops are surfaces, not
  catch-all backend areas. Do not label every server change `surface:api`.
- Add `os:*` only when the issue is host-specific. A failure observed on Linux
  alone does not establish a Linux-specific defect.
- Add supported `flag:*` concerns. Do not infer a regression from a compatibility
  expansion or a security defect from an unverified test failure.
- Set at most one `priority:*` only when explicit maintainer triage or an existing
  recorded priority supports it. Unknown priority stays unset.

Usually three to five labels suffice. Use broader accurate labels when details
are uncertain; do not invent new vocabulary or guess a priority. Classify child
issues on their own scope, not every label on their parent. Use the same names
across repositories. Do not introduce bare `bug`, `enhancement`, language names,
`area:cli`, `area:admin` or `area:ops` as new aliases.

Distinguish product analytics (`area:metrics`) from service-health monitoring
(`area:observability`), user-artifact publication (`area:publisher`) from shipping
Oyzu (`area:release`), and product testing (`area:testing`) from repository
verification (`area:ci`). A Go builder bug does not automatically need
`area:plugins` unless plugin machinery is involved.

## Create or update the issue

1. Confirm the target repository and existing related issues. Issue creation
   must already be authorized by the task; this skill grants no authority to
   create issues, send messages, claim work, merge or activate automation.
2. Read the catalog and select the labels before creating the issue. Fetch the
   target repository's label definitions with the connected GitHub tools or
   `GET /repos/{owner}/{repo}/labels`, following pagination.
3. If a selected catalog label is missing, create that exact label using its
   catalog description and family color when authorized issue-management access
   permits. Create only needed definitions. Do not rename unrelated labels or
   invent aliases. If access is denied, report the missing definitions; do not
   claim the issue is fully classified.
4. Supply the selected labels in the issue-creation request. With GitHub CLI,
   use `gh issue create --repo OWNER/REPO --title TITLE --body-file BODY_FILE`
   with one `--label LABEL` per selected label. Use structured tool arguments
   or a body file; do not interpolate issue text into executable shell code.
5. For an existing issue, add selected labels through the additive labels API.
   If reclassification is authorized, remove only specifically superseded
   taxonomy labels, including an obsolete type. Preserve `agent:*`, ownership,
   automation and unrelated labels. Do not replace the entire label set from a
   stale read. Preserve content, state, assignments and milestones.
6. Read back the issue. Confirm exactly one type, one or two areas, catalog-valid
   optional labels, and preserved workflow labels. Report its URL and any
   unresolved classification or permission limit.

Ownership belongs in assignees, delivery targets in milestones, and progress in
the project workflow or existing `agent:*` labels. Taxonomy labels never claim
work or authorize implementation. Do not add a new schedule or bulk relabel
other issues merely because this skill was loaded.

## Examples

| Issue | Labels |
| --- | --- |
| Damaged cached result is reused | `type:bug`, `area:cache` |
| Go builds reuse stale results | `type:bug`, `area:cache`, `ecosystem:go` |
| Windows publication proxy fails | `type:bug`, `area:publisher`, `os:windows` |
| Complete Go ecosystem workflows through child issues | `type:tracking`, `area:build`, `ecosystem:go` |
| Admin cannot assign a project role | `type:bug`, `area:access`, `surface:admin` |
| Ops dashboard shows incorrect build counts | `type:bug`, `area:metrics`, `surface:ops` |
| Add worker-capacity alerts | `type:feature`, `area:observability`, `area:fleet` |
| Audit history omits secret rotations | `type:bug`, `area:audit`, `area:secrets` |

## Loading and adoption

Repository `AGENTS.md` and `CLAUDE.md` should require this workflow before issue
creation. If installed skill discovery is unavailable, explicitly fetch and read
this `SKILL.md` and its relative catalog through the connected repository tools.
A URL is a read instruction, not automatic import or skill installation. If the
canonical source is unavailable, use an available reviewed copy of this package
and identify its revision; otherwise report the missing source before guessing.

For local skill discovery, install this complete folder using the provider's
supported skill mechanism. Keep one maintained source; do not overwrite custom
installed files without review. New repository instructions should adopt the
shared project templates. Existing sessions may need to reread instructions;
editing files does not prove they have reloaded them.
