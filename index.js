const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

//initionalize .env
dotenv.config();

//conneting db
connectDB()

//app instance
const app = express();

//for data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

app.use("/", require("./routes/home.routes"))

// app.get("/", (req, res)=> {
//     res.send("API run!")
// })

const PORT = process.env.PORT || 5050
app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})