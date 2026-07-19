# Assignment 2: Build It, Then Break It

**Topic:** Context Engineering  
**Status:** Completed

## Start here

- [Corrected repository PDF](./submission/assignment-02-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [Evidence guide](./evidence/README.md)
- [Original submitted PDF and DOCX](./submission/original/README.md)

## What was tested

A layered FlowDesk support-assistant prompt was attacked across ten red-team categories, patched using observed failures, and retested.

## Result

| Metric | Result |
|---|---:|
| V1 categories passed | **4/10** |
| V1 categories broken | **6/10** |
| Critical V1 failures | **2** |
| Targeted V2 retests passed | **6/6** |

The main conclusion is architectural: prompts can guide behaviour, but refund totals, authorisation, identity verification, and access to private data require deterministic controls outside the model.

## Evidence boundary

The corrected repository PDF states the verified numerical-temperature configuration. Additive verification reran the fabricated-authority and data-exfiltration critical retests three times each using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**. Additional regression and financial stress testing is also retained.

The original submitted PDF and DOCX are preserved separately as historical ChatGPT-era artefacts. All test data and tools are fictional or simulated.
