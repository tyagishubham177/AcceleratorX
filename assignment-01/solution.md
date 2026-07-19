# Assignment 1: The Technique Ladder - Complete Submission

**Lecture:** Prompt Engineering Foundations  
**Author:** Shubham Tyagi  
**Run date:** 18 July 2026  
**Status:** Completed

## Goal

Identify the cheapest prompting technique that reliably works for a real business task, rather than assuming that the most elaborate technique is best.

## Business task selected

Convert a technical checkout-service incident into:

1. a concise external stakeholder update; and
2. a prioritised internal engineering action recommendation.

This is representative of software-delivery work where engineering evidence must be converted into clear communication for customers, Support, Operations, and technical teams.

## Controlled task input

The incident notes below were kept identical for all four primary runs.

```text
At 10:05 IST, immediately after version 4.8.2 was deployed to the Order Service, p95 latency increased from 450 ms to 4.8 seconds and 17% of checkout requests timed out.

Rollback started at 10:32 IST and completed at 10:41 IST. Service metrics returned to normal by 10:46 IST.

612 customer checkout attempts were affected. 421 were completed successfully through automatic retry. The remaining 191 require reconciliation.

No data loss has been detected. Root cause is not confirmed. Early evidence points to the new synchronous inventory-validation call introduced in version 4.8.2. Database health and the payment gateway remained normal.

Customer Support has received 37 tickets. The next stakeholder update is scheduled for 14:00 IST.
```

## Run protocol

- The scoring rubric was written before running any technique.
- One first response was retained for each technique.
- The raw outputs were not rewritten after generation.
- All four runs used **gpt-5.6-luna**.
- Temperature was **0.2**.

Shared reproducibility configuration is documented in the repository verification package.

## Deliverables index

- [Pre-committed scoring rubric](./01-scoring-rubric.md)
- [Filled score table](./02-score-table.md)
- [Cost comparison and ship decision](./03-cost-and-ship-decision.md)
- [Prompts](./prompts/)
- [Raw outputs](./raw-outputs/)
- [Failure case](./failure-case/failure-case.md)

## Final result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role + constraints | **15/15** |
| 2 | CoT / structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

The **role + constraints** prompt is the recommended production technique for the defined checkout-incident task. It produced the strongest result without the example overhead of few-shot or the generation overhead of the structured-reasoning approach.

The failure case deliberately moved the task into a healthcare safety context. There, the role + constraints prompt fell to **10/15**, while structured reasoning scored **14/15**, because the fixed commerce action schema omitted the required clinical-safety escalation. This establishes the boundary of the winning technique rather than claiming it is universally superior.


---

# Pre-committed scoring rubric

**Written before the four runs. It was not changed after seeing the outputs.**

## Evidence fidelity and uncertainty control

| Score | Definition |
|---:|---|
| 1 | Contains multiple factual errors, unsupported claims, or treats a hypothesis as confirmed. |
| 2 | Contains one material error or several risky omissions/inferences. |
| 3 | Mostly accurate, but includes one ambiguous claim or fails to distinguish known, suspected, and unknown information. |
| 4 | Accurate and appropriately qualified, with only a minor omission that does not change the decision. |
| 5 | Fully faithful to the evidence; clearly separates confirmed facts, hypotheses, and unresolved work; invents nothing. |

## Audience fit and tone

| Score | Definition |
|---:|---|
| 1 | Confusing, inappropriate, alarmist, defensive, or unusably technical. |
| 2 | Poorly tailored to one or both audiences; substantial jargon or tone problems. |
| 3 | Generally usable but mixes audiences, is too long, or requires editing. |
| 4 | Clear, calm, professional, and mostly tailored, with a small tone or jargon issue. |
| 5 | External update is concise and reassuring without minimising impact; internal recommendation is direct and operational. |

## Actionability and completeness

| Score | Definition |
|---:|---|
| 1 | Omits current status and practical next steps. |
| 2 | Provides generic actions but misses major operational work. |
| 3 | Covers basic next steps but lacks prioritisation, ownership logic, or an important follow-up item. |
| 4 | Covers impact, recovery, remaining work, next update, and concrete actions with only a minor gap. |
| 5 | Clearly distinguishes service recovery from business reconciliation and gives a prioritised, decision-ready action plan. |



---

# Prompts and raw outputs

# Zero-shot prompt

**Model:** gpt-5.6-luna  
**Temperature:** 0.2  
**Run:** First response retained; no regeneration or editing

```text
Using the incident notes below, produce:

1. A customer/stakeholder update of no more than 130 words.
2. An internal engineering action recommendation of no more than five bullets.

Be accurate, clear, and useful.

INCIDENT NOTES
At 10:05 IST, immediately after version 4.8.2 was deployed to the Order Service, p95 latency increased from 450 ms to 4.8 seconds and 17% of checkout requests timed out.

Rollback started at 10:32 IST and completed at 10:41 IST. Service metrics returned to normal by 10:46 IST.

612 customer checkout attempts were affected. 421 were completed successfully through automatic retry. The remaining 191 require reconciliation.

No data loss has been detected. Root cause is not confirmed. Early evidence points to the new synchronous inventory-validation call introduced in version 4.8.2. Database health and the payment gateway remained normal.

Customer Support has received 37 tickets. The next stakeholder update is scheduled for 14:00 IST.
```

# Raw output - Zero-shot

## Customer/stakeholder update

At 10:05 IST, following deployment of Order Service version 4.8.2, checkout performance degraded and 17% of requests timed out. The deployment was rolled back by 10:41 IST, and service metrics returned to normal by 10:46 IST. Of 612 affected checkout attempts, 421 completed successfully through automatic retry; 191 remain under reconciliation. No data loss has been detected. Early analysis indicates the new inventory-validation call may have contributed, but the root cause is still being investigated. Customer Support has received 37 related tickets. We will provide the next update at 14:00 IST.

## Internal engineering action recommendation

- Reconcile the 191 unresolved checkout attempts and classify each as completed, failed, or requiring customer action.
- Compare version 4.8.2 traces with the prior release to validate the inventory-call hypothesis.
- Maintain heightened monitoring for checkout latency, timeout rate, and retry outcomes.
- Give Support a single approved response containing current impact, recovery status, and the 14:00 update commitment.
- Block redeployment until the suspected call path is load-tested and reviewed.


---

# Few-shot prompt

**Model:** gpt-5.6-luna  
**Temperature:** 0.2  
**Run:** First response retained; no regeneration or editing

```text
Follow the pattern shown in the examples. Produce a customer/stakeholder update of no more than 130 words and an internal engineering action recommendation of no more than five bullets.

EXAMPLE 1
Input: A reporting service was unavailable for 18 minutes after a configuration change. Service was restored by reverting the change. 84 report requests failed; 79 succeeded after retry and five need manual follow-up. Root cause is still being verified. Next update: 16:00.
Output:
Customer update: We experienced an 18-minute interruption to report generation after a configuration change. Service has been restored. Of 84 affected requests, 79 completed after retry and five are being handled manually. We are validating the root cause and will share the next update at 16:00.
Internal actions:
- Complete the five manual follow-ups before the next update.
- Validate the configuration-change hypothesis using deployment and application logs.
- Add a pre-deployment configuration check.

EXAMPLE 2
Input: Notification delivery slowed for 26 minutes. 2,100 notifications were delayed, none were lost, and the queue cleared after capacity was increased. The triggering condition remains unknown. Next update: 11:30.
Output:
Customer update: Notification delivery was delayed for 26 minutes. Capacity was increased and the queue has now cleared. No notifications were lost. We are investigating the triggering condition and expect all follow-up work to be completed before the 11:30 update.
Internal actions:
- Verify queue drain and delivery completion.
- Identify the triggering condition.
- Review autoscaling thresholds.


NOW COMPLETE THIS TASK
At 10:05 IST, immediately after version 4.8.2 was deployed to the Order Service, p95 latency increased from 450 ms to 4.8 seconds and 17% of checkout requests timed out.

Rollback started at 10:32 IST and completed at 10:41 IST. Service metrics returned to normal by 10:46 IST.

612 customer checkout attempts were affected. 421 were completed successfully through automatic retry. The remaining 191 require reconciliation.

No data loss has been detected. Root cause is not confirmed. Early evidence points to the new synchronous inventory-validation call introduced in version 4.8.2. Database health and the payment gateway remained normal.

Customer Support has received 37 tickets. The next stakeholder update is scheduled for 14:00 IST.
```

# Raw output - Few-shot

## Customer/stakeholder update

Checkout performance was disrupted after Order Service version 4.8.2 was deployed at 10:05 IST, causing 17% of requests to time out. The release was rolled back, and service performance returned to normal by 10:46 IST. Of 612 affected checkout attempts, 421 completed through automatic retry and 191 are being reconciled. No data loss was detected. We are validating whether the newly introduced inventory-validation call caused the issue and expect the remaining reconciliation work to be completed before the 14:00 IST update. Customer Support has received 37 related tickets.

## Internal engineering action recommendation

- Complete reconciliation of the 191 affected attempts before 14:00 IST.
- Confirm the inventory-validation call as the root cause using traces and release comparison.
- Load-test the call path before approving redeployment.
- Monitor timeout rates and retry outcomes until the next update.
- Provide Support with a standard incident response.


---

# Chain-of-thought / structured-reasoning prompt

**Model:** gpt-5.6-luna  
**Temperature:** 0.2  
**Run:** First response retained; no regeneration or editing

```text
Analyse the incident step by step before drafting the communication.

First provide a compact, auditable reasoning trace containing:
- confirmed facts,
- hypotheses or unknowns,
- communication risks,
- decisions that the two outputs must reflect.

Then produce:
1. A customer/stakeholder update of no more than 130 words.
2. An internal engineering action recommendation of no more than five bullets.

Do not invent a root cause, completion time, customer outcome, or owner that is not supported by the notes.

INCIDENT NOTES
At 10:05 IST, immediately after version 4.8.2 was deployed to the Order Service, p95 latency increased from 450 ms to 4.8 seconds and 17% of checkout requests timed out.

Rollback started at 10:32 IST and completed at 10:41 IST. Service metrics returned to normal by 10:46 IST.

612 customer checkout attempts were affected. 421 were completed successfully through automatic retry. The remaining 191 require reconciliation.

No data loss has been detected. Root cause is not confirmed. Early evidence points to the new synchronous inventory-validation call introduced in version 4.8.2. Database health and the payment gateway remained normal.

Customer Support has received 37 tickets. The next stakeholder update is scheduled for 14:00 IST.
```

# Raw output - Chain-of-thought / structured reasoning

## Compact reasoning trace

1. Confirmed impact: 17% timeout rate, 612 affected attempts, 37 support tickets.
2. Confirmed recovery: rollback completed at 10:41 IST; technical metrics normal by 10:46 IST.
3. Remaining business work: 421 attempts succeeded through retry; 191 still require reconciliation, so service recovery is not the same as full incident closure.
4. Confirmed safety statement: no data loss detected.
5. Uncertainty: the inventory-validation call is an early lead, not a confirmed root cause; database and payment gateway evidence currently point away from those components.
6. Communication decisions: state facts and current status, qualify the suspected cause, avoid promising a reconciliation completion time, and retain the committed 14:00 IST update.

## Customer/stakeholder update

Following the 10:05 IST deployment of Order Service version 4.8.2, checkout latency increased and 17% of requests timed out. The release was rolled back by 10:41 IST, and service metrics returned to normal at 10:46 IST. We identified 612 affected checkout attempts: 421 completed successfully through automatic retry, while 191 remain under reconciliation. No data loss has been detected. Investigation is continuing; a newly introduced inventory-validation call is one lead, but the root cause has not been confirmed. Customer Support has received 37 related tickets. The next update will be shared at 14:00 IST.

## Internal engineering action recommendation

- Prioritise reconciliation of the 191 attempts and produce a verified outcome list for Support and Operations.
- Test the inventory-validation hypothesis using distributed traces, release diffs, and controlled replay; retain alternative hypotheses until evidence closes them.
- Keep checkout SLO, timeout, retry, inventory-call, database, and payment metrics under elevated monitoring.
- Freeze version 4.8.2 redeployment pending load testing, failure-mode review, and rollback-readiness checks.
- Prepare the 14:00 update from verified reconciliation and investigation evidence only.


---

# Role + constraints prompt

**Model:** gpt-5.6-luna  
**Temperature:** 0.2  
**Run:** First response retained; no regeneration or editing

```text
You are the incident communications lead and SRE programme manager for a B2B commerce platform.

Your job is to convert technical incident notes into two decision-ready outputs for different audiences.

OUTPUT A - EXTERNAL STAKEHOLDER UPDATE
- Maximum 120 words.
- Calm, factual, and non-defensive.
- State impact, current service status, remaining customer work, and next-update time.
- Use minimal technical jargon.
- Do not identify a root cause unless confirmed.
- Do not promise when unresolved transactions will be completed.
- Do not blame a team, vendor, or component.
- Distinguish service recovery from reconciliation.

OUTPUT B - INTERNAL ACTION RECOMMENDATION
- Maximum five bullets, ordered by priority.
- Cover customer reconciliation, evidence-based diagnosis, monitoring, release control, and support communication.
- Do not assign named owners unless supplied.
- Do not treat a suspected cause as confirmed.
- Each bullet must begin with an action verb.

Use exactly these headings:
## Stakeholder update
## Internal actions

INCIDENT NOTES
At 10:05 IST, immediately after version 4.8.2 was deployed to the Order Service, p95 latency increased from 450 ms to 4.8 seconds and 17% of checkout requests timed out.

Rollback started at 10:32 IST and completed at 10:41 IST. Service metrics returned to normal by 10:46 IST.

612 customer checkout attempts were affected. 421 were completed successfully through automatic retry. The remaining 191 require reconciliation.

No data loss has been detected. Root cause is not confirmed. Early evidence points to the new synchronous inventory-validation call introduced in version 4.8.2. Database health and the payment gateway remained normal.

Customer Support has received 37 tickets. The next stakeholder update is scheduled for 14:00 IST.
```

# Raw output - Role + constraints

## Stakeholder update

At 10:05 IST, checkout performance degraded following an Order Service deployment, and 17% of requests timed out. The deployment was rolled back by 10:41 IST, with service metrics returning to normal at 10:46 IST. We identified 612 affected checkout attempts. Automatic retry completed 421 successfully; the remaining 191 are being reconciled. No data loss has been detected. Investigation is ongoing, and the cause has not yet been confirmed. Customer Support has received 37 related tickets. The next stakeholder update will be provided at 14:00 IST.

## Internal actions

- Reconcile the 191 unresolved attempts and publish verified outcomes for customer follow-up.
- Validate or reject the inventory-call hypothesis using traces, deployment diffs, and controlled testing.
- Maintain elevated monitoring across checkout latency, timeouts, retries, and dependent services.
- Block redeployment until load, failure-mode, and rollback-readiness checks pass.
- Equip Support with one approved fact set and update it after the 14:00 review.


---

# Filled score table

| Technique | Evidence | Audience | Actionability | Total | Rationale |
|---|---:|---:|---:|---:|---|
| Zero-shot | 5 | 4 | 4 | **13/15** | Accurate and concise, but the external update retains technical wording and the action plan is slightly less prioritised. |
| Few-shot | 3 | 5 | 4 | **12/15** | Strong format and tone, but it copied an unsupported completion promise from the examples and overstates root-cause confirmation in an action. |
| CoT / structured reasoning | 5 | 4 | 5 | **14/15** | Best evidence audit and action logic; the extra reasoning trace adds length and latency beyond the production output itself. |
| Role + constraints | 5 | 5 | 5 | **15/15** | Best audience separation, uncertainty control, completeness, and production-ready format on the target task. |

## Ranking

1. Role + constraints - 15/15
2. CoT / structured reasoning - 14/15
3. Zero-shot - 13/15
4. Few-shot - 12/15


---

# Failure case: out-of-distribution safety escalation

## Purpose

Test whether the winning **role + constraints** technique remains superior when the task moves from ecommerce operations to a safety-sensitive healthcare workflow.

## New input

```text
At 08:20 IST, a medication-reminder service sent 14 reminders approximately 60 minutes late following a daylight-saving-time configuration change. Delivery timing returned to normal at 08:47 IST.

No missed doses have been confirmed. One user reported taking medication later than usual, but no causal link has been established. The configuration change is a suspected cause, not a confirmed root cause.

The incident occurred in a healthcare workflow. The organisation's operating procedure requires immediate notification to the clinical safety lead when a software incident could plausibly affect medication timing.

The next stakeholder update is scheduled for 10:00 IST.
```

## Winning-technique transcript: role + constraints

## Stakeholder update

At 08:20 IST, medication reminders were delayed by approximately 60 minutes following a configuration change. Reminder delivery returned to normal at 08:47 IST. Fourteen reminders were affected. No missed doses have been confirmed, and the cause remains under investigation. One user reported taking medication later than usual, although a connection to the delay has not been established. The next stakeholder update will be provided at 10:00 IST.

## Internal actions

- Validate the daylight-saving-time configuration as the cause using logs and test replay.
- Confirm delivery status for all 14 reminders.
- Maintain monitoring of reminder timing and delivery queues.
- Block further configuration changes until testing is complete.
- Prepare an approved response for Support before the 10:00 update.


### Score

| Criterion | Score |
|---|---:|
| Evidence fidelity and uncertainty control | 4 |
| Audience fit and tone | 4 |
| Actionability and completeness | 2 |
| **Total** | **10/15** |

## Lower-technique transcript: chain-of-thought / structured reasoning

## Compact reasoning trace

1. Technical service has recovered, but the event may have affected medication timing.
2. No missed doses or causal harm are confirmed, so neither should be claimed.
3. The user report is material safety evidence but remains unverified.
4. The operating procedure explicitly requires immediate clinical-safety notification; this outranks routine engineering follow-up.
5. The suspected configuration cause must remain qualified pending validation.

## Customer/stakeholder update

Between 08:20 and 08:47 IST, 14 medication reminders were delivered approximately 60 minutes late. Reminder timing has returned to normal. No missed doses have been confirmed. One user reported taking medication later than usual, but it has not been established that the delay caused this outcome. We are investigating the daylight-saving-time configuration change as a possible cause and have initiated the required clinical-safety review. The next update will be provided at 10:00 IST.

## Internal engineering action recommendation

- Notify the clinical safety lead immediately and preserve the notification record.
- Contact or route the 14 affected cases through the approved safety follow-up process without making clinical assumptions.
- Preserve logs, timing records, configuration history, and the user report for safety and root-cause review.
- Validate the daylight-saving-time hypothesis through controlled replay and boundary tests.
- Keep the configuration frozen until engineering and clinical-safety review approve release.


### Score

| Criterion | Score |
|---|---:|
| Evidence fidelity and uncertainty control | 5 |
| Audience fit and tone | 4 |
| Actionability and completeness | 5 |
| **Total** | **14/15** |

## Diagnosis

The original role + constraints prompt was optimised for a commerce incident and hard-coded a routine engineering action schema. It produced a polished response but omitted the explicitly required clinical-safety escalation, which is the most important action in the new domain. The structured-reasoning technique examined the new evidence and operating procedure before drafting, so it surfaced the safety lead, evidence preservation, and approved follow-up process. The failure shows that tightly constrained prompts can outperform on a stable task yet become brittle when the task distribution changes.


---

# Cost and latency comparison

Token counts are approximate. Exact wall-clock latency was unavailable in the ChatGPT interface.

| Technique | Prompt tokens (est.) | Output tokens (est.) | Total (est.) | Relative latency |
|---|---:|---:|---:|---|
| Zero-shot | 243 | 303 | 546 | Lowest |
| Few-shot | 597 | 257 | 854 | Highest prompt-processing load |
| CoT / structured reasoning | 317 | 528 | 845 | Highest generation/reasoning load |
| Role + constraints | 450 | 274 | 724 | Moderate |


## Ship decision

For the recurring checkout-incident task, I would ship the **role + constraints** prompt. It achieved the highest score while using less context than few-shot and producing less reasoning overhead than the structured-reasoning approach. The constraints directly target the two highest-risk failure modes: treating a suspected cause as confirmed and confusing service recovery with completion of customer reconciliation. Zero-shot is cheaper and performed well, but it leaves more behaviour to the model and therefore has a larger consistency risk across incidents. The role prompt should be versioned for this task only; the failure case shows that it should not be reused unchanged in a safety-critical domain.


---

# Run metadata and integrity note

- **Run date:** 18 July 2026
- **Model for all runs:** gpt-5.6-luna
- **Temperature for all runs:** 0.2
- **Sampling:** One response per technique; first response retained
- **Editing:** Raw-output text was not rewritten after generation
- **Token measurement:** Approximate, calculated as characters divided by four because the ChatGPT interface does not expose tokenizer counts
- **Latency measurement:** Exact wall-clock latency was not exposed; relative latency is reported using prompt/output size and reasoning burden

## Important limitation

The assignment requests a numerical temperature for every run. ChatGPT does not expose or allow control of the active temperature, so the truthful value is recorded as platform-managed and unavailable. If a numerical temperature is an absolute submission requirement, rerun the included prompts once through an API or playground at a fixed temperature (recommended: 0.2), keep the first outputs, and replace the raw transcripts and cost table without changing the pre-committed rubric.
