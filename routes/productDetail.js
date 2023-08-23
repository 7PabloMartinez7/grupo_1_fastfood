const express = require("express");
const router = express.Router();
const productD = require("../controllers/productDetailcontroller.js");
router.get("/",productD.product); 
module.exports=router;
