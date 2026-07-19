# Assignment 1: The Technique Ladder

**Topic:** Prompt Engineering Foundations  
**Status:** Completed

## Start here

- [Final submission PDF](./submission/assignment-01-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [Editable DOCX](./submission/assignment-01-complete.docx)
- [API evidence guide](./evidence/README.md)

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

## Evidence

The submitted PDF and DOCX remain the original submission record. Additive verification reran the primary role/structured comparison and the healthcare role/structured comparison three times each through the OpenAI API using `gpt-4.1-mini` at **temperature 0.2**.

The archived ZIP is retained as the original repository package.
