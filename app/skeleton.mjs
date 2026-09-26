import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function finish(ok, message) {
  process.stdout.write(JSON.stringify({ ok, step: 'skeleton', message: message ?? null }) + '\n');
  process.exit(ok ? 0 : 1);
}

if (!existsSync('infra/target.json')) finish(false, 'Missing infra/target.json.');
const target = JSON.parse(readFileSync('infra/target.json', 'utf8'));
if (target.supported !== true) {
  finish(false, target.blocker || 'This provider target is not deployable.');
}
if (target.apply !== false) finish(false, 'Infrastructure skeleton must not be marked for apply.');
if (typeof target.infrastructureModule !== 'string' || !existsSync(target.infrastructureModule)) {
  finish(false, 'Infrastructure module is missing.');
}

if (existsSync('app')) {
  for (const name of readdirSync('app')) {
    if (!name.endsWith('.json')) continue;
    JSON.parse(readFileSync(join('app', name), 'utf8'));
  }
}

finish(true, null);
