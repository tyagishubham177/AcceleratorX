# Assignment 1 evidence

This folder is the assignment-level entry point for additive reproducibility evidence.

## API runs

Assignment 1 has 12 retained API records:

- primary role + constraints: 3 runs;
- primary structured reasoning: 3 runs;
- healthcare role + constraints: 3 runs; and
- healthcare structured reasoning: 3 runs.

Configuration: `gpt-4.1-mini-2025-04-14`, `POST /v1/chat/completions`, **temperature 0.2**.

The unedited JSON records, response IDs, timestamps, latency, usage, prompt hashes, and outputs are stored in [`verification/api-runs/`](../../verification/api-runs/). See the shared [verification guide](../../verification/README.md) and [manifest](../../verification/api-runs/manifest.json).

The final submitted PDF remains the original formatted assignment record; these API runs are additive verification.
