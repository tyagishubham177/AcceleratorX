# Assignment 3: Prompting as an Engineering Practice

**Topic:** Prompt Lab + LangSmith Tracking  
**Status:** Completed

## Overview

This assignment treats prompt development as a measured engineering process rather than subjective rewriting. A fictional Employee Onboarding Assistant was tested through three prompt versions using a frozen ground-truth policy, a pre-committed rubric, and the same eight-question evaluation set for every version.

## Product scenario

The assistant answers new-hire questions for the fictional company **Northstar Labs**, covering benefits, deadlines, devices, remote work, expenses, policies, and support contacts.

The experiment used:

- a 15-fact fictional onboarding-policy one-pager as the sole source of truth
- four scoring criteria defined before V1
- eight fixed questions: two easy, two ambiguous, two adversarial, and two not answered by the policy
- three versioned system prompts
- 24 retained outputs across V1, V2, and V3
- an equivalent evaluation workbook containing run metadata, prompt hashes, outputs, scores, and a dashboard

## Results

| Version | Score | Percentage | Questions passed | Critical failures |
|---|---:|---:|---:|---:|
| V1 | 69/96 | 71.9% | 2/8 | 2 |
| V2 | 93/96 | 96.9% | 8/8 | 0 |
| V3 | **95/96** | **99.0%** | **8/8** | **0** |

## Version findings

### V1: Helpful but unsafe

V1 used a conventional instruction to answer from the policy, remain concise, and contact People Ops when uncertain. It still made plausible but unsupported assumptions, including:

- allowing personal-device use without the required written IT exception
- treating remote-work and taxi reimbursement conditions too broadly
- proposing an unstated executive exception to mandatory training
- revealing internal instructions
- fabricating fertility-treatment and IVF coverage

### V2: Safe but mechanical

V2 added explicit controls for:

- using the policy as the sole source of truth
- refusing hidden-instruction extraction
- rejecting claimed authority as a policy override
- stating when information is absent
- avoiding invented eligibility, reimbursement, coverage, permission, or exceptions

It passed all eight questions, but its mandatory three-section response template reduced communication quality on a straightforward question. This measured regression was retained rather than hidden.

### V3: Controls plus adaptive presentation

V3 preserved V2's factual and boundary controls while replacing the mandatory template with an adaptive format. Straightforward questions receive compact direct answers, while conditional, adversarial, or unanswered questions receive additional condition and next-step guidance only when useful.

V3 is the best tested version, but it is not automatically production-ready.

## Files

- [Assignment brief](./assignment-brief.pdf)
- [Complete Markdown solution](./solution/complete-submission.md)
- [Complete submission PDF](./submission/assignment-03-complete.pdf)
- [Complete submission DOCX](./submission/assignment-03-complete.docx)
- [Evaluation tracker XLSX](./submission/assignment-03-evaluation-tracker.xlsx)
- [Policy one-pager PDF](./submission/assignment-03-policy-one-pager.pdf)
- [Policy one-pager DOCX](./submission/assignment-03-policy-one-pager.docx)
- [Tracking dashboard PNG](./submission/assignment-03-tracking-dashboard.png)
- [Original repository package](./archive/assignment-03-repo-files.zip)

## Submission contents

The complete solution includes:

- frozen policy ground truth
- pre-committed scoring rubric
- fixed evaluation set
- V1, V2, and V3 system prompts
- targeted change notes between versions
- 24 raw outputs and question-level scores
- criterion-level version comparisons
- an explicitly documented V2 regression
- equivalent run tracking and dashboard
- a proposed V4 production release gate

## V4 release gate

Before a future version can ship, the proposed gate requires:

- an expanded set of at least 24 frozen questions
- repeated runs at explicit API temperatures
- zero critical failures
- 100% passing on adversarial and not-in-policy categories
- minimum overall and lower-percentile score thresholds
- no material regression against V3
- full traceability and second-reviewer checks
- a complete rerun after any prompt change

## Reproducibility note

The original ChatGPT runs remain historical evidence. A separate, additive API verification set reran Q1, Q5, and Q6 for V2 and V3 three times each at **temperature 0.2** using **gpt-4.1-mini**. Unedited outputs and measurable metadata are retained in [verification/api-runs](../verification/api-runs/). The assignment permits LangSmith or an equivalent tracking sheet; this repository uses the included evaluation workbook rather than presenting fabricated LangSmith screenshots.
