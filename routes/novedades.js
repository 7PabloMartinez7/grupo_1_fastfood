const express = require("express");
const router = express.Router();
const novedadesController = require("../controllers/novedadesCotroller.js");
router.get("",novedadesController.novedades); 
module.exports=router;
