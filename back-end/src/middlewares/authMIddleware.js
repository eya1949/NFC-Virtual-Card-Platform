import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// export const requireSignIn = (req, res, next) => {
//   try {
//     const decoded = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     ); 
//     req.user= decoded;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ error: "Failed to authenticate token" });
//   }
// };

export const requireSignIn = (req, res, next) => {
  try {
    const decoded = JWT.verify(
      req.headers.authorization, // Extract the JWT token from the Authorization header
      process.env.JWT_SECRET     // Use your JWT secret to verify the token
    ); 
    req.user = decoded;          // Attach the decoded user information to the request object
    next();                      // Proceed to the next middleware
  } catch (error) {
    console.error(error);        // Log any errors that occur during token verification
    res.status(401).json({ error: "Failed to authenticate token" }); 
  }
};

// admin  access
export const isAdmin = async (req, res, next) => {

  try {
    const user = await userModel.findById(req.user._id);
    if (user.isAdmin !== true) {
      return res.status(401).send({
        success: false,
        message: "UnAutorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success:false,
      
      message:'error in admin middelware'
    })
  }
};
