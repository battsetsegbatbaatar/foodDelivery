import { userModel } from "../models/userModel";
import express from "express";

export const getUser = async (req: express.Request, res: express.Response) => {
  const users = await userModel.find({});
  res.send(users);
};

export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  const user = await userModel.create({
    name: "Battsetseg",
    email: "bg@gmail.com",
    password: "1234",
    phoneNumber: 80836369,
    role: "admin",
  });
  res.send(user);
};
