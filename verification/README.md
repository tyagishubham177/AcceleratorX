# Luna verification

This directory contains the shared reproducibility configuration for all three assignments.

## Active configuration

- model: `gpt-5.6-luna`
- endpoint: `POST /v1/responses`
- reasoning effort: `medium`
- temperature: `0.2`
- case count: `46`

## Files

- [`luna-source-matrix.json`](./luna-source-matrix.json): frozen prompts and test inputs
- [`run-luna-evidence.mjs`](./run-luna-evidence.mjs): credential-safe runner
- [`luna-runs/manifest.json`](./luna-runs/manifest.json): configuration manifest

Set `OPENAI_API_KEY` in the environment before running the script. Never commit credentials.
