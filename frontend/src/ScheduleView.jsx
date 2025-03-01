import React from "react";

const ScheduleView = () => {
  return (
    <div className="bg-black text-white h-[calc(100vh-64px)] flex overflow-hidden">
      <aside className="w-96 h-full border-r border-gray-700 p-4 flex flex-col bg-black">
        {/* Trainer Info */}
        <div className="flex flex-col items-center mb-4">
          <button className="btn btn-circle bg-white text-black border-none w-20 h-20 hover:bg-gray-300"></button>
          <p className="text-3xl font-bold text-white mt-2">Trainer Name</p>
          <p className="text-gray-400 text-lg">4.5 stars | Strength and Conditioning</p>
        </div>

        {/* Chat Input */}
        <div className="mt-auto w-full flex items-center bg-gray-800 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Talk to your trainer..."
            className="flex-grow bg-transparent text-white placeholder-gray-400 border-none focus:outline-none"
          />
          <button className="text-white bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-full">
            Send
          </button>
        </div>
      </aside>

      <main className="p-10 flex-1 flex flex-col space-y-6 bg-black text-white">
        <div className="flex items-center justify-between pb-6">
          {/* Left Section: Info*/}
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-yellow-500 text-5xl/20 font-semibold">MONDAY</p>
              <p className="text-white text-3xl">February 21, 2025 | 8:00 AM</p>
              <span className="text-gray-500 text-3xl"> Address Where the Training Will Be Held</span>
            </div>
          </div>

          {/* Right Section: Actions */}
          <div className="flex flex-col items-end space-y-2">
            <p className="text-gray-300 text-lg cursor-pointer hover:text-white transition">Reschedule</p>
            <p className="text-red-500 text-lg cursor-pointer hover:text-red-400 transition">Cancel Session</p>
          </div>
        </div>

        {/* Workout Plan Section */}
        <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Your Current Workout Plan</h2>

          {/* Cardio Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-500">Cardio</h3>
            <p className="text-gray-300">Run 10 Miles</p>
          </div>

          {/* Push Section */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Push</h3>
            <p className="text-gray-300">Bench Press - <span className="font-bold">30lbs</span> - 3 sets of 10 reps</p>
            <p className="text-gray-300">Dips - 3 sets of <span className="font-bold text-red-400">hanggang mamatay</span></p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ScheduleView;
