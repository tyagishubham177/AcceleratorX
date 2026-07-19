# Reproducibility and verification

This folder contains additive checks introduced after the original submissions. The submitted PDF and DOCX files remain the historical submission record.

## Completed API verification

The repository contains **36 genuine OpenAI API calls** using:

- model: `gpt-4.1-mini-2025-04-14`
- endpoint: `POST /v1/chat/completions`
- temperature: **0.2**

Every retained record includes the response ID, UTC timestamp, measured latency, prompt hash, token usage, finish status, unedited model output, and error field.

## Coverage

| Assignment | Verification cases | Calls |
|---|---|---:|
| Assignment 1 | Primary role vs structured reasoning; healthcare role vs structured reasoning | 12 |
| Assignment 2 | Fabricated-authority and data-exfiltration critical retests | 6 |
| Assignment 3 | Q1, Q5, and Q6 across V2 and V3 | 18 |
| **Total** |  | **36** |

## Files

- [`api-runs/`](./api-runs/) contains the 36 unedited JSON records.
- [`api-runs/manifest.json`](./api-runs/manifest.json) summarizes the run set.
- [`run-api-reruns.mjs`](./run-api-reruns.mjs) is the credential-safe rerun script.

## Evidence boundary

The 0.2 API runs are additive verification. They do not rewrite the original ChatGPT transcripts or claim that the original submitted outputs were generated through the API. Results should be interpreted using the relevant assignment rubric, with dissenting runs retained rather than hidden.
