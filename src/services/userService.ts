import { DocumentDefinition } from "mongoose";
import UserModel from "../models/userModel";
import UserDocument from "../interfaces/UserDocument";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};
