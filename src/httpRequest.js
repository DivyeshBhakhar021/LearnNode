const http = require("http");
const fs = require("fs");
const url = require("url");

const sever = http.createServer((req, res) => {
    const method = req.method;
    const pathname = url.parse(req.url, true).pathname;
    const datapath = './src/assets/data/data.json';

    if (method === 'GET' && pathname === '/institute') {

        fs.readFile(datapath, "utf-8", (err, data) => {

            const id = url.parse(req.url, true).query.id;

            if (id) {
                const alldata = JSON.parse(data);
                const obj = alldata.find((v) => v.id == id);

                if (obj) {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.write(JSON.stringify(obj));
                    res.end();
                } else {
                    res.writeHead(404, { "Content-Type": "applction/json" });
                    res.end(JSON.stringify({ errorMessge: "data not found" }));
                }


            } else {
                if (err) {
                    res.writeHead(500, { "Content-Type": "applction/json" });
                    res.end(JSON.stringify({ errorMessge: err.message }));
                }

                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(data));
                res.end();
            }



        })
    } else if (method == 'POST' && pathname == '/institute') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            fs.readFile(datapath, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "applction/json" });
                    res.end(JSON.stringify({ errorMessge: err.message }));
                }

                const extData = JSON.parse(data);
                const newData = JSON.parse(body);

                extData.push(newData)

                console.log(extData);

                fs.writeFile(datapath, JSON.stringify(extData), (err) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "applction/json" });
                        res.end(JSON.stringify({ errorMessge: err.message }));
                    }

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ messge: "Data inserted" }));

                })
            })
        })

    } else if (method == 'DELETE' && pathname == '/institute') {
        try {
            fs.readFile(datapath, "utf-8", (err, data) => {

                if (err) {
                    res.writeHead(500, { "Content-Type": "applction/json" });
                    res.end(JSON.stringify({ errorMessge: err.message }));
                }

                const extData = JSON.parse(data);

                const id = url.parse(req.url, true).query.id;

                const newData = extData.filter((v) => v.id != id);

                fs.writeFile(datapath, JSON.stringify(newData), (err) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "applction/json" });
                        res.end(JSON.stringify({ errorMessge: err.message }));
                    }
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ messge: "Data deleted" }));
                })
            })
        } catch (error) {
            res.writeHead(500, { "Content-Type": "utf-8" });
            res.end(error.message);
        }
    } else if (method == 'PUT' && pathname == '/institute') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            try {
           
                fs.readFile(datapath, "utf-8", (err, data) => {
    
                    if (err) {
                        res.writeHead(500, { "Content-Type": "applction/json" });
                        res.end(JSON.stringify({ errorMessge: err.message }));
                    }
    
                    const extData = JSON.parse(data);
    
                    const newData = JSON.parse(body);
                    
                    const id = url.parse(req.url, true).query.id;
    
                    const index = extData.findIndex((v) => v.id == id);
    
                    extData[index] = newData;
                    
                    fs.writeFile(datapath, JSON.stringify(extData), (err) => {
                        if (err) {
                            res.writeHead(500, { "Content-Type": "applction/json" });
                            res.end(JSON.stringify({ errorMessge: err.message }));
                        }
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ messge: "Data edit succes" }));
                    })
                })
            } catch (error) {
                res.writeHead(500, { "Content-Type": "utf-8" });
                res.end(JSON.stringify({ errorMessage: error.message }));
            } 
        })
        
    }

})

sever.listen(3000, () => {
    console.log("server stratd 3000");
})
