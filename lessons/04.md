# Module 04 — Build the first company workflow

Week 2 · 4 hours · Deliverable: Working company A prototype

Create a complete input-to-review path.

## Learning objectives

- Build one observable slice at a time.
- Use an explicit model adapter with saved-output support.
- Verify review, export, and persistence behavior.

## Make the first slice useful

Start with one request that enters the app, receives a proposal with evidence, and reaches a reviewer. A full dashboard before this path works creates presentation without proving the workflow. Add an empty state and a failure path alongside the happy path.

Keep shared workflow logic separate from company configuration, model calls, and the UI. A practical local stack is Next.js and TypeScript, SQLite, JSON policies and configuration, and deterministic tests. A simpler familiar stack is acceptable if it demonstrates the same contracts.

## Use saved model outputs honestly

Place the model behind an interface. The free path reads saved outputs generated in a separate chat from fictional requests and policies. Use the same output schema for saved and optional live adapters. Label saved samples explicitly.

Saved-output tests can demonstrate parsing, evidence validation, state transitions, and review. They cannot establish current live-model quality, API reliability, latency, or recurring cost. Replaying one saved output three times is not three independent model trials.

Store valid drafts, abstentions, and malformed or misleading outputs. The application must handle all of them without treating a model’s claim of success as evidence of an operator action.

## Verify each increment

Build ingestion and validation, then configuration and evidence, then proposals, review, and export. After each slice, run the relevant checks, inspect the diff, and record what was observed. Keep a known-good revision before introducing the next change.

The reviewer needs the original request, proposed category and priority, active policy version, evidence, draft, and decision controls. Preserve a distinction between the proposal and the confirmed decision. Export reviewed results with a clear count of omitted unreviewed rows.

Restart the app and reimport fixtures. Check that records and review history persist, identical imports do not inflate counts, and invalid batches write nothing. These checks are more informative than a successful-looking screenshot.

## Worked example — Design the model adapter

You want to build without paying for runtime API calls.

1. Define propose(request, companyConfig, policyPack) returning a proposal that matches your output schema.
2. The saved adapter looks up a fixture by company and request ID. The live adapter can be added later without rewriting the review workflow.
3. Validate the response independently of the adapter: IDs, company, taxonomy, and evidence references.
4. Record adapter mode with every result so evaluation reports cannot confuse a replay with a live call.

An interface supports cheap development only if you are precise about what the test establishes.

## Practice — Choose the next slice

The import screen looks good, but invalid rows sometimes appear in the database. Should you build the progress dashboard next?

<details><summary>Reveal after your attempt</summary>

Fix and prove atomic validation first. Reproduce a file with a valid row followed by an invalid row, inspect database state, and ensure neither row is committed. The dashboard would otherwise summarize corrupted state.

</details>

## Assigned reading

- [Claude Code in action](https://academy.claude.com/courses/claude-code-in-action) — Steering, verification, and reusable workflows. Adapt tool-specific instructions to your coding agent.
- [Learn Next.js](https://nextjs.org/learn) — Reference for implementation gaps; focus on errors, data mutation, and accessibility.

## Knowledge checks

1. What can a saved-output adapter establish?
   - A. Live model accuracy across all users.
   - B. Application behavior for the replayed inputs and responses.
   - C. Production latency and monthly API cost.

2. Which is the strongest slice completion evidence?
   - A. The agent says it finished.
   - B. The UI looks polished.
   - C. Relevant checks ran, observed outputs match the contract, and the diff is reviewed.

3. Which screen supports a useful reviewer decision?
   - A. Only the generated draft.
   - B. Request, evidence, policy version, proposal, and explicit review controls.
   - C. A confidence percentage with no supporting material.

## Assignment — Demonstrate company A

Build the bounded workflow using fictional inputs and an explicit saved or live model mode.

### Implementation and commands

Link the code or describe the local revision. Provide exact startup and check commands.

### Workflow evidence

Show import, policy evidence, valid draft, abstention, malformed output, and reviewer decisions.

### Persistence and export checks

Demonstrate identical reimport, rejected batch, restart, edit requiring reapproval, and reviewed-only export.

### Limitations and handoff

State which model mode was used, unverified behavior, actual check results, and the next task.

## Rubric

- [ ] The full input-to-review-to-export path works.
- [ ] Invalid and missing-evidence outputs are handled visibly.
- [ ] Review state and persistence checks are demonstrated.
- [ ] Saved-output evidence is distinguished from live-model evidence.

## Module instructor prompt

Implement only task [ID]. Read the numbered requirements first. Keep company policy out of shared code. Run the relevant checks, report actual results and unverified behavior, and update progress.md. Never claim a live-model result when using saved outputs.
