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

## Decision

V3 retained V2's factual controls while replacing its mandatory template with adaptive presentation. It is the best tested version, but not automatically production-ready.

## Reproducibility

Additive verification reran Q1, Q5, and Q6 for V2 and V3 three times each through the OpenAI API using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**. Response IDs, timestamps, latency, token usage, prompt hashes, and unedited outputs are retained.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-03-complete.pdf)
- [Evaluation tracker](./submission/assignment-03-evaluation-tracker.xlsx)
- [Policy one-pager PDF](./submission/assignment-03-policy-one-pager.pdf)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the original formatted submission record; the 0.2 API runs are additive verification.
