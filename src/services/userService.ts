import { omit } from "lodash";
import UserModel from "../models/userModel";
import { CreateUserInput } from "../schemas/userSchema";

export const getAllUsers = () => UserModel.find();

export const createUser = async (input: CreateUserInput) => {
  const user = await UserModel.create(input);
  const parsedUser = omit(user.toJSON(), "password");
  return parsedUser;
};
