/**
 * Created by goatgoose on 12/30/15.
 */
var express = require('express');
var twitchAPI = require('../api/twitchAPI');
var router = express.Router();

router.get('/', function(req, res, next) {
    twitchAPI.getAuthenticatedUsername(function (authenticatedUsername) {
        if (authenticatedUsername == null) {
            res.render('home', { title: 'Home' });
        } else {
            res.redirect("myStream");
        }
    });
});

module.exports = router;
