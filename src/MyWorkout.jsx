import React from "react";

const MyWorkout = () => {
  return (
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
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            How can I help you with your workout?
          </h1>
        </div>
        <div className="flex items-center justify-center w-full px-4 mb-8">
          <div className="flex items-center w-full max-w-xl bg-base-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Chat with PHYSQ here..."
              className="flex-grow bg-transparent placeholder-gray-400 border-none text-white focus:outline-none"
            />
            <button className="ml-2 text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full">
              Send
            </button>
            <button className="ml-2 text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full">
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyWorkout;
