import { readFileSync, existsSync } from 'node:fs';
import { resolve, basename, relative } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const words = text => text.trim().split(/\s+/u).filter(Boolean).length;
export function inspect(files) {
  const errors = [], paragraphs = new Map();
  for (const {name, text, kind} of files) {
    const budget = {root:600, directory:300, skill:1500, entry:300, brief:500, reference:Infinity}[kind];
    const body = kind === 'entry' ? text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '') : text;
    if (words(body) > budget) errors.push(`${name}: ${words(body)} words exceeds ${budget}`);
    for (const block of body.replaceAll('\r\n','\n').split(/\n\s*\n/)) {
      const key = block.trim().replace(/\s+/g,' ');
      if (words(key) < 40 || key.startsWith('```')) continue;
      const prior = paragraphs.get(key);
      if (prior && prior !== name) errors.push(`${name}: copied paragraph from ${prior}: ${key.slice(0,80)}`);
      else paragraphs.set(key,name);
    }
  }
  return errors;
}
export function collect(root) {
  const names = execFileSync('git',['-C',root,'ls-files','--cached','--others','--exclude-standard','-z'],{encoding:'utf8'}).split('\0').filter(Boolean);
  return [...new Set(names)].flatMap(name => {
    let kind;
    if (name === 'AGENTS.md') kind = 'root';
    else if (name.endsWith('/AGENTS.md')) kind = 'directory';
    else if (/^(?:skills|\.agents\/skills)\/.*\.md$/.test(name) ) kind = basename(name) === 'SKILL.md' ? 'skill' : 'reference';
    else if (/^(?:decisions|rules|facts)\/[^/]+\.md$/.test(name)) kind = 'entry';
    else if (/(?:^|\/)briefs\/.*\.md$/.test(name) && basename(name) !== 'README.md') kind = 'brief';
    if (!kind || !existsSync(resolve(root,name))) return [];
    return [{name:resolve(root,name),kind,text:readFileSync(resolve(root,name),'utf8')}];
  });
}
export function oyzuChanges(root, base = 'origin/dev') {
  const errors = [];
  const added = execFileSync('git',['-C',root,'diff','--name-only','--diff-filter=A',base],{encoding:'utf8'}).trim().split('\n');
  for (const name of added) if (/^tooling\/(?:.*\/)?test[^/]*\.(?:py|sh|mjs|js)$/.test(name)) errors.push(`${name}: new test scripts belong in Rust, outside tooling`);
  const diff = execFileSync('git',['-C',root,'diff','--unified=0',base],{encoding:'utf8'});
  let name = '';
  for (const line of diff.split('\n')) {
    if (line.startsWith('+++ b/')) { name=line.slice(6); continue; }
    if (!line.startsWith('+') || line.startsWith('+++') || /^(?:\.agents\/|AGENTS\.md$|tooling\/check-)/.test(name)) continue;
    if (/\bv(?:[2-9]\d*(?:alpha\d+|beta\d+)?|1beta\d+|1alpha[2-9]\d*)\b/.test(line)) errors.push(`${name}: successor schema label in added line: ${line.slice(1,130)}`);
  }
  return errors;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const roots = [...new Set(process.argv.slice(2).map(p => resolve(p)))];
  if (!roots.length) throw new Error('Pass repository, context and workflow checkout paths');
  const errors = inspect(roots.flatMap(collect));
  // This opt-in companion checks added Oyzu contracts and new test scripts.
  if (process.env.OYZU_INSTRUCTION_BASE) errors.push(...oyzuChanges(roots[0],process.env.OYZU_INSTRUCTION_BASE));
  for (const error of errors) console.error(error);
  console.log(`Instruction check: ${errors.length} failures across ${roots.length} roots`);
  process.exitCode = errors.length ? 1 : 0;
}
