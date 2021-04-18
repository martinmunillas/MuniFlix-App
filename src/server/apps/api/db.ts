import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

const connect = async () => {
  if (!process.env.DB) throw new Error("DB is missing in the env");
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase connected succesfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
