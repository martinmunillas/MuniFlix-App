import { model, Schema } from "mongoose";

const accountSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const collection = model("auth", accountSchema);
export default collection;
