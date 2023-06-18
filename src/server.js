import express, { urlencoded, json } from "express";
import morgan from "morgan";
import cors from "cors";
import { DB_PASSWORD, DB_SCHEMA, DB_USER, NODE_ENV } from "./config/index.js";
import User from "./models/User.js";

export function startServer() {
  const app = express();

  app.use(cors());
  app.use(urlencoded({ extended: true }));

  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(json());

  app.get("/", async (req, res) => {
    const users = await User.findAll();
    console.log(users);

    res.send("Nothing found here");
  });

  return app;
}
