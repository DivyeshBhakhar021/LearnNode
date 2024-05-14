const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/contact', (req, res) => {
    // res.send('contact') // only text data send
    res.sendFile(path.join(__dirname + '/index.html')) //files data send
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})