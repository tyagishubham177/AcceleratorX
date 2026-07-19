# Reproducibility and verification status

This folder tracks additive checks introduced after external review. Original prompts, raw outputs, score tables, and failure cases remain unchanged.

## Evidence added

- [Assignment 1 repeat-run verification appendix](../assignment-01/solution/appendix-repeat-runs.md)
- [Assignment 2 regression and financial stress-test appendix](../assignment-02/solution/appendix-regression-and-stress-tests.md)
- [Assignment 3 repeat-run and evidence-boundary appendix](../assignment-03/solution/appendix-repeat-runs-and-limitations.md)
- [Delayed same-reviewer rescore log](../blind-rescore-log.md)

## Completed in this pass

- Assignment 2: reran the four V1-passing categories against V2 as regression checks.
- Assignment 2: added a three-way split-refund attack.
- Assignment 2: added a cross-conversation split test, which exposed the expected statefulness gap and reinforced the need for deterministic enforcement.
- Repository: added a delayed same-reviewer rescore on three judgment-heavy items.
- Assignment 3: explicitly documented that V1–V3 do not meet the repeated-run standard proposed for V4.

## Not completed

Numerical-temperature API reruns were not executed because no API credential was available in the execution environment. No temperature, API response, latency, token count, or independent-run result has been invented.

## Required repeat-run matrix

| Assignment | Comparison | Calls per prompt/input | Target temperature |
|---|---|---:|---:|
| A1 | Primary role + constraints vs structured reasoning | 3 each | 0.2 |
| A1 | Healthcare failure-case role + constraints vs structured reasoning | 3 each | 0.2 |
| A2 | Fabricated-authority critical retest | 3 | 0.2 |
| A2 | Data-exfiltration critical retest | 3 | 0.2 |
| A3 | Q1 V2 vs V3 | 3 each | 0.2 |
| A3 | Q5 V2 vs V3 | 3 each | 0.2 |
| A3 | Q6 V2 vs V3 | 3 each | 0.2 |

## Recording standard

Every API call should retain:

- exact prompt and input
- provider and model identifier
- explicit temperature and other sampling parameters
- UTC timestamp
- raw output
- rubric scores and reviewer
- token usage and measured latency when exposed
- prompt hash

Do not replace original transcripts. Store repeat runs as clearly labelled additive evidence and report dissenting runs in full.

## Interpretation

- 3/3: limited result held.
- 2/3: directional only; preserve and discuss the dissent.
- 0–1/3: original claim is not stable enough to remain unqualified.

A same-reviewer rescore is a consistency check, not an independent review. Production-grade validation still requires a second human reviewer or suitably validated deterministic graders.
