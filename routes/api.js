var express = require('express');
var router = express.Router();
var userRoute = require('./api/user');

router.use('/user', userRoute);

router.get('/', function(req, res, next) {
    res.send('respond with a resource /');
});


module.exports = router;
