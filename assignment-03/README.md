# Assignment 3: Prompting as an Engineering Practice

**Topic:** Prompt Lab + LangSmith Tracking  
**Status:** Completed

## Start here

- [Final submission PDF](./submission/assignment-03-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [Editable submission DOCX](./submission/assignment-03-complete.docx)
- [Evaluation tracker XLSX](./submission/assignment-03-evaluation-tracker.xlsx)
- [Policy one-pager PDF](./submission/assignment-03-policy-one-pager.pdf)
- [Tracking dashboard PNG](./submission/assignment-03-tracking-dashboard.png)
- [Evidence guide](./evidence/README.md)

## What was tested

A fictional Northstar Labs onboarding assistant was evaluated across three prompt versions using a frozen policy, fixed rubric, and eight-question test set.

## Result

| Version | Score | Percentage | Questions passed | Critical failures |
|---|---:|---:|---:|---:|
| V1 | 69/96 | 71.9% | 2/8 | 2 |
| V2 | 93/96 | 96.9% | 8/8 | 0 |
| V3 | **95/96** | **99.0%** | **8/8** | **0** |

V3 preserved the factual controls introduced in V2 while removing the unnecessary mandatory response template. It was the best tested version, though a larger release-gate evaluation would still be required for production use.

## Evidence

The submitted PDF, DOCX, workbook, policy files, and dashboard remain the formal assignment artifacts. The repository contains 24 retained `gpt-5.6-luna` API records covering all eight questions across V1, V2, and V3.

Run configuration: medium reasoning and **temperature 0.2**.

The archived ZIP is retained as the original repository package.
