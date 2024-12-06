// var express = require('express');
// const mongoose = require('mongoose');
// var app = express();

// app.use(express.json());

// app.get('/index.html', function (req, res) {
//   res.sendFile(__dirname + "/" + "index.html");
// });

// app.get('/home', function(req, res) {
//   res.send("This is Home page");
// });

// app.post('/name_post', async (req, res) => {
//   console.log("Trying to post");

//   try {
//     await mongoose.connect('mongodb://localhost:27017/Testdb');

//     const NameSchema = new mongoose.Schema({
//       first_name: String,
//       last_name: String
//     });

//     const Name = mongoose.model('leafs', NameSchema);

//     let detail = new Name({ first_name: "Arjun", last_name: "Rampal" });

//     await detail.save(); // Corrected: Added parentheses to call the save method

//     res.send("Document saved successfully"); // Added: Sending response to client
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Error occurred while saving document"); // Added: Sending error response
//   }
// });

// var server = app.listen(8000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log("Example app listening at http://%s:%s", host, port);
// });
var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

//defining mongo model here
const NameSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
});
const Name = mongoose.model("leafs", NameSchema);

// app.use(express.static('public'))
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/home", function (req, res) {
  res.send("Ths is Home page");
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.post("/process_post", urlencodedParser, async function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  try {
    await mongoose.connect("mongodb://localhost:27017/Testdb");

    // let detail=new Name({first_name:"Mohan",last_name:"Rajpal"})
    let detail = new Name({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    detail.save();
    res.send("Document saved ");
  } catch (error) {
    console.error("Error:", error);
  }
  //   res.end(JSON.stringify(response));
});

app.post("/name_post", async (req, res) => {
  console.log("Trying to post");

  try {
    await mongoose.connect("mongodb://localhost:27017/Testdb");

    const NameSchema = new mongoose.Schema({
      first_name: String,
      last_name: String,
    });
    const Name = mongoose.model("leafs", NameSchema);

    // let detail=new Name({first_name:"Mohan",last_name:"Rajpal"})
   //  let detail = new Name({
   //    first_name: req.body.first_name,
   //    last_name: req.body.last_name,
   //  });
   let detail =await Collection.insertOne({
         first_name: req.body.first_name,
         last_name: req.body.last_name,
       })
    await detail.save();
    res.send("Document saved ");
  } catch (error) {
    console.error("Error:", error);
  }
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
