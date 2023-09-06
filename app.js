const express = require ("express")
const path = require ("path"); 
const app= express();
const publicPath = path.resolve (__dirname, "./public");
//Rutas requeridas
const Index= require("./routes/index.js")
const registro= require("./routes/registro.js")
const login= require("./routes/login.js")
const Novedades= require("./routes/novedades.js")
const product= require("./routes/product.js")
const productCart= require("./routes/productoCarrito.js")
const newProduct= require ("./routes/newProducto.js")
//para que funciente ejs se usa app.set
app.set("view engine", "ejs")
app.use (express.static(publicPath));
//rutas 
app.use("/", Index)
app.use("/", registro)
app.use("/", login)
app.use("/", Novedades)
app.use("/", product)
app.use("/", productCart)
app.use("/", newProduct)
//levantar servidor
app.listen(5000,() => {
    console.log ("Servidor corriendo en el puerto 5000");
 } );








 

/*app.get("/productDetail",(req, res)=>{
   res.sendFile(path.resolve("./views/productDetail.html"));
})
app.get("/productCart",(req, res)=>{
   res.sendFile(path.resolve("./views/productCart.html"));
})
app.get("/login",(req,res)=>{
   res.sendFile(path.resolve('./views/login.html'));
})
app.get("/register",(req,res)=>{
   res.sendFile(path.resolve('./views/register.html'));
})
app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"./views/index.html"))
})
app.get("/novedades",(req, res)=>{
   res.sendFile(path.resolve("./views/novedades.html"));
})*/

