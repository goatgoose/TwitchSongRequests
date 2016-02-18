/**
 * Created by goatgoose on 2/18/16.
 */
var express = require('express');
var router = express.Router();

/*
 * GET playlist
 */
router.get('/:username', function(req, res) {
    req.mongoClient.connect(req.MONGODB_URL, function(err, db) {
        if(err) {
            console.log("can't connect to database");
        }
        var collection = db.collection("playlist_" + req.params.username);
        collection.find().toArray(function(err, docs) {
            res.send(JSON.stringify(docs));
        });
    })
});

module.exports = router;