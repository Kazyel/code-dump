import { Router } from "express";

const router = Router();

/*
  Products Route
*/
router.get("/product", (req, res) => {
  res.json({ message: "Hello, World!" });
});

router.get("/product/:id", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

/* 
  Update Route
*/
router.get("/update", (req, res) => {
  res.json({ message: "Hello, World!" });
});

router.get("/update/:id", (req, res) => {});

router.put("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.delete("/update/:id", (req, res) => {});

/* 
  Update Point Route
*/

router.get("/update-point", (req, res) => {
  res.json({ message: "Hello, World!" });
});

router.get("/update-point/:id", (req, res) => {});

router.put("/update-point/:id", (req, res) => {});

router.post("/update-point", (req, res) => {});

router.delete("/update-point/:id", (req, res) => {});

export default router;
