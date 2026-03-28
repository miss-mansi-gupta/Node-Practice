// server ko create krna
// server ko config krna

const express = require("express")
const noteModel = require("./models/notes.model")
const cors = require("cors")
const path = require("path")

const app = express()

// using middlewares
app.use(cors()) // accepts cross origin requests
app.use(express.json()) // for reading json data
app.use(express.static("./public")) // public folder ki js & css file available krta hai

// POST /api/notes
// create new note and save data in mongob
// req.body -> title , description

app.post('/api/notes', async(req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

// GET /api/notes
// fetch all notes data from mongodb and send them in response

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find() // find method fetches array of objects
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

// DELETE /api/notes/:id
// Delete note with the id from req.params

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Note deleted successfully",
    }) 
})

// PATCH /api/notes/:id
// Update the description of the note by id
// req.body -> description

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const { description } = req.body
    await noteModel.findByIdAndUpdate(id, { description })
    res.status(200).json({
        message: "Note updtaed successfully"
    })
})

// below code handles api which is not created - http://localhost:3000/<random_value>
app.use('*name', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app;
