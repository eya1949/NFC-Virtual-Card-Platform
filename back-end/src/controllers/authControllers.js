import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
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

// test
export const testController = (req, res) => {
  try {
    res.send("protected route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//auth with google

export const googleController = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;

  try {
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }

    // new user
    else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          // Math.random().toString(9).slice(-4),
          email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
// creat
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

//forget password

// export const forgetController = (req, res) => {
//   // Corrected parameters order
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   const { email } = req.body;
//   userModel
//     .findOne({ email: email })
//     .then((user) => {
//       if (!user) {
//         return res.send({ Status: "User not existed" });
//       }
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "1d",
//       });
//       var transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: "smtp.gmail.email",
//         port: 465,
//         port: true,
//         auth: {
//           user: process.env.USER_MAIL,
//           pass: process.env.APP_PASSWORD,
//         },
//       });

//       var mailOptions = {
//         from: process.env.USER_MAIL,
//         to: email,
//         subject: "Reset your password link",
//         text: `http://localhost:5173/resetPassword/${user._id}/${token}`,
//       };

//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//           return res.status(500).send({ Status: "Failed to send email" });
//         } else {
//           return res.send({ status: "success" });
//         }
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(500).send({ Status: "Internal Server Error" });
//     });
// };

//reset password
// export const resetController =  async (req, res) => {
//   const { id, token, password } = req.body;

//   // Verify the JWT token
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(400).json({ Status: "Error with token" });
//     } else {
//       // Hash the new password
//       bcrypt.hash(password, 10)
//         .try((hash) => {
//           // Update the user's password in the database
//           userModel.findByIdAndUpdate(id, { password: hash })
//             .try((user) => {
//               if (!user) {
//                 return res.status(404).json({ Status: "User not found" });
//               }
//               return res.status(200).json({ Status: "Password reset successfully" });
//             })
//             .catch((err) => {
//               return res.status(500).json({ Status: "Internal Server Error", Error: err.message });
//             });
//         })
//         .catch((err) => {
//           return res.status(500).json({ Status: "Error hashing password", Error: err.message });
//         });
//     }
//   });
// };

// export const resetController =  async (req, res) => {
//   const { token, password } = req.body;
//   try{
//     const decoded=jwt.verify(token, process.env.JWT_SECRET)
//     const id = decoded.id
//     const hashedPassword= await bcrypt.hash(password,10)
//     userModel.findByIdAndUpdate({_id:id}, { password: hash })
//     return res.json({ Status:true,message: "updated password" });
//   } catch (err) {
//     return res.json({ Status: "invalid token", Error: err.message })
//   }
// }
