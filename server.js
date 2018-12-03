// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies
// const apiRoutes = require("app/routing/apiRoutes.js");
// const html = require("./app/routing/htmlRoutes");
const friends = require("./app/data/friends.js");
const express = require("express");
const path = require("path");
const app = express();

const PORT = 8080;

const server = app.listen(PORT, listening);


function listening(){
    console.log("Server listening on: http://localhost:" + PORT);
}


// use the ability to host files.
app.use(express.static("./app/public/home.html"));


app.post('/', function (req, res) {
    res.send('POST request to the homepage');
    
    })

app.get('/friends', sayHello);
// https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests
// app.post('/', function(req, res) {
//     res.send('POST request to the homepage. Where does this go?');
// })



function sayHello(request, response){
    console.log("HELOOOOOO!");
    // response.send("home.html");
    console.log(friends)
    response.send(friends);
}