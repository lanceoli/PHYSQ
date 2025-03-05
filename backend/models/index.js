const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users')

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: ["https://2030-youth-force-website-front-two.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

// mongoose.connect("mongodb://127.0.0.1:27017/users")

// 2030YouthForcePH before "?" is the database user name
// 2030yfph is the database user password
mongoose.connect("mongodb+srv://2030YouthForcePH:2030yfph@2030youthforceph.sv6n6.mongodb.net/?retryWrites=true&w=majority&appName=2030YouthForcePH")

app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
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

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) { // add visual error handler for available record
            res.json("Already have an account")
        } else {
            UsersModel.create({name: name, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})