import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/userService";
import log from "../utils/logger";

export const createUserHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    log.trace("controller de user iniciado");
    const user = await createUser(req.body);
  } catch (error: any) {
    next(error);
  }
};
