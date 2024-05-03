const mongoose =require("mongoose");
const Joi = require('joi');

//Book Schema
const ProductSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true,
        min_length : 3,
        max_length:200
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength: 5
    },
    price:{
        type:Number,
        required: true,
        min:0

    },
    quantityInStock:{
        type: Number,
        required: true
    },
    category:{
        type:String,
        required:true,
        trim:true,
        min_length : 3,
        max_length:200
    },
    images: [String]
 
},{
    timestamps:true
});
// Product Model 
const Product = mongoose.model("Product",ProductSchema);

// Validate Create Product
const  ValidateCreateProduct = (obj)=>{
    const schema = Joi.object({
        name: Joi.string().trim().min(3).max(200).required(),
        description: Joi.string().trim().min(5).required(),
        price: Joi.number().min(0).required(),
        quantityInStock: Joi.number().required(),
        category: Joi.string().trim().min(3).max(200).required(),
    });
    return schema.validate(obj);
}

// Validate Update product 
const  ValidateUpdateProduct = (obj)=>{
    const schema = Joi.object({
        name: Joi.string().trim().min(3).max(200),//trim ki 7yad espace mn lwal olkhar dyal string
        description: Joi.string().trim().min(3),
        price: Joi.number().min(0),
        quantityInStock: Joi.number(),
        category: Joi.string().trim().min(3).max(200),

    });
    
    return schema.validate(obj);
}
module.exports = {
    Product ,ValidateCreateProduct,ValidateUpdateProduct
}