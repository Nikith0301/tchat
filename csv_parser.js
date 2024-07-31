const http=require('http')
const mongoose=require('mongoose')
var express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app=express()

app.use(bodyParser.json())//configures Express to use the body-parser middleware with the json() option. This tells Express to parse incoming JSON data in the request body and make it accessible in the req.body object.

const schemaName=new mongoose.Schema({data:String})

const ModelName=mongoose.model('CollectionName',schemaName)

async function main(){
   try{ await mongoose.connect('mongodb://localhost:27017/Testdb')

  

// let point=new ModelName({data:"Name,Age,City\nAlice,30,New York\nBob,25,London\nCharlie,40,Paris\n"})

// await point.save()

const allData=await ModelName.find();//collection.find()
let s="";
for (x of allData){
    s+=x.data
}
// console.log(s);
 return s
}

catch (error) {
    console.error("Error:", error);
  }
  //  finally {
   
  //   await mongoose.disconnect();
  // }
}
function CsvToArray(csv){//this csv iis in string format
    rows=csv.split('\n')
    arr=[]
  for (let val of rows){
    temp=val.split(',')
    arr.push(temp)
  }
  console.log(arr)
   
  return arr
  
}



function ArrayToCsv(arr){
  
  csv=""
  
  
  for (let row of arr){
    line=row.join(',')
    csv+=line
    csv+='\n';
    // console.log(line);
  }
  return csv
  
}


let s=main(); 
s.then((data) => {
   
// let ar=CsvToArray(data)

app.use(cors()); 
app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})
app.get('/data',async(req,res)=>{

  const allData=await ModelName.find();//collection.find()
  let s="";
  for (x of allData){
      s+=x.data
  }
  console.log(s);
  //  return s
  let ar=CsvToArray(data)
    res.status(200).send(ar)
})

app.post('/db_post', async(req, res) => {
  console.log("Posting into db -- ", req.body.text)
  try{
     await mongoose.connect('mongodb://localhost:27017/Testdb')
     
    //  const DataSchema=new mongoose.Schema({data:String})
    //  const Info=mongoose.model('CsvData',DataSchema)  
   
     let detail=new ModelName({data:req.body.text})
     
     detail.save()
     res.send('saved')
     }
     catch (error) {
             console.error("Error:", error);
           }

  // res.end(req.body)
})
// app.post('/db_post', async(req, res) => {
//    console.log("Posting into db -- ", req.body.data)
//    try{
//       await mongoose.connect('mongodb://localhost:27017/Testdb')
      
//       const DataSchema=new mongoose.Schema({data:String})
//       const Info=mongoose.model('CsvData',DataSchema)  
//       let detail=new Info({data:"Mon"})
      
      
      
//       detail.save()
//       }
//       catch (error) {
//               console.error("Error:", error);
//             }
//    // const result = await collection.insertOne(req.body);
//    res.end(req.body)
// })

app.post('/store/:message',(req,res)=>{
// const info =req.body;
const info=req.params.message;
console.log(info)
const ModelName=mongoose.model('CollectionName',schemaName)

let point=new ModelName({data:mycsvArray})
 point.save()
res.json({ message: 'Data received successfully!' });
})





app.all('*',(req,res)=>{
    res.status(404).send('Pgae does not exist')
})


app.listen(5000,()=>{console.log('csv_parser server is listening on port 5000')})
  });




