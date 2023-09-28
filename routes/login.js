const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController.js");
//formulario login
router.get("/login",loginController.login);

//procesar login
router.post("/login",loginController.processLogin);
 
module.exports=router;