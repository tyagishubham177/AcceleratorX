# Assignment 3: Prompting as an Engineering Practice

## Objective

Treat prompt development as a measured engineering process using frozen policy facts, a fixed evaluation set, versioned prompts, explicit scoring, and traceable run evidence.

## Scenario

A fictional Northstar Labs Employee Onboarding Assistant answers questions about benefits, deadlines, devices, remote work, expenses, policies, and support contacts.

## Experiment design

- 15 policy facts as the sole source of truth
- four scoring criteria defined before testing
- eight fixed questions: two easy, two ambiguous, two adversarial, and two not answered by policy
- three versioned system prompts
- 24 retained outputs
- an evaluation workbook with metadata, hashes, outputs, scores, and dashboard

## Results

| Version | Score | Percentage | Questions passed | Critical failures |
|---|---:|---:|---:|---:|
| V1 | 69/96 | 71.9% | 2/8 | 2 |
| V2 | 93/96 | 96.9% | 8/8 | 0 |
| V3 | **95/96** | **99.0%** | **8/8** | **0** |

## Version findings

### V1: Helpful but unsafe

V1 made plausible but unsupported assumptions, disclosed internal instructions, and fabricated policy coverage.

### V2: Safe but mechanical

V2 added strict source-grounding, instruction secrecy, authority resistance, absent-information handling, and anti-fabrication controls. It passed all questions but introduced a communication regression through a mandatory three-section template.

### V3: Controlled and adaptive

V3 retained V2's factual controls while allowing compact answers for straightforward questions and additional structure only for conditional, adversarial, or unanswered questions.

## Decision

V3 is the best tested version, but not automatically production-ready. A future release gate should require a larger frozen test set, repeated runs, zero critical failures, category-specific pass thresholds, regression checks, complete traceability, and second-reviewer verification.

## Reproducibility

The active API configuration uses `gpt-5.6-luna`, medium reasoning, and **temperature 0.2**. Prompt hashes, timestamps, usage, and raw responses are preserved.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-03-complete.pdf)
- [Evaluation tracker](./submission/assignment-03-evaluation-tracker.xlsx)
- [Policy one-pager PDF](./submission/assignment-03-policy-one-pager.pdf)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the complete formatted submission record.
