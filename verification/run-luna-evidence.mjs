import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = new URL('..', import.meta.url);
const outputDir = new URL('./luna-runs/', import.meta.url);
const matrixFile = new URL('./luna-source-matrix.json', import.meta.url);
const key = process.env.OPENAI_API_KEY;
if (!key) throw new Error('OPENAI_API_KEY is required. Never commit it.');
const model = 'gpt-5.6-luna';
const reasoning = { effort: 'medium' };
const hash = value => createHash('sha256').update(value).digest('hex');
const read = relative => readFile(new URL(relative, root), 'utf8');
const between = (text, start, end) => { const i = text.indexOf(start); if (i < 0) return ''; const from = i + start.length; const j = end ? text.indexOf(end, from) : -1; return text.slice(from, j < 0 ? undefined : j); };
const fence = text => (text.match(/```(?:text)?\r?\n([\s\S]*?)\r?\n```/) || [])[1] || '';
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function buildMatrix() {
  const [a1, a2, a3] = await Promise.all([
    read('assignment-01/solution/complete-submission.md'),
    read('assignment-02/solution/complete-submission.md'),
    read('assignment-03/solution/complete-submission.md')
  ]);
  const a1Prompt = label => fence(between(a1, `# ${label} prompt`, `# Raw output - ${label}`));
  const structured = a1Prompt('Chain-of-thought / structured-reasoning');
  const role = a1Prompt('Role + constraints');
  const healthcare = fence(between(a1, '## New input', '## Winning-technique transcript'));
  const incidentTail = (structured.match(/INCIDENT NOTES\r?\n[\s\S]*/) || [])[0];
  const healthcarePrompt = prompt => prompt.replace(incidentTail, `INCIDENT NOTES\n${healthcare}`);
  const a2V1 = between(a2, '# V1 SYSTEM PROMPT', '# Part 2 - V1 red-team coverage').replace(/^# V1 SYSTEM PROMPT\r?\n/, '').trim();
  const a2V2 = between(a2, '# V2 SYSTEM PROMPT', '# Part 5 - V2 targeted retests').replace(/^# V2 SYSTEM PROMPT\r?\n/, '').trim();
  const attackCases = (section, system, version) => [...section.matchAll(/## (?:Retest )?(\d+)\. ([^\r\n]+)[\s\S]*?\*\*Attack input\*\*\s*\r?\n\r?\n```text\r?\n([\s\S]*?)\r?\n```/g)]
    .map(([, number, name, input]) => ({ assignment: 'assignment-02', case: `${version}-${number}-${name}`, system, input }));
  const v1Section = between(a2, '# V1 red-team transcripts', '# Part 4 - V2 patch');
  const v2Section = between(a2, '# Part 5 - V2 targeted retests', '# Part 6 - Prompt vs external guardrails');
  const policy = version => fence(between(a3, `### ${version} system prompt`, `### ${version} ${version === 'V3' ? 'changes' : version === 'V2' ? 'changes' : 'diagnosis'}`));
  const qBlocks = [...a3.matchAll(/### (Q\d+ - [^\r\n]+)[\s\S]*?\*\*Question:\*\* ([^\r\n]+)/g)];
  const a3Cases = qBlocks.flatMap(([, label, input]) => ['V1', 'V2', 'V3'].map(version => ({ assignment: 'assignment-03', case: `${label} ${version}`, system: policy(version), input })));
  const cases = [
    ...['Zero-shot', 'Few-shot', 'Chain-of-thought / structured-reasoning', 'Role + constraints'].map(label => ({ assignment: 'assignment-01', case: label, system: null, input: a1Prompt(label) })),
    { assignment: 'assignment-01', case: 'Healthcare structured reasoning', system: null, input: healthcarePrompt(structured) },
    { assignment: 'assignment-01', case: 'Healthcare role constraints', system: null, input: healthcarePrompt(role) },
    ...attackCases(v1Section, a2V1, 'V1'), ...attackCases(v2Section, a2V2, 'V2'), ...a3Cases
  ];
  const invalid = cases.filter(c => !c.input || c.system === undefined);
  if (invalid.length) throw new Error(`Source extraction failed for ${invalid.map(c => c.case).join(', ')}; no API calls were made.`);
  return { schema_version: 1, purpose: 'Frozen input matrix for the Luna-only reproducibility rerun.', model, reasoning, cases };
}

const matrix = existsSync(matrixFile) ? JSON.parse(await readFile(matrixFile, 'utf8')) : await buildMatrix();
if (!existsSync(matrixFile)) await writeFile(matrixFile, JSON.stringify(matrix, null, 2) + '\n');
await mkdir(outputDir, { recursive: true });
const records = [];
for (let index = 0; index < matrix.cases.length; index += 1) {
  const c = matrix.cases[index];
  const started = new Date(); const startedMs = Date.now();
  const input = c.system ? [{ role: 'system', content: c.system }, { role: 'user', content: c.input }] : c.input;
  const request = { model, reasoning, input, max_output_tokens: 800, store: true };
  const response = await fetch('https://api.openai.com/v1/responses', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(request) });
  const body = await response.json();
  const record = {
    schema_version: 1, assignment: c.assignment, case: c.case, sequence: index + 1,
    endpoint: 'POST /v1/responses', started_at_utc: started.toISOString(), latency_ms: Date.now() - startedMs,
    request: { model, reasoning, max_output_tokens: 800, store: true, temperature: 'unsupported by gpt-5.6-luna' },
    prompt_sha256: hash(JSON.stringify(input)), request_status: response.status, response_id: body.id || null,
    returned_model: body.model || null, returned_reasoning: body.reasoning || null,
    returned_sampling: { temperature: body.temperature ?? null, top_p: body.top_p ?? null },
    usage: body.usage || null, status: body.status || null,
    raw_response: body, error: response.ok ? null : body.error || body
  };
  records.push(record);
  await writeFile(new URL(`${String(index + 1).padStart(2, '0')}-${c.assignment}-${slug(c.case)}.json`, outputDir), JSON.stringify(record, null, 2) + '\n');
  if (!response.ok) throw new Error(`API request failed for ${c.assignment}/${c.case}: ${response.status}`);
}
const totals = records.reduce((acc, r) => ({ input_tokens: acc.input_tokens + (r.usage?.input_tokens || 0), output_tokens: acc.output_tokens + (r.usage?.output_tokens || 0), total_tokens: acc.total_tokens + (r.usage?.total_tokens || 0), reasoning_tokens: acc.reasoning_tokens + (r.usage?.output_tokens_details?.reasoning_tokens || 0) }), { input_tokens: 0, output_tokens: 0, total_tokens: 0, reasoning_tokens: 0 });
await writeFile(new URL('manifest.json', outputDir), JSON.stringify({ schema_version: 1, generated_at_utc: new Date().toISOString(), model, reasoning, temperature: { requested: null, status: 'unsupported by gpt-5.6-luna', returned_default: records[0]?.returned_sampling?.temperature ?? null }, record_count: records.length, totals, records: records.map(({ raw_response, ...summary }) => summary) }, null, 2) + '\n');
console.log(JSON.stringify({ record_count: records.length, model, reasoning, totals }));
