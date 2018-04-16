const express = require('express');
const router = express.Router();
const User = require('../../../models/user');
const mongoose = require('mongoose');


router.post('/', function(req, res, next) {

    // Добавить валидацию

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(result =>{
        console.log('Result in user_routes', result)
    }).catch(errors => {
        console.log('Errors in user_routes', errors)
    });

    res.send('respond with a resource /user');
});

module.exports = router;
