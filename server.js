// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.


// Dependencies
const express = require("express");
const path = require("path");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/", apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:" + PORT);
    }); 

 