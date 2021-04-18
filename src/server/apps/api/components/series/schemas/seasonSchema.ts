import { model, Schema } from "mongoose";

const seasonSchema = new Schema({
  number: { type: Number, required: true },
  serie: { type: String, required: true },
});

const collection = model("Seasons", seasonSchema);

export default collection;
