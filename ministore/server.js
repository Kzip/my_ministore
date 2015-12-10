// require the path module
var path = require("path");
// require express and create the express app
var express = require("express");
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// set the views folder and set up ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route
//require('./server/config/mongoose.js');
// root route to render the index.ejs view
//var routes_setter = require('./server/config/routes.js');
//routes_setter(app);
// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
