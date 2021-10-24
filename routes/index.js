var express = require('express');
var hello = require('../controller/hello')
var db = require('../db/database')

var router = express.Router();

/* GET home page. */
router.get('/', hello.hello);
router.post('/insert', db.create);
router.get('/list', db.list);
router.delete('/remove/:id', db.remove);
router.put('/edit/:id', db.edit);

module.exports = router;