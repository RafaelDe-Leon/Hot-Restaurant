var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
  ];
  
  // Routes
  // =============================================================
  
  // display home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  

  // display reservartion
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  // display tables
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  // Display API
app.get("/api", function(req, res) {
  return res.json(tables);
});

  

  
  // // Displays a single character, or returns false
  // app.get("/api/characters/:character", function(req, res) {
  //   var chosen = req.params.character;
  
  //   console.log(chosen);
  
  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen === characters[i].routeName) {
  //       return res.json(characters[i]);
  //     }
  //   }
  
  //   return res.json(false);
  // });
  
  // // Create New Characters - takes in JSON input
  // app.post("/api/characters", function(req, res) {
  //   // req.body hosts is equal to the JSON post sent from the user
  //   // This works because of our body parsing middleware
  //   var newCharacter = req.body;
  
  //   // Using a RegEx Pattern to remove spaces from newCharacter
  //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
  //   console.log(newCharacter);
  
  //   characters.push(newCharacter);
  
  //   res.json(newCharacter);
  // });
  
  // // Starts the server to begin listening
  // // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  