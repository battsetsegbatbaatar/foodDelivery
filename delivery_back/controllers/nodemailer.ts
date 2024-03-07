import * as nodemailer from "nodemailer";
import { Request, Response } from "express";
import { userModel } from "../models/userModel";

export const forgetPass = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const transporter = nodemailer.createTransport({
      secure: true,
      auth: {
        user: "batbaatarbattsetseg122@gmail.com",
        pass: "uhkg wcuj ugqf dqvv",
      },
    });
    const genrationCode = Math.floor(Math.random() * 1000000 + 1);
    async function main() {
      const info = await transporter.sendMail({
        from: "Pine cone food-delivery",
        to: email,
        subject: "Сайн байна уу ?" + { email },
        html: "Food-delivery нууц үг сэргээх код:" + { genrationCode },
      });
      console.log("Message sent: %s", info.messageId);
    }
    main().catch(console.error);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
