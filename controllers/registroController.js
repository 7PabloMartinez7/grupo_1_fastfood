const { json } = require("express")
const fs=require("fs")
const path = require ("path")
const bcrypt = require ("bcryptjs")
const users = path.join(__dirname,"../data/users.json")
const { validationResult } = require("express-validator")
const db = require("../database/models")
const registroController = {
    registro: (req,res) => {
        res.render ("registro")
    },
    registroGuardado: (req, res) => {
        const resultValidation= validationResult(req)
        if(resultValidation.errors.length>0){
            res.render("registro",{
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }else{
            db.Usuarios.create({
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                email:req.body.email,
                contrasenia:bcrypt.hashSync(req.body.contrasenia, 10),
                avatar:req.body.avatar
            })
            res.redirect("/login")
        }
    }   
}
module.exports = registroController;
//*************REGISTRO GUARDADO CON JSON ***********
/*
        const data = req.body
        const usuario = JSON.parse(fs.readFileSync(users, "utf-8"))
        //resultValidation es un objeto 
        const resultValidation= validationResult(req)
        //ingreso al objeto resultValidation y la propiedad errors y pregunto el largo si es mayor a 0
        if(resultValidation.errors.length>0){
            //   a la vista registro paso la variable error con los datos de resultValidation pero 
           //   en forma de objeto literal por eso uso ".mapped()"
            res.render("registro",{
            errors: resultValidation.mapped(),
            oldData: req.body
            })
        }
        else{
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
        } 
    */