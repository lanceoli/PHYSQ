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
    },
    {
        //created at, updated at
        timestamps: true
    }
);