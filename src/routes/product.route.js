const { Router } = require("express");

const router = Router();

const { productController } = require("../controllers/product.controller");

// @params req
// @params res
// @params next

// @toute create new product
router.post("/create", productController.createProduct);

// @route update a product
router.put("/update", productController.updateProduct);

// @route delete a product
router.delete("/remove", productController.removeProduct);

module.exports.productRouter = router;
