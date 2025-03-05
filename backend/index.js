const c = require("./Gemini/apitest.js")
const express = require("express")
const app = express()
const port = 3000 
const mongoose = require("mongoose")
const cors = require("cors")

const User = require("./models/user.model.js")
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,           
    optionSuccessStatus:200
}

const Trainer = require("./models/trainer.model.js")
const CoachingSession = require("./models/coachingsession.model.js")

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/apitest", (req,res) => {
    res.send(c.call())
})

app.post("/LogIn", async (req, res) => {
    try {
       const user = await User.create(req.body)
       res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/SignUp1", (req, res) => {
    const {name, email, password, birthday, gender} = req.body;
    console.log(req.body)
    User.findOne({email: email})
    .then(user => {
        
        if(user) { // add visual error handler for available record
            res.json("Already have an account")
        } else {
            User.create({username: name, email: email, password: password, birthday: birthday, gender: gender})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
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