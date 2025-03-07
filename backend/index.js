require("dotenv").config();
const workout = require("./controller/workout.controller.js")
const calorie = require("./controller/intake.controller.js")
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db.js")

const app = express()
const port = 3000 

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,           
    optionSuccessStatus:200
}

const ChatSession = require ("./models/chatsession.model.js")
const User = require("./models/user.model.js")
const Intake = require("./models/intake.model.js")

const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    }
    else {
        res.redirect('/LogIn')
    }
}

//DB Connections
connectDB()

//Initiate Middleware
app.use(
    session({
        secret: "key",
        resave: false,
        saveUninitialized: false,
        store: new MongoDBSession({
            uri: process.env.DB_URI,
            collection: 'mySessions',
        }),
    })
)

app.use(cors(corsOptions))
app.use(express.json())

//Routing Policies
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/MyWorkout", isAuth, async (req, res) => {
    await console.log("womp womp")
    // res.render('MyWorkout')
})

//this is  /MyWorkout
app.post("/apitest", async (req, res) => { 
    try {
        const { prompt } = req.body; // Extract prompt from request body

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const response = await workout.callWorkout(prompt);
        ChatSession.create({uniquePrompt: prompt, message: response})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        res.json({ message: response });  // Send response as JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/calorie", async (req, res) => { 
    try {
        const { prompt } = req.body; // Extract prompt from request body

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const response = await calorie.callCalorie(prompt);
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
                req.session.isAuth = true
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

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})