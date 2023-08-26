const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController.js");
const loginController = require("../controllers/registroController.js");
router.get("/registrarse",registroController.registro); 
router.get("/iniciar",loginController.login); 
module.exports=router;