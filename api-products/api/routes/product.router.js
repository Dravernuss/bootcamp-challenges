import express from "express";
import { productCtlr } from "../controllers/index.js";
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

router.get(productRoutes.GET_ALL, getAllProducts);
router.get(productRoutes.GET_ONE, getOneProduct);
router.post(productRoutes.CREATE, createProduct);
router.put(productRoutes.UPDATE, findProduct, updateProduct);
router.delete(productRoutes.DELETE, deleteProduct);

export default router;
