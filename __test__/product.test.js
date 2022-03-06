const app = require("../src/app");
const jwt = require("jsonwebtoken");
const db = require("../src/databases/db");
require("dotenv").config();
const supertest = require("supertest");
const { expect } = require("chai");
const request = supertest(app);

chai.use(chaiHttp);

describe("Product", () => {
  describe("POST /api/v1/product/create", () => {
    it("should add new product", async () => {
      const createProductRoute = "/api/v/product/create";
      const res = await request.post(createProductRoute).send({
        product_name: "product one",
        product_description: "This is product one",
        product_varieties: `{size: 10, color: 'yellow', quantity: 15, images: ['image1', 'image2'], price: 100}`,
      });
      expect(res.status).toBe(200);
      expect(res.status.message).toBe("New Product is added successfully...");
    });
  });

  describe("UPDATE /api/v1/product/update/:id", () => {
    it("should update existing product and it's varieties", () => {
      const updateProductRoute = "api/v1/product/update/:id";
      const res = await request.put(updateProductRoute);

      expect(res.status).toBe(200);
    });
  });

  describe("DELETE /api/v1/product/delete/:id", () => {
    it("should delete an existing product, and it's varieties", () => {
      const deleteProductRoute = "api/v1/product/delete/:id";
      const res = await request.delete(deleteProductRoute);

      expect(res.status).toBe(200);
    });
  });
});
