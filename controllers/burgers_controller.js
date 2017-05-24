const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get('/getAll', function(req, res) {
    res.send('GET handler for /dogs route.');
});

router.post('/insert', function(req, res) {
    res.send('POST handler for /dogs route.');
});

router.post('/update', function(req, res) {
    res.send('POST handler for /dogs route.');
});

module.exports = router;
