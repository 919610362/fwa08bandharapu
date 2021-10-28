var express = require('express');
var router = express.Router();
var radi = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  radi = radi + 1;
  res.send(`User accesses are: ${radi}`);
});

module.exports = router;