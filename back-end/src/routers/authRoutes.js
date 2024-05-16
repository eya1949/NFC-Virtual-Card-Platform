import express from "express";
import {
  googleController,
  signinController,
  signupController,
  // resetController,
  // forgetController,
} from "../controllers/authControllers.js";
// import { isAdmin, requireSignIn } from "../middlewares/authMIddleware.js";

const router = express.Router();

router.post("/signup",  signupController);

router.post("/signin", signinController);
router.post("/google", googleController);

// // test routes
// router.get("/test", requireSignIn, isAdmin, testController);

// //forget password 
// router.post("/forgetPassword" , forgetController)

// //reset password 
// router.post("/resetPassword" , resetController)

export default router;
