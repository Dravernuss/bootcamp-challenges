import axios from "axios";
import { Product } from "../models/products.model";

describe("Product tests", () => {
  let token;

  beforeAll(async () => {
    // Login to get token
    const login = await axios.post("http://localhost:5000/api/login", {
      email: "test2@test.com",
      password: "123",
    });
    const { token: tokenUser } = login.data;
    token = tokenUser;
  });

  it("should create a product", async () => {
    const product = {
      ref: "0x1",
      name: "Pantalon",
      description: "Pantalon corto",
      price: 10000,
      discount: 10,
      active: true,
    };
    const result = await axios.post(
      "http://localhost:5000/api/products/create",
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    expect(result.data).toBeDefined();
    expect(result.data.name).toEqual("Pantalon");
    expect(result.data.description).toEqual("Pantalon corto");
    expect(result.data.price).toEqual(10000);
    expect(result.data.discount).toEqual(10);
  });

  it("should get all products", async () => {
    const result = await axios.get("http://localhost:5000/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(result.status).toEqual(200);
  });

  it("should drop one product", async () => {
    // search id to test
    const products = await axios.get("http://localhost:5000/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const productToDelete = products.data[0];
    const result = await axios.delete(
      `http://localhost:5000/api/products/delete/${productToDelete._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(result.data.deletedCount).toEqual(1);
  });
});
