const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const registroController = require("../controllers/registroController.js");
router.get("/registro",registroController.registro); 
//configurando multer para leer archivos
const storage = multer.diskStorage({
    //ubicacion del archivo
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,"../public/images/avatars"))
    },
    //para que no se repita el nombre del archivo
    filename: function (req, file, cb) {
        const nuevoArchivo="avatar-"+Date.now()+path.extname(file.originalname);
        cb(null, nuevoArchivo)
    },
});
const upload = multer ({storage: storage});
router.post("/registro", upload.single("avatar"), registroController.registroGuardado);

module.exports=router;