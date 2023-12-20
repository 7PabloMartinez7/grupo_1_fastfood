const novedadesController = {
    novedades: (req,res) => {
        if (req.session.usuarioLogueado != undefined){
            res.render ("novedadesUser")
        }else{
            res.render ("novedades")
        }
        
    }
}
module.exports = novedadesController;