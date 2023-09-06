const express= require("express");
const router= express.Router();
const newProductController= require("../controllers/newProductController.js");
//crear producto
router.get("/agregarProducto",newProductController.crear);
//guardar producto
router.post("/agregarProducto",newProductController.procesar);
module.exports=router;