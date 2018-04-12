var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
	res.sendfile('./public/login.html');
});

module.exports = router;