import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { CloudinaryContext, Image } from "cloudinary-react";

import {
  getAllProductsAsync,
  selectProducts,
  deleteProductAsync,
  productToEdit,
} from "../slices/productSlices";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  const updateProduct = (product) => {
    dispatch(productToEdit(product));
  };

  const deleteProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProductAsync(id));
    dispatch(getAllProductsAsync());
  };

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <Card key={index}>
            <Card.Body>
              {product.name}: {product.price}
              <Button
                variant="warning"
                onClick={() => updateProduct(product)}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </Button>
              {product.image && (
                <CloudinaryContext cloudName="dravernuss">
                  <Image publicId={product.image} width="50"></Image>
                </CloudinaryContext>
              )}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;
