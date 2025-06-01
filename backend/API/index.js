const http = require('http');
const API_data = require('./API_data')

http.createServer((req,resp)=>{
   resp.writeHead(200,{'content-type':'application\json'});
   resp.write(JSON.stringify(API_data)) // string into json
   resp.end();
}).listen(5000);