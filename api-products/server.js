import express from "express";
import mongoose from "mongoose";
import { productRouter } from "./api/routes/index.js";
import { productCtlr } from "./api/controllers/index.js";

const { getAllProducts, getOneProduct, createProduct } = productCtlr;
/* 
  Mongoose
 */

// Connect to db
await mongoose.connect(
  "mongodb+srv://root:123@cluster0.n6ndm.mongodb.net/product_db"
);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/* 
Express
 */
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.use("/api", productRouter);

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Iniatialized server!!");
});