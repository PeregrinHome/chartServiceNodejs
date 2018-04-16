const express = require('express');
const router = express.Router();

const getRoute = require('./user/get');
const postRoute = require('./user/post');
const putRoute = require('./user/put');
const deleteRoute = require('./user/delete');

router.use('/', getRoute);
router.use('/', postRoute);
router.use('/', putRoute);
router.use('/', deleteRoute);


module.exports = router;
