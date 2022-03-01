import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/userService";

export const createUserHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
  } catch (error: any) {
    next(error);
  }
};
