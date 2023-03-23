const http = require('http');
port=3000
const server= http.createServer((req,res)=>{
res.write('<h1>Hello Node!!!!</h1>\n' )
res.end()
}).listen(port,()=>{
    console.log('server is running on http://localhost:3000');
})