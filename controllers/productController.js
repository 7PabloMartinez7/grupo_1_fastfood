const fs=require("fs")
const path = require ("path")
const productoJson = path.join(__dirname,"../data/products.json")
const productController = {
    product: (req,res) => {
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        res.render ("product", {product:product})
    },
    detalle: (req,res) => {
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        const productToSend=product.find(product=>{
            return product.id==req.params.id
        })
        res.render ("detalle", {product:productToSend})
    }
}
module.exports = productController;