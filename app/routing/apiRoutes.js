var path = require('path');

var friendList = require('../data/friends');

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {

        var newFriendScores = req.body.scores;
        var scoresArray = [];

        var bestMatch = 0;

        for (var i = 0; i < friendList.length; i++) {

            var totalDiff = 0;
            for (var j = 0; j < newFriendScores.length; j++) {

                totalDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));

            }
            scoresArray.push(totalDiff);


        }
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        var bff = friendList[bestMatch];
        res.json(bff);

        friendList.push(req.body);
    });
};