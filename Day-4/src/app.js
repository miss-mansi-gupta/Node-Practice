// server create krna 
// server ko config krna 

const express = require("express");

const app = express();

app.use(express.json()) // using middleware - express.json()

const notes = []

// POST /notes
app.post("/notes", (req,res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created!")
})

// GET /notes
app.get("/notes", (req, res) => {
    res.send(notes)
})

// DELETE /notes/:id
app.delete("/notes/:id", (req, res) => {
    console.log(req.params.id)
    delete notes[req.params.id]
    res.send("note deleted!")
})

// PATCH /notes/:id
// req.body = {description: sample modified description}
app.patch("/notes/:id", (req, res) => {
    notes[req.params.id].description = req.body.description;
    res.send("note updated!")
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

module.exports = app;