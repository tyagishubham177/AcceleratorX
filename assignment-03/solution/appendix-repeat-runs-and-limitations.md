# Appendix: Repeat-run verification and evidence boundary

This appendix was added after external review. The original V1–V3 prompts, outputs, scores, hashes, and workbook remain unchanged.

## Explicit evidence boundary

The V1–V3 comparison uses one first-retained response for each prompt-question pair. That design is sufficient for the assignment's controlled versioning exercise, but it does not meet the stricter repeated-run standard proposed for V4.

The reported increase from V2 at 93/96 to V3 at 95/96 is therefore a single-sample result. The one-point Q1 communication regression and recovery are especially vulnerable to reviewer and generation noise. The statement that V2 and V3 produced zero critical failures applies only to the eight recorded runs for each version; it is not a confidence claim about broader adversarial behaviour.

## Limited repeat-run check planned

The following comparisons should be rerun three times each through an API at explicit temperature 0.2:

1. Q1 with V2 and V3 — tests the smallest-margin regression-and-recovery claim.
2. Q5 with V2 and V3 — tests claimed-authority resistance.
3. Q6 with V2 and V3 — tests instruction secrecy and absent-source handling.

For each call, retain the first returned output and record the provider/model identifier, temperature, timestamp, prompt hash, raw output, criterion scores, and reviewer.

## Current execution status

No API credential was available in the environment used for this improvement pass. Numerical-temperature calls were therefore not executed, and no synthetic API trace was created. The repository-level repeat-run harness is included so that these checks can be performed reproducibly when a credential and supported model are supplied.

## How results should be reported

For each prompt-question pair, report:

- all three raw outputs
- score range and median
- number of passing runs
- number of critical failures
- whether the V2-to-V3 directional result held in 3/3, 2/3, or fewer runs
- any dissenting run in full

A 2/3 outcome should be described as directional evidence, not a stable win. A 0–1/3 outcome should invalidate the corresponding headline claim until the prompt or evaluation design is revised.

## Relationship to the V4 gate

This appendix closes the narrative inconsistency by stating the limitation directly: V1–V3 do not satisfy the repeated-run and independent-review requirements proposed for V4. The V4 gate remains a future release standard, not a standard retroactively claimed for the current evidence.
