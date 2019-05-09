/* var http = require('http')

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    let content = "Hello world Aoftion!!"
    res.write(content)
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('>>>>> server running at localhost:3000')
}) */

/* const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.listen(port, () => console.log(`Example app listenin on port ${port}!`)) */

const express = require('express')
const app = express();
const port = 3000;

app.get('/user/:id', (req, res, next) => {
    console.log('req.params.id:', req.params.id);
  if(req.params.id === '0') {
    next('route')
  } else {
    next()
  }
}, function(req, res) {
  res.end('this function is in first app.get')
})

app.get('/user/:id', (req, res) => {
  res.send('Hello World exxpress routing')
})

app.listen(port, () => console.log(`Example app listenin on port ${port}!`))