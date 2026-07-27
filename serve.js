'use strict';
// shikumi_hakoniwa_web 開発用静的サーバ(no-store)。使い方: node serve.js [port]
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname, PORT=Number(process.argv[2])||3103;
const MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((req,res)=>{let p=decodeURIComponent((req.url||'/').split('?')[0]);if(p==='/')p='/index.html';const file=path.normalize(path.join(ROOT,p));if(!file.startsWith(ROOT)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('404');return;}res.writeHead(200,{'Content-Type':MIME[path.extname(file).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);}).listen(PORT,()=>console.log('shikumi_hakoniwa_web dev server: http://localhost:'+PORT));
