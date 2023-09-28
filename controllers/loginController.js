const questMiddleware = require("../middlewares/global/questMiddleware")
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
        const data = req.body
        const usuario = JSON.parse(fs.readFileSync(users, "utf-8"))
        const errors = validationResult(req);

        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync("users.json", { })
            let users;
            if (usersJSON == "") {
                users= [];
            } else {usuario}

            for (let i = 0; i < usuario.length; i++) {
                if (usuario[i].email == data.email) {
                    if (bcrypt.compareSync(data.password, usuario[i]));
                    let usuarioALoguearse = usuario[i];
                    break;
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render ("login", {errors: [
                    {msg:"Credenciales invalidas"}
                 ]});

            }
            req.session.usuarioLogueado = usuarioALoguearse;
            res.render("Sucess");
        } else {
            return res.render("login", {errors:errors.errors})

        }
    }


module.exports = loginController;