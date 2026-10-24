# Module 02 — Choose the right reuse boundary

Week 1 · 3 hours · Deliverable: Reuse assessment

Decide what transfers before you build it.

## Learning objectives

- Compare workflows at the decision level.
- Distinguish configuration, adapters, components, and shared services.
- Estimate second-company adoption effort separately.

## Similar wording can hide different work

Two companies both receive “move my booking” requests. One permits a scheduling change before dispatch. The other requires an administrator’s approval and a capacity check. The words overlap, but the authorization and error consequences differ.

Compare inputs, decisions, evidence, permitted actions, output, and risk tolerance. The reusable mechanism might be evidence-grounded routing and drafting. Permission to perform the action remains specific to each company.

## Reuse has several levels

You can reuse a discovery playbook, a test pattern, an input adapter, a model interface, a configured workflow, or a hosted service. Select the smallest boundary that creates repeatable value. A common repository does not require a common database or runtime.

Configuration changes supported business vocabulary, policy references, or escalation rules through a documented schema. An adapter translates a system-specific input into the stable contract. A core change modifies shared behavior and requires regression checks for every affected deployment.

When every difference needs a new conditional branch in shared code, reconsider the boundary. Separate solutions can be the more economical decision. You should record that conclusion rather than hide bespoke work behind a platform label.

## Count adoption work

Code reuse percentage is a poor standalone investment measure. Policy preparation, labeled examples, permissions, connectors, deployment, operator training, and maintenance can dominate the cost. Estimate these for the first and second company.

Search existing internal solutions and approved vendor capabilities before commissioning a build. Confirm another PM has the need rather than extrapolating it from a portfolio category. Treat the first workflow as a candidate until the second adaptation produces evidence.

## Worked example — One request, two company policies

Company A handles field service scheduling. Company B handles training sessions. Both receive the request “How do I move my booking?”

1. Shared core: validate input, propose a route, select approved evidence, draft or abstain, and require review.
2. Company A configuration: scheduling taxonomy and a rule to ask whether dispatch has happened.
3. Company B configuration: session-change taxonomy, administrator approval, and capacity confirmation.
4. Helpdesk connectors are adapters. A new automatic action or approval model changes the core contract and needs its own design.

A common mechanism can support different local decisions when the differences are explicit and testable.

## Practice — Classify the change

Company B uses a different helpdesk, a different escalation queue, and requires approval before every draft is exported. Which differences belong in an adapter, configuration, or core?

<details><summary>Reveal after your attempt</summary>

The helpdesk translation is an adapter. The escalation destination is configuration. The review requirement fits existing configuration only if the core already supports that contract; otherwise it requires a core change and regression tests. Do not label an unsupported behavior “just configuration.”

</details>

## Assigned reading

- [GitHub Spec Kit](https://github.github.com/spec-kit/quickstart.html) — Read the specification, clarification, planning, and task breakdown sections.
- [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) — Inputs, outputs, and distribution of reusable procedures.

## Knowledge checks

1. Which is the strongest evidence for portfolio reuse?
   - A. Both companies use the term onboarding.
   - B. A second PM validates the same decision pattern and successfully adapts the package.
   - C. The first app has many configurable fields.

2. Which is usually adapter work?
   - A. Mapping a helpdesk payload to the stable request schema.
   - B. Changing the shared review-state machine.
   - C. Changing the meaning of an approved result.

3. A shared solution reuses 80% of the code but requires extensive integration. What follows?
   - A. Reuse is automatically cheaper.
   - B. The integration work should be excluded from ROI.
   - C. Compare total adoption and maintenance cost with alternatives.

## Assignment — Write the reuse assessment

Compare the fictional companies at the workflow level. Recommend reuse, buy, build, process change, or defer.

### Common decision pattern

Compare user, trigger, inputs, decisions, evidence, outputs, and risks.

### Differences and boundaries

Classify each difference as configuration, adapter, core behavior, or a reason to keep the solution local.

### Alternatives and recommendation

Consider an existing component and a vendor capability. State what would invalidate your recommendation.

### Second-company effort

Estimate policy preparation, data access, labeling, integration, deployment, training, and support.

## Rubric

- [ ] A shared decision pattern is explicit.
- [ ] Company differences are classified and justified.
- [ ] The recommendation includes alternatives and poor-fit cases.
- [ ] Second-company effort includes more than code changes.

## Module instructor prompt

Compare these two workflows. Identify the shared decision pattern and differences affecting correctness, permissions, integration, and adoption. Classify each as configuration, adapter work, or core behavior. Recommend the smallest useful reuse boundary and explain when separate solutions would be better.
