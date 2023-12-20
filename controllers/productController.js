const db = require("../database/models")
const fs=require("fs")
const path = require ("path")
const productoJson = path.join(__dirname,"../data/products.json")
const productController = {
    product: (req,res) => {
        //codigo para que lea el modelo Producto.js
        if (req.session.usuarioLogueado != undefined){
            db.Productos.findAll()
            .then((productos) => {
                res.render("productUser",{productos:productos})
            })   
        }
        else{
            db.Productos.findAll()
            .then((productos) => {
                res.render("product",{productos:productos})
            }) 
        }
    },
    detalle: (req,res) => {
            db.Productos.findByPk(req.params.id)
            .then((productos) => {
            res.render ("detalle", {productos:productos})
        }) 
    },
    eliminar: (req,res) =>{
        db.Productos.destroy({
            where:{
                id:req.params.id
            }
        })
        
        res.redirect ("/producto")
        
    },
    editar: (req,res)=>{
        db.Productos.findByPk(req.params.id)
        .then((productos) => {
            res.render ("editar", {productos:productos})
        })
        
    },
    editarGuardar: (req,res)=>{
        db.Productos.update({
            nombre:req.body.NombreProd,
            descripcion:req.body.DescripcionProd,
            precio:req.body.PrecioProd,
            imagen:req.file ? req.file.filename : req.body.ImagenProd,
        },{
            where:{
                id:req.params.id
            }
        })
        res.redirect("/")
       
        
    }
}
module.exports = productController;

/*
<% product.forEach(product => {
            %>
            <section>
                <a class="a" href="/producto/detalle/<%=product.id%>">
                    <article id="articuloProduct">
                        <h3><%=product.name%></h3>
                        <h4><%=product.description%></h4>
                        <h4>$<%=product.price%></h4>   
                        <center><img id="imagenProduct" src="/images/<%= product.image %>" alt="imagen"></center>
                    </article>
                </a>
            </section>
            <% 
        }) %>

//***************ELIMINAR*****************
        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        //filtra en la variable productoFiltrado todos los archivos que NO tengan el id encontrado
        const productoFiltrado=product.filter(product=>{
            return product.id != req.params.id
        })
        fs.writeFileSync(productoJson, JSON.stringify(productoFiltrado, null ," "))
        res.redirect ("/producto")
//********EDITAR ********************

        
            const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
		    const productToEdit = product.find(product =>{
			return product.id == req.params.id;	
		});
        res.render("editar",{product: productToEdit})
//***********EDITAR GUARDAAR*************   
            const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
		const productToEdit = product.find(product =>{
			return product.id == req.params.id;	
		})
        let productoEditado={
            id: req.params.id,
            name:req.body.NombreProd,
            description: req.body.DescripcionProd,
            price:req.body.PrecioProd,
            image:req.file ? req.file.filename : productToEdit.image,
        }
        //busca la posicion en el array del producto que estamos editando
        let productEncontrado = product.findIndex(product =>{
            return product.id == req.params.id;
        } )
        product[productEncontrado]=productoEditado;
        fs.writeFileSync(productoJson, JSON.stringify(product, null ," "))
        res.redirect ("/producto")
//***********DETALLE***************** 

        const product= JSON.parse(fs.readFileSync(productoJson, "utf-8"))
        const productToSend=product.find(product=>{
            return product.id==req.params.id
        })
        res.render ("detalle", {product:productToSend})
        
*/
