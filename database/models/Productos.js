module.exports = (secualize, dataTypes) => {
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
                type: dataTypes //AVERIGUAR QUE DATATYPES ES!
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }


    const Productos = secualize.define(alias, columnas, config);
    return Productos;
}