import { Router } from "express";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { handleInputValidation } from "./handlers/middlewares";

const router = Router();

/*
  Products Route
*/
router.get("/product", (req: Request, res: Response) => {});

router.get("/product/:id", (req: Request, res: Response) => {});

router.put(
  "/product/:id",
  [body("name").isString(), body("price").isNumeric(), handleInputValidation],
  (req: Request, res: Response) => {}
);

router.post(
  "/product",
  [body("name").isString(), body("price").isNumeric(), handleInputValidation],
  (req: Request, res: Response) => {}
);

router.delete("/product/:id", (req: Request, res: Response) => {});

/* 
  Update Route
*/
router.get("/update", (req: Request, res: Response) => {});

router.get("/update/:id", (req: Request, res: Response) => {});

router.put(
  "/update/:id",
  [
    body("title").isString(),
    body("body").isString(),
    body("version").optional().isString(),
    body("asset").optional().isString(),
    body("updatedAt").isDate(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.post(
  "/update",
  [
    body("title").isString(),
    body("body").isString(),
    body("version").optional().isString(),
    body("asset").optional().isString(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.delete("/update/:id", (req: Request, res: Response) => {});

/* 
  Update Point Route
*/

router.get("/update-point", (req: Request, res: Response) => {});

router.get("/update-point/:id", (req: Request, res: Response) => {});

router.put(
  "/update-point/:id",
  [
    body("title").isString(),
    body("body").isString(),
    body("updatedAt").isDate(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.post(
  "/update-point",
  [
    body("title").isString(),
    body("body").isString(),
    body("updatedAt").isDate(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.delete("/update-point/:id", (req: Request, res: Response) => {});

export default router;
