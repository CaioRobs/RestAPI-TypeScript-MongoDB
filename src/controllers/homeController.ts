import { NextFunction, Request, Response } from "express";
import NetworkAuthException from "../exceptions/NetworkAuthException";

export const healthCheck = (_req: Request, res: Response) =>
  res.sendStatus(200);

export const errorCheck = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    throw new NetworkAuthException("caio");
  } catch (error) {
    next(error);
  }
};
