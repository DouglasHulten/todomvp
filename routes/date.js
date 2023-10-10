var express = require('express');
var router = express.Router();

/* GET current date. */
router.get('/', function(req, res, next) {
  res.render('date', { date: 'Express' });
});


module.exports = router;
