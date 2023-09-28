function authtMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next ();

    } else {
        //res.send("Esta pagina es solo para usuarios");
        res.render("login")
    }

}
module.exports = authtMiddleware;