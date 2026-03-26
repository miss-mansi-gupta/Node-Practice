// created schema and model

const mongoose = require("mongoose")

//schema mtlb database ko btana ki aap data kis format me store krne wale ho (properties with its datatype)
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// for performing crud operations, requires model

const noteModel = mongoose.model("notes", noteSchema) // collection name is "notes" here and "noteSchema" is for defining format


module.exports = noteModel
