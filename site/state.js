(function(root){
'use strict';
const statuses=['not_started','learning','submitted','revision_needed','complete'];
const safeText=(x,n=20000)=>typeof x==='string'?x.slice(0,n):'';
const blankModule=()=>({status:'not_started',answers:{},drafts:{},checks:[],submission:'',evidence:'',notes:'',updatedAt:''});
function blank(course){return {schemaVersion:1,courseVersion:course.version,updatedAt:'',learningRepo:'',modules:Object.fromEntries(course.modules.map(m=>[m.id,blankModule()]))};}
function validRepo(value){return typeof value==='string'&&/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})\/[A-Za-z0-9._-]{1,100}$/.test(value)&&!value.includes('..');}
function validSubmission(value){return typeof value==='string'&&/^https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9._-]+\/(issues|pull)\/[1-9][0-9]*(?:#[A-Za-z0-9._-]+)?$/.test(value);}
function quizScore(m,p){return m.questions.reduce((n,q,i)=>n+(p.answers[String(i)]===q.answer?1:0),0);}
function qualifies(m,p){return m.assignment.fields.every((_,i)=>(p.drafts[String(i)]||'').trim().length>=30)&&m.assignment.criteria.every((_,i)=>p.checks.includes(i))&&quizScore(m,p)===m.questions.length&&p.evidence.trim().length>=15;}
function normalize(input,course){
 if(!input||typeof input!=='object'||input.schemaVersion!==1||!input.modules||typeof input.modules!=='object')throw Error('This is not a supported course progress file.');
 const result=blank(course);result.learningRepo=validRepo(input.learningRepo)?input.learningRepo:'';
 result.updatedAt=safeText(input.updatedAt,40);
 for(const m of course.modules){
  const raw=input.modules[m.id];if(!raw||typeof raw!=='object')continue;
  const p=blankModule();p.status=statuses.includes(raw.status)?raw.status:'not_started';
  p.submission=validSubmission(raw.submission)?raw.submission:'';
  p.evidence=safeText(raw.evidence,3000);p.notes=safeText(raw.notes,10000);p.updatedAt=safeText(raw.updatedAt,40);
  m.questions.forEach((q,i)=>{const v=raw.answers?.[String(i)];if(Number.isInteger(v)&&v>=0&&v<q.options.length)p.answers[String(i)]=v;});
  m.assignment.fields.forEach((_,i)=>{p.drafts[String(i)]=safeText(raw.drafts?.[String(i)],12000);});
  p.checks=Array.isArray(raw.checks)?[...new Set(raw.checks.filter(v=>Number.isInteger(v)&&v>=0&&v<m.assignment.criteria.length))]:[];
  if(p.status==='submitted'&&!p.submission)p.status='learning';
  if(p.status==='complete'&&!qualifies(m,p))p.status='learning';
  result.modules[m.id]=p;
 }return result;
}
function assignmentMarkdown(m,p){
 const fields=m.assignment.fields.map(([title],i)=>`## ${title}\n\n${p.drafts[String(i)]||'[Your work here]'}`).join('\n\n');
 return `# Module ${m.id} — ${m.assignment.title}\n\nCourse: Portfolio AI Builder\nStatus: ${p.status} (learner recorded)\n\n${fields}\n\n## Rubric self-assessment\n\n${m.assignment.criteria.map((x,i)=>`- [${p.checks.includes(i)?'x':' '}] ${x}`).join('\n')}\n\n## Evidence and reviewer notes\n\n${p.evidence||'[Evidence to inspect]'}\n\nSubmission: ${p.submission||'[Add GitHub issue or PR URL]'}\n\n${p.notes||''}\n`;
}
function issueUrl(repo,m){if(!validRepo(repo))throw Error('Set a valid owner/repository first.');return `https://github.com/${repo}/issues/new?template=assignment.yml&title=${encodeURIComponent(`Module ${m.id}: ${m.assignment.title}`)}`;}
root.CourseState={blank,normalize,validRepo,validSubmission,quizScore,qualifies,assignmentMarkdown,issueUrl,statuses};
if(typeof module!=='undefined')module.exports=root.CourseState;
})(typeof window!=='undefined'?window:globalThis);
