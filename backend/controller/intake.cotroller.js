require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function callCalorie(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are going to be prompted with food name, along with its quantity. You are only to answer with the calories based on the quanity of the food, which should mean a higher quantity having more calories. Do not give any other answers, only a number.",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { callCalorie };
