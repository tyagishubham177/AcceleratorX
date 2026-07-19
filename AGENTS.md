# AGENTS.md

## Repository purpose

This repository contains AcceleratorX prompt-engineering assignments organised by assignment number.

Current folders:

- `assignment-01/` — The Technique Ladder
- `assignment-02/` — Build It, Then Break It
- `assignment-03/` — Prompting as an Engineering Practice
- `manual-upload/` — permanent staging area for binary files uploaded through GitHub
- `verification/` — shared Luna runner, source matrix, manifest, and machine-readable run archive

Each assignment should follow this viewing order: `README.md`, official brief, `solution.md`, `submission/`, and `evidence/`.

## Instructions for AI agents

1. Read the root `README.md`, `CONTRIBUTING.md`, this file, and the relevant assignment README before making changes.
2. Treat assignment PDFs as authoritative briefs. Do not silently alter requirements, grading criteria, scope, or submitted binary artefacts.
3. Preserve raw prompts, model outputs, scores, logs, screenshots, failure cases, response IDs, hashes, timestamps, usage, and returned API metadata.
4. Use the completed Luna API runs as the active reproducibility record. Do not reintroduce stale statements that numeric temperature was unavailable in ChatGPT or that API verification is merely planned.
5. Describe the Luna configuration accurately: model `gpt-5.6-luna`, reasoning effort `medium`, explicit temperature unsupported, and returned sampling metadata preserved in raw records.
6. Keep `manual-upload/README.md`. This folder is a permanent staging workflow because connected AI tools may not upload binary files directly.
7. After a manual upload, rename and move the staged file into the correct assignment, submission, or evidence folder; update navigation; then remove only the staged copy.
8. Use fictional or sanitised data. Never add credentials, private company data, customer information, or personal data.
9. Keep supporting files inside the relevant assignment folder where practical and use clear lowercase kebab-case names.
10. Update all affected README links when files or folders are renamed or moved.
11. Keep documentation concise and make the final PDF, browser solution, brief, editable files, and evidence easy to find.

## Git workflow

- Never commit directly to `main`.
- Create a focused branch for every change.
- Commit only related changes to that branch.
- Open a pull request against `main` with a clear title and description.
- Do not merge unless the user explicitly asks.
- Avoid force-pushing or rewriting shared history.

## Evidence integrity

- Define evaluation criteria before comparing prompt variants where required.
- Keep comparison inputs and evaluation sets fixed unless a new experiment is clearly labelled.
- Record failures and regressions rather than hiding them.
- Distinguish prompt-level controls from deterministic code or external safeguards.
- Do not claim an experiment was run unless corresponding evidence exists.
- Keep submitted PDF/DOCX artefacts unchanged unless the user explicitly requests revision.