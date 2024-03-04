import mongoose from "mongoose";
const { Schema } = mongoose;

export const Image = mongoose.model(
  "image",
  new Schema({
    imageURL: { type: String, required: true },
  })
);
