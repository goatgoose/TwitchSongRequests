/**
 * Created by goatgoose on 12/30/15.
 */
var https = require("https");
var host = "api.twitch.tv";

var client_id = "hz7fyw1d0rfb6qwhjs5dmolhbgzol1h";
var access_token = null;
var authenticatedUsername = null;

module.exports = {
    getClientID: function() {
        return client_id;
    },
    setAccessToken: function(access_token_) {
        access_token = access_token_;
    },
    getAuthenticatedUsername: function(callback) {
        if (authenticatedUsername == null) {
            return https.get({
                host: host,
                path: "/kraken/" + "?oauth_token=" + access_token
            }, function (response) {
                var body = "";
                response.on("data", function (d) {
                    body = body + d;
                });
                response.on("end", function () {
                    authenticatedUsername = JSON.parse(body).token.user_name;
                    callback(authenticatedUsername);
                })
            })
        } else {
            callback(authenticatedUsername);
        }
    }
};