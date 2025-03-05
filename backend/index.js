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

app.post("/apitest", async (req, res) => { 
    try {
        const { prompt } = req.body; // Extract prompt from request body

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const response = await c.call(prompt);
        res.json({ message: response });  // Send response as JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/LogIn", async (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            }
            else {  // add visual error handler for password
                res.json("Incorrect Password")
            }
        }
        else {  // add visual error handler for email
            res.json("Record not found")
        }
    })
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