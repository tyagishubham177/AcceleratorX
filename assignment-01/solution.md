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

Each output was scored from 1 to 5 on:

- evidence fidelity and uncertainty control;
- audience fit and tone; and
- actionability and completeness.

Maximum score: 15.

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

A healthcare-safety variant exposed the limit of the winning technique. Its commerce-oriented action schema omitted an immediate clinical-safety escalation, while structured reasoning identified it. The conclusion is therefore task-specific, not universal.

## Reproducibility

The active API configuration uses `gpt-5.6-luna`, medium reasoning, and **temperature 0.2**. Request configuration, hashes, timestamps, usage, and raw responses are preserved in the machine-readable records.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-01-complete.pdf)
- [Editable submission DOCX](./submission/assignment-01-complete.docx)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the complete formatted submission record.
