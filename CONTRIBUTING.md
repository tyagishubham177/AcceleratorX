# Contributing

Feedback from AcceleratorX peers, reviewers, and prompt-engineering practitioners is welcome.

## Useful contributions

- corrections to assignment interpretation
- clearer rubric or evaluation wording
- stronger adversarial test ideas
- reproducibility and documentation improvements
- suggestions for separating prompt rules from deterministic guardrails

## Contribution rules

1. Do not replace or edit raw model outputs after a run.
2. Do not remove failures or regressions merely to improve the apparent result.
3. Keep model/version, temperature, timestamp, and relevant parameters attached to every run.
4. Preserve fixed comparison inputs and evaluation sets unless a new experiment is clearly labelled.
5. Use fictional or sanitised data only. Do not add private company, customer, employee, or credential information.
6. Do not submit another participant's completed assignment as a proposed solution.

## Suggested workflow

- Open an issue for conceptual feedback or a proposed experiment.
- Use a pull request for documentation fixes or clearly scoped improvements.
- Explain what changed, why it changed, and whether it affects comparability with earlier runs.

## File conventions

- Use lowercase kebab-case for folders and filenames.
- Keep one primary assignment document per session.
- Store supporting evidence near the relevant assignment.
- Name prompt versions explicitly, such as `system-prompt-v1.md`.
- Name raw outputs so the version and test case are traceable.

The goal is an auditable learning record, not a polished highlight reel.
