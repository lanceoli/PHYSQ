const mongoose = require("mongoose")

const IntakeSchema = mongoose.Schema(
    {
        foodname: {
            type: String,
            required: [true, "Please Enter a Food"]
        },
        quantity: {
            type: mongoose.Schema.Types.Double,
            required: [true, "Please Enter the Food Quantity"]
        },
        unit: {
            type: String,
            required: [true, "Please Enter the Unit"]
        },
        calories: {
            type: mongoose.Schema.Types.Double,
            required: [true, "Calories not calculated"]
        },
        userID: {
            type: String,
        },
    },
    {
        //created at, updated at
        timestamps: true
    }
);

const Intake = mongoose.model("Intake", IntakeSchema)

module.exports = Intake;