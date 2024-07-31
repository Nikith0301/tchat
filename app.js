
// const EventEmitter=require('events')

// const Logger=require('./logger')
// const obj=new Logger();

// obj.on('messagelogged',function(){
//     console.log('listener called in app.js');
// });

// obj.on('logging',(arg)=>{
//     console.log(arg.data);
// })

// obj.logi('selmon bhai');
// obj.poki('this is laximon')
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.method, req.url); // Log request details
//     res.writeHead(200, {'Content-Type': 'text/plain'}); // Set headers and status code
//     res.end('Hello, world!'); // Send response body
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
const http = require("node:http");
const fs = require("node:fs");
const mongoose=require('mongoose')
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } 
  else if (req.url === "/array") {
    const array=[1,2,3,"Hello"];
    const table=[{name:"BOB"},{phone:"HII"},{type:"Fire"}]
    res.writeHead(200, { "Content-Type": "application/json" });
    let message=JSON.stringify( [ [{value:""},{value:""},{value:""},{value:""} ] ] );
console.log(JSON.parse(table));
    res.end(JSON.stringify(table));
  } 
  

  else if (req.url === "/csv") {
    const array=[1,2,3,"Hello"];
   
    res.writeHead(200, { "Content-Type": "application/json" });

console.log(JSON.parse(table));
    res.end(JSON.stringify(table));
  } 





  else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

/** HTML template
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const name = "Vishwas";
  let html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  html = html.replace("{{name}}", name);
  res.end(html);
});
*/

/** HTML response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
 */

/** JSON response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.end(superHero);
   
});
*/

server.listen(3001, () => {
  console.log("Server running on port 3001");
});