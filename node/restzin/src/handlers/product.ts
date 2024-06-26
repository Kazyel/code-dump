import { Request, Response } from "express";
import prisma from "../db";

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        products: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({ data: user.products });
  } catch (error) {
    console.log("An error occurred while fetching products: ", error);
  }
};

// Get a single product
export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json({ data: product });
  } catch (error) {
    console.log("An error occurred while fetching a product: ", error);
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        userId: req.user.id,
      },
    });

    res.json({ data: product });
  } catch (error) {
    console.log("An error occurred while creating a user: ", error);
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productUpdated = await prisma.product.update({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
      data: {
        name: req.body.name,
      },
    });

    res.json({ data: productUpdated });
  } catch (error) {
    console.log("An error occurred while updating a product: ", error);
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleted = await prisma.product.delete({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    console.log("An error occurred while deleting a product: ", error);
  }
};
