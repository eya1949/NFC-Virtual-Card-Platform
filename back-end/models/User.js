const mongoose =require("mongoose");
const Joi = require('joi');

//User Schema
const UserSchema = new mongoose.Schema(
    {
    email:{
        type:String,
        required:true,
        trim:true,
        min_length:5,
        max_length:100,
        unique : true, 
        },
    username:{
            type:String,
            required:true,
            trim:true,
            min_length:2,
            max_length:100,
            }, 
    password:{
            type:String,
            required:true,
            trim:true,
            min_length:6,
            }, 
    isAdmin:{
            type:Boolean,
            default:false,
                }, 
    },
    {timestamps:true}
);

//Validate Register User 
function validateRegisterUser(obj){
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        username: Joi.string().trim().min(2).max(200).required(),
        password: Joi.string().trim().min(6).required(),
    });
    return schema.validate(obj);
}
//Validate Login User 
function validateLoginUser(obj){
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(6).required(),
    });
    return schema.validate(obj);
}

//Validate Update User 
function validateUpdateUser(obj){
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).email(),
        username: Joi.string().trim().min(2).max(200),
        password: Joi.string().trim().min(6),
    });
    return schema.validate(obj);
}

//User Model
const User = mongoose.model("User",UserSchema);
module.exports={User,validateRegisterUser,validateLoginUser,validateUpdateUser};