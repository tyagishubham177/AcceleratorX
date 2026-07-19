# Assignment 1: The Technique Ladder

**Topic:** Prompt Engineering Foundations  
**Status:** Completed

## Start here

- [Corrected repository PDF](./submission/assignment-01-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [API evidence guide](./evidence/README.md)
- [Original submitted PDF and DOCX](./submission/original/README.md)

## What was tested

The same checkout-incident task was run using zero-shot, few-shot, structured reasoning, and role + constraints prompting.

## Result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role + constraints | **15/15** |
| 2 | Structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

Role + constraints performed best on the primary task. The healthcare boundary case showed that structured reasoning can outperform it when a fixed action schema omits a safety-critical escalation.

## Evidence boundary

The corrected repository PDF states the verified numerical-temperature configuration. Additive verification reran the primary and healthcare role/structured comparisons three times each through the OpenAI API using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**.

The original submitted PDF and DOCX are preserved separately as historical ChatGPT-era artefacts. The archived ZIP remains the original repository package.
