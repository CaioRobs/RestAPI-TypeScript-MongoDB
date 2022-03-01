import { DocumentDefinition } from "mongoose";
import UserModel from "../models/userModel";
import UserDocument from "../interfaces/UserDocument";
import log from "../utils/logger";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    log.trace("user service iniciado");
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};
