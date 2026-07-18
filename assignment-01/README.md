# Assignment 1: The Technique Ladder

**Topic:** Prompt Engineering Foundations  
**Status:** Completed

## Overview

This assignment tests whether a simpler and cheaper prompting technique can outperform a more elaborate one for a real business task. The comparison is controlled: the underlying task input remains fixed, the scoring rubric is defined before any runs, and all raw outputs are retained without editing.

## Business task selected

Convert a technical checkout-service incident into:

1. a concise external stakeholder update; and
2. a prioritised internal engineering action recommendation.

The scenario reflects a common software-delivery problem: converting technical evidence into useful communication for customers, Support, Operations, and engineering teams.

## Techniques compared

1. Zero-shot
2. Few-shot with original examples
3. Structured reasoning
4. Role + constraints

## Result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role + constraints | **15/15** |
| 2 | Structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

The recommended production approach is **role + constraints**. It provided the strongest audience separation, factual discipline, and actionability without the example overhead of few-shot prompting or the longer output associated with structured reasoning.

A separate healthcare-safety failure case showed that this technique is not universally superior. Its commerce-specific action schema omitted a necessary clinical-safety escalation, allowing structured reasoning to outperform it.

## Files

- [Assignment brief](./assignment-brief.pdf)
- [Complete Markdown solution](./solution/complete-submission.md)
- [Submission PDF](./submission/assignment-01-complete.pdf)
- [Submission DOCX](./submission/assignment-01-complete.docx)
- [Original repository package](./archive/assignment-01-repo-files.zip)

## Submission contents

The complete solution includes:

- the rubric written before the runs
- four prompts and four unedited outputs
- a filled score table
- scoring rationale
- a genuine failure-case transcript and diagnosis
- token and latency comparison
- the final ship decision
- model/version and parameter disclosure

## Reproducibility note

The original ChatGPT runs remain historical evidence. A separate, additive API verification set ran the primary and healthcare comparisons three times each at **temperature 0.2** using **gpt-4.1-mini**. Unedited outputs and measurable metadata are retained in [verification/api-runs](../verification/api-runs/); they do not overwrite the original transcripts.
