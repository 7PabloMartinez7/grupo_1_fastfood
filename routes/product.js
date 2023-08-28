const express = require("express");
const router = express.Router();
const product = require("../controllers/productController.js");
router.get("/producto",product.product); 
module.exports=router;
