import mongoose from "mongoose";
const { Schema } = mongoose;

export const userModel = mongoose.model(
  "user",
  new Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
      type: String,
      enum: ["admin", "customer"],
    },
  })
);
