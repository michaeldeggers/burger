var express = require('express');
var router = express.Router();

var burger = require('../models/burgers.js');

require('../models/burgers');

router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function (req, res) {
  burger.insertOne(req.body.name, function () {
    res.redirect('/');
  });
});

router.put('/:id', function (req, res) {
  burger.updateOne(parseInt(req.params.id, 10), function () {
    res.redirect('/');
  });
});

module.exports = router;