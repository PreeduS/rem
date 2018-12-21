const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static('public'));
const server = app.listen(2001, ()=>{
    console.log("app started...");
});


const io = socket(server);

io.on('connection', socket => {
    console.log('socket connection made: ',socket.id);
    
    socket.on('chat', data => {
        io.sockets.emit('chat', {name:data.name, message: data.message});          //emit to all:
    });
    socket.on('typing', data => {
        socket.broadcast.emit('typing', {name:data.name});          //broadcast - send to all except itself
    });
    socket.on('doneTyping', data => {
        socket.broadcast.emit('doneTyping', {name:data.name});          //broadcast - send to all except itself
    });


});