import express from 'express'

const app= express()

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.send("home page")
})

app.get('/about',(req,res) => {

 var user=[
        {name:"John",age:30,city:"New York"},
        {name:"Jane",age:25,city:"Los Angeles"},
        {name:"Bob",age:35,city:"Chicago"},
        {name:"Alice",age:28,city:"Houston"},
        {name:"Tom",age:32,city:"Phoenix"}
    ];
    res.render("about",{
                        title:'Home page',
                        message:"welcome",
                        items :user
                    })
})

app.listen(5000,()=>{
    console.log("Server Started Successfully On Port : 5000")
})