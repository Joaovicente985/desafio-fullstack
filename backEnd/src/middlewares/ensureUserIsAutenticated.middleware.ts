import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { customError } from "../errors/customErrors";

const ensureUserIsAuthenticatedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new customError("Missing bearer token", 401);
  }

  const rawToken = token.split(" ")[1];

  jwt.verify(rawToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new customError(error.message, 401);
    }

    res.locals.userId = decoded.sub;
  });

  return next();
};

export { ensureUserIsAuthenticatedMiddleware };
