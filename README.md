# AcceleratorX: Prompt Engineering Assignments

Assignment-wise solutions for AcceleratorX work on prompt engineering, context engineering, red-teaming, evaluation, and prompt tracking.

> Independent participant repository. Use it for learning and review, not for copying submissions.

## Start here

| Assignment | Topic | Corrected repository PDF | GitHub solution | Evidence |
|---|---|---|---|---|
| [01: The Technique Ladder](./assignment-01/README.md) | Prompt Engineering Foundations | [PDF](./assignment-01/submission/assignment-01-complete.pdf) | [Solution](./assignment-01/solution.md) | [API runs](./assignment-01/evidence/README.md) |
| [02: Build It, Then Break It](./assignment-02/README.md) | Context Engineering | [PDF](./assignment-02/submission/assignment-02-complete.pdf) | [Solution](./assignment-02/solution.md) | [Tests and API runs](./assignment-02/evidence/README.md) |
| [03: Prompting as an Engineering Practice](./assignment-03/README.md) | Prompt Lab and tracking | [PDF](./assignment-03/submission/assignment-03-complete.pdf) | [Solution](./assignment-03/solution.md) | [API runs](./assignment-03/evidence/README.md) |

## Repository structure

Each assignment follows the same viewing order:

1. `README.md` for the quick overview and navigation
2. `assignment-brief.pdf` for the official task
3. `solution.md` for the browser-friendly solution
4. `submission/` for the corrected repository PDF and preserved historical submission files
5. `evidence/` for additive reproducibility and additional testing

The active numerical-temperature evidence is under [`verification/api-runs/`](./verification/api-runs/). It contains 36 genuine OpenAI API calls using `gpt-4.1-mini-2025-04-14` at **temperature 0.2**, with response IDs, timestamps, latency, token usage, prompt hashes, and unedited outputs.

The original submitted PDF and DOCX files are preserved under each assignment's `submission/original/` folder. They remain historical ChatGPT-era records and are clearly separated from the corrected repository PDFs and the 0.2 API evidence.

## Repository maintenance

`manual-upload/` is a permanent staging area for files uploaded through the GitHub interface when connected AI tools cannot upload binary files directly. See [`manual-upload/README.md`](./manual-upload/README.md).

Feedback and corrections are welcome through issues or pull requests. See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
