# Assignment 3 Evidence

This folder indexes evidence supporting Assignment 3.

## Luna API runs

The frozen Luna evidence package is retained centrally to avoid duplicating large raw JSON files:

- [Source matrix](../../verification/luna-source-matrix.json)
- [Raw runs](../../verification/luna-runs/)
- [Run manifest](../../verification/luna-runs/manifest.json)
- [Rerun script](../../verification/run-luna-evidence.mjs)

Assignment 3 corresponds to run records 23 through 46.

Run configuration:

- Model: `gpt-5.6-luna`
- Reasoning effort: `medium`
- Returned temperature: **1.0**
- Returned `top_p`: **0.98**

Temperature and `top_p` were returned by the API as model defaults; the runner did not explicitly supply them in the request.

## Submission evidence

The evaluation workbook, policy one-pager, and dashboard remain in [`submission/`](../submission/). They are part of the assignment artefacts rather than duplicated here.
