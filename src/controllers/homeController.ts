import { NextFunction, Request, Response } from "express";
import NetworkAuthException from "../exceptions/NetworkAuthException";

export const healthCheckController = (_req: Request, res: Response) =>
  res.sendStatus(201);

export const errorCheckController = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    throw new NetworkAuthException("caio");
  } catch (error) {
    next(error);
  }
};
