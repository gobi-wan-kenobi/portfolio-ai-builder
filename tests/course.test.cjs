'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const C=require('../site/course-data.js'),S=require('../site/state.js');
test('eight complete modules with readings, exercises, and rubrics',()=>{
 assert.equal(C.modules.length,8);assert.equal(C.modules.reduce((n,m)=>n+m.hours,0)+C.setupHours+C.assessmentHours,32);
 const ids=new Set();for(const m of C.modules){assert(!ids.has(m.id));ids.add(m.id);assert(m.sections.length>=3);assert(m.sections.every(s=>s.body.length>=2));assert(m.worked.steps.length>=3);assert(m.practice.reveal.length>40);assert(m.assignment.fields.length===4);assert(m.assignment.criteria.length>=4);for(const q of m.questions){assert(Number.isInteger(q.answer));assert(q.options[q.answer]);assert(q.why.length>30);}for(const id of m.readings)assert(C.resources[id]);}
});
test('completion requires all drafts, correct knowledge checks, rubric, and evidence',()=>{
 const m=C.modules[0],p=S.blank(C).modules[m.id];assert(!S.qualifies(m,p));
 m.assignment.fields.forEach((_,i)=>p.drafts[i]='Evidence-backed work with a concrete example and assumptions.');
 m.questions.forEach((q,i)=>p.answers[i]=q.answer);p.checks=m.assignment.criteria.map((_,i)=>i);p.evidence='Commit abc123 and report.md, with observed check results.';assert(S.qualifies(m,p));
 p.answers[0]=(m.questions[0].answer+1)%3;assert(!S.qualifies(m,p));
});
test('progress roundtrip preserves drafts and rejects unsupported schema',()=>{
 const state=S.blank(C);state.modules['02'].drafts['0']='A company problem';state.learningRepo='gobi-wan-kenobi/portfolio-ai-learning';
 assert.equal(S.normalize(JSON.parse(JSON.stringify(state)),C).modules['02'].drafts['0'],'A company problem');assert.throws(()=>S.normalize({schemaVersion:9,modules:{}},C));
});
test('import cannot claim completed or submitted without required evidence',()=>{
 const state=S.blank(C);state.modules['01'].status='complete';state.modules['02'].status='submitted';const p=S.normalize(state,C);assert.equal(p.modules['01'].status,'learning');assert.equal(p.modules['02'].status,'learning');
});
test('untrusted imports drop unknown fields and constrain values',()=>{
 const state=S.blank(C);state.modules['01'].checks=[0,0,-1,999,'1'];state.modules['01'].answers={'0':999};state.modules['01'].drafts['0']='x'.repeat(20000);state.learningRepo='https://evil.test/a';state.evil='data';state.modules['99']={};const p=S.normalize(state,C);assert.equal(p.learningRepo,'');assert.equal(p.evil,undefined);assert.equal(p.modules['99'],undefined);assert.deepEqual(p.modules['01'].checks,[0]);assert.deepEqual(p.modules['01'].answers,{});assert.equal(p.modules['01'].drafts['0'].length,12000);
});
test('repository and submission links cannot change the GitHub origin',()=>{
 assert(S.validRepo('gobi-wan-kenobi/portfolio-ai-learning'));for(const bad of ['https://evil.test/x','a/../../x','a/b?token=x','a@evil.test/b','a/b/c'])assert(!S.validRepo(bad));
 assert(S.validSubmission('https://github.com/owner/repo/pull/12'));assert(!S.validSubmission('https://github.com.evil.test/owner/repo/issues/1'));assert(!S.validSubmission('javascript:alert(1)'));const u=new URL(S.issueUrl('owner/repo',C.modules[0]));assert.equal(u.origin,'https://github.com');assert.equal(u.searchParams.get('template'),'assignment.yml');
});
test('assignment export retains useful work and review fields',()=>{
 const m=C.modules[0],p=S.blank(C).modules[m.id];p.drafts[0]='My company problem';p.evidence='Actual report';const md=S.assignmentMarkdown(m,p);assert(md.includes('My company problem'));assert(md.includes('Actual report'));assert(md.includes('learner recorded'));assert(md.includes('Rubric self-assessment'));
});
