const express = require("express") // import express

const app = express() // create server instance

app.use(express.json()) // using middleware

const notes = []

// POST /notes
app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.send("note created!")
})

// GET /notes
app.get("/notes", (req, res) => {
    res.send(notes)
})

app.listen(3000, () => { // start server
    console.log("Server is running on port 3000")
})