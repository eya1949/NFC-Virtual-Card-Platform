import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import Jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const registerController = async (req, res) => {
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
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    // Send success response
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

//login

// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body; // Removed name from here, as it's not needed for login

//     // Validation
//     if (!email || !password) {
//       return res.status(400).send({ error: "Email and password are required" });
//     }

//     // Check user exists
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(401).send({ message: "Email is not registered" });
//     }

//     // Check password match
//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       return res.status(401).send({ message: "Invalid password" });
//     }

//     // Generate a token
//     const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d", // ensure you have a 'JWT_SECRET' in your environment variables
//     });

//     // Set cookie and respond
//     res.cookie("token", token);
//     return res.json({status:"Status", role:user.role})

//     res.status(200).send({
//       message: "Login successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token: token // Optionally send token in response body if needed
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in login process",
//       error: error.message
//     });
//   }
// };
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Email is not registered" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set cookie
    res.cookie("token", token);

    return res.status(200).json({ status: "success", role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in login process",
      error: error.message,
    });
  }
};

// verfy user
export const varifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decode.role === 1) {
          next();
        } else {
          return res.json("not admin");
        }
      }
    });
  }
};
// test
export const testController = (req, res) => {
  try {
    res.send("protected route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//forget password

export const forgetPassword = (res, req) => {
  const { email } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ Status: "User not existed" });
    }
    const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ayabacharou@gmail.com",
        pass: "yourpassword",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "myfriend@yahoo.com",
      subject: "Reset your password link",
      text: `http://localhost:5173/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send ({status:"success"})
      }
    });
  });
};
