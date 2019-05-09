const express = require('express')
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
  if(req.param.id === '0') {
    next('route')
  } else {
    next()
  }
}, function(req, res) {
  console.log('this function is in first app.get')
})

app.get('/user/:id', (res, req) => {
  res.setEncoding('Hello World exxpress routing')
})

app.listen(port, () => console.log(`Example app listenin on port ${port}!`))