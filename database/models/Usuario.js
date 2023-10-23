module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";

    let cols = {
        id:{
                    type: dataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
        },
        nombre:{
                type: dataTypes.STRING

        },
        apellido:{
            type: dataTypes.STRING

        },
        email:{
                    type: dataTypes.STRING
        },
        contrasenia:{
                type: dataTypes.STRING
        },
        avatar:{
                type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }


    const usuarios = sequelize.define(alias, cols, config);
    return usuarios;
}