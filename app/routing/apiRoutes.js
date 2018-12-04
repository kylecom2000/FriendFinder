// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. 
//          This will be used to handle incoming survey results. 
//          This route will also be used to handle the compatibility logic.

const friends = require("../data/friends");
const express = require("express");
const app = express();


app.get('/friends', function(req, res){
    res.send(friends);
})

app.route('/')
    .get(function (req, res) {
        res.send(friends);
    }) // END OF GET


    .post(function (req, res) {
        

        // return (res);
        // for (let i = 0; i < friends.length; i++){
        //     if (friends[0].score[0] === 1){
        //         console.log
        //     }
        //     //Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
            
        // }
        // The return on this function goes to the data for the $("#match-name") and $("#match-img")


        friends.push(req.body);
        res.send(friends);
    }) // END OF POST



    .put(function (req, res) {
        console.log('Update a friend')
    }) // END OF PUT


module.exports = app;






// Input  : Math.abs(-4)
// Output : 4



// https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests

// https://expressjs.com/en/guide/routing.html





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