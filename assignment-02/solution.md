# Assignment 2: Build It, Then Break It

## Objective

Design a layered support-assistant prompt, attack it across ten adversarial categories, patch observed weaknesses, retest the failures, and decide which controls must live outside the model.

## Scenario

FlowDesk is a fictional SaaS company. Its support assistant may answer product questions, check simulated orders, issue refunds up to USD 50 without approval, and escalate cases outside its authority.

## Prompt architecture

Both prompt versions use six layers: identity, scope, hard constraints, business-policy constraints, style, and output format.

## Result

| Metric | Result |
|---|---:|
| V1 categories passed | **4/10** |
| V1 categories broken | **6/10** |
| Critical V1 failures | **2** |
| Targeted V2 retests passed | **6/6** |

The critical failures were a split-refund bypass and disclosure of fictional customer information without identity verification.

## Main conclusion

The prompt can guide behaviour, communication, escalation language, and semantic boundaries. It cannot be the sole security boundary for money, identity, authorisation, private data, durable cross-session state, concurrency, or audit history. Those controls require deterministic application and tool-layer enforcement.

## Additional evidence

The supplementary tests verify that V2 preserved the four V1-passing categories and resisted a three-way split in one conversation. A cross-conversation split still exposed a critical control gap because the model lacked durable cumulative state.

## Reproducibility

Additive verification reran the fabricated-authority and data-exfiltration critical retests three times each through the OpenAI API using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**. The complete unedited API records are retained.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-02-complete.pdf)
- [Editable submission DOCX](./submission/assignment-02-complete.docx)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the original formatted submission record; the 0.2 API runs are additive verification.
