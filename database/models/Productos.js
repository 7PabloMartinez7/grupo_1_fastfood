module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";

    let cols = {
        id_Product:{
                    type: dataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
        },
        nombre:{
                type: dataTypes.STRING

        },
        descripcion:{
                    type: dataTypes.STRING
        },
        precio:{
                type: dataTypes.INTEGER
        },
        imagen:{
                type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }


    const Productos = sequelize.define(alias, cols, config);
    return Productos;
}