var app = require('http').createServer()
var io = require('socket.io')(app);


const port = 3000;



app.listen(port, ()=>{
console.log(`Server is running on port ${port}`);
})





var clientCount = 0

io.on('connection', function (socket) {
  clientCount++;
  socket.name = 'user' + clientCount
  io.emit('enter', {name: socket.name});    
  socket.emit('enterSelf', {name: socket.name})
  socket.on('message', function (msg) {      
    io.emit('message', {name: socket.name, message: msg});
  });
  socket.on('addClick', function () {    
    io.emit('addClick', {name: socket.name, action: 'addClick'});
  });
  socket.on('doneClick', function () {      
    io.emit('doneClick', {name: socket.name, action: 'doneClick'});
  });
  socket.on('deleteClick', function () {      
    io.emit('deleteClick', {name: socket.name, action: 'deleteClick'});
  });
  socket.on("disconnect", function () {      
    io.emit('leave', {name: socket.name});
  })
});
