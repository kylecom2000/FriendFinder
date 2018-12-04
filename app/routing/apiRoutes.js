const friends = require("../data/friends");
const express = require("express");
const app = express();

app.get('/friends', function(req, res){
    res.send(friends);
})

//    * A POST routes `/api/friends`. 
//          This will be used to handle incoming survey results. 
//          This route will also be used to handle the compatibility logic.
// 6. Determine the user's most compatible friend using the following as a guide:

//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.

app.post('/friends', function (req, res) {

    // push new friend into the friends array at the beginning [0]
    friends.unshift(req.body); 

    // assigning webpage input scores into a variable
    let newFriendScores = req.body.scores;
    console.log(newFriendScores);
    // an array to hold the differences of each friend's score between each friends array.
    let allDifferencesArray = [];

    // loop for each difference score.
    for (let i = 0; i < friends.length; i++){

        // Variable to hold each score's difference.
        let differenceScore = 0;

        // loop for each score within each scores array of each friend.
        for (let j = 0; j < friends[i].scores.length; j++){
            differenceScore += Math.abs(friends[i].scores[j]-newFriendScores[j]);
        }
        // push each difference score to the end of allDifferencesArray.
        allDifferencesArray.push(differenceScore);
    }
    
    console.log(allDifferencesArray);

    function closestFriend(array){
        var closestDifference = array[0];
        var diff = Math.abs (0 - closestDifference);
        let indexOfMatch;

        for (var index = 0; index < array.length; index++) {
            var newdiff = Math.abs (0 - array[index]);
            if (newdiff < diff) {
                diff = newdiff;
                closestDifference = array[index];
                indexOfMatch = index+1;
            }
        }
        return indexOfMatch;
    }
    

    // console.log(closestFriend(allDifferencesArray.slice(1)));
    console.log(friends[closestFriend(allDifferencesArray.slice(1))]);
    res.send(friends[closestFriend(allDifferencesArray.slice(1))]);
}) 


 // The return on this function goes to the data for the $("#match-name") and $("#match-img")
module.exports = app;

// Input  : Math.abs(-4)
// Output : 4

// https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests
// https://expressjs.com/en/guide/routing.html

