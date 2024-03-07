import { Router } from "express";
import { getUser, singIn, singUp } from "../controllers/userController";
import { forgetPass } from "../controllers/nodemailer";

export const router = Router();

router.route("/users").get(getUser);
router.route("/signUp").post(singUp);
router.route("/signIn").post(singIn);
router.route("/forgetpass").post(forgetPass);
