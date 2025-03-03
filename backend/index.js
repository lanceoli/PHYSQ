const express = require("express")
const app = express()
const port = 3000 
const mongoose = require("mongoose")

const User = require("./models/user.model.js")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/api/signin", async (req, res) => {
    try {
       const user = await User.create(req.body)
       res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/api/signup", (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

mongoose.connect("mongodb+srv://johnandrewgacho:purgingorganics@physqcluster.hrhed.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PHYSQCluster")
.then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log(`Server running on ${port}`)
    })
})
.catch(() => {
    console.log("Connection Failed!")
})