import { model, Schema } from "mongoose";

const movieSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: [String], required: true },
  year: { type: Number, required: true },
  clasification: { type: String, required: true },
  duration: { type: Number, required: true },
  src: { type: String, required: true },
  cover: { type: String, required: true },
});

const collection = model("Movies", movieSchema);
export default collection;
