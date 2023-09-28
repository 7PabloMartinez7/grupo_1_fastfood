
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const { validationResult } = require("express-validator");
const loginController = {
    login: (req,res) => {
      res.render ("login")
    },
    processLogin:(req,res) =>{
        
    }
}

module.exports = loginController;