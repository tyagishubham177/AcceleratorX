# Assignment 1: The Technique Ladder

## Objective

Compare four prompting techniques on the same business task and select the cheapest approach that reliably produces a useful result.

## Task

Convert a technical checkout incident into a concise external stakeholder update and a prioritised internal engineering recommendation. The controlled incident input remained fixed across all techniques.

## Techniques compared

1. Zero-shot
2. Few-shot
3. Structured reasoning
4. Role and constraints

## Result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role and constraints | **15/15** |
| 2 | Structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

## Decision and boundary

Use **role and constraints** for the defined checkout-incident task. A healthcare-safety variant exposed its limit because the commerce-oriented action schema omitted an immediate clinical-safety escalation, while structured reasoning identified it.

## Reproducibility

Additive verification reran the primary and healthcare role/structured comparisons three times each through the OpenAI API using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**. Response IDs, timestamps, latency, token usage, prompt hashes, and unedited outputs are retained.

See:

- [Evidence index](./evidence/README.md)
- [Corrected repository PDF](./submission/assignment-01-complete.pdf)
- [Original submitted PDF and DOCX](./submission/original/README.md)
- [Official assignment brief](./assignment-brief.pdf)
