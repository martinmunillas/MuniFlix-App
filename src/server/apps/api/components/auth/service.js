const model = require('./schema');
import bcrypt from 'bcryptjs';

const getUser = async (email) => {
  return await model.findOne({ email });
};

const getUsers = async () => {
  return await model.find();
};

const createUser = async ({ password, email }) => {
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
