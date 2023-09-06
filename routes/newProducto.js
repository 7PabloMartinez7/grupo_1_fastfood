const express= require("express");
const router= express.Router();
const newProductController= require("../controllers/newProductController.js");

router.get("/agregarProducto",newProductController.crear);
router.post("/agregarProducto",newProductController.procesar);
module.exports=router;