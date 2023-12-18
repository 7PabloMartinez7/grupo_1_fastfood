const express= require("express");
const router= express.Router();
const usuarioController= require("../controllers/usuarioController.js");
router.get("/usuario",usuarioController.usuario);
module.exports=router;