const mongoose = require("mongoose")

const CoachingSessionSchema = mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing userID"]
        },
        trainerID: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Missing trainerID"]
        },
        session_date: {
            type: Date,
            required: [true, "Missing Session Date"]
        },
        session_duration: {
            type: mongoose.Schema.Types.Double,
            required: [true, "Missing Session Duration"]
        },
    },
    {
        //created at, updated at
        timestamps: true
    }
);

const CoachingSession = mongoose.model("CoachingSession", CoachingSessionSchema)

module.exports = CoachingSession;