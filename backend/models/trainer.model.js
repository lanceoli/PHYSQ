const mongoose = require("mongoose")

const TrainerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Missing Trainer Name"]
        },
        email: {
            type: String,
            required: [true, "Missing Trainer Email"]
        },
        phone: {
            type: String,
            required: [true, "Missing Trainer Phone Number"]
        },
    },
    {
        //created at, updated at
        timestamps: true
    }
);

const Trainer = mongoose.model("Trainer", TrainerSchema)

module.exports = Trainer;