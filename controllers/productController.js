const fs=require("fs")
const path = require ("path")
const productoJson = path.join(__dirname,"../data/products.json")
const productController = {
    product: (req,res) => {
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        console.log(product[0])
        res.render ("productDetail")
    }
}
module.exports = productController;