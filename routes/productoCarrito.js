const express = require("express");
const router = express.Router();
const productController = require("../controllers/productCartController.js");
const authMiddleware = require("../middlewares/global/authMiddleware.js")
router.get("/carrito",authMiddleware,productController.productCart);
module.exports=router;