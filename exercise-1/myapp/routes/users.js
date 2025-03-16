var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', function(req, res) {
    console.log(req.body);
    res.send('POST received!');
});

module.exports = router;