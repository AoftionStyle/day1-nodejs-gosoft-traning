var http = require('http')

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    let content = "Hello world Aoftion"
    res.end(content)
})

server.listen(3000, 'localhost', () => {
    console.log('>>>>> server running at localhost:3000')
})