const Product = require("../models/product.model");
const db = require("../databases/db");
const AppError = require("../utils/appError");

// console.log(users);

const productServices = {
  // @describe create a new product
  // @public api/v1/product/create

  async addProduct(product) {
    let productDetails = {
      product_name: product.product_name,
      product_description: product.product_description,
      product_varieties: product.product_varieties,
      date_uploaded: product.date_uploaded,
      date_edited: product.date_edited,
    };
    try {
      const newProduct = await db.execute(
        "INSERT INTO users (product_name, product_description, product_varieties, date_uploaded, date_edited) VALUES(?, ?, ??, ?)",
        [
          productDetails.product_name,
          productDetails.product_description,
          productDetails.product_varieties,
          productDetails.date_uploaded,
          productDetails.date_edited,
        ]
      );
      if (productDetails.product_name === product.product_name) {
        throw next(new AppError("Product already exist", 401));
      }
      return newProduct;
    } catch (error) {
      throw error;
    }
  },

  // @desc update existing product_name
  // @public api/v1/product/update/:id

  async changeProduct(id, product) {
    try {
      const [result, fields] = await db.execute(
        "UPDATE product SET product = ? WHERE id = ?",
        [product, id]
      );
      if (!id) {
        throw next(new AppError("Product Not Found!", 401));
      }
      return result || {};
    } catch (error) {
      throw error;
    }
  },

  // @desc delete existing product
  // @public api/v1/product/delete/:id

  async removeProduct(id) {
    try {
      const [result, fields] = await db.execute(
        "DELETE  FROM product WHERE id = ?",
        [id]
      );
      if (!id) {
        throw next(new AppError("Product Not Found!", 401));
      }
      return result || {};
    } catch (error) {}
  },
};

module.exports = productServices;
