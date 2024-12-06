// const { getDb, connectToDb } = require('./connect')

var express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var app = express();

const DataSchema = new mongoose.Schema({ data: String });
const Info = mongoose.model("csvdatas", DataSchema);

var bodyParser = require("body-parser");
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static('public'));
app.use(express.text());
app.use(cors()); 
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// app.post('/test_post', text, function (req, res) {
//    // Prepare output in JSON format
//    // response = {
//    //     poke:'mongo',
//    //     name:req.body.mon
//    // };
//   response={
//      seen
//    }
//    console.log(req.body);

//    res.end(JSON.stringify(response));
// })

// app.post('/test_post', (req, res) => {
//    console.log("Method called is -- ", req.body)
//    res.status(200).text('this is some sample written data')
//    res.end(req.body)
// })
// let gemini

// connectToDb((err) => {
//   if(!err){
//     app.listen('8000', () => {
//       console.log('app listening on port 8000')
//     })
//     db = getDb()
//   }
// })
app.use(express.json())
app.post("/db_post", async (req, res) => {
  console.log("Posting into db -- ", req.body.text);
  try {
    await mongoose.connect("mongodb://localhost:27017/Testdb");

    let detail = new Info({ data: req.body.text });

    detail.save();
    res.send("Done ");
    res.end(req.body.data);
  } catch (error) {
    console.error("Error:", error);
  }
  // const result = await collection.insertOne(req.body); this is used with mongodb not mongoose
 
});

app.post("/db_insert", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/Testdb/csvdatas");
  const result = new Info({ data: req.body.data });
  result.save();
});



var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
