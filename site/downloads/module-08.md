# Module 08 — Operate and improve the shared capability

Week 4 · 3 hours · Deliverable: Pilot and lifecycle charter

Give the pilot an owner, a decision, and an end condition.

## Learning objectives

- Assign local and shared ownership explicitly.
- Measure company outcomes and support burden.
- Make a promote, revise, keep-local, or retire decision.

## A pilot is an operating experiment

Write a charter with users, owner, permitted data, baseline, duration, sample, quality constraints, economics, and stop conditions. Begin in shadow mode or with human-reviewed drafts. Set thresholds before measuring so a favorable narrative cannot redefine success afterward.

Track net handling time including review and rework, unsupported claims, missed escalations, operator use, and recurring cost. Report by company. Track the amount of central support needed to sustain each instance.

A workflow can be technically correct and still fail adoption because it adds another queue, makes reviewers accountable for unfamiliar suggestions, or does not fit the system where work occurs. Observe use rather than relying only on satisfaction statements.

## Assign the maintenance work

As a proposed model, the company owns its workflow, local policy, adoption, and business outcome. A central maintainer owns shared code, contracts, compatibility evidence, and releases. Verify the actual operating model before assigning these roles in a company.

Name owners for configuration, incident handling, policy updates, model changes, and retirement. A policy change can require immediate re-evaluation even when code is unchanged. Preserve model, prompt, configuration, and core versions in run records.

Rehearse a bad output, a policy update, and rollback. Know which company instances are affected and how to restore a prior package/config pair. Do not silently change every deployment when only one company needs a rule update.

## Reward useful reuse rather than launches

Central teams may count catalog entries; local teams may prefer a quick fork; PMs may avoid shared maintenance. These incentives can turn a platform into a queue of bespoke work. Measure time to a useful second deployment and recurring support burden alongside local outcome.

Periodically compare the full agent harness with one simpler variant on fixed tasks. Keep model/settings constant while changing one instruction layer. Remove scaffolding only if important behavior remains acceptable and overall effort improves.

End the pilot with a decision: promote, revise, keep local, or retire. State the evidence, uncertainty, owner, and next review date. An honest local-only conclusion can prevent expensive portfolio-wide duplication.

## Worked example — A pilot that should remain local

Company A saves useful time. Company B needs extensive policy work and weekly central debugging, with no net handling-time improvement.

1. Report A’s local outcome separately from the portfolio hypothesis.
2. Include B’s policy preparation, support, and rework in the comparison.
3. Keep A operating if its owner accepts the maintenance cost.
4. Reuse narrower components for B or retire the common workflow until new evidence supports it.

Portfolio value is not the sum of successful demos.

## Practice — Choose a leading operational signal

You can track catalog entries, prompts generated, active operators, and time to a useful second deployment. Which two are closest to adoption and transfer?

<details><summary>Reveal after your attempt</summary>

Active operators and time to a useful second deployment are closer to the intended behavior. They still need quality, local outcome, and support-cost measures. Entries and prompts are activity measures that can grow without value.

</details>

## Assigned reading

- [The AI-native SDLC playbook](https://academy.claude.com/courses/ai-native-sdlc-playbook) — Focus on intent, requirements, design, and feedback loops.
- [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — How to select and maintain useful context.
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — Optional web security review reference.

## Knowledge checks

1. What should a pilot charter establish before launch?
   - A. Only a model choice.
   - B. Outcome, quality constraints, baseline, owner, sample, and stop conditions.
   - C. A guaranteed portfolio-wide rollout date.

2. Which change can require re-evaluation even with unchanged code?
   - A. A new approved company policy version.
   - B. A cosmetic screenshot for the catalog.
   - C. Renaming a meeting.

3. Which is a valid final decision?
   - A. Every pilot must become a shared platform.
   - B. A demo means the pilot is done.
   - C. Keep the successful local solution while narrowing or retiring the shared workflow.

## Assignment — Write the rollout decision

Assess the capstone as a company intervention and a portfolio investment.

### Pilot charter

Define users, owners, approved inputs, duration, baseline, metrics, thresholds, and stop conditions.

### Ownership and incidents

Assign proposed shared/local responsibilities and describe policy updates, bad outputs, rollback, and compatibility checks.

### Economics and incentives

Include observed or estimated adaptation effort, maintenance, adoption, local outcome, and incentives to fork or overload the central team.

### Decision and next review

Recommend promote, revise, keep local, or retire. Cite evidence, remaining unknowns, owner, and review date.

## Rubric

- [ ] Company outcome and portfolio reuse are assessed separately.
- [ ] Quality, adoption, and total recurring effort are measured.
- [ ] Ownership, policy updates, rollback, and support boundaries are clear.
- [ ] The final decision follows evidence and names unresolved gaps.

## Module instructor prompt

Assess this workflow as a portfolio investment. Compare local outcomes, second-company adaptation cost, maintenance, reliability, and adoption. Identify incentives creating forks or central bottlenecks. Recommend promote, revise, keep local, or retire. Separate observations from assumptions and name the next decisive evidence.
