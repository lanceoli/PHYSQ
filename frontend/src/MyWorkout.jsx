import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatCard from "./assets/components/ChatCard";
import fat_s1mple from "./assets/images/fat_s1mple.jpeg";
import goggins from "./assets/images/goggins.jpeg";

const MyWorkout = () => {
  const [prompt, setPrompt] = useState(""); // Input value
  const [messages, setMessages] = useState([]); // Chat messages
  const [loading, setLoading] = useState(false);

  ////////////////
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/RetrieveChats");
        setMessages([...response.data]);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchChats();
  }, []);
  ////////////////
  const sendMessage = async () => {
    if (!prompt.trim()) return; // Prevent empty messages

    setPrompt(""); // Clear input
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/WorkoutSession",
        {
          prompt,
        },
      );
      const messageFormat = {
        uniquePrompt: prompt,
        message: response.data.message,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, messageFormat]);
    } catch (error) {
      console.error("Error fetching AI response", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="overflow-y-auto">
      <div className="bg-black text-white flex h-full overflow-y-auto">
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
                {
                  ////MESSAGES////
                  messages.map((msg, index) => (
                    <>
                      <ChatCard
                        type="user"
                        date={msg.createdAt}
                        img={fat_s1mple}
                        msg={msg.uniquePrompt}
                      />
                      <ChatCard type="ai" img={goggins} msg={msg.message} />
                    </>
                  ))
                }
              </div>
            )}
          </div>
        </main>
      </div>
      </div>
      <div className="sticky bottom-0 flex bg-black items-center justify-center w-full p-4 my-4">
        <div className="flex items-center w-full max-w-xl bg-base-300 rounded-full px-4 py-2">
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

    </>
  );
};

export default MyWorkout;
