
// const EventEmitter=require('events')

// const emitter=new EventEmitter();
// var url='http://mylogger.io/log';

// class Logger extends EventEmitter{
//     logi(message){
//         console.log(message);
//         this.emit('logging',{data:'Bello'})
//         this.emit('messagelogged','pokemon')
//     }
//     poki(message){
//         console.log(message);
//         this.emit('logging',{data:'PikaPika'})
//         this.emit('messagelogged')
//     }
    
// }
// module.exports=Logger;
var express = require("express");
const mongoose = require("mongoose");
var app = express();

const DataSchema = new mongoose.Schema({ data: String });
const Info = mongoose.model("CsvData", DataSchema);

var bodyParser = require("body-parser");
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static('public'));
app.use(express.text());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Testdb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

// Route to serve index.html
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// Route to handle POST requests for inserting data into the database
app.post("/db_post", async (req, res) => {
  console.log("Posting into db -- ", req.body.text);
  try {
    let detail = new Info({ data: "Fact" });
    await detail.save();
    res.send("Done ");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error saving data");
  }
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
