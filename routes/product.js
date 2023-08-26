const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");
router.get("/compra",productController.product); 
router.get("",productController.productCart);
module.exports=router;
