var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('GET route on things.');
});
router.post('/', function(req, res){
  res.send('POST route on things.');
});

router.get('/add/:id', (req, res) => {
  res.send('Add user '+ req.params.id)
})

router.get('/remove/:id', (req, res) => {
  res.send('Remove user '+ req.params.id)
})


//export this router to use in our index.js
module.exports = router;