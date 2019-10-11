var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tables 
var tables = [
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
    {
      routeName: "table#1",
      ID: "Test1",
      Name: "Test1",
      email: "test1",
      phone: "2" + "222-" + "222" + "-" + "222"
    }
  ];

  var waitingList = [
    {
      routeName: "table#2",
      ID: "Test2",
      Name: "Test2",
      email: "test2",
      phone: "2" + "222-" + "222" + "-" + "222"
    },
    {
      routeName: "table#2",
      ID: "Test2",
      Name: "Test2",
      email: "test2",
      phone: "2" + "222-" + "222" + "-" + "222"
    }
  ]
  
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
app.get("/api/tables", function(req, res) {

  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList);
});


app.post("/api/tables", function (req, res) {

console.log(req.body);

if (tables.length < 5){
  
  tables.push(req.body)
  res.json(true);
} else {
  waitingList.push(req.body)
  res.json(false)
}

});



  // // Starts the server to begin listening
  // // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  