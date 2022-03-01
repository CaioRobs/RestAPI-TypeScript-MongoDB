import { NextFunction, Request, Response } from "express";
import { CreateUserInput } from "../schemas/userSchema";
import { createUser, getAllUsers } from "../services/userService";

export const getAllUsersHandler = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    next(error);
  }
};
