require('dotenv').config()

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function call() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = { call }