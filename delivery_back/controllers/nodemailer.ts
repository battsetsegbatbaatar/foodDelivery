import * as nodemailer from "nodemailer";
import { Request, Response } from "express";
import { userModel } from "../models/userModel";

const verify: { key?: number | string; email?: string } = {
  key: "",
  email: "",
};

export const forgetPass = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "batbaatarbattsetseg122@gmail.com",
        pass: "uhkg wcuj ugqf dqvv",
      },
    });

    const verificationCode = Math.floor(Math.random() * 1000000 + 1);

    const info = await transporter.sendMail({
      from: "Pine cone food-delivery <batbaatarbattsetseg122@gmail.com>",
      to: email,
      subject: "Сайн байна уу ?" + email,
      html: "Food-delivery нууц үг сэргээх код:" + verificationCode,
    });

    console.log("Message sent: %s", info.messageId);
    res
      .status(200)
      .json({ message: "Email sent successfully", verificationCode });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyCode = async (req: Request, res: Response) => {
  const { email, code } = req.body;
  console.log(email, code);
  console.log(verify);
  try {
    if (email !== verify.email) {
      return res.status(400).json({ message: "User not found" });
    }
    if (code !== verify.key) {
      return res.status(400).json({ message: "Invalid verification code" });
    }

    res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
