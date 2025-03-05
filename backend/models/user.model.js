const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please Enter a Username"]
        },
        email: {
            type: String,
            required: [true, "Please Enter an Email"]
        },
        password: {
            type: String,
            required: [true, "Please Enter a Password"]
        },
        birthday: {
            type: Date,
            required: [true, "Please Enter a Birthday"]
        },
        gender: {
            type: String,
            required: [true, "Please Enter a Gender"]
        },
    },
    {
        //created at, updated at
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema)

module.exports = User;