/**
 * Created by goatgoose on 12/30/15.
 */
var express = require('express');
var router = express.Router();
var twitchAPI = require("../api/twitchAPI.js");

router.get('/', function(req, res, next) {
    var redirect_uri = "http://localhost:3000/success";
    var scope = "user_read";

    res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=" + twitchAPI.getClientID() + "&redirect_uri=" + redirect_uri + "&scope=" + scope);
});

module.exports = router;
