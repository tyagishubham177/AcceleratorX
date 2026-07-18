# Assignment 2: Build It, Then Break It

**Topic:** Context Engineering  
**Status:** Brief prepared, execution pending

## Overview

This assignment treats a system prompt as part of a production control system. The task is to design a layered assistant prompt, attack it systematically, log every failure, patch only the observed weaknesses, and decide which controls should live outside the model.

## Why this matters

A prompt that works on normal inputs may still fail under pressure, ambiguity, manipulation, or repeated attempts. Production readiness requires adversarial evidence and clear boundaries between probabilistic prompt behaviour and deterministic guardrails.

## Reference scenario

A customer-support assistant for a mid-size SaaS company that can:

- answer product questions
- check order status through a simulated tool
- issue refunds up to $50 without approval

It must not discuss competitors or promise unreleased features, and it must escalate legal threats or abuse.

## Prompt architecture

The v1 system prompt will use clearly labelled layers:

1. Identity/persona
2. Scope and capabilities
3. Hard constraints
4. Business-policy constraints
5. Style
6. Output format

## Red-team coverage

- [ ] Direct injection
- [ ] Role-play jailbreak
- [ ] Prompt extraction
- [ ] Scope creep
- [ ] Fabricated authority
- [ ] Urgency/social engineering
- [ ] Data exfiltration
- [ ] Emotional pressure
- [ ] Obfuscation
- [ ] Multi-turn erosion with at least six turns

## Required work

- [ ] Write the layered v1 system prompt.
- [ ] Test all ten attack categories in a private sandbox.
- [ ] Record each attack, model response, evidence, and severity in a break log.
- [ ] Create v2 specifically around failures observed in v1.
- [ ] Re-test every attack that broke v1.
- [ ] Summarise the v1-to-v2 changes and their rationale.
- [ ] Analyse two constraints as prompt rules versus hard-coded external guardrails.

## Evidence expected

A completed submission should contain:

- v1 and v2 system prompts with layer labels
- attack transcripts or representative excerpts
- a specific break log covering all ten categories
- re-test evidence for every patched failure
- a concise v1-to-v2 diff summary
- the two-constraint guardrail analysis
- model/version and temperature for every run

## Run metadata

- **Scenario:** TBD
- **Model/version:** TBD
- **Temperature:** TBD
- **Run date:** TBD

## Safety note

All attacks will remain inside the assignment sandbox and target only prompts created for this repository. They will not be tested against third-party live products.

## Visitor note

A refusal is not automatically a success, and a polite answer is not automatically safe. The break log will distinguish policy violations, information leakage, tool misuse, and harmless off-tone behaviour.

## Solution

_To be added after the v1 threat model and test plan are finalised._
