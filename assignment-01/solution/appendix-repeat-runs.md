# Appendix: Repeat-run verification

This appendix was added after external review. It does not alter the original four transcripts, failure case, rubric, or score table.

## Why this check matters

The original ranking used one first-retained response per technique. The closest primary comparison was:

- Role + constraints: 15/15
- Structured reasoning: 14/15

The failure-case comparison was:

- Role + constraints: 10/15
- Structured reasoning: 14/15

A single generation cannot establish variance, especially for a one-point lead.

## Planned API verification

Run the following four prompt/input combinations three times each at an explicit temperature of 0.2:

1. Primary task — role + constraints
2. Primary task — structured reasoning
3. Healthcare failure case — role + constraints
4. Healthcare failure case — structured reasoning

For every call, retain the first returned response and record:

- provider and model identifier
- temperature and any other sampling parameters
- timestamp
- raw prompt and raw output
- rubric scores
- minimum, maximum, and median total score
- whether the original ranking held in 3/3, 2/3, or fewer runs

## Current execution status

The repository environment used for this improvement pass had no API credential available, so numerical-temperature calls could not be executed honestly. No API transcript or temperature value has been invented.

The included repository-level repeat-run harness provides a reproducible execution path once a credential and supported model are supplied. Until those runs are added, the original result should be read as a controlled single-sample finding rather than a variance-tested ranking.

## Interpretation rule

- **3/3:** result held across this limited check.
- **2/3:** directional evidence only; preserve the dissenting run prominently.
- **0–1/3:** original ranking is not stable enough to support the ship decision without broader testing.
