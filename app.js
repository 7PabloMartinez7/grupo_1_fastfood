const express = require ("express")
const path = require ("path"); 
const app= express();
const publicPath = path.resolve (__dirname, "./public");

const rutasIndex= require("./routes/index.js")
const productDetail= require("./routes/productDetail.js")
//para que funciente ejs se usa app.set
app.set("view engine", "ejs")


app.use (express.static(publicPath));

app.use("/", rutasIndex)
app.use("/producto", productDetail)

app.listen(5000,() => {
    console.log ("Servidor corriendo en el puerto 5000");
 } );


/*app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"./views/index.html"))
})*/

app.get("/register",(req,res)=>{
   res.sendFile(path.resolve('./views/register.html'));
})

app.get("/login",(req,res)=>{
   res.sendFile(path.resolve('./views/login.html'));
})

 app.get("/productCart",(req, res)=>{
   res.sendFile(path.resolve("./views/productCart.html"));
})

/*app.get("/productDetail",(req, res)=>{
   res.sendFile(path.resolve("./views/productDetail.html"));
})*/
app.get("/novedades",(req, res)=>{
   res.sendFile(path.resolve("./views/novedades.html"));
})

