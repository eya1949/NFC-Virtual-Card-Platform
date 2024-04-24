import express from "express";
import {
  registerController,
  loginController,
  testController,
  varifyUser,
  forgetPassword,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMIddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

//forget password 
router.post("/forgetPassword" , forgetPassword)

export default router;
