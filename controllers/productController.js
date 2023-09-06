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
    },
    eliminar: (req,res) =>{
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        const productoFiltrado=product.filter(product=>{
            return product.id != req.params.id
        })
        fs.writeFileSync(productoJson, JSON.stringify(productoFiltrado, null ," "))
        res.redirect ("/producto")
    },
    editar: (req,res)=>{
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
		const productToEdit = product.find(product =>{
			return product.id == req.params.id;	
		});
        res.render("editar",{product: productToEdit})
    },
    editarGuardar: (req,res)=>{
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
		const productToEdit = product.find(product =>{
			return product.id == req.params.id;	
		});
        let productoEditado={
            id: req.params.id,
            name:req.body.NombreProd,
            description: req.body.DescripcionProd,
            price:req.body.PrecioProd,
            image:productToEdit.image,
        }
        //busca la posicion en el array del producto que estamos editando
        let productEncontrado = product.findIndex(product =>{
            return product.id == req.params.id;
        } )
        product[productEncontrado]=productoEditado;
        fs.writeFileSync(productoJson, JSON.stringify(product, null ," "))
        res.redirect ("/producto")
    }
}
module.exports = productController;