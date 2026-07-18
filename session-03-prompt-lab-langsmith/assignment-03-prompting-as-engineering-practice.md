# Assignment 3: Prompting as an Engineering Practice

**Session:** Prompt Lab + LangSmith Tracking  
**Status:** Brief prepared, execution pending

## Overview

This assignment applies a software-engineering mindset to prompt development. One assistant prompt will move through three measured versions, with every revision tied to observed failures in a fixed evaluation set.

## Why this matters

Prompt iteration often becomes subjective editing: a newer version feels cleaner, but no evidence shows that it performs better. This exercise replaces intuition with pre-defined criteria, versioned prompts, traceable runs, and explicit ship gates.

## Product scenario

An Employee Onboarding Assistant that answers new-hire questions about benefits, deadlines, IT setup, policies, and contacts. It should be warm but efficient, admit uncertainty, and never invent company policy.

A fictional policy one-pager will act as the sole ground truth.

## Evaluation design

Before v1 runs, the repository will contain:

- a 10–15 fact policy one-pager
- a 3–5 criterion scoring rubric
- one fixed eight-question evaluation set

The evaluation set must include:

- [ ] at least two easy questions
- [ ] at least two ambiguous questions
- [ ] at least two adversarial questions
- [ ] at least two questions whose answers are absent from the policy

## Versioning workflow

1. Run v1 against all eight questions and log the results.
2. Create v2 only to address specific v1 failures.
3. Re-run the full unchanged evaluation set.
4. Create v3 only to address specific v2 failures.
5. Re-run the full unchanged evaluation set again.
6. Compare criterion-level performance across all versions.

## Required work

- [ ] Write and commit the policy, rubric, and evaluation set before v1.
- [ ] Preserve all three system-prompt versions.
- [ ] Add change notes describing the exact failures targeted by v2 and v3.
- [ ] Track prompt text, model parameters, timestamp, and per-question scores.
- [ ] Use LangSmith traces or an equivalent tracking sheet.
- [ ] Record one change that felt better but produced no measured gain or caused regression.
- [ ] Define a defensible evaluation gate before allowing v4 to ship.

## Evidence expected

A completed submission should contain:

- the policy one-pager, rubric, and fixed evaluation set
- v1, v2, and v3 prompts with targeted change notes
- LangSmith screenshots or equivalent run tracking
- per-question and criterion-level comparison tables
- a short analysis of where measurable improvement came from
- a proposed v4 ship gate
- model/version and temperature for every run

## Run metadata

- **Model/version:** TBD
- **Temperature:** TBD
- **Tracking method:** TBD
- **Project/run tags:** TBD
- **Run dates:** TBD

## Visitor note

A higher version number does not imply a better prompt. The comparison will preserve regressions and unchanged scores so that the final conclusion remains auditable.

## Solution

_To be added after the policy document, rubric, and evaluation set are committed._
