# AcceleratorX: Prompt Engineering Assignments

A public, session-wise record of my AcceleratorX assignment work on prompt engineering, context engineering, red-teaming, evaluation, and prompt observability.

The repository is intended to be useful to:

- AcceleratorX peers comparing approaches and repository structure
- reviewers checking the evidence behind each submission
- practitioners learning how to test prompts rather than judge them by intuition

> This is an independent participant repository, not an official AcceleratorX repository. Assignment briefs are summarised for navigation; completed work will reflect my own runs, analysis, and conclusions.

## Assignment map

| Session | Topic | Assignment | What it demonstrates | Status |
|---|---|---|---|---|
| 01 | Prompt Engineering Foundations | [The Technique Ladder](./session-01-prompt-engineering-foundations/assignment-01-technique-ladder.md) | Comparing zero-shot, few-shot, reasoning-led, and role-plus-constraint prompting on the same task | Brief added |
| 02 | Context Engineering | [Build It, Then Break It](./session-02-context-engineering/assignment-02-build-it-then-break-it.md) | Layered system prompts, adversarial testing, targeted patches, and prompt-vs-code guardrails | Brief added |
| 03 | Prompt Lab + LangSmith | [Prompting as an Engineering Practice](./session-03-prompt-lab-langsmith/assignment-03-prompting-as-engineering-practice.md) | Versioned prompt iteration, fixed evaluation sets, traceability, and measured quality lift | Brief added |

## Working principles

Each solution will follow the same evidence-first rules:

1. Define the rubric before running the prompt.
2. Keep comparison inputs and evaluation sets fixed.
3. Preserve raw model outputs without post-editing.
4. Record model name/version, temperature, timestamp, and relevant parameters.
5. Document failures, regressions, and trade-offs, not just successful examples.
6. Separate rules suitable for prompts from controls that require hard-coded enforcement.

## Repository structure

```text
.
├── README.md
├── CONTRIBUTING.md
├── session-01-prompt-engineering-foundations/
│   └── assignment-01-technique-ladder.md
├── session-02-context-engineering/
│   └── assignment-02-build-it-then-break-it.md
└── session-03-prompt-lab-langsmith/
    └── assignment-03-prompting-as-engineering-practice.md
```

As work progresses, each session folder may also include prompts, raw outputs, evaluation tables, screenshots, logs, and supporting notes.

## For peers and visitors

You may use the repository structure, rubrics, and testing ideas as references. Please do not copy completed submissions or present the raw runs as your own. Different tasks, models, parameters, and failure cases are part of the learning value.

Feedback is welcome through issues or pull requests. See [CONTRIBUTING.md](./CONTRIBUTING.md) before proposing changes.

## Current status

Assignment briefs and repository scaffolding are complete. Solutions and measured runs will be added session by session.
