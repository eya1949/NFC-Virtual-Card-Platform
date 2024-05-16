import { Product } from "../models/ProductModel.js";
import { errorHandler } from "../utils/error.js";

/**
 * @desc create new product
 * @route /api/products/createNewProduct
 * @method post
 * @access private (only admin)
 */

export const createNewProduct = async (req, res, next) => {
  // Check if the user is an admin
  if (!req.user.isAdmin) {
    return next(errorHandler("You are not allowed to create a product", 403));
  }

  // Validate required fields
  const { name, description, price, quantityInStock, category } = req.body;
  if (!name || !description || !price || !quantityInStock || !category) {
    return next(errorHandler("Please provide all required fields", 400));
  }

  // Create a slug from the product name
  const slug = name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");

  // Create a new product instance
  const product = new Product({
    name,
    description,
    price,
    quantityInStock,
    category,
    slug,
    userId: req.user.id,
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};
