const express = require("express");
const router = express.Router();
const product = require("../controllers/productController.js");
const multer = require("multer")
const path = require("path")
const authMiddleware = require("../middlewares/global/authMiddleware.js")
//configurando multer
const storage = multer.diskStorage({
    //ubicacion del archivo
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,"../public/images"))
    },
    //para que no se repita el nombre del archivo
    filename: function (req, file, cb) {
        const nuevoArchivo="product-"+Date.now()+path.extname(file.originalname);
        cb(null, nuevoArchivo)
    },
});
const upload = multer({storage: storage});
//pagina de todos los productos (product.ejs)
router.get("/producto",product.product); 
//producto particular (detalle.ejs)
router.get("/producto/detalle/:id/",authMiddleware,product.detalle); 
//producto eliminado 
router.delete("/producto/eliminado/:id/",product.eliminar);
//editar producto y guardar producto editado,
//primero mostramos la vista de edicion con get y guardamos con put(editar.ejs)
router.get("/producto/editar/:id/",product.editar);
router.put("/producto/editar/:id/",upload.single("ImagenProd"),product.editarGuardar);
module.exports=router;
