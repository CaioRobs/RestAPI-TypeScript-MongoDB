import { omit } from "lodash";
import UserModel from "../models/userModel";
import { CreateUserInput } from "../schemas/userSchema";

export const getAllUsers = () => UserModel.find();

export const createUser = async (input: CreateUserInput) => {
  const user = await UserModel.create(input);
  return omit(user.toJSON(), "password");
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
};
