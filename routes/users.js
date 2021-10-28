var express = require('express');

var users = require('../controller/users')

var router = express.Router();

/* GET users listing. */
router.get('/list', users.list);
router.post('/insert', users.create);
router.post('/findUser', users.findById);

module.exports = router;