const express= require("express");
const router= express.Router();
const multer= require("multer")
const path= require("path")
const newProductController= require("../controllers/newProductController.js");
const authMiddleware = require("../middlewares/global/authMiddleware.js")
//configurando multer para leer archivos
const storage = multer.diskStorage({
    //ubicacion del archivo
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,"../public/images/productos"))
    },
    //para que no se repita el nombre del archivo
    filename: function (req, file, cb) {
        const nuevoArchivo="product-"+Date.now()+path.extname(file.originalname);
        cb(null, nuevoArchivo)
    },
});
const upload = multer({storage: storage});
//crear producto (nuevoproducto.ejs)
router.get("/agregarProducto",authMiddleware,newProductController.crear);
//guardar producto
//dentro de upload.single("nombreDelInput")
router.post("/agregarProducto",upload.single("ImagenProd"),newProductController.procesar);
module.exports=router;