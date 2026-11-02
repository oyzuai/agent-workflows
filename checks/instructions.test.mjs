import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from './instructions.mjs';
for (const [kind,limit] of Object.entries({root:600,directory:300,skill:1500,entry:300,brief:500})) {
  test(`${kind} size boundary`,()=>{
    assert.deepEqual(inspect([{name:kind,kind,text:'word '.repeat(limit)}]),[]);
    assert.match(inspect([{name:kind,kind,text:'word '.repeat(limit+1)}])[0],/exceeds/);
  });
}
test('copied paragraphs fail across files despite whitespace changes',()=>{
 const text=Array.from({length:45},(_,i)=>`rule${i}`).join(' ');
 assert.match(inspect([{name:'a',kind:'root',text},{name:'b',kind:'skill',text:text.replaceAll(' ','\n')}])[0],/copied paragraph/);
 assert.deepEqual(inspect([{name:'a',kind:'root',text:'Read the guide.'},{name:'b',kind:'root',text:'Read the guide.'}]),[]);
});

import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { oyzuChanges } from './instructions.mjs';
test('added successor contracts and new tooling tests fail; existing scripts remain allowed',()=>{
 const root=mkdtempSync(join(tmpdir(),'instruction-policy-'));
 const git=(...args)=>execFileSync('git',['-C',root,...args],{stdio:'pipe'});
 try {
  git('init','-b','dev');
  mkdirSync(join(root,'tooling'));
  writeFileSync(join(root,'tooling/test-existing.py'),'# existing migration debt\n');
  writeFileSync(join(root,'contract.json'),'"v1alpha1"\n');
  git('add','.');git('-c','user.name=Instruction fixtures','-c','user.email=fixture@example.invalid','commit','-m','baseline');
  writeFileSync(join(root,'tooling/test-existing.py'),'# maintenance change\n');
  assert.deepEqual(oyzuChanges(root,'HEAD'),[]);
  writeFileSync(join(root,'contract.json'),'"v2alpha1"\n');
  writeFileSync(join(root,'tooling/test-new.py'),'# a prohibited test\n');git('add','.');
  const errors=oyzuChanges(root,'HEAD');
  assert.ok(errors.some(x=>x.includes('successor schema label')));
  assert.ok(errors.some(x=>x.includes('new test scripts')));
 } finally {rmSync(root,{recursive:true,force:true});}
});
