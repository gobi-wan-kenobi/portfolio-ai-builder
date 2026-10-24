# Module 06 — Adapt to a second vertical

Week 3 · 4 hours · Deliverable: Company B adaptation report

Use the second deployment to test the abstraction.

## Learning objectives

- Adapt with explicit configuration and adapter contracts.
- Keep company A behavior intact.
- Measure the local work that remains.

## The second company is the experiment

The first implementation can make an abstraction look cleaner than it is. The second company introduces a different vocabulary, policy, escalation pattern, and operator expectation. Use it to discover whether the shared contract is useful.

Freeze company A and record its release and checks. Add company B configuration, approved policy pack, labeled fixtures, and separate storage. With the same file format, you can reuse the input adapter. That does not validate a future live helpdesk integration.

If core changes are essential, identify them openly, version the change, and rerun both companies’ suites. A requirement to change core is not automatically a failure; hidden forks and untested changes are.

## Protect local correctness

A request mentioning another company must not select its policy. The active deployment supplies context. Validate source IDs and output company IDs against that context. Store company records and review history separately.

Run the same ambiguous phrase under both profiles. Company A should ask whether dispatch has happened. Company B should require administrator approval and capacity confirmation. The difference must come from explicit local policy rather than incidental prompt wording.

A local namespace check proves a code path for the exercised inputs. A real shared service still needs identity and authorization design, operational ownership, and approved data handling. Do not call a demo isolation test a complete access-control system.

## Measure transfer honestly

Record configuration, core, adapter, fixture, and documentation changes separately. Count policy preparation, labeling, permissions, integration, training, and support. Compare the total with a plausible standalone implementation and label estimates.

Ask another PM to assess fit and follow the quickstart. Record time, clarification requests, failed steps, and workarounds. A fresh agent session tests durable context; a human PM tests usability for another person. If a PM is unavailable, keep that validation pending.

The appropriate conclusion may be to reuse only the test runner or adapter. Portfolio learning includes identifying where a common workflow is not economical.

## Worked example — A second deployment with no hidden fork

Company B requires a different taxonomy and policies, but uses the same file input and review process.

1. Add the taxonomy, policy pack, escalation mapping, and storage namespace through the documented configuration schema.
2. Keep the shared core revision constant and run company B acceptance cases.
3. Run company A regressions to detect configuration leakage.
4. Record the setup and validation effort, then ask a second PM to reproduce it.

Reuse is demonstrated by a working transfer and its full effort, not by a shared folder name.

## Practice — When a fork may be reasonable

Company B requires automatic record changes, while company A only drafts. Should you add an “auto-action” flag to finish quickly?

<details><summary>Reveal after your attempt</summary>

Automatic actions change permissions, failure consequences, approval, and recovery. Treat this as a new capability requiring design and validation. It may justify a separate workflow; it is not merely a cosmetic configuration change.

</details>

## Assigned reading

- [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — How to select and maintain useful context.
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) — Incremental progress and continuity between sessions.

## Knowledge checks

1. What is the strongest success criterion for the second deployment?
   - A. It has the same color scheme.
   - B. The workflow meets company B requirements, preserves A, and records adoption effort.
   - C. It shares at least 90% of code.

2. What should happen after a shared-core change?
   - A. Rerun both companies’ relevant acceptance suites.
   - B. Test only the new company.
   - C. Mark earlier tests as passed because they passed last week.

3. A fresh agent completes setup. What remains unproven?
   - A. Whether files exist.
   - B. Whether code can be read.
   - C. Whether another human PM can understand and adopt the package.

## Assignment — Document the second-company adaptation

Adapt to company B and make every local and shared change visible.

### Differences and predicted changes

List policy, taxonomy, escalation, data, and integration differences before implementation.

### Actual changes and results

Separate core, configuration, adapter, fixture, and documentation changes; link both companies’ checks.

### Effort and handoff

Record setup, policy, labeling, integration, training, and support effort. Describe human or agent handoff evidence.

### Reuse conclusion

Recommend a shared workflow, narrower component reuse, or a local solution with reasons.

## Rubric

- [ ] Company B works with explicit local policies and isolated records.
- [ ] Company A regressions are rerun after shared changes.
- [ ] All change types and adoption work are recorded.
- [ ] Human validation is demonstrated or clearly pending.

## Module instructor prompt

Adapt this package to company B using configuration and adapter contracts. Predict the changes first. Preserve company A. Afterward report all core, configuration, fixture, and adapter edits separately, with both test suites’ evidence. Do not hide duplicated logic behind a new folder name.
