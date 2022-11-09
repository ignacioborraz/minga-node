var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINDHUB' });
});

module.exports = router;














//const router = require('express').Router()
//const curso = require('./curso')
//router.use('/curso',curso)