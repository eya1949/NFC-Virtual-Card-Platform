import { User } from "../models/UserModel.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "api is not working" });
};

/**
 * @desc updateUser
 * @route /api/users/:userId
 * @method PUT
 * @access private
 */

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.name) {
    if (req.body.name.length < 7 || req.body.name.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.name.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.name !== req.body.name.toLowerCase()) {
      return next(errorHandler(400, "U   must be lowercase"));
    }
    if (!req.body.name.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
    if (req.body.phone !== req.body.phone) {
      return next(errorHandler(400, "cannot update"));
    }

    if (req.body.address !== req.body.address) {
      return next(errorHandler(400, "cannot update"));
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
    console.log(req.params.userId);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc deletUser
 * @route /api/users/:userId
 * @method DELETE
 * @access private
 */

export const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this user'));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc signOut
 * @route /api/users/signout
 * @method Post
 * @access private
 */

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};