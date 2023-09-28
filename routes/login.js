
const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController.js");
const { check } = require("express-validator");
//formulario login
router.get("/login",loginController.login);

//procesar login
router.post("/login", [ 
    check("email").isEmail().withMessage("Email invalido"),
    check("password").isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")
],loginController.processLogin); 

router.get("/check",function(req,res){
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas logueado")
    }else {
        res.send("El usuario logueado es"+req.session.usuarioLogueado.email);
    }
})

 
module.exports=router;