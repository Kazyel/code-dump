import express from "express";
import { client } from "../index.js";

const router = express.Router();

router.get("/get", async (req, res) => {
    const db = client.db("adoption")
    const collection = db.collection("pets");

    const pets = await collection.find({
        $text: {
            $search: req.query.search,
        },
    },
    ).project({ _id: 0, index: 0 })
        .sort({ score: { $meta: "textScore" } })
        .limit(10)
        .toArray();

    res.json({ status: "ok", pets }).end();
});

export default router;