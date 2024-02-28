import { Router } from "express";
import { singIn, singUp } from "../controllers/userController";

const router = Router();

router.route("/singup").post(singUp);
router.route("/signin").post(singIn);

export { router };
