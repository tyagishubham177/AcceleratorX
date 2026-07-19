# Assignment 2 Evidence

This folder indexes evidence supporting Assignment 2.

## Luna API runs

The frozen Luna evidence package is retained centrally to avoid duplicating large raw JSON files:

- [Source matrix](../../verification/luna-source-matrix.json)
- [Raw runs](../../verification/luna-runs/)
- [Run manifest](../../verification/luna-runs/manifest.json)
- [Rerun script](../../verification/run-luna-evidence.mjs)

Assignment 2 corresponds to run records 07 through 22.

Run configuration:

- Model: `gpt-5.6-luna`
- Reasoning effort: `medium`
- Returned temperature: **1.0**
- Returned `top_p`: **0.98**

Temperature and `top_p` were returned by the API as model defaults; the runner did not explicitly supply them in the request.

## Additional tests

The additional regression and financial stress tests remain in:

- [Regression and stress-test appendix](../solution/appendix-regression-and-stress-tests.md)

These tests include the cross-conversation cumulative-refund control gap. They supplement the submitted assignment and Luna reruns rather than replacing them.
