# Assignment 1 Evidence

This folder is the assignment-level entry point for reproducibility evidence.

## Active API runs

The repository contains six retained `gpt-5.6-luna` runs for Assignment 1:

- zero-shot;
- few-shot;
- structured reasoning;
- role and constraints;
- healthcare structured reasoning; and
- healthcare role and constraints.

The frozen prompts, request hashes, timestamps, latency, usage, sampling metadata, response IDs, and raw responses are stored in the shared [`verification/luna-runs/`](../../verification/luna-runs/) archive. The source definitions are in [`verification/luna-source-matrix.json`](../../verification/luna-source-matrix.json).

## Run configuration

- Model: `gpt-5.6-luna`
- Reasoning effort: `medium`
- Returned temperature: **1.0**
- Returned `top_p`: **0.98**

Temperature and `top_p` were returned by the API as model defaults; the runner did not explicitly supply them in the request.

The final submitted PDF remains the primary formatted assignment record; these API runs are additive reproducibility evidence.
