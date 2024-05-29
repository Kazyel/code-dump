import { Router } from "express";
import { Request, Response } from "express";
import { body } from "express-validator";
import { handleInputValidation } from "./modules/middlewares";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";

const router = Router();

/*
  Products Route
*/
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);

router.post(
  "/product",
  body("name").isString(),
  handleInputValidation,
  createProduct
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputValidation,
  updateProduct
);

router.delete("/product/:id", deleteProduct);

/* 
  Update Route
*/
router.get("/update", (req: Request, res: Response) => {});
router.get("/update/:id", (req: Request, res: Response) => {});

router.post(
  "/update",
  [
    body("title").exists(),
    body("body").exists().isString(),
    body("asset").optional(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.put(
  "/update/:id",
  [
    body("title").optional(),
    body("body").optional(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    body("version").optional(),
    body("asset").optional(),
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

router.post(
  "/update-point",
  [
    body("title").exists().isString(),
    body("body").exists().isString(),
    body("updateId").exists().isString(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.put(
  "/update-point/:id",
  [
    body("title").optional().isString(),
    body("body").optional().isString(),
    handleInputValidation,
  ],
  (req: Request, res: Response) => {}
);

router.delete("/update-point/:id", (req: Request, res: Response) => {});

export default router;
