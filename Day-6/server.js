// server ko start krna
// server ko database se connect krna

const app = require('./src/app')
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
        .then(() => {
            console.log("Connected to DB")
        })
}

connectToDb()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})