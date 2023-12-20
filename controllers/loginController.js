
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const { validationResult } = require("express-validator")
const db = require("../database/models")
const loginController = {
    login: (req,res) => {
      res.render ("login")
    },
    processLogin:(req,res) =>{
      const errors = validationResult(req)
      let usuarioALoguearse
      db.Usuarios.findAll()
        .then((usuarios) => {
          if (errors.isEmpty()){
            for(let i=0; i<usuarios.length ; i++){
              if((req.body.email==usuarios[i].email)&&(bcrypt.compareSync(req.body.passwordUsuario,usuarios[i].contrasenia))){
                usuarioALoguearse=usuarios[i]
              }
            }
            if(usuarioALoguearse == undefined){
              res.render("login",{errors: [
               {msg: "Credenciales Invalidas"}
             ]})
           }
            req.session.usuarioLogueado= usuarioALoguearse  
            res.render("indexUser") 
          }
          else{
            res.render("login",{errors: errors.errors})
          }
        }) 
    }
}
module.exports = loginController;  
//***************LOGIN CON JSON*************
      /*
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
      */
 