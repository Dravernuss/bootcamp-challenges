import mongoose from "mongoose";

// Schema products
const schemaProducts = {
  ref: String,
  name: String,
  description: String,
  created_at: { type: Date, default: Date.now() },
  price: Number,
  discount: Number,
  active: Boolean,
  image: String,
  image_id: String,
};

// Product model
const Product = mongoose.model("Product", schemaProducts, "product");

export default Product;
