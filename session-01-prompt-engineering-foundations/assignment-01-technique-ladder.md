# Assignment 1: The Technique Ladder

**Session:** Prompt Engineering Foundations  
**Status:** Brief prepared, execution pending

## Overview

This assignment tests whether a simpler and cheaper prompting technique can outperform a more elaborate one for a real business task. The comparison must be controlled: the task input stays fixed, the scoring rubric is written first, and every raw output is retained.

## Why this matters

Prompt quality is not measured by how sophisticated the prompt looks. A production choice should balance output quality with token cost, latency, consistency, and maintenance effort.

## Core comparison

The same task will be run using four approaches:

1. Zero-shot
2. Few-shot with 2–3 original examples
3. Reasoning-led prompting
4. Role + constraints

## Required work

- [ ] Choose one business task and keep the underlying input identical across runs.
- [ ] Define three concrete scoring criteria with a 1–5 scale before running prompts.
- [ ] Run all four prompting approaches.
- [ ] Preserve all prompts and raw outputs without editing.
- [ ] Score all outputs using the original rubric.
- [ ] Construct a genuine failure case where the winning method fails or a simpler method performs better.
- [ ] Diagnose the failure in 3–5 sentences.
- [ ] Decide which technique should ship, including token and latency trade-offs.

## Evidence expected

A completed submission should contain:

- four prompts and four unedited outputs
- the pre-committed scoring rubric
- a completed comparison table
- the failure-case transcript
- a cost-aware ship decision
- model/version and temperature for every run

## Run metadata

- **Business task:** TBD
- **Model/version:** TBD
- **Temperature:** TBD
- **Run date:** TBD

## Visitor note

The useful part of this exercise is the controlled comparison, not a supposedly universal winning technique. Results may change with the task, examples, model, and parameter settings.

## Solution

_To be added after the task and evaluation design are finalised._
