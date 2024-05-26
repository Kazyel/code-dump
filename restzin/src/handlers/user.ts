import prisma from "../db";
import { Request, Response } from "express";
import { createJWT, hashPassword, verifyPassword } from "../modules/auth";

export const createNewUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    const token = createJWT(user);

    return res.status(201).json({ token, user });
  } catch (e) {
    return res.status(500).json({ message: "An error occurred." });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const isValidPassword = await verifyPassword(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid password." });
  }

  const token = createJWT(user);
  res.json({ token });
};
