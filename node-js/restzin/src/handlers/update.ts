import { Request, Response } from "express";
import prisma from "../db";

export const getOneUpdate = async (req: Request, res: Response) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  if (!update) {
    return res.status(404).json({ message: "Update not found." });
  }

  res.json({ data: update });
};

export const getUpdates = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  if (!products) {
    return res.status(404).json({ message: "No updates found." });
  }

  const updates = products.reduce((acc, product) => {
    return [...acc, ...product.updates];
  }, [] as any[]);

  res.json({ data: updates });
};

export const createUpdate = async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: {
        connect: {
          id: product.id,
        },
      },
    },
  });

  res.json({ data: update });
};

export const updateUpdate = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  if (!products) {
    return res.status(404).json({ message: "Products not found." });
  }

  const updates = products.reduce((acc, product) => {
    return [...acc, ...product.updates];
  }, [] as any[]);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    return res.status(404).json({ message: "Update not found." });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};

export const deleteUpdate = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  if (!products) {
    return res.status(404).json({ message: "Products not found." });
  }

  const updates = products.reduce((acc, product) => {
    return [...acc, ...product.updates];
  }, [] as any[]);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    return res.status(404).json({ message: "Update not found." });
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
