# Assignment 1 evidence

This folder is the assignment-level entry point for reproducibility evidence.

## Active API runs

The repository contains six retained `gpt-5.6-luna` runs for Assignment 1:

- zero-shot;
- few-shot;
- structured reasoning;
- role and constraints;
- healthcare structured reasoning; and
- healthcare role and constraints.

The frozen prompts, request hashes, timestamps, latency, usage, returned sampling metadata, response IDs, and raw responses are stored in the shared [`verification/luna-runs/`](../../verification/luna-runs/) archive. The source definitions are in [`verification/luna-source-matrix.json`](../../verification/luna-source-matrix.json).

Run configuration: `gpt-5.6-luna`, medium reasoning, explicit temperature unsupported by the model. Returned sampling metadata is preserved in every record.

The final submitted PDF remains the primary formatted assignment record; these API runs are additive reproducibility evidence.