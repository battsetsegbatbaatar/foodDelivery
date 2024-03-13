import { Router } from "express";
import {
  getUser,
  singIn,
  singUp,
  userRef,
  userUpdate,
} from "../controllers/userController";
import { forgetPass, verifyCode } from "../controllers/nodemailer";

export const router = Router();

router.route("/users").get(getUser);
router.route("/signUp").post(singUp);
router.route("/signIn").post(singIn);

// code sergeeh heseg
router.route("/forgetpass").post(forgetPass);
router.route("/verifyCode").post(verifyCode);

// hereglegchiih profile heseg
router.route("/user").get(userRef);
router.route("/user").post(userUpdate);
