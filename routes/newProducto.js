const express= require("express");
const router= express.Router();
const newProductController= require("../controllers/newProductController.js");
router.get("/agregarProducto",newProductController.newProduct);
module.exports=router;