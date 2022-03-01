import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserModel extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassowrd(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, required: true },
    passord: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next) => {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async (
  candidatePassword: string
): Promise<boolean> => {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.passord).catch((_e) => false);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
