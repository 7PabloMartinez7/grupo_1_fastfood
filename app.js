const express = require ("express")
const path = require ("path"); 
const app= express();
const publicPath = path.resolve (__dirname, "./public");
//Rutas
const Index= require("./routes/index.js")
const product= require("./routes/product.js")
const Novedades= require("./routes/novedades.js")
const registro= require("./routes/registro.js")
//para que funciente ejs se usa app.set
app.set("view engine", "ejs")
app.use (express.static(publicPath));

app.use("/", Index)
app.use("/producto", product)
app.use("/carrito", product)
app.use("/novedades", Novedades)
app.use("/registro", registro)
app.use("/login", registro)

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

