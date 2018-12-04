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
    console.log('GET request to the homepage');
    console.log(friends);
    res.send(friends);
  })
  .post(function (req, res) {
    console.log(req.body);
    res.send('POST request to the homepage');
  })
  .put(function (req, res) {
    console.log('Update a friend')
  })



module.exports = app;


// https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests

// https://expressjs.com/en/guide/routing.html

// exports ROUTES
// exports CompatabilityLogic?



