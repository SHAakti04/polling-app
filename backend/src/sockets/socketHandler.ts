import { Server } from "socket.io";
import Poll from "../models/Poll";

export const socketHandler = (io: Server) => {
  io.on("connection", socket => {
    socket.on("join-poll", pollId => {
      socket.join(pollId);
    });

    socket.on("vote", async ({ pollId }) => {
      const poll = await Poll.findOne({ pollId });
      if (poll) {
        io.to(pollId).emit("poll-updated", poll);
      }
    });
  });
};
