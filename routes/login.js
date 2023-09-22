const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController.js");

router.get("/login",loginController.login); 
router.post("/login",[
check ("email").isEmail().withMassage("Email invalido"),
check ("password").isLength({min:8}).withMassage("La constraseña debe tener almenos 8 caracteres")
 ],loginController.processLogin);
 
module.exports=router;