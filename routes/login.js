const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController.js");
const { check } = require("express-validator");
//formulario login
router.get("/login",loginController.login);

//procesar login

 
module.exports=router;