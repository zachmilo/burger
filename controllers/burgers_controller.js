//const express = require("express");
const express = require("../models/burger.js");

var express = require('express');

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
