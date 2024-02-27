import { Router } from "express";
import { createUser, getUser } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users", getUser).post("/users", createUser);

export { userRouter };
