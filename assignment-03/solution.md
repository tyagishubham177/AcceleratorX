# Assignment 3: Prompting as an Engineering Practice

## Objective

Treat prompt development as a measured engineering process using frozen facts, fixed evaluation questions, versioned prompts, explicit scoring, and traceable evidence.

## Result

| Version | Score | Percentage | Questions passed | Critical failures |
|---|---:|---:|---:|---:|
| V1 | 69/96 | 71.9% | 2/8 | 2 |
| V2 | 93/96 | 96.9% | 8/8 | 0 |
| V3 | **95/96** | **99.0%** | **8/8** | **0** |

V3 retained V2's factual controls while allowing adaptive presentation.

## Reproducibility

The active configuration is `gpt-5.6-luna`, reasoning effort `medium`, temperature `0.2`, through `POST /v1/responses`.

See the [evidence guide](./evidence/README.md) and [final PDF](./submission/assignment-03-complete.pdf).
