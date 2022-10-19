import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = 4000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (messagePayload) => {
    console.log(`message recieved: ${messagePayload.message}`)

    io.emit(messagePayload);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log("listening on *:4000");
});
