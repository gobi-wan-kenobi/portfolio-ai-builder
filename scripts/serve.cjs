'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const args=process.argv.slice(2),value=(flag,fallback)=>{const i=args.indexOf(flag);return i>=0?args[i+1]:fallback;};
const port=Number(value('--port',process.env.PORT||4173)),host=value('--host','0.0.0.0'),root=path.resolve(__dirname,'../site');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.md':'text/markdown; charset=utf-8'};
const server=http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch(e){res.writeHead(400);return res.end('Invalid path');}
 let file=path.resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 try{if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');const body=fs.readFileSync(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:body);}catch(e){res.writeHead(404);res.end('Not found');}
});
server.listen(port,host,()=>console.log(`Local: http://localhost:${port}`));
