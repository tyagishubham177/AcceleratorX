# AcceleratorX: Prompt Engineering Assignments

An assignment-wise repository for my AcceleratorX work across prompt engineering, context engineering, red-teaming, evaluation, and prompt tracking.

## For peers and visitors

This repository is intended as a reference for AcceleratorX peers and others exploring practical prompt engineering.

You will find assignment briefs, prompts, raw model outputs, evaluation tables, testing logs, screenshots, and conclusions as the work is completed.

> This is an independent participant repository, not an official AcceleratorX repository. Please use it for reference rather than copying submissions.

## Assignments

| Assignment | Topic | What you will find |
|---|---|---|
| [01: The Technique Ladder](./assignment-01/README.md) | Prompt Engineering Foundations | A comparison of multiple prompting techniques on the same task |
| [02: Build It, Then Break It](./assignment-02/README.md) | Context Engineering | A layered system prompt, adversarial tests, fixes, and guardrail analysis |
| [03: Prompting as an Engineering Practice](./assignment-03/README.md) | Prompt Lab + LangSmith | Versioned prompt iterations, evaluation results, and run tracking |

Each assignment has its own folder. Supporting artefacts will be added alongside it where relevant.

## Weekly snapshots

A GitHub Actions workflow creates an annotated tag from `main` every Monday. Snapshot tags use the format `weekly-snapshot-YYYY-MM-DD`, and only the five newest weekly snapshot tags are retained.

These tags provide convenient restore points. They supplement Git history rather than replace branches, pull requests, or backups.

Feedback is welcome through issues or pull requests. See [CONTRIBUTING.md](./CONTRIBUTING.md) for basic contribution guidance.
