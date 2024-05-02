const asyncHandler = require("express-async-handler");
const {User,validateUpdateUser}= require("../models/User.js");
const bcrypt = require('bcryptjs');

/**
 * @desc Get all Users
 * @route /api/users
 * @method Get
 * @access private (only admin)
 */
const GetAllUsers = asyncHandler(async(req,res)=>{
    const users = await User.find().select("-password");
    res.status(200).json(users);
})

/**
 * @desc Get User by id  
 * @route /api/Users/:id
 * @method Get
 * @access private (only admin and user himself)
 */
const GetUserById = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password");
    if (user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message : "user not found"});
    }
})
/**
 * @desc delete a User ( protected route)
 * @route /api/Users/:id
 * @method delete
 * @access private (only admin and user himself)
 */
const deleteaAUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"user has been deleted"});
    }else{
    res.status(404).json({message:"user not found"});
    }
})
/**
 * @desc UpDate user
 * @route /api/users/:id
 * @method PUT
 * @access private
 */
const UpDateUser = asyncHandler(async(req,res)=>{

    //validate the data:
        const {error} = validateUpdateUser(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
}
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{ 
        $set:{
            email: req.body.email,
            username:req.body.username, 
            password:req.body.password, 
    } 
},{new:true}).select("-password");
    res.status(200).json(updatedUser);
})

module.exports = {GetAllUsers,GetUserById,deleteaAUser,UpDateUser};
