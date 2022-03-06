const productServices = require("../services/product.services");
const { successResMsg, errorResMsg } = require("../utils/responseHandlers");
const AppError = require("../utils/appError");

const productController = {
  async createProduct(req, res, next) {
    try {
      const newProduct = req.body;
      if (!newProduct) {
        return next(new AppError("please fill in the required field...", 404));
      }
      const data = await productServices.addProduct(newProduct);
      console.log(data);
      return successResMsg(
        res,
        201,
        "New Product is added successfully...",
        data
      );
    } catch (error) {
      console.log(error);
      return errorResMsg(res, 500, error.message);
    }
  },

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const {
        product_name,
        product_description,
        product_varieties,
        date_uploaded,
        date_edited,
      } = req.body;
      if (!id) {
        return next(new AppError("Id is not found!", 404));
      }
      const data = await productServices.changeProduct(id, {
        product_name,
        product_description,
        product_varieties,
        date_uploaded,
        date_edited,
      });
      // console.log(data);
      return successResMsg(res, 200, "Update successfully", data);
    } catch (error) {
      return errorResMsg(res, 500, error.message);
    }
  },

  async removeProduct(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(new AppError("Product Not Found!", 404));
      }
      const data = await productServices.removeProduct(id);
      return successResMsg(res, 200, "Record deleted successfully", data);
    } catch (error) {
      return errorResMsg(res, 500, "Something Wrong Occur in Server");
    }
  },
};

module.exports = { productController };
