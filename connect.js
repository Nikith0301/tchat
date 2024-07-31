// const mongoose = require('mongoose');

// async function main() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/Testdb');

//     // Define a schema for a Book model with meaningful fields
//     const bookSchema = new mongoose.Schema({
//       title: String,
//       author: String,
//       genre: String,
//       pageCount: Number,
//     });

//     const Book = mongoose.model('Book', bookSchema);

//     // Create a sample book document
//     const newBook = new Book({
//       title: "The Hitchhiker's Guide to the Galaxy",
//       author: "Douglas Adams",
//       genre: "Science Fiction",
//       pageCount: 420,
//     });

//     // Save the book to the database
//     await newBook.save();

//     console.log("Book saved successfully!");

 


//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     // Disconnect from the database gracefully
//     await mongoose.disconnect();
//   }
// }

// main();


const mongoose=require('mongoose')

async function main(){
try{
await mongoose.connect('mongodb://localhost:27017/Testdb')
//this is for animal
const AnimalSchema=new mongoose.Schema( 
                            {sno:Number,
                            name:String,
                            phone:Number } )

const Man=mongoose.model('Model',AnimalSchema)


let detail= new Man({sno:2,name:"Woman6",phone:9});

await detail.save()
//this is for plant
const PlantSchema=new mongoose.Schema( 
  {
  data:String,
  } )

const Goa=mongoose.model('Leaf',PlantSchema)//leaf  is a collection

let p="Papaya is good for health wink"
let detail2= new Goa({data: p});

await detail2.save()


const allCat=await Man.find();

for(const e of allCat){
    console.log(e)
}

}
catch (error) {
        console.error("Error:", error);
      } finally {
        // Disconnect from the database gracefully
        await mongoose.disconnect();
      }
    }
    main();



let dbConnection;

// function connectToDb(cb) {
//   mongoose.connect('mongodb://localhost:27017/Testdb')
//     .then(() => {
//       dbConnection = mongoose.connection;
//       cb();
//     })
//     .catch(err => {
//       console.log(err);
//       cb(err);
//     });
// }

// function getDb() {
//   console.log(dbConnection)
//   return dbConnection;
// }

// module.exports = { getDb, connectToDb };
