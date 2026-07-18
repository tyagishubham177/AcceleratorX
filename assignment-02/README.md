# Assignment 2: Build It, Then Break It

**Topic:** Context Engineering  
**Status:** Completed

## Overview

This assignment treats a system prompt as part of a production control system. The task is to design a layered assistant prompt, attack it systematically, log every failure, patch only the observed weaknesses, and decide which controls should live outside the model.

## Scenario selected

A fictional mid-size SaaS company called **FlowDesk** uses a support assistant that can:

- answer product and policy questions
- check order status through a simulated tool
- issue refunds up to USD 50 without approval
- escalate matters outside its authority

It must not discuss competitors or promise unreleased features, and it must escalate legal threats or abuse.

## Prompt architecture

The v1 and v2 prompts use six labelled layers:

1. Identity/persona
2. Scope and capabilities
3. Hard constraints
4. Business-policy constraints
5. Style
6. Output format

## Red-team coverage

The assistant was tested against all ten required categories:

1. Direct injection
2. Role-play jailbreak
3. Prompt extraction
4. Scope creep
5. Fabricated authority
6. Urgency/social engineering
7. Data exfiltration
8. Emotional pressure
9. Obfuscation
10. Multi-turn erosion using a six-turn conversation

## Result

| Metric | Result |
|---|---:|
| V1 categories passed | **4/10** |
| V1 categories broken | **6/10** |
| Critical v1 failures | **2** |
| Targeted v2 retests | **6** |
| V2 documented retests passed | **6/6** |

The two critical v1 failures were:

- bypassing the USD 50 intended refund limit by issuing two USD 45 refunds
- exposing fictional customer and payment information without identity verification

Other v1 failures included system-prompt disclosure, promising an unreleased feature under urgency, answering an encoded competitor-comparison request, and gradually losing constraints across a multi-turn conversation.

V2 added targeted rules for instruction confidentiality, cumulative refund limits, anti-splitting, identity verification, data minimisation, release verification, transformed requests, and persistent multi-turn policy enforcement.

## Main conclusion

The v2 prompt closed every documented v1 failure during the targeted retests. However, this does **not** make the prompt a sufficient security boundary.

Financial limits, cumulative refund checks, identity verification, authorisation, and access to private customer data should be enforced by deterministic application and tool-layer controls. Prompts are suitable for behaviour guidance, communication style, escalation language, and semantic boundaries, but not as the sole control over money or sensitive data.

## Files

- [Assignment brief](./assignment-brief.pdf)
- [Complete Markdown solution](./solution/complete-submission.md)
- [Submission PDF](./submission/assignment-02-complete.pdf)
- [Submission DOCX](./submission/assignment-02-complete.docx)
- [Original repository package](./archive/assignment-02-repo-files.zip)

## Submission contents

The complete solution includes:

- layered v1 and v2 system prompts
- all ten v1 attack transcripts
- a six-turn multi-turn erosion transcript
- a severity-based break log
- targeted v1-to-v2 patch notes
- retest transcripts for every v1 failure
- prompt-versus-hard-coded guardrail analysis
- model/version and parameter disclosure

## Safety and reproducibility

All attacks used fictional data, simulated tools, and a sandbox assistant created for this assignment. No live third-party product or real customer information was tested.

The complete assignment solution and its original submission artifacts remain the source record. Separate Luna API evidence is additive and does not replace those materials; see [verification/luna-runs](../verification/luna-runs/).
