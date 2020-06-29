const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

//creating instance of socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
