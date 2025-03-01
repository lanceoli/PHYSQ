import { Link } from "react-router-dom";
import React from "react";

const History = () => {
  return (
    <div className="bg-black text-white p-2">
      <div className="flex justify-between items-center w-full bg-black p-2">
        {/* week-month view toggle button */}
        <div className="flex space-x-1">
          <button className="px-4 py-2 rounded bg-gray-500 text-white">Week</button>
          <button className="px-4 py-2 rounded text-white">Month</button>
        </div>

        {/* action buttons */}
        <div className="flex space-x-2">
          <Link className="px-4 py-2 rounded bg-gray-500 text-white" to="/MyCoach">Back to MyCoach</Link>
        </div>
      </div>

      <div className="flex items-center justify-between bg-black text-white p-5 border-b border-gray-700">
        {/* Left Section: Date */}
        <div className="flex items-center space-x-4">
          <div className="text-center px-2 w-30">
            <p className="text-yellow-500 text-5xl">MON</p>
            <p className="text-gray-400 text-lg">Feb 3</p>
          </div>

          {/* Divider */}
          <div className="w-px h-30 bg-gray-600"></div>

          {/* Trainer Info */}
          <div className="flex items-center space-x-5">
            <button className="btn btn-circle bg-white text-black border-none px-8 py-8 hover:bg-gray-300"></button>
            <div>
              <p className="text-3xl font-bold">Trainer Name</p>
              <p className="text-gray-400 text-lg">4.5 stars | Strength and Conditioning</p>
              <p className="text-lg">
              <span className="font-bold">08:00 A.M.</span> | 
              <span className="text-gray-500"> Address Where the Training Will Be Held</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="text-right">
          <p className="text-gray-300 text-lg cursor-pointer">Book Again</p>
          <p className="text-red-500 text-lg cursor-pointer">Delete</p>
        </div>
      </div>


      <div className="flex items-center justify-between bg-black text-white p-5 border-b border-gray-700">
        {/* Left Section: Date */}
        <div className="flex items-center space-x-4">
          <div className="text-center px-2 w-30">
            <p className="text-yellow-500 text-5xl">TUE</p>
            <p className="text-gray-400 text-lg">Feb 4</p>
          </div>

          {/* Divider */}
          <div className="w-px h-30 bg-gray-600"></div>

          {/* Trainer Info */}
          <div className="flex items-center space-x-5">
            <button className="btn btn-circle bg-white text-black border-none px-8 py-8 hover:bg-gray-300"></button>
            <div>
              <p className="text-3xl font-bold">Trainer Name</p>
              <p className="text-gray-400 text-lg">4.5 stars | Strength and Conditioning</p>
              <p className="text-lg">
              <span className="font-bold">08:00 A.M.</span> | 
              <span className="text-gray-500"> Address Where the Training Will Be Held</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="text-right">
          <p className="text-gray-300 text-lg cursor-pointer">Book Again</p>
          <p className="text-red-500 text-lg cursor-pointer">Delete</p>
        </div>
      </div>

    </div>
  );
};

export default History;
