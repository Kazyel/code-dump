import express from "express";
import { createClient } from "redis";

const port = 3000;
const app = express();

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

function cache(key, ttl, slowFn) {
    return async function cachedFn(...props) {
        const cachedResponse = await client.get(key);

        if (cachedResponse) {
            console.log("Cache hit!");
            return cachedResponse
        }

        const response = await slowFn(...props);
        await client.setEx(key, ttl, response);
        return response;
    }
}

async function slowAndExpensiveQuery() {
    // Fake slow and expensive query
    console.log("Slow and Expensive Query!");

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Expensive Response");
        }, 10000);
    });

    return promise
}

const cachedFn = cache("cached-response", 10, slowAndExpensiveQuery);

app.get("/cached", async (req, res) => {
    const response = await cachedFn();
    res.json({ status: "ok", data: response }).end();
});


app.get("/pageview", async (req, res) => {
    const views = await client.incr("pageviews");
    res.json({ status: "ok", views }).end();
});

app.use(express.static("./static"));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});