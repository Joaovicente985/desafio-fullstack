import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class customError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.flatten().fieldErrors,
    });
  }

  return res.status(500).json({
    message: err.message,
  });
};

export { customError, handleErrors };
