import { Server } from "socket.io";
import http from "http";

function initSockets(httpServer: http.Server): Server {
  const io = new Server(httpServer);

  return io;
}

export { initSockets };
