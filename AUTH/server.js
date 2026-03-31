// server ko start krna
// require dotenv for reading .env file values
// calling dbconnection method

require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
