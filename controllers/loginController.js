const { validationResult } = require("express-validator");

const user = require ("../models/User")

const loginController = {
    login: (req,res) => {
        res.render ("login")
    },
    processLogin: (req,res) => {
        let errors =  validationResult(red);
        if (errors.isEmpty()){
        let userJson = fs.readFileSync("user.json",{})
        let users;
        if (userJSON == " "){
            users= [];
        }
        for (let i=0; i < users.length; i++){
            if (user[i].email == req.body.email){
                if (bcrypt.compareSync(req.body.password, users[i].password))
                    let usuarioLoguearse = users [i];
                    break;
            }
            
            }
        }
        if (usuarioLoguearse == undefined){
            return res.render ("login",{errors:[
                {msg:"Credenciales invalidas"}

             ]});

        }
        req.session.usuarioLogueado = usuarioLoguearse;
        res.render ("success")
        }else{
            return res.render ("login",{errors:errors,errors});
        }
    }

module.exports = loginController;