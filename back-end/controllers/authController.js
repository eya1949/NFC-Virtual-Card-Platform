const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const {User,validateRegisterUser,validateLoginUser}= require("../models/User");



/**
 * @desc Register  New user
 * @route /api/auth/register
 * @method Post
 * @access public 
 */
const register =  asyncHandler(async(req,res)=>{
    const {error}=validateRegisterUser(req.body);
    if(error){
        
        return res.status(400).json({message:error.details[0].message});
    }
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({message:"this user already registered"});
    }
    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    const result = await user.save();
    const token = jwt.sign({id: user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY);
    const{password, ...other} = result._doc;
    res.status(201).json({...other, token});
})

//authentication :  used by a client when the client needs to know that the server is system it claims to be
/**
 * @desc Login user
 * @route /api/auth/Login
 * @method Post
 * @access public 
 */

const login = asyncHandler(async(req,res)=>{
    //Validation the data :
    const {error}=validateLoginUser(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    //Send query to database
    let user = await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).json({message:"invalid email or password"});
    }
    //Dehashing a password .compare => we use it for Dehashing and comparete the password
    const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)
    if(!isPasswordMatch){
        return res.status(400).json({message:"invalid email or password"});
    }
    const token = jwt.sign({id: user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY);
    const{password, ...other} = user._doc;
    res.status(201).json({...other, token});
});

module.exports = {register,login};
