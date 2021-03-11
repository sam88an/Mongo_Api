// Rutas para producto
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// api/productos
router.post("/", productController.CreateProduct);
router.get("/", productController.getAllProduct);
router.put("/:id", productController.updateProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
