import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const outputDir = new URL('./luna-runs/', import.meta.url);
const matrixFile = new URL('./luna-source-matrix.json', import.meta.url);
const key = process.env.OPENAI_API_KEY;

if (!key) throw new Error('OPENAI_API_KEY is required. Never commit it.');

const matrix = JSON.parse(await readFile(matrixFile, 'utf8'));
const model = 'gpt-5.6-luna';
const reasoning = { effort: 'medium' };
const temperature = 0.2;
const hash = value => createHash('sha256').update(value).digest('hex');
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

await mkdir(outputDir, { recursive: true });
const records = [];

for (let index = 0; index < matrix.cases.length; index += 1) {
  const c = matrix.cases[index];
  const input = c.system
    ? [{ role: 'system', content: c.system }, { role: 'user', content: c.input }]
    : c.input;
  const request = { model, reasoning, temperature, input, max_output_tokens: 800, store: true };
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
  });
  const body = await response.json();
  const record = {
    schema_version: 2,
    assignment: c.assignment,
    case: c.case,
    sequence: index + 1,
    endpoint: 'POST /v1/responses',
    request: { model, reasoning, temperature, max_output_tokens: 800, store: true },
    prompt_sha256: hash(JSON.stringify(input)),
    request_status: response.status,
    response_id: body.id || null,
    returned_model: body.model || model,
    returned_sampling: { temperature: body.temperature ?? temperature, top_p: body.top_p ?? null },
    usage: body.usage || null,
    status: body.status || null,
    raw_response: body,
    error: response.ok ? null : body.error || body
  };
  records.push(record);
  const filename = `${String(index + 1).padStart(2, '0')}-${c.assignment}-${slug(c.case)}.json`;
  await writeFile(new URL(filename, outputDir), JSON.stringify(record, null, 2) + '\n');
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
}

await writeFile(new URL('manifest.json', outputDir), JSON.stringify({
  schema_version: 2,
  model,
  reasoning,
  temperature,
  endpoint: 'POST /v1/responses',
  record_count: records.length,
  records: records.map(({ raw_response, ...summary }) => summary)
}, null, 2) + '\n');
