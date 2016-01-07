/**
 * Created by goatgoose on 12/30/15.
 */
var express = require('express');
var twitchAPI = require("../api/twitchAPI.js");
var router = express.Router();

var testPlaylist = {
    1: {
        "donator": "testDonator1",
        "link": "https://www.youtube.com/watch?v=B2jVbSI9H4o",
        "amount": "20.00",
        "message": "test message 1"
    },
    2: {
        "donator": "testDonator2",
        "link": "https://www.youtube.com/watch?v=YHL_Bk60F_4",
        "amount": "15.00",
        "message": "test message 2"
    },
    3: {
        "donator": "testDonator3",
        "link": "https://www.youtube.com/watch?v=hZ_H-_NI4SU",
        "amount": "100.00",
        "message": "test message 3"
    }
};

router.get('/', function(req, res, next) {
    twitchAPI.getAuthenticatedUsername(function (authenticatedUsername) {
        if (authenticatedUsername == null) {
            res.redirect("/");
        } else {
            res.render("myStream", {
                title: "My Stream",
                "username": authenticatedUsername,
                "playlistCache": JSON.stringify(testPlaylist)
            });
        }
    });
});

module.exports = router;
