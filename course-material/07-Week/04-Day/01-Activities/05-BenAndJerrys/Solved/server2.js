// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "vanilla", price: 10, awesomeness: 3 }
];
//notice the extra memory this will take up.
var iceCreamLookup = {};
for (var i = 0; i < icecreams.length; i++) {
  iceCreamLookup[icecreams[i].name] = icecreams[i];
}

// Routes
app.get("/icecream/:name", function(req, res) {
  // at the cost of extra memory, we save time in searching for the name
  if (iceCreamLookup[req.params.name]) {
    //return here for implicit else statement.
    return res.render("icecream", iceCreamLookup[req.params.name]);
  }
  // what it looked like before:
  // for (var i = 0; i < icecreams.length; i++) {
  //   if (icecreams[i].name === req.params.name) {
  //     return res.render("icecream", icecreams[i]);
  //   }
  // }
  res.render("notFound404", { error: 'no ice cream with matching name. '});
});

app.get("/icecreams", function(req, res) {
  res.render("ics", { ics: icecreams });
});

// Initiate the listener.
app.listen(port);