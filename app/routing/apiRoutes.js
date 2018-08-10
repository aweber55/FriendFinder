var path = require('path');

var friendList = require('../data/friends');

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {

        var newFriendScores = req.body.scores;
        var scoresArray = [];
        // var friendCount = 0;
        // var newScore = newFriend.scores;
        // var matchName = '';
        // var matchImage = '';
        var bestMatch = 0;
        // var match = {
        //     name: "",
        //     pics: "",
        //     difference: 10000
        // }


        for (var i = 0; i < friendList.length; i++) {

            var totalDiff = 0;
            for (var j = 0; j < newFriendScores.length; j++) {

                totalDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));

            }
            scoresArray.push(totalDiff);

            // if (totalDiff <= match.difference) {
            //     match.name = friendList[i].name,
            //     match.pics = friendList[i].pics,
            //     match.difference = totalDiff
            // bestMatch = diff;
            // matchName = friendList[i].name;
            // matchImage = friendList[i].pics;
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
// console.log('Best Match: ' + friendList[index]);
// friendList.push(newFriend);
// res.json(match);
// console.log(match.name);
// res.json({status: 'OK', matchName: matchName, matchImage: matchImage});