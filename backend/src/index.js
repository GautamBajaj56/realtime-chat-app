import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" })); // to parse incoming JSON requests with a limit of 10mb
app.use(express.urlencoded({ limit: "10mb", extended: true })); // to parse incoming URL-encoded requests with a limit of 10mb and extended syntax
app.use(cookieParser()); // to parse cookies from incoming requests
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fullstack-chat-app-tau-five.vercel.app",
    ],
    credentials: true, // to allow cookies to be sent in cross-origin requests
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
