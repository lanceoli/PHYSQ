const express = require("express")
const app = express()
const port = 3000 
const mongoose = require("mongoose")

app.get("/", (req, res) => {
    res.send("Hello World")
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