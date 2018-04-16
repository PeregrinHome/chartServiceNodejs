const express = require('express');
const router = express.Router();
const User = require('../../../models/user');
const mongoose = require('mongoose');


router.put('/', function(req, res, next) {
    res.send('respond with a resource /user');
});

module.exports = router;
