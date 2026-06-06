// const express = require('express')
// const app =express()

// app.listen(3000,()=>{
//     console.log('Successfully connected on port 3000')
// })

app.set('view engine','ejs')

app.get('/',(req,res) => {
       const users= [
        {id:1,name:'janvi'},
        {id:2,name:'akshay'}
       ]
    res.jsonp(users)
}) 

// app.get('/about',(req,res) => {
//     res.redirect('..');
    
// }) 

app.get('/user',(req,res) => {
    res.render('user') 
    
}) 

app.get('/download',(req,res) => {
    res.sendFile(__dirname + '/files/wallpapers','document.jpg') 
    
})






// app.get('/user/:userid/book/:bookid',(req,res) => {
//     res.send("book id : " + req.params.bookid)
// })

// app.get('/user/:userid-:bookid',(req,res) => {
//     res.send(req.params)
// })

// app.get('/search',(req,res) => {       //not working 
//     const name=req.query.name
//     const age=req.query.age
//     res.send('Search results fo name : ${name}, age : ${age}')
    
// })

// app.get('/about/user',(req,res) => {
//     res.send("<h1>Welcome To user Page!<h1>")
// })


// app.get('/random.text',(req,res) => {
//     res.send("<h1>Welcome To random Page!<h1>")
// })