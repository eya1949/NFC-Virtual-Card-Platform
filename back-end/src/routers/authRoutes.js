import express from "express";
import {registerController, loginController, testController} from "../controllers/authControllers.js";
import { requireSignIn } from "../middlewares/authMIddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

// test routes
router.get("/test",requireSignIn, testController);

export default router;
