import { userModel } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtPrivateKey = process.env.JWT_SECRET_KEY;

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users" });
  }
};

export const singUp = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    console.log(user);
    res.status(201).json({ message: "Success created account" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create account" });
  }
};

export const singIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const accessToken = jwt.sign({ id: user._id }, jwtPrivateKey as string, {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ id: user._id }, jwtPrivateKey as string, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("refreshToken", refreshToken)
      .header({ Authorization: accessToken })
      .send(user);
    res.status(200).json({ message: "Success enter", accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed" });
  }
};
