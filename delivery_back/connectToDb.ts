import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// require("dotenv").config();

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Successfully connect to database");
  } catch (err) {
    console.error(err);
  }
};
connectToDb();
