import { Schema, model } from "mongoose";

const episodeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  number: { type: Number, required: true },
  season: { type: String, required: true },
  src: { type: String, required: true },
  cover: { type: String, required: true },
});

const collection = model("Episodes", episodeSchema);

export default collection;
