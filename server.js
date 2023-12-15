import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import indexRouter from "./router/index.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server running on port " + PORT);

//middlewares
server.use("/api/public", express.static("public"));
server.use(cookieParser(process.env.COOKIE));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: true,
    credentials: true,
  })
);
server.use(morgan("dev"));

//router
server.use("/api", indexRouter);
server.use(not_found_handler);
server.use(error_handler);

server.listen(PORT, ready);
