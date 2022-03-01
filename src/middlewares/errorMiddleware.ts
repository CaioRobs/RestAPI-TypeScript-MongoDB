import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Somethin went wrong";

  return res.status(status).json({ message });
};

export default errorMiddleware;
