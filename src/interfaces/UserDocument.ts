import mongoose from "mongoose";

export default interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassowrd(candidatePassword: string): Promise<boolean>;
}
