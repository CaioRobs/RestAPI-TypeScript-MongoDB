import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";
import log from "../utils/logger";

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Somethin went wrong";
  log.error(error);
  return res.status(status).json({ message });
};

export default errorMiddleware;
