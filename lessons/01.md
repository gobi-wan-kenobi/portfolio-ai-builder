# Module 01 — Diagnose the company problem

Week 1 · 3 hours · Deliverable: Company problem brief

Start with the decision, the workflow, and the economics.

## Learning objectives

- Describe the actual bottleneck without prescribing AI.
- Establish a baseline that includes review, exceptions, and rework.
- Choose a useful first experiment and a clear stop condition.

## Translate the request into a decision

A company says, “Support is overwhelmed. Can we add AI?” That describes a symptom and a preferred technology. It leaves the user, bottleneck, and economic consequence unresolved. Your first responsibility is to identify the work worth changing.

Ask who receives the request, what triggers it, what they must decide, what information they need, and what happens if they are wrong. Trace one recent case from arrival to resolution. Then compare it with a normal case and a difficult exception.

Separate observed facts from interpretations and assumptions. A manager saying “most tickets are repetitive” is a hypothesis until representative requests support it. Ten convenient examples can help discovery but cannot establish a reliable portfolio-wide rate.

## Compare interventions

A clearer self-service screen might remove the request. A routing rule might remove a handoff. A helpdesk feature might already draft a sufficient answer. AI becomes a candidate when language interpretation or synthesis creates useful value that simpler options do not deliver.

Evaluate the whole workflow. A draft created in seconds can still be a poor investment if review and correction take longer than answering manually. Define the quality constraint alongside the speed target: for example, no unsupported policy claims in reviewed pilot outputs.

## Build an honest business case

Use request volume × handling minutes ÷ 60 for baseline monthly hours. For the assisted workflow, include operator effort, review, exceptions, rework, and recurring maintenance. Include each category once. Subtract incremental software and model costs when valuing released capacity.

Released capacity is not automatically cash savings. It may reduce backlog or improve responsiveness without changing payroll. Record which outcome the company actually values. A payback estimate also needs one-time setup and integration costs, and a positive recurring net benefit.

## Worked example — The fast draft that saves little time

Fictional company A processes 1,000 requests per month. Manual handling averages 6 minutes. An assisted workflow takes 4 minutes including review, with another 10 hours of monthly maintenance.

1. Baseline: 1,000 × 6 ÷ 60 = 100 hours per month.
2. Assisted handling: 1,000 × 4 ÷ 60 = 66.7 hours. Add maintenance: 76.7 hours.
3. Net capacity released: 23.3 hours. At an assumed $50 per hour, that is about $1,167 before incremental software costs.
4. The investment remains unproven until you validate handling times, quality, adoption, and implementation cost.

The unit of value is the company outcome after review and maintenance, not the speed of text generation.

## Practice — Five-minute diagnosis

A company asks for an AI onboarding assistant because customers take too long to activate. Write three questions that would distinguish a knowledge problem from product friction or implementation delays.

<details><summary>Reveal after your attempt</summary>

Ask which activation step stalls, what information or permission is missing there, and whether users who receive a correct answer can actually complete the step. A knowledge assistant will not repair an unavailable integration or an unclear setup flow.

</details>

## Assigned reading

- [The AI-native SDLC playbook](https://academy.claude.com/courses/ai-native-sdlc-playbook) — Focus on intent, requirements, design, and feedback loops.
- [GitHub Spec Kit](https://github.github.com/spec-kit/quickstart.html) — Read the specification, clarification, planning, and task breakdown sections.

## Knowledge checks

1. What is the strongest first response to “we need AI for support”?
   - A. Choose a model and build a demo.
   - B. Trace representative requests to identify the bottleneck and baseline.
   - C. Ask every company to use the same helpdesk.

2. A pilot releases 20 staff hours per month. What can you conclude?
   - A. Payroll will fall by 20 hours.
   - B. The solution has positive ROI.
   - C. Capacity may be released; cash savings and ROI need additional evidence.

3. Which baseline is most useful?
   - A. Draft generation time only.
   - B. End-to-end handling time, rework, quality, and volume across representative cases.
   - C. The vendor’s reported productivity increase.

## Assignment — Write the company problem brief

Use the fictional support workflow or a permitted real problem. Keep evidence and assumptions visibly distinct.

### Problem and user

Who performs the work, what triggers it, and what decision must they make?

### Current workflow and evidence

Map the steps, bottleneck, volume, handling time, exceptions, and error consequences. Label estimates.

### Alternatives and economics

Compare process change, rules, an existing vendor feature, and AI. Include review and maintenance.

### Pilot and stop condition

Define a bounded experiment, owner, primary outcome, quality constraint, and a result that would stop the project.

## Rubric

- [ ] The bottleneck is supported by examples or explicitly labeled as an assumption.
- [ ] At least three intervention types are compared.
- [ ] Economics include review, exceptions, maintenance, and setup.
- [ ] The pilot has an owner, quality constraint, and stop condition.

## Module instructor prompt

Interview me about this company problem before proposing a tool. Separate evidence from assumptions. Identify the bottleneck, baseline, error consequence, available data, and cheapest disconfirming experiment. Compare process change, rules, vendor capability, and AI. Do not invent ROI or customer demand.
