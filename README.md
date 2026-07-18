# AcceleratorX — Luna API Evidence

This repository contains a clean, first-run reproducibility package for the three AcceleratorX assignment briefs. It intentionally contains no prior model outputs, earlier API reruns, scored submissions, PDFs/DOCX files, archives, or retrospective evidence.

## Run configuration

- API endpoint: `POST /v1/responses`
- Model: `gpt-5.6-luna`
- Reasoning effort: `medium`
- Sampling: `gpt-5.6-luna` rejected an explicit `temperature` parameter. The returned API metadata reports its default `temperature: 1.0`; this is recorded as returned metadata, not represented as a user-controlled setting.
- Fresh matrix: 46 calls — 6 Assignment 1, 16 Assignment 2, and 24 Assignment 3.

The exact frozen prompts and system messages are in [verification/luna-source-matrix.json](verification/luna-source-matrix.json). The unedited API responses, request hashes, timestamps, latency, response IDs, usage, returned configuration, and manifest are in [verification/luna-runs](verification/luna-runs).

## Re-run

Create an environment variable with a valid project API key, then run:

```powershell
$env:OPENAI_API_KEY = '...'
node verification/run-luna-evidence.mjs
```

Never commit an API key. The runner records raw API response objects but not request credentials.
