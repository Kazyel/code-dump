import express from "express";
import router from "./server/routes.js";
import { MongoClient } from "mongodb";

const port = 3000;
const app = express();

const connectionString = "mongodb://localhost:27017/";
export const client = new MongoClient(connectionString);
await client.connect();

app.use(express.static("./static"));
app.use("/", router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});

