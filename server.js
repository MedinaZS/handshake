const express = require('express');
const cors = require('cors'); //Cors
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:3000' }));


const server = app.listen(8000, () => {
    console.log("Listening at Port 8000");
})

// Socket.io
// To initialize the socket, we need to
// pass invoke a new instance of socket.io
// and pass it our express server
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

// Oyente de eventos y emisores
io.on("connection", socket => {
    console.log("Nice to meet you (Handshake)");
    // Cada cliente que se conecta tiene su propio socket id
    console.log(socket.id);

    // if this is logged in our node terminal, that means a new client
    // has successfully completed the handshake!

    // We add all of our additional event listeners
    // right inside this function.
    // NOTE "connection" is a BUILT IN event listeners.

    socket.emit("welcome_message", "Welcome, this is a message from socket.io");
})
