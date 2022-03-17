import express from "express";

import { productCtlr } from "../controllers/index.js";
import { validateToken } from "../middlewares/index.js";

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct,
} = productCtlr;

const router = express.Router();

const productRoutes = {
  GET_ALL: "/products/",
  GET_ONE: "/products/:id",
  CREATE: "/products/create",
  UPDATE: "/products/update/:id",
  DELETE: "/products/delete/:id",
};

router.get(productRoutes.GET_ALL, validateToken, getAllProducts);
router.get(productRoutes.GET_ONE, validateToken, getOneProduct);
router.post(productRoutes.CREATE, validateToken, createProduct);
router.put(productRoutes.UPDATE, validateToken, findProduct, updateProduct);
router.delete(productRoutes.DELETE, validateToken, deleteProduct);

export default router;
