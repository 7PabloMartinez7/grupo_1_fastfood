const { json } = require("express")
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const registroController = {
    registro: (req,res) => {
        res.render ("registro")
    },
    registroGuardado: (req, res) => {
        const data = req.body
        const usuario = JSON.parse(fs.readFileSync(users, "utf-8"))
        const registroUsuario = {
            id: usuario[usuario.length-1].id+1, 
            nombre: data.nombre, 
            apellido: data.apellido,
            email: data.email,
            contraseña: bcrypt.hashSync(data.contrasenia, 10),
            avatar: req.file ? req.file.filename: "default-image.png"
        }
        usuario.push(registroUsuario)
        fs.writeFileSync(users, JSON.stringify(usuario, null, " "))
        res.redirect ("/login");
        //res.send ("registro exitoso")
        //redireccion a pagina login
    }
}
module.exports = registroController;