# Assignment 2: Build It, Then Break It

**Topic:** Context Engineering  
**Status:** Completed

## Start here

- [Final submission PDF](./submission/assignment-02-complete.pdf)
- [Readable GitHub solution](./solution.md)
- [Assignment brief](./assignment-brief.pdf)
- [Editable DOCX](./submission/assignment-02-complete.docx)
- [Evidence guide](./evidence/README.md)

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

## Evidence

The submitted PDF and DOCX remain the formal submission artifacts. The evidence area contains the corresponding unedited `gpt-5.6-luna` API records plus additional regression and financial stress testing.

The API responses report **temperature 1.0** and **top_p 0.98**. These were returned sampling defaults, not values explicitly supplied in the request.

All test data and tools are fictional or simulated. The archived ZIP is retained as the original repository package.
