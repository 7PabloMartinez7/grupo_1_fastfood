const express = require("express");
const router = express.Router();
const product = require("../controllers/productController.js");
router.get("/producto",product.product); 
//producto particular
router.get("/producto/detalle/:id/",product.detalle); 
//producto eliminado
router.delete("/producto/eliminado/:id/",product.eliminar);
//editar producto y guardar producto editado, primero mostramos la vista de edicion con get y guardamos con put
router.get("/producto/editar/:id/",product.editar);
router.put("/producto/editar/:id/",product.editarGuardar);
module.exports=router;
