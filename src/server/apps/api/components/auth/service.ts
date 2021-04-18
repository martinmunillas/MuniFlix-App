import model from "./schema";
import bcrypt from "bcryptjs";

const getUser = async (email: string) => {
  return await model.findOne({ email });
};

const getUsers = async () => {
  return await model.find();
};

interface UserConfig {
  email: string;
  password: string;
}

const createUser = async ({ password, email }: UserConfig) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await new model({
    email,
    password: hashedPassword,
  }).save();
};

export default {
  getUser,
  getUsers,
  createUser,
};
