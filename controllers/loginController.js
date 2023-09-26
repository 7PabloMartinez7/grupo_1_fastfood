const { validationResult } = require("express-validator");

const user = require ("../models/User")

const loginController = {
    login: (req,res) => {
        res.render ("login")
    },
    loginProcess:(req,res) =>{
     let userToLogin= User.findByField("email", req.body.email);
     return res.send(userToLogin);
    },
    
    }

module.exports = loginController;