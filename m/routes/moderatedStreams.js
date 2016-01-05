/**
 * Created by goatgoose on 12/31/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('moderatedStreams', { title: 'Moderated Streams' });
});

module.exports = router;
