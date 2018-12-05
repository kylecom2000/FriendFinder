// Dependencies
const express = require("express");
const path = require("path");

// Routing
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// Express
const app = express();

// Heroku's choice
const PORT = process.env.PORT || 8080;

// JSON Stuff
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// MOAR Routing 
app.use("/api/", apiRoutes);
app.use(htmlRoutes);

// Server listener
app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:" + PORT);
    }); 

 