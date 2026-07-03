import dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


import connectDB from "./src/config/database";
import pollRoutes from "./src/routes/pollRoutes";
import { apiLimiter } from "./src/middleware/rateLimiter";
import { socketHandler } from "./src/sockets/socketHandler";



const app = express();

const server = http.createServer(app);
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
     credentials: true
  }
});

connectDB();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
// app.use("/api", apiLimiter);
app.use("/api/polls", pollRoutes);

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
