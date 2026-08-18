import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


// io.on => server ko listen krna
// jb server pe naya connection bnega to ye callback chlega

io.on("connection", (socket) => {
    console.log("new connection created")
    // socket.on => single user msg event ko fire krega tb event listen kr lege
    socket.on("message", (msg) => {
        console.log("user fired message event")
        console.log(msg)

        // io.emit => server ko fire krna
        // jese hi user msg event fire krega server sun lega or server abc event ko fire krna chalu krdega har direction me saare connected user ko
        io.emit("abc", msg)
    })
})

// task study
// socket.emit()
// socket.broadcast().emit()
// io.emit() 
// socket.io documentation => events, adapters, client, server

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
});

// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })
