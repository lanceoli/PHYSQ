require("dotenv").config();
const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect(process.env.DB_URI)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((error) => {
            console.log("Connection Failed!")
            console.log(error)
        })
}

module.exports = connectDB;
