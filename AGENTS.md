# AGENTS.md

## Repository purpose

This repository contains AcceleratorX prompt-engineering assignments, organised by assignment number rather than assumed session order.

Current folders:

- `assignment-01/` — The Technique Ladder
- `assignment-02/` — Build It, Then Break It
- `assignment-03/` — Prompting as an Engineering Practice

Each assignment folder may contain the official brief, working notes, prompts, outputs, evaluation evidence, screenshots, logs, and conclusions.

## Instructions for AI agents

1. Read the root `README.md`, `CONTRIBUTING.md`, and the relevant assignment folder before making changes.
2. Treat the assignment PDFs as the authoritative briefs. Do not silently alter requirements, grading criteria, or scope.
3. Do not assume an assignment belongs to a particular session unless the source material explicitly states that.
4. Do not complete or substantially solve an assignment unless the user explicitly requests it.
5. Preserve raw prompts, model outputs, scores, logs, screenshots, and failure cases without polishing or rewriting them.
6. Keep model name/version, temperature, parameters, timestamp, and other run metadata attached to experiment outputs.
7. Use only fictional or sanitised data. Never add credentials, private company data, customer information, or personal data.
8. Keep supporting files inside the relevant assignment folder and use clear lowercase kebab-case names.
9. Update navigation links when files or folders are renamed or moved.
10. Keep documentation concise and focused on what a visitor or future agent needs to understand.

## Git workflow

- Never commit directly to `main`.
- Create a focused branch for every change.
- Commit only related changes to that branch.
- Open a pull request against `main` with a clear title and description.
- Do not merge the pull request unless the user explicitly asks.
- Avoid force-pushing or rewriting shared history.

## Evidence and experiment integrity

- Define evaluation criteria before comparing prompt variants where the assignment requires it.
- Keep comparison inputs and evaluation sets fixed unless a new experiment is clearly labelled.
- Record failures and regressions rather than hiding them.
- Distinguish prompt-level controls from safeguards that require deterministic code or external enforcement.
- Do not claim an experiment was run unless the corresponding evidence exists in the repository.

## Weekly snapshots

The repository may use automated annotated tags named `weekly-snapshot-YYYY-MM-DD`. These are convenience restore points only. They do not replace branches, pull requests, commit history, or external backups.
