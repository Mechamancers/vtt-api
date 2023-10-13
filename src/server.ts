import http, { Server } from "http";
import { Server as SocketServer } from "socket.io";
import app from "./app";
import dotenv from "dotenv";
import { initSockets } from "./sockets";

dotenv.config();

const server: Server = http.createServer(app);
const io: SocketServer = initSockets(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`);
});
