// 3. Your `htmlRoutes.js` file should include two routes: -KMB
// * A GET Route to `/survey` which should display the survey page. -KMB
// * A default, catch-all route that leads to `home.html` which displays the home page. -KMB


const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req,res) {
    console.log("/root route...");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res){
    console.log("/Survey route...");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.get("*", function(req,res) {
    console.log("/other route...");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


module.exports = app;