import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import { User}  from "../models/UserModel.js";


/**
 * @desc Register  New user
 * @route /api/auth/signup
 * @method Post
 * @access public 
 */

export const signupController = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validation
    if (!name) {
      return res.status(400).send({ error: "name are required" });
    }
    if (!email) {
      return res.status(400).send({ error: "email are required" });
    }
    if (!password) {
      return res.status(400).send({ error: "password are required" });
    }
    if (!phone) {
      return res.status(400).send({ error: "phone are required" });
    }
    if (!address) {
      return res.status(400).send({ error: "address are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create user
    const user = await new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    // Send success response
    res.status(201).send({
      success: true,
      message: "Signup successfull",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Login user
 * @route /api/auth/signin
 * @method Post
 * @access public 
 */

export const signinController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    //remove password
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
