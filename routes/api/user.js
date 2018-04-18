const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {

    User.findOne({ name: 'Dmitry'}, function (err, user) {
        if (err) return handleError(err);
        console.log(user);
        res.status(200);
        res.send('respond with a resource ' + user.email);
    });
});

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

router.post('/charts', function(req, res, next) {

    // Добавить валидацию



    res.send('respond with a resource /user');
});

router.put('/', function(req, res, next) {
    res.send('respond with a resource /user');
});

router.delete('/', function(req, res, next) {
    res.send('respond with a resource /user');
});


module.exports = router;
