const authToken = require('../config/auth');

module.exports = function (request, response, next) {

    request.auth = authToken.authToken;
    console.log("Middleware Auth");
    next();
};