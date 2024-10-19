const express = require('express')
const app = express()
require('dotenv').config()

app.get("/",function(req,res) {
    res.send("Hello From backend")
})

const PORT = process.env.PORT || 4000
app.listen(PORT,function() {
    console.log(`Server is running on port ${PORT}`)
})