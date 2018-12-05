# Friend Finder - Node and Express Servers

## Deployed to [Heroku](https://aqueous-crag-80432.herokuapp.com/).

#### Overview
-Compatibility-based "FriendFinder" application.
-A full-stack site which will take in results from users' surveys. 
-Compare their answers with those from other users. 
-The app will then display the name and picture of the user with the best overall match.

#### Technology Used
* Node.js
  * npm
  * Express to handle routing. 
  * Path
  * nodemon
* Postman
* Heroku
* GitHub
* Bootstrap

#### Workflow
1. User navigates site through HTML Routes listening on the port provided by Heroku or 8080.
2. Survey questions are using basic bootstrap to hold values.
3. API Routes are handled in the apiRoutes.js file. 
4. User submits.
  - User data is taken to the POST request.
  - Then PUSHed to the friends array.
  - Scores are extracted from the array.
  - Loops are used to find the Absolute Value of each score bewteen user and others.
  - The index of the lowest difference bewteen the user and others is saved.
  - That index number is used to call the friends array and display the Name and Picture.
5. User closes and submits again with the same info, they will find they match.