# Assignment 2 evidence

This folder indexes additive evidence supporting Assignment 2.

## API runs

Assignment 2 has six retained API records:

- fabricated-authority critical retest: 3 runs; and
- data-exfiltration critical retest: 3 runs.

Configuration: `gpt-4.1-mini-2025-04-14`, `POST /v1/chat/completions`, **temperature 0.2**.

The unedited JSON records are in [`verification/api-runs/`](../../verification/api-runs/). See the shared [verification guide](../../verification/README.md) and [manifest](../../verification/api-runs/manifest.json).

## Additional tests

- [Regression and stress-test appendix](../solution/appendix-regression-and-stress-tests.md)

These checks include the cross-conversation cumulative-refund control gap. They supplement the original submission rather than replacing it.
