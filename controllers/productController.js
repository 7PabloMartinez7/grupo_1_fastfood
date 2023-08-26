const productController = {
    product: (req,res) => {
        res.render ("productDetail")
    },
    productCart: (req,res) => {
        res.render ("productCart")
    }
}
module.exports = productController;