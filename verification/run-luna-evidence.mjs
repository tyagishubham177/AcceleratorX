import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const outputDir = new URL('./luna-runs/', import.meta.url);
const matrixFile = new URL('./luna-source-matrix.json', import.meta.url);
const key = process.env.OPENAI_API_KEY;

if (!key) throw new Error('OPENAI_API_KEY is required. Never commit it.');

const matrix = JSON.parse(await readFile(matrixFile, 'utf8'));
const model = matrix.model || 'gpt-5.6-luna';
const reasoning = matrix.reasoning || { effort: 'medium' };
const temperature = 0.2;
const hash = value => createHash('sha256').update(value).digest('hex');
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

if (!Array.isArray(matrix.cases) || matrix.cases.length === 0) {
  throw new Error('verification/luna-source-matrix.json contains no runnable cases.');
}

await mkdir(outputDir, { recursive: true });
const records = [];

for (let index = 0; index < matrix.cases.length; index += 1) {
  const c = matrix.cases[index];
  if (!c.assignment || !c.case || !c.input) {
    throw new Error(`Invalid source-matrix entry at index ${index}.`);
  }

  const started = new Date();
  const startedMs = Date.now();
  const input = c.system
    ? [{ role: 'system', content: c.system }, { role: 'user', content: c.input }]
    : c.input;
  const request = { model, reasoning, temperature, input, max_output_tokens: 800, store: true };
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  });
  const body = await response.json();
  const record = {
    schema_version: 1,
    assignment: c.assignment,
    case: c.case,
    sequence: index + 1,
    endpoint: 'POST /v1/responses',
    started_at_utc: started.toISOString(),
    latency_ms: Date.now() - startedMs,
    request: {
      model,
      reasoning,
      temperature,
      max_output_tokens: 800,
      store: true
    },
    prompt_sha256: hash(JSON.stringify(input)),
    request_status: response.status,
    response_id: body.id || null,
    returned_model: body.model || null,
    returned_reasoning: body.reasoning || null,
    returned_sampling: {
      temperature: body.temperature ?? null,
      top_p: body.top_p ?? null
    },
    usage: body.usage || null,
    status: body.status || null,
    raw_response: body,
    error: response.ok ? null : body.error || body
  };

  records.push(record);
  const filename = `${String(index + 1).padStart(2, '0')}-${c.assignment}-${slug(c.case)}.json`;
  await writeFile(new URL(filename, outputDir), JSON.stringify(record, null, 2) + '\n');

  if (!response.ok) {
    throw new Error(`API request failed for ${c.assignment}/${c.case}: ${response.status}`);
  }
}

const totals = records.reduce(
  (acc, r) => ({
    input_tokens: acc.input_tokens + (r.usage?.input_tokens || 0),
    output_tokens: acc.output_tokens + (r.usage?.output_tokens || 0),
    total_tokens: acc.total_tokens + (r.usage?.total_tokens || 0),
    reasoning_tokens: acc.reasoning_tokens + (r.usage?.output_tokens_details?.reasoning_tokens || 0)
  }),
  { input_tokens: 0, output_tokens: 0, total_tokens: 0, reasoning_tokens: 0 }
);

await writeFile(
  new URL('manifest.json', outputDir),
  JSON.stringify(
    {
      schema_version: 1,
      generated_at_utc: new Date().toISOString(),
      model,
      reasoning,
      temperature: {
        requested: temperature,
        returned: records[0]?.returned_sampling?.temperature ?? null
      },
      record_count: records.length,
      totals,
      records: records.map(({ raw_response, ...summary }) => summary)
    },
    null,
    2
  ) + '\n'
);

console.log(JSON.stringify({ record_count: records.length, model, reasoning, temperature, totals }));
