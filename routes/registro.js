const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const { body }=require("express-validator")
const registroController = require("../controllers/registroController.js");
const validaciones = [
    body("nombre").notEmpty().withMessage("tienes que escribir un nombre"),
    body("apellido").notEmpty().withMessage("tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("tienes que escribir un email").bail().isEmail().withMessage("tiene que ser un email valido"),
    body("contrasenia").notEmpty().withMessage("tienes que escribir una contraseña"),
    body("avatar").custom((value, { req })=>{
        let file = req.file
        if(!file){
            throw new Error ("tienes que subir una imagen")
        }
        return true;
    })
]
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
router.get("/registro",registroController.registro); 
router.post("/registro", upload.single("avatar"),validaciones, registroController.registroGuardado);

module.exports=router;