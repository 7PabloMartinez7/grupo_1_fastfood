const express = require ("express");
const path = require ("path"); 
const methodOverride= require("method-override")
const app= express();
const publicPath = path.resolve (__dirname, "./public");
const session = require ("express-session");

//Rutas requeridas
const Index= require("./routes/index.js");
const registro= require("./routes/registro.js");
const login= require("./routes/login.js");
const Novedades= require("./routes/novedades.js");
const product= require("./routes/product.js");
const productCart= require("./routes/productoCarrito.js");
const newProduct= require ("./routes/newProducto.js");
const usuario= require ("./routes/usuario.js")
//para que funciente ejs se usa app.set
app.set("view engine", "ejs");
app.use (express.static(publicPath));
//para que reciba formularios
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//para usar los metodos PUT y DELETE
app.use(methodOverride("_method"));
//para usar express-session global
app.use (session({secret: "secreto!!!"}));
//rutas 
app.use("/", Index);
app.use("/", registro);
app.use("/", login);
app.use("/", Novedades);
app.use("/", product);
app.use("/", productCart);
app.use("/", newProduct);
app.use("/", usuario);
//levantar servidor
app.listen(5000,() => {
    console.log ("Servidor corriendo en el puerto 5000");
 } );

 app.use('/public/js/index.js', express.static(__dirname + '/public/js/index.js'));
 app.use('/public/js/newProducto.js', express.static(__dirname + '/public/js/newProducto.js'));







 

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

