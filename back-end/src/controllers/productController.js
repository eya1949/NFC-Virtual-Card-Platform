const asyncHandler = require("express-async-handler");// ktblassi linas try o lcatch
const { ValidateCreateProduct, ValidateUpdateProduct, Product,} = require("../models/Product");



/**
 * @desc Get all Products With 
 * @route /api/Product
 * @method Get
 * @access public 
 */
const getAllProducts = asyncHandler(async(req,res)=>{
    const {minPrice , maxPrice}=req.query
    let Products;
    if (minPrice && maxPrice) {
        Products = await Product.find({price:{$gte:minPrice , $lte : maxPrice}})
        ;
    } else {
        products = await Product.find();


    }
    res.status(200).json(products);
})



/**
 * @desc Get products by id  ####:id = that mains is paramaitre
 * @route /api/products/:id
 * @method Get
 * @access public 
 */
const GetproductsbyID  = 
asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if (product){
        res.status(200).json(product);
    }else{
        res.status(404).json({message : "product not found"});
    }
})

/**
 * @desc create new product
 * @route /api/products
 * @method post 
 * @access private (only admin) 
 */
const createNewProduct = 
asyncHandler(async(req,res)=>{
        const { error } = ValidateCreateProduct(req.body);
        if(error){
        return res.status(400).json({ message: error.details[0].message});
        } 
    const product = new Product(
        {
        name:req.body.name,
        description:req.body.description,
        price: req.body.price,
        quantityInStock : req.body.quantityInStock,
        category: req.body.category,
        images: req.body.images
        })
    const result = await product.save();
    res.status(201).json(result);
    });

/**
 * @desc Update a book
 * @route /api/books/:id
 * @method PUT
 * @access private (only admin) 
 */
const UpdateAProduct = asyncHandler(async(req,res)=>{
    const {error} = ValidateUpdateProduct (req.body);
    if(error){
        return res.status(400).json({ message: error.details[0].message});
    }
    
       //const book = books.find(b => b.id === parseInt(req.params.id));
        const updateproduct = await Product.findByIdAndUpdate(req.params.id,{
        $set:{
            name:req.body.name,
            description:req.body.description,
            price: req.body.price,
            quantityInStock : req.body.quantityInStock,
            category: req.body.category,
            images: req.body.images
    } },{new:true});
    res.status(200).json(updateproduct);
    })

/**
 * @desc delete a product
 * @route /api/products/:id
 * @method delete
 * @access private (only admin) 
 */

const  deleteAProduct= asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);// hna kn9lbou 3la author f db base  b id {kncheke wach data wach kyna f db}
    if(product){
    await Product.findByIdAndDelete(req.params.id)//for delete data in db
    res.status(200).json({message:"Product has been deleted"});
    }else{
    res.status(404).json({message:"Product not found"});
    }
})
module.exports ={getAllProducts,GetproductsbyID,createNewProduct,UpdateAProduct,deleteAProduct} 
