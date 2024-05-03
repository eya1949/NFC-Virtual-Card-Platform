import  mongoose from "mongoose";
// import  Joi from "joi";

//User Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      min_length: 5,
      max_length: 100,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      min_length: 2,
      max_length: 100,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min_length: 6,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  { timestamps: true }
);

//Validate Register User
// function validateRegisterUser(obj) {
//   const schema = Joi.object({
//     email: Joi.string().trim().min(5).max(100).required().email(),
//     username: Joi.string().trim().min(2).max(200).required(),
//     password: Joi.string().trim().min(6).required(),
//   });
//   return schema.validate(obj);
// }
//Validate Login User
// function validateLoginUser(obj) {
//   const schema = Joi.object({
//     email: Joi.string().trim().min(5).max(100).required().email(),
//     password: Joi.string().trim().min(6).required(),
//   });
//   return schema.validate(obj);
// }

//Validate Update User
// function validateUpdateUser(obj) {
//   const schema = Joi.object({
//     email: Joi.string().trim().min(5).max(100).email(),
//     username: Joi.string().trim().min(2).max(200),
//     password: Joi.string().trim().min(6),
//   });
//   return schema.validate(obj);
// }

//User Model
const User = mongoose.model("User", UserSchema);
export { User };
// , validateRegisterUser, validateLoginUser, validateUpdateUser



