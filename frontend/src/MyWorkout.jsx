import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

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
      const response = await axios.post("http://localhost:3000/apitest", {
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
    <div className="overflow-x-none overflow-y-none">
      <div className="bg-black text-white flex h-screen">
        <aside className="w-64 border-r border-gray-700 p-4 flex flex-col">
          {" "}
          {/* side bar area */}
          <div className="mb-4">
            {" "}
            {/* search box area */}
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full bg-base-100 placeholder-gray-400 text-white"
            />
          </div>
          <div className="flex-grow">
            <button className="btn w-full bg-base-100 hover:bg-gray-700 mb-2 text-left">
              test chat
            </button>
          </div>
          <div>
            <button className="btn w-full bg-base-100 hover:bg-gray-700 mb-2">
              Current Workout Plan
            </button>
            <button className="btn w-full bg-base-100 hover:bg-gray-700">
              New Chat
            </button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          <div
            className={`flex-1 overflow-y-auto flex flex-col p-4 ${
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
                    <div className="chat-bubble">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center w-full px-4 mb-8">
            <div className="flex items-center w-full max-w-xl bg-base-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Chat with PHYSQ here..."
                className="flex-grow bg-transparent placeholder-gray-400 border-none text-white focus:outline-none"
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={(e) => {
                  sendMessage();
                }}
                className="ml-2 cursor-pointer text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full"
              >
                Send
              </button>
              <button className="ml-2 text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full">
                +
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyWorkout;
