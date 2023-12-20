db = require ("../database/models")
const indexController ={
    index:(req,res)=>{
        if (req.session.usuarioLogueado != undefined){
            res.render ("indexUser")
        }else{
            res.render("index")
        }
    }
}
module.exports = indexController;