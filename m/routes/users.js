/**
 * Created by goatgoose on 2/13/16.
 */
var express = require('express');
var router = express.Router();

/*
 * GET user.
 */
router.get('/:username', function(req, res) {
    req.mongoClient.connect(req.MONGODB_URL, function(err, db) {
        if(err) {
            console.log("can't connect to database");
        }
        var collection = db.collection("users");
        collection.find({'username':req.params.username}).toArray(function(err, docs) {
            var doc = docs[0];
            res.send(JSON.stringify(doc));
        });
    })
});

module.exports = router;