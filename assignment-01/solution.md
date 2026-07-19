# Assignment 1: The Technique Ladder

## Objective

Compare zero-shot, few-shot, structured reasoning, and role + constraints prompting on the same incident-communication task.

## Result

| Rank | Technique | Score |
|---:|---|---:|
| 1 | Role + constraints | **15/15** |
| 2 | Structured reasoning | **14/15** |
| 3 | Zero-shot | **13/15** |
| 4 | Few-shot | **12/15** |

Role + constraints performed best on the primary task. The healthcare boundary case showed that structured reasoning can outperform it when a fixed action schema omits a safety-critical escalation.

## Reproducibility

The active configuration is `gpt-5.6-luna`, reasoning effort `medium`, temperature `0.2`, through `POST /v1/responses`.

See the [evidence guide](./evidence/README.md) and [final PDF](./submission/assignment-01-complete.pdf).
