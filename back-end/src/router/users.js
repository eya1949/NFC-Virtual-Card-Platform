const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const {User,validateUpdateUser}= require("../../models/User.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../../middlewares/verifyToken.js");



/**
 * @desc UpDate user
 * @route /api/users/:id
 * @method PUT
 * @access private
 */

router.put("/:id",verifyTokenAndAuthorization,asyncHandler(async(req,res)=>{

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
}));



/**
 * @desc Get all Users
 * @route /api/users
 * @method Get
 * @access private (only admin)
 */
router.get("/",verifyTokenAndAdmin,asyncHandler(async(req,res)=>{
    const users = await User.find().select("-password");
    res.status(200).json(users);
}));

/**
 * @desc Get User by id  
 * @route /api/Users/:id
 * @method Get
 * @access private (only admin and user himself)
 */

router.get("/:id",verifyTokenAndAuthorization,asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password");
    if (user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message : "user not found"});
    }
}));


/**
 * @desc delete a User ( protected route)
 * @route /api/Users/:id
 * @method delete
 * @access private (only admin and user himself)
 */
router.delete("/:id",verifyTokenAndAuthorization,asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"user has been deleted"});
    }else{
    res.status(404).json({message:"user not found"});
    }
}));
module.exports=router;