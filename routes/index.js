const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dev', function(req, res, next) {

  let send = req.get('type-data');
  res.send(send);
  // res.json({name: req.body.name});
});


module.exports = router;
