const express = require("express");
const router = express.Router();
const productController = require("../controllers/productCartController.js");
router.get("/carrito",productController.productCart);
module.exports=router;