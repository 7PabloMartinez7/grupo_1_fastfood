
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const { validationResult } = require("express-validator")
const loginController = {
    login: (req,res) => {
      res.render ("login")
    },
    processLogin:(req,res) =>{
      const data = req.body
      const errors = validationResult(req)
      const archivoUser = fs.readFileSync(users, "utf-8")
      let usuarioALoguearse
      let usuario
      if (errors.isEmpty()){
        if (archivoUser=="") {
          usuario=[]
        }
        else{
          usuario=JSON.parse(archivoUser)
        }
          
        for(let i=0; i<usuario.length ; i++){
          if((req.body.email== usuario[i].email) && (bcrypt.compareSync(req.body.passwordUsuario, usuario[i].contraseña))){
            usuarioALoguearse = usuario[i]
            break;
          }
        }

        if(usuarioALoguearse == undefined){
           res.render("login",{errors: [
            {msg: "Credenciales Invalidas"}
          ]})
        }
        req.session.usuarioLogueado= usuarioALoguearse
        res.render("index")
      }else {
          res.render("login",{errors: errors.errors})
      }
    }
}

module.exports = loginController;