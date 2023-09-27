const { json } = require("express")
const fs=require("fs")
const path = require ("path")
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
            contraseña: data.contrasenia,
            avatar: req.file ? req.file.filename: "default-image.png"
        }
        usuario.push(registroUsuario)
        fs.writeFileSync(users, JSON.stringify(usuario, null, " "))
        res.send ("registro exitoso")
    }
}
module.exports = registroController;