// #################  Product Route: ########################
const express = require("express");
const router = express.Router();
const {verifyTokenAndAdmin}=require("../../middlewares/verifyToken");
const { getAllProducts, GetproductsbyID, UpdateAProduct, deleteAProduct, createNewProduct } = require("../../controllers/productController");

// /api/product
router
    .route("/")
    .get(getAllProducts)
    .post(verifyTokenAndAdmin,createNewProduct);

// /api/product/:id
router
    .route("/:id")
    .get(GetproductsbyID)
    .put(verifyTokenAndAdmin,UpdateAProduct)
    .delete(verifyTokenAndAdmin,deleteAProduct);


module.exports = router;



