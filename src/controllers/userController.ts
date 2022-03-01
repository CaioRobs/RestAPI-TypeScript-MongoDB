import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../services/userService";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).json({ messaeg: error.message });
  }
};
