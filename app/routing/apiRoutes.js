var friendsArray = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body);
        
        var newFriend = req.body;
        var diff = [];

        for (let i = 0; i < friendsArray.length; i++) {
            var temp = 0;
            for (let x = 0; x < 10; x++) {
                temp = temp + (Math.abs(newFriend.scores[x] - friendsArray[i].scores[x]));   
            }
            diff.push(temp);
        }

        console.log(diff);

        var min = 1000000;
        var index = 0;

        for (let i = 0; i < diff.length; i++) {
            if (diff[i]<min){
                min = diff[i];
                index = i;

            }
        }

        console.log(min);
        console.log(index);

        friendsArray.push(req.body);

        res.json(friendsArray[index]);

        
    });

}