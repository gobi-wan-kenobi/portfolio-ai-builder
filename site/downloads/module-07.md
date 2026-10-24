# Module 07 — Package for another PM

Week 4 · 3 hours · Deliverable: Solution catalog package

Make the solution discoverable, assessable, and maintainable.

## Learning objectives

- Create a catalog entry organized around the problem.
- Document fit, evidence, compatibility, and adoption cost.
- Test the quickstart without relying on chat history.

## A repository is only part of the package

A PM needs to find the solution by the problem they have, decide whether it fits, understand the evidence, identify the owner, and estimate local work. Project names and screenshots alone do not answer those questions.

Tag the workflow as request triage, evidence-grounded drafting, and human review, alongside the example verticals. Include poor-fit cases so the next PM can reject it quickly when the decision pattern is different.

Distinguish prototype, validated pilot, reusable candidate, supported release, and retired. These are proposed lifecycle labels for the exercise. Evidence should justify the status; a successful demo does not imply an accepted support commitment.

## Keep the manifest useful

Record the solution ID, core and configuration schema versions, input/output contracts, adapters, supported modes, company prerequisites, evaluation results by deployment, setup effort, costs, limitations, maintainer, and review date.

The package contains core code, sample configuration, synthetic fixtures, a test runner, setup, migration, rollback, and troubleshooting instructions. Customer requests, credentials, and local evaluation records stay in the company’s approved workspace rather than the reusable distribution.

A short quickstart should get the fictional demo working in about 30 minutes. That is a usability target to test, not a claim until someone achieves it. Record the environment and prerequisites so failure is diagnosable.

## Design the contribution path

Describe how another PM requests a feature, contributes an adapter, reports a defect, and proposes a policy change. Distinguish shared-core releases from company configuration changes. Identify who reviews compatibility and who accepts support responsibility.

Package repeated instructions as procedures with a trigger, required inputs, output contract, checks, and a stop condition. Use plain prompts first; a tool-specific skill should earn its maintenance cost through repeated use.

Have a new reader assess fit and reproduce the demo. Every clarification request is evidence of missing documentation or an unclear contract. Update the package and rerun the relevant step.

## Worked example — Search by problem, not project name

Another PM searches for “reduce manual support routing” and finds your package.

1. The catalog card describes who it helps and the routing decision it supports.
2. It lists required policy packs, review ownership, and current adapter limitations.
3. It includes evaluation evidence and second-company setup effort.
4. The PM can reject it if they need automatic record changes, or follow the quickstart for a drafting pilot.

Good packaging supports an informed adoption decision, including a justified no.

## Practice — Spot the missing contract

A catalog card says “Production-ready AI assistant. Contact the author.” What would you add before another PM should adopt it?

<details><summary>Reveal after your attempt</summary>

Name the supported workflow, evidence, poor-fit cases, input/output contracts, versions, prerequisites, maintainer, support boundary, local setup effort, rollback, and known limitations. Replace “production-ready” with a status supported by evidence.

</details>

## Assigned reading

- [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) — Inputs, outputs, and distribution of reusable procedures.
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) — Incremental progress and continuity between sessions.

## Knowledge checks

1. Which catalog tag is most useful across verticals?
   - A. Project Phoenix.
   - B. Request triage with evidence-grounded drafting and human review.
   - C. Uses the newest model.

2. When should a package be called supported?
   - A. As soon as it is uploaded.
   - B. When the demo runs once.
   - C. When a maintainer has accepted the support boundary and release responsibilities.

3. What belongs in the reusable distribution?
   - A. Synthetic fixtures, sample config, contracts, tests, and migration notes.
   - B. All company customer requests.
   - C. Shared credentials for faster setup.

## Assignment — Publish the solution package

Prepare a reusable distribution and a catalog card. Publish only to an appropriate approved destination.

### Catalog card

State problem tags, fit, poor-fit cases, status, evidence, and who owns the package.

### Manifest and package

Link core/config versions, contracts, adapters, synthetic fixtures, tests, and instructions.

### Quickstart and lifecycle

Provide startup, verification, migration, rollback, issue reporting, and the next review date.

### Handoff result

Record who tried the quickstart, time, clarification requests, failed steps, and remaining gaps.

## Rubric

- [ ] A PM can find and assess fit without the project name.
- [ ] Versions, contracts, evidence, and local prerequisites are explicit.
- [ ] Maintenance and rollback responsibilities are documented.
- [ ] The handoff has observable results or is marked pending.

## Module instructor prompt

Review this package as a PM encountering it for the first time. Decide whether it fits the stated problem, list missing adoption information, and follow the quickstart where possible. Do not infer support or production readiness from a demo. Report every clarification needed.
