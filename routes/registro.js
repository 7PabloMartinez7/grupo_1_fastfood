const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController.js");
const loginController = require("../controllers/registroController.js");
router.get("",registroController.registro); 
router.get("/login",loginController.login); 
module.exports=router;