import express from "express";
import { Request, Response } from "express";
import path from "path";

export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve("public/index.html"));
});
