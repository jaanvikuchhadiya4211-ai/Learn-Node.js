const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Contact = require("./models/contact.models")

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/contact-crud')
.then(() => console.log("Database Connected."))

//middleware

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes

app.get('/', async (req, res) => {
    const contacts = await Contact.find()
    res.render('home', {contacts})
})

app.get('/show-contact/:id', async (req, res) => {
    const contact = await Contact.findOne({ _id: req.params.id }) //findById(req.params.id)
    // res.json(contact)
    res.render('show-contact', { contact }) 
})

app.get('/add-contact', (req, res) => {res.render('add-contact')})

app.post('/add-contact', async (req, res) => {
    const contact = await Contact.insertOne({ // no need to use variable --->>>after use of this method  //Contact.create(req.body) -- another way to write same code ---> agar databse ki sari collection ki feilds or form ki feild same hein to curly bracket ki jarurat nahi hein we can write simplly...
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })
    res.redirect("/")
    // res.send(req.body)
})

app.get('/update-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id) 
    res.render('update-contact', { contact })
})

app.post('/update-contact/:id', async (req, res) => {

    await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})

app.get('/delete-contact/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect("/")
})


app.listen(3000,()=> {
    console.log("Server Started Successfully On Port 3000.")
})