// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



// REQUIRE server.js


// GET method route
app.get('/api/friends', function (req, res) {
    res.send('GET request to the homepage');
    res.send('friends.js')
    
})
  


// POST method route
app.post('/', function (req, res) {
res.send('POST request to the homepage');
})



// https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests

// https://expressjs.com/en/guide/routing.html

// exports ROUTES
// exports CompatabilityLogic?