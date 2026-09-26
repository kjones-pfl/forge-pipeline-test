process.exit(1);
import { existsSync, readFileSync } from 'node:fs';

const step = process.argv[2];
const steps = ['bootstrap', 'start', 'health'];

function finish(ok, message) {
  process.stdout.write(JSON.stringify({ ok, step, message: message ?? null }) + '\n');
  process.exit(ok ? 0 : 1);
}

if (!steps.includes(step)) finish(false, 'Use bootstrap, start, or health.');

const required = [
  'infra/variables.schema.json',
  'infra/target.json',
  'app/skeleton.mjs',
  'workspace/startup.json',
  'docs/IMPLEMENTATION.md',
  '.github/workflows/forge-workspace.yml',
  'manifest.json',
];
for (const path of required) {
  if (!existsSync(path)) finish(false, 'Missing ' + path + '.');
}

const schema = JSON.parse(readFileSync('infra/variables.schema.json', 'utf8'));
const secretProps = schema.properties?.secret_refs?.properties ?? {};
for (const name of ['provider_api_key_ref', 'embedding_api_key_ref', 'vector_store_credential_ref']) {
  if (!secretProps[name]) finish(false, 'Missing secret placeholder ' + name + '.');
  if (secretProps[name].default) finish(false, 'Secret placeholder ' + name + ' must not have a default value.');
}

if (step === 'start' || step === 'health') {
  const startup = JSON.parse(readFileSync('workspace/startup.json', 'utf8'));
  for (const name of steps) {
    if (startup.commands?.[name] !== 'node workspace/check.mjs ' + name) {
      finish(false, 'Startup command for ' + name + ' does not match the documented check.');
    }
  }
  if (startup.commands?.skeleton !== 'node app/skeleton.mjs') {
    finish(false, 'Startup command for skeleton does not match the documented check.');
  }
}

if (step === 'health') {
  JSON.parse(readFileSync('eval/thresholds.json', 'utf8'));
  const workflow = readFileSync('.github/workflows/forge-workspace.yml', 'utf8');
  if (!workflow.includes('node app/skeleton.mjs')) {
    finish(false, 'CI workflow does not run the application skeleton.');
  }
  if (/terraform apply|az deployment|gcloud /i.test(workflow)) {
    finish(false, 'CI workflow must not deploy infrastructure.');
  }
}

finish(true, null);
