
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const loginController = {
    login: (req,res) => {
      res.render ("login")
    },
    processLogin:(req,res) =>{
      const data = req.body
      const archivoUser = fs.readFileSync(users, "utf-8")
      let usuario
      if (archivoUser=="") {
        usuario=[]
      }
      else{
        usuario=JSON.parse(archivoUser)
      }
        
      for(let i=0; i<usuario.length ; i++){
        if(req.body.email== usuario[i].email && bcrypt.compareSync(req.body.passwordUsuario, usuario[i].contraseña)){
          res.render("/")
        }
      }
      res.render("/login")
    }
}

module.exports = loginController;