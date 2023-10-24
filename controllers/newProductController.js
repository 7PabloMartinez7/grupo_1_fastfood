const fs=require("fs")
const path = require ("path")
const productoJson = path.join(__dirname,"../data/products.json")
const db = require("../database/models")
const newProductController ={
    crear:(req,res)=>{
        res.render("nuevoproducto")
    },
    procesar:(req,res)=>{
        db.Productos.create({
            nombre:req.body.NombreProd,
            descripcion:req.body.DescripcionProd,
            precio:req.body.PrecioProd,
            imagen:req.body.ImagenProd,
        })
        res.redirect("/")
        
    }
}
module.exports = newProductController;
//*******PROCESAR CON JSON*******
/* 
        const data=req.body;
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        const newProduct= {
            id:product[product.length -1].id+1,
            name:data.NombreProd,
            description:data.DescripcionProd,
            price:data.PrecioProd,
            image:req.file ? req.file.filename : "default-image.png"
        }
        //guardar en el array
        product.push(newProduct)
        //escribir el archivo
        fs.writeFileSync(productoJson, JSON.stringify(product, null ," "))
        res.redirect("/")
        */