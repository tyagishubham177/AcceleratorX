# Assignment 1: The Technique Ladder

## Objective

Compare four prompting techniques on the same business task and select the cheapest approach that reliably produces a useful result.

## Task

Convert a technical checkout incident into:

1. a concise external stakeholder update; and
2. a prioritised internal engineering recommendation.

The controlled incident input remained fixed across all techniques.

## Techniques compared

1. Zero-shot
2. Few-shot
3. Structured reasoning
4. Role and constraints

## Scoring rubric

Each output was scored from 1 to 5 on evidence fidelity, audience fit, and actionability. Maximum score: 15.

## Result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role and constraints | **15/15** |
| 2 | Structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

## Decision

Use **role and constraints** for the defined checkout-incident task. It produced the clearest audience separation and strongest operational action plan without the example overhead of few-shot prompting or the longer reasoning burden of structured reasoning.

## Boundary test

A healthcare-safety variant exposed the limit of the winning technique. Its commerce-oriented action schema omitted an immediate clinical-safety escalation, while structured reasoning identified it. The conclusion is task-specific, not universal.

## Reproducibility

Additive verification reran the primary role/structured comparison and the healthcare role/structured comparison three times each through the OpenAI API using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**. Response IDs, timestamps, latency, token usage, prompt hashes, and unedited outputs are retained.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-01-complete.pdf)
- [Editable submission DOCX](./submission/assignment-01-complete.docx)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the original formatted submission record; the 0.2 API runs are additive verification.
