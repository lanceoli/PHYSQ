const mongoose = require("mongoose")

const ChatSession = mongoose.Schema(
    {
        userID: {
            type: String,
            //required: [true, "Please Enter a User ID!"]
        },
        uniquePrompt: {
            type: String,
            required: [true, "Please Enter a Prompt!"]
        },
        message : {
            type: String,
            required: [true, "Gemini message must be inputted!"]
        },
    },
    {
        //created at, updated at
        timestamps: true
    }
);

const chatSession = mongoose.model("ChatSession", ChatSession)

module.exports = chatSession;
