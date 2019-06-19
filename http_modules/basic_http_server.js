const http = require('http');

const hostname = "localhost"
const port = process.env.port || 4000;

const server = http.createServer((req,res)=>{
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200;
    res.end("<html><body><h1>Hello world</h1></body></html>")
})


server.listen(port, hostname, ()=>{
    console.log(`Server started on port http://${hostname}:${port}`);
})