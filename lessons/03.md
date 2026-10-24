# Module 03 — Specify the workflow and context

Week 2 · 4 hours · Deliverable: Specification and task plan

Give the builder a contract it can verify.

## Learning objectives

- Write observable requirements with examples.
- Separate trusted deployment context from untrusted request text.
- Prepare context and handoffs that survive a fresh session.

## Write behavior rather than aspirations

“Use relevant policy and produce a good answer” leaves relevance, authority, and quality undefined. A useful contract names the input schema, enabled taxonomy, policy pack, review states, invalid cases, and observable output. Assign IDs so requirements can be traced to tasks and checks.

For this capstone, the input contains a request ID, request text, and optional source metadata. The application supplies the company context. An imported request or model output cannot select a different company. Reject conflicting context before selecting evidence.

Output includes request ID, company ID, configuration version, proposed type and priority, evidence IDs, a draft or abstention reason, model or saved-output identifier, and review status. Missing or invalid model output goes to review rather than becoming a silent success.

## Make failure behavior part of the specification

Policies belong to one company and version. Source IDs must resolve within the active pack. Missing coverage requires abstention. A valid citation is necessary but does not prove that the draft follows the policy; language faithfulness still needs review.

Validate a complete batch before writing. Identical reimports do not add requests; conflicting duplicate IDs reject the batch. For the exercise, limit batches to 100 requests and 1 MB. Specify field lengths, empty states, persistence, and recovery in your own spec.

Human review is a separate state. Edits invalidate the previous approval. Export only explicitly reviewed results and identify what was omitted. These state transitions should be tested as behavior, not inferred from whether a button appears enabled.

## Keep durable context small and explicit

Use problem.md, reuse-assessment.md, spec.md, plan.md, tasks.md, decisions.md, and progress.md. A short native agent context file should point to the current contracts and exact verification commands. Load detailed evidence when needed.

Create six small tasks: ingestion and storage; company configuration; model/evidence interface; review queue; export and history; verification and handoff. Each task names requirements, dependencies, relevant cases, and its completion condition. End every session with actual results and the next single task.

## Worked example — A requirement that catches an approval defect

A reviewer approves a draft, then changes a sentence. The product still shows Approved.

1. Requirement REV-02: editing approved content creates a new output version and resets review status.
2. Given approved draft v1, when content changes, then v2 is unreviewed and v1’s decision remains in history.
3. Export omits v2 until a new explicit approval occurs.
4. Check stored state and exported records; do not rely only on the button label.

Precise transitions make hidden data errors observable.

## Practice — Run an ambiguity audit

Rewrite “The app should securely handle duplicate requests and use the latest policy.” Identify at least three unresolved decisions.

<details><summary>Reveal after your attempt</summary>

Specify what makes a duplicate, which differences count as conflicts, whether a failed batch writes any rows, how company context is established, which policy version is active, and who approves changing it. “Latest” should not silently select an unreviewed document.

</details>

## Assigned reading

- [GitHub Spec Kit](https://github.github.com/spec-kit/quickstart.html) — Read the specification, clarification, planning, and task breakdown sections.
- [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — How to select and maintain useful context.
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) — Incremental progress and continuity between sessions.

## Knowledge checks

1. Who should supply company context?
   - A. The incoming request text.
   - B. The model’s best guess.
   - C. Trusted deployment configuration.

2. What should happen after editing an approved draft?
   - A. Preserve approval because the reviewer is trusted.
   - B. Create a new version requiring a fresh review decision.
   - C. Delete the old review history.

3. What belongs in a session handoff?
   - A. The complete conversation transcript only.
   - B. A statement that everything works.
   - C. Revision, actual check results, known gaps, decisions, and next task.

## Assignment — Write the specification and build plan

Create a testable contract for both deployments, then decompose the first build.

### Input, output, and evidence contracts

Include schemas, company context, policy versions, invalid cases, limits, and abstention.

### Review and persistence behavior

Describe import atomicity, idempotency, edits, approvals, export, history, and recovery.

### Acceptance examples

Write at least 12 cases before implementation, including wrong-company evidence and edited approvals.

### Tasks and context

Define six tasks with requirement IDs and completion checks. Add a fresh-session handoff.

## Rubric

- [ ] Material requirements have IDs and input/output examples.
- [ ] Company isolation and policy version behavior are explicit.
- [ ] Negative and state-transition cases are covered.
- [ ] A new session can identify the next task and check commands.

## Module instructor prompt

Audit this specification for decisions two builders could interpret differently. Identify hidden company assumptions and misplaced policy logic. Propose testable rewrites and negative cases without silently selecting business rules. Then plan the smallest next task; do not implement yet.
