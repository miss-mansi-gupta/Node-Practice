const express = require("express")

const app = express() // express call krna = server ka instance create krna

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get("/home", function(req, res) {
    res.send("This is Home Page")
})

app.get("/about", function(req, res) {
    res.send("This is About Page")
})

app.listen(3000) // server start krna