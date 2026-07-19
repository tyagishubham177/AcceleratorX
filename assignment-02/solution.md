# Assignment 2: Build It, Then Break It

## Objective

Design a layered support-assistant prompt, attack it across ten adversarial categories, patch observed weaknesses, and retest failures.

## Result

| Metric | Result |
|---|---:|
| V1 categories passed | **4/10** |
| V1 categories broken | **6/10** |
| Critical V1 failures | **2** |
| Targeted V2 retests passed | **6/6** |

The main conclusion is architectural: prompts can guide behaviour, but money, identity, authorisation, private data, durable state, and audit controls require deterministic enforcement.

## Reproducibility

The active configuration is `gpt-5.6-luna`, reasoning effort `medium`, temperature `0.2`, through `POST /v1/responses`.

See the [evidence guide](./evidence/README.md) and [final PDF](./submission/assignment-02-complete.pdf).
