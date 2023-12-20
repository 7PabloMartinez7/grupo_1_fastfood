db = require ("../database/models")

const usuarioController ={
    usuario: (req,res) => {
        let userlog=req.session.usuarioLogueado
        db.Usuarios.findAll()
        .then((usuarios) => {
            //res.send(userlog)
            res.render ("usuario", {usuarios:usuarios,userlog:userlog})
        })
    }
}
module.exports = usuarioController;