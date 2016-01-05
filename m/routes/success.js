/**
 * Created by goatgoose on 12/31/15.
 */
var express = require('express');
var twitchAPI = require("../api/twitchAPI.js");
var urlParser = require("url");

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('success', { title: 'Success' });
});

router.post('/', function(req, res, next) {
    var urlHash = urlParser.parse(req.body.urlInput).hash;
    twitchAPI.setAccessToken(urlHash.substring(14, urlHash.indexOf("&scope=")));
    twitchAPI.getAuthenticatedUsername(function(username) {
        res.redirect("myStream");
    })
});

module.exports = router;