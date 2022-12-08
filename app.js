const path = require('path')
const express = require("express")
const port = process.env.PORT || 4000
const dotenv = require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai' , require('./routes/openai'))

app.listen(port, () =>{
    console.log("Server started");
})