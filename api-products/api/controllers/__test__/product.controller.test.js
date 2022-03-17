import mongoose from "mongoose";
import { getAllProducts, getOneProduct } from "../product.controller.js";
import Product from "../../models/products.model.js";

const mockRequest = (body, params) => {
  const req = {};
  req.body = { ...body };
  req.params = { ...params };
  return req;
};

const mockResponse = () => {
  const res = {};

  function response(data) {
    res.data = data;
  }

  // res.dataResponse = [];
  res.send = jest.fn();
  res.json = jest.fn().mockImplementation(response);
  res.next = jest.fn();
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe("Product controller tests", () => {
  beforeAll(async () => {
    const dbConnection =
      "mongodb+srv://root:123@cluster0.n6ndm.mongodb.net/test_db";
    await mongoose.connect(dbConnection);
  });

  it("should get all products", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await getAllProducts(req, res);
    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(res.data);
  });

  it("should get one product", async () => {
    const product = await Product.findOne();
    console.log("Product ", product._id);

    const spy = jest.spyOn(Product, "findById");

    const req = mockRequest({}, { id: product._id });
    const res = mockResponse();
    await getOneProduct(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(res.data);
  });
});
