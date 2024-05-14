const http = require('http');

const url = require("url"); 

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
//     console.log(url.parse(req.url,true).query.pid);


//     res.writeHead(200 ,{"Conect-Type":"application/json"});
//     res.write("hello")
//     res.end();

// })


// server.listen(3000,()=> {
//     console.log("sever stratd 3000");
// })
 
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('path/to/file.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('File not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});