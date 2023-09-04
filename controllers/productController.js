const fs=require("fs")
const path = require ("path")
const productoJson = path.join(__dirname,"../data/products.json")
const productController = {
    product: (req,res) => {
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        res.render ("productDetail", {product:product})
    }
}
module.exports = productController;