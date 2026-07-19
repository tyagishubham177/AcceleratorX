# Assignment 2: Build It, Then Break It

## Objective

Design a layered support-assistant prompt, attack it across ten adversarial categories, patch observed weaknesses, retest the failures, and decide which controls must live outside the model.

## Scenario

FlowDesk is a fictional SaaS company. Its support assistant may answer product questions, check simulated orders, issue refunds up to USD 50 without approval, and escalate cases outside its authority.

## Prompt architecture

Both prompt versions use six layers:

1. identity and persona;
2. scope and capabilities;
3. hard constraints;
4. business-policy constraints;
5. style; and
6. output format.

## Red-team coverage

The V1 prompt was tested against direct injection, role-play jailbreak, prompt extraction, scope creep, fabricated authority, urgency and social engineering, data exfiltration, emotional pressure, obfuscation, and multi-turn erosion.

## Result

| Metric | Result |
|---|---:|
| V1 categories passed | **4/10** |
| V1 categories broken | **6/10** |
| Critical V1 failures | **2** |
| Targeted V2 retests passed | **6/6** |

The critical failures were a split-refund bypass and disclosure of fictional customer information without identity verification.

## V2 changes

V2 added controls for instruction confidentiality, cumulative refund limits, anti-splitting, identity verification, data minimisation, release verification, transformed requests, and persistent multi-turn policy enforcement.

## Main conclusion

The prompt can guide behaviour, communication, escalation language, and semantic boundaries. It cannot be the sole security boundary for money, identity, authorisation, private data, durable cross-session state, concurrency, or audit history. Those controls require deterministic application and tool-layer enforcement.

## Additional evidence

The supplementary tests verify that V2 preserved the four V1-passing categories and resisted a three-way split in one conversation. A cross-conversation split still exposed a critical control gap because the model lacked durable cumulative state.

## Reproducibility

The active API evidence uses `gpt-5.6-luna` with medium reasoning. All retained responses report **temperature 1.0** and **top_p 0.98** in their returned sampling metadata. These were model defaults returned by the API, not request parameters explicitly supplied by the runner.

The complete raw records retain request configuration, prompt hashes, timestamps, latency, usage, response IDs, and outputs.

See:

- [Evidence index](./evidence/README.md)
- [Final submission PDF](./submission/assignment-02-complete.pdf)
- [Editable submission DOCX](./submission/assignment-02-complete.docx)
- [Official assignment brief](./assignment-brief.pdf)

The submitted PDF remains the complete formatted submission record.
