// Mengimport library express, path, dan hbs
const express=require ('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;

//Public static path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

// Mengatur view engine menggunakan handlebars
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

// Menggunakan middleware untuk menyajikan file statis
app.use(express.static(static_path));


//Routing
app.get("",(req,res)=>{
        res.render("index"); //Menampilkan halaman index
})

app.get("/about",(req,res)=>{
    res.render("about"); //Menampilkan halaman about
})

app.get("/weather",(req,res)=>{
    res.render("weather"); //Menampilkan halaman weather
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Opps! Page Not Found'
    });
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})







