var express = require("express");

var PORT = process.env.PORT
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

app.use(routes);
app.use(timeout(15000));
app.use(haltOnTimedout);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
