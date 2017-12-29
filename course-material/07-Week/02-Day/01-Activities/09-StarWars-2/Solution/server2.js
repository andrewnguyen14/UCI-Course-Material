// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = {
  yoda: {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
},
darthmaul: {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
},
obiwankenobi: {
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}};

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/api/character/:character", function(req, res) {
  var chosen = req.params.character;
  if (characters[chosen]) {
    res.json(characters[chosen]);
  }

  res.end();
});

app.get("/api/species/:species", function(req, res) {
  var chosen = req.params.species;

  // What does this log?
  console.log('species - ' + chosen);

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
