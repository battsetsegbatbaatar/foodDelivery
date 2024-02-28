import mongoose from "mongoose";
const { Schema } = mongoose;

export const userModel = mongoose.model(
  "user",
  new Schema({
    name: { type: String, required: [true, "Please enter your name"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      minlenght: 8,
      required: [true, "Please enter your password"],
    },
    phoneNumber: {
      type: Number,
      lenght: 8,
      required: [true, "Please enter your phone number"],
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);
