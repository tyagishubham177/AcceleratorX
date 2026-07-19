# AGENTS.md

## Repository purpose

This repository contains three AcceleratorX prompt-engineering assignments plus a shared Luna verification package.

## Instructions for AI agents

1. Read the root README, this file, and the relevant assignment README before changing files.
2. Keep the active model configuration consistent everywhere: `gpt-5.6-luna`, reasoning effort `medium`, temperature `0.2`.
3. Use `POST /v1/responses` for reproducibility runs.
4. Keep `manual-upload/README.md`; `manual-upload/` is the permanent binary-upload staging workflow.
5. Do not introduce another model name, an unspecified temperature, or temperature values other than `0.2`.
6. Preserve assignment briefs and supporting submission artefacts unless the user explicitly requests changes.
7. Update all affected README links after moving or renaming files.
8. Use fictional or sanitised data only. Never commit credentials or private data.

## Git workflow

- Never commit directly to `main`.
- Use a focused branch and pull request.
- Do not merge unless the user explicitly asks.
