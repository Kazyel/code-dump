import express from "express";
import router from "./router";
import path from "path";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve("public/index.html"));
});

app.use("/api", router);

export default app;
