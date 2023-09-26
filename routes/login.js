const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController.js");

router.get("/login",loginController.login);
router.post("/login",loginController.loginProcess); 

 
module.exports=router;