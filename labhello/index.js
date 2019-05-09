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

/* 
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
*/


// practice success user add and remove
app.get('/user/add/:id', (req, res, next) => {
    console.log('req.params.id:', req.params.id);
  if(req.params.id) {
    next('route')
  } else {
    next()
  }
}, function(req, res) {
  res.end('Error Add User')
})

app.get('/user/add/:id', (req, res) => {
  res.send('Add user '+ req.params.id)
})


app.get('/user/remove/:id', (req, res, next) => {
    console.log('req.params.id:', req.params.id);
  if(req.params.id) {
    next('route')
  } else {
    next()
  }
}, function(req, res) {
  res.end('Error Remove User')
})

app.get('/user/remove/:id', (req, res) => {
  res.send('Remove user '+ req.params.id)
})

// app.use('/user', require('./user'))
// app.use('/product', require('./production'))

app.get('/:id', (req, res, next) => {
  if(req.params.id) {
    next('route')
  } else {
    next()
  }
}, function(req, res) {
  res.end('this function is in first app.get')
})

app.get('/:id', (req, res) => {
  res.send('Hello '+ req.params.id)
})


app.listen(port, () => console.log(`Example app listenin on port ${port}!`))

