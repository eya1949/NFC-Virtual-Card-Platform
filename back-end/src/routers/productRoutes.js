import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createNewProduct } from '../controllers/productController.js';

const router = express.Router();

router.post("/creat", verifyToken, createNewProduct)

export default router;
