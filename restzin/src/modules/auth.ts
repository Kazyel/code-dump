import jwt from "jsonwebtoken";
import * as argon2 from "argon2";

export const createJWT = (user: any) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!
  );

  return token;
};

export const hashPassword = async (password: string) => {
  const hash = await argon2.hash(password);
  return hash;
};

export const verifyPassword = async (password: string, hash: string) => {
  try {
    return argon2.verify(hash, password);
  } catch (e: any) {
    console.log("Error on verifying password.", e.message);
  }
};

export const protectRoute = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "Unauthorized access." });
  }

  const token = bearer.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized access." });
  }
};
