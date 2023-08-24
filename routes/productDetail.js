const express = require("express");
const router = express.Router();
const productDetailcontroller = require("../controllers/productDetailcontroller.js");
router.get("/compra",productDetailcontroller.product); 
module.exports=router;
