import { Router } from "express";
import { singIn, singUp, getUser } from "../controllers/userController";

export const router = Router();

router.route("/users").get(getUser);
router.route("/signUp").post(singUp);
router.route("/signIn").post(singIn);
