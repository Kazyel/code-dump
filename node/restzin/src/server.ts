import express from "express";
import router from "./router";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import { Request, Response } from "express";
import { protectRoute } from "./modules/auth";
import { createNewUser, signInUser } from "./handlers/user";

const app = express();

/*
  App Configs
*/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
  Routes
*/
app.get("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve("public/index.html"));
});

app.use("/api", protectRoute, router);
app.post("/user", createNewUser);
app.post("/login", signInUser);

export default app;
