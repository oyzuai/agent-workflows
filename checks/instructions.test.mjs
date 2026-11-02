import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from './instructions.mjs';
for (const [kind,limit] of Object.entries({root:600,directory:300,skill:1500,entry:300,brief:500,constitution:400})) {
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
  assert.ok(errors.some(x=>x.includes('new scripts')));
 } finally {rmSync(root,{recursive:true,force:true});}
});

import { successorLabel, collect } from './instructions.mjs';
test('leading list markers do not hide copied text',()=>{
 const text=Array.from({length:45},(_,i)=>`rule${i}`).join(' ');
 for(const marker of ['- ', '* ', '+ ', '1. ', '2) ']) {
  assert.ok(inspect([{name:'a',kind:'root',text},{name:'b',kind:'skill',text:marker+text}]).some(x=>x.includes('copied paragraph')));
 }
});
test('skill frontmatter is metadata outside its word budget',()=>{
 const text='---\nname: example\ndescription: '+ 'metadata '.repeat(100)+'\n---\n'+'word '.repeat(1500);
 assert.deepEqual(inspect([{name:'skill',kind:'skill',text}]),[]);
 assert.match(inspect([{name:'skill',kind:'skill',text:text+'extra'}])[0],/exceeds/);
});
for(const [name,line,expected] of [
 ['schema.json','"version": "v2alpha"',true],
 ['schema.json','"version": "v1beta"',true],
 ['schema.json','"version": "v2"',true],
 ['schema.json','"version": "v1beta1"',true],
 ['schema.json','"version": "v1alpha1"',false],
 ['schema.yml','uses: actions/checkout@v4',false],
 ['schema.yml','uses: actions/setup-node@v6',false],
 ['schema.json','"node": "v24"',false],
 ['package.json','"dependency": "v2.1.0"',false],
 ['schema.md','upstream release v3.12.0',false],
]) test(`successor-label scope: ${line}`,()=>assert.equal(successorLabel(name,line),expected));
test('untracked scripts, arbitrary new script names and extensionless scripts are checked',()=>{
 const root=mkdtempSync(join(tmpdir(),'instruction-untracked-'));
 const git=(...args)=>execFileSync('git',['-C',root,...args],{stdio:'pipe'});
 try{
  git('init','-b','dev');writeFileSync(join(root,'README.md'),'fixture');git('add','.');git('-c','user.name=Fixture','-c','user.email=fixture@example.invalid','commit','-m','baseline');
  mkdirSync(join(root,'tooling'));for(const name of ['scenario.py','helper.mjs','check-foo.sh','windows.ps1','runner']){
   writeFileSync(join(root,'tooling',name),name==='runner'?'#!/usr/bin/env bash\n':'# script');
  }
  writeFileSync(join(root,'tooling','guide.md'),'documentation');
  assert.equal(oyzuChanges(root,'HEAD').filter(x=>x.includes('new scripts')).length,5);
  writeFileSync(join(root,'CONSTITUTION.md'),'word '.repeat(401));
  assert.ok(inspect(collect(root)).some(x=>x.includes('exceeds 400')));
 }finally{rmSync(root,{recursive:true,force:true});}
});
