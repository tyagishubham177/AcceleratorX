# Assignment 3: Prompting as an Engineering Practice

**Topic:** Prompt Lab + LangSmith Tracking  
**Status:** Completed

## Start here

- [Final submission PDF](./submission/assignment-03-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [Editable submission DOCX](./submission/assignment-03-complete.docx)
- [Evaluation tracker](./submission/assignment-03-evaluation-tracker.xlsx)
- [Evidence guide](./evidence/README.md)

## What was tested

A fictional employee-onboarding assistant was evaluated across three prompt versions using a frozen policy, a fixed eight-question test set, and a pre-committed rubric.

## Result

| Version | Score | Percentage | Questions passed | Critical failures |
|---|---:|---:|---:|---:|
| V1 | 69/96 | 71.9% | 2/8 | 2 |
| V2 | 93/96 | 96.9% | 8/8 | 0 |
| V3 | **95/96** | **99.0%** | **8/8** | **0** |

V3 retained V2's factual controls while improving presentation flexibility. It is the best tested version, but the proposed production gate still requires broader repeated testing and independent review.

## Evidence

The submitted PDF, DOCX, evaluation workbook, policy one-pager, and dashboard remain the formal assignment artifacts. The repository also contains 24 unedited `gpt-5.6-luna` API records covering all eight questions across V1, V2, and V3.

The API responses report **temperature 1.0** and **top_p 0.98**. These were returned sampling defaults, not values explicitly supplied in the request.

The archived ZIP is retained as the original repository package.
