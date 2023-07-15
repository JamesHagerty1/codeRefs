const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);  // socket server is its own server, connect the socket server with the normal server!
                                // and then there is a client in index.html

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// NOTE: we call 'connection' and 'disconnect' EVENTS; our server receives these events

io.on('connection', (socket) => {   // also see this socket in index.html script
  console.log('a user connected');

  socket.on('chat message', (msg) => {  // 'chat message' event emitted in index.html
    console.log('message: ' + msg);

    // then emit a 'chat message' event from server to users
    // the 'chat message' event here is distinct from above, it is client side in index.html
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});