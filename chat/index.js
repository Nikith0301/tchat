const express= require('express')


const socket=require('socket.io')


const app=express();
// Serve specific file when requested
app.get('/file1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'file1.html'));
});

app.get('/file2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'file2.html'));
});




app.use(express.static("public"))
const server=app.listen(8080,function (){
    console.log("listening on port 8080")
})

const io= socket(server)

io.on("connection",(socket)=>{
    console.log("User has connected",socket.id)

    socket.on('chat message', (msg) => {
        // console.log('user has tiped',msg);
        io.emit('chat message',msg)
      });
})