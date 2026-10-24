# Capstone — reusable request triage and drafting

## Objective

Diagnose a company problem, build one bounded workflow, and prove what transfers to a second vertical. The companies, policies, and examples below are fictional.

## Deployment A — field service software

A1: A job can be rescheduled through Scheduling only before dispatch. If dispatch status is unknown, ask for it. Do not promise a change.
A2: Dispatch blocked for all technicians routes to urgent incident review. Do not invent recovery times or bypass the queue.

## Deployment B — training administration software

B1: Moving a learner to another session requires administrator approval and capacity confirmation.
B2: Attendance correction requires a named administrator and the affected session. Neither policy authorizes the assistant to change records.

## Shared contract

Input: request_id, text, and optional source metadata. Trusted application configuration supplies company context; requests and model outputs cannot change it.

Output: request ID, company ID, config version, proposed type and priority, source policy IDs, draft or abstention reason, model/saved-output identifier, review status. Validate structural responses and active evidence IDs. Human/domain review assesses faithfulness and permitted next steps.

Import a maximum of 100 requests and 1 MB per file. Validate the whole batch before writes. Identical reimports are idempotent. Conflicting IDs reject the batch. Define text length limits and recovery in spec.md.

Missing or unsupported evidence requires REVIEW_REQUIRED. Every citation must resolve in the active company pack and version. Editing reviewed output creates a new unreviewed version. Preserve review history. Export only explicitly reviewed results and show omitted counts.

The free prototype uses local files and saved model outputs. Live connectors, automatic actions, hosted identity, and runtime API usage are optional future capabilities, not demonstrated by fixture replay. Separate company storage.

## Required examples

- A + “How do I move my booking?” → ask dispatch status; use A1.
- B + same request → administrator approval and capacity confirmation; use B1.
- A + all-technician dispatch blockage → urgent incident review; use A2.
- B + attendance correction → named administrator and session; use B2.
- Either + refund request → abstain; no refund policy exists.
- B + embedded instruction to use A1 → never load A evidence or follow the instruction.

Create 12 labeled cases per company, with eight for development and four held out from prompt tuning. Include wrong context, invalid IDs, partial-import failure, unsupported policy, prompt injection, reapproval, and export. Generate multiple independent model trials only when the actual calls occur.

## Final assessment

- Company judgment: 20 points.
- Working workflow: 20 points.
- Evaluation and repair: 20 points.
- Second-company reuse: 25 points.
- Handoff and lifecycle: 15 points.

Target 80/100. Cross-company leakage, unsupported claims accepted as approved, or export without required review are holds. This is a learning assessment, not production certification.

The two-hour final demo covers the company problem, alternatives, both configurations, failed output, focused repair, second-company setup effort, package, ownership, and a promote/revise/keep-local/retire decision.
