const express = require("express");
const router = express.Router();
const { body } = require("express-validator")
const loginController = require("../controllers/loginController.js");
//formulario login
router.get("/login",loginController.login);

//procesar login
router.post("/login",[
    body("email").isEmail().withMessage("email invalido"),
    body("passwordUsuario").notEmpty().withMessage("contraseña incorrecta")
],loginController.processLogin);
 
module.exports=router;