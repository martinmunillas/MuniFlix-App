import { Schema, model } from "mongoose";

const seriesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cast: { type: [String], required: true },
  startYear: { type: Number, required: true },
  finalYear: { type: Number, required: true },
  clasification: { type: Number, required: true },
  cover: { type: String, required: true },
});

const collection = model("Series", seriesSchema);

export default collection;
