import React, { useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fat_s1mple from "./assets/images/fat_s1mple.jpeg"
import goggins from "./assets/images/goggins.jpeg"

const MyWorkout = () => {
  const [prompt, setPrompt] = useState(""); // Input value
  const [messages, setMessages] = useState([]); // Chat messages
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!prompt.trim()) return; // Prevent empty messages

    const userMessage = { type: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]); // Show user message

    setPrompt(""); // Clear input
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/WorkoutSession", {
        prompt,
      });
      const aiMessage = { type: "ai", text: response.data.message };

      setMessages((prev) => [...prev, aiMessage]); // Show AI response
    } catch (error) {
      console.error("Error fetching AI response", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white flex h-full">
      <main className="flex-1 flex flex-col">
        <div
          className={`px-32 flex-1 overflow-y-auto flex flex-col p-4 ${
            messages.length === 0 ? "justify-center items-center" : ""
          }`}
        >
          {messages.length === 0 ? (
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              How can I help you with your workout?
            </h1>
          ) : (
            <div className="w-full">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${
                    msg.type === "user" ? "chat-end" : "chat-start"
                  }`}
                >
                  <div class="chat-image avatar">
                    <div class="w-12 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src={msg.type === "user" ? fat_s1mple : goggins}
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-full px-4 mb-8">
          <div className="flex items-center w-full max-w-xl bg-base-100 rounded-full px-4 py-2">
            {!loading ? (
              <>
                <input
                  type="text"
                  placeholder="Chat with PHYSQ here..."
                  value={prompt}
                  className="flex-grow bg-transparent placeholder-gray-400 border-none text-white focus:outline-none"
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                  onClick={() => {
                    sendMessage();
                  }}
                  className="ml-2 cursor-pointer text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full"
                >
                  Send
                </button>
              </>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyWorkout;
