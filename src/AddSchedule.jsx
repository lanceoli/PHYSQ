import React from "react";

const AddSchedule = () => {
  return (
    <div className="bg-black text-white h-[calc(100vh-64px)] flex overflow-hidden">
      <aside className="w-base border-r border-gray-700 p-4 flex flex-col">
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
          {/* trainer info 1 */}
          <div className="flex items-center space-x-5 pt-5 pb-5 border-b border-gray-700">
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

          {/* trainer info 1 */}
          <div className="flex items-center space-x-5 pt-5 pb-5 border-b border-gray-700">
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

          {/* trainer info 1 */}
          <div className="flex items-center space-x-5 pt-5 pb-5 border-b border-gray-700">
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
        
      </aside>

      <main className="p-10 flex-1 flex flex-col items-center space-y-3">
        {/* trainer info 1 */}
        <button className="btn btn-circle bg-white text-black border-none w-35 h-35 hover:bg-gray-300"></button>
        <div className="flex items-center">
          <div className="flex-1 flex flex-col items-center">
            <p className="text-5xl/20 font-bold">Trainer Name</p>
            <p className="text-gray-400 text-3xl">4.5 stars | Strength and Conditioning</p>
          </div>
        </div>
        
        {/* action buttons */}
        <div className="flex space-x-5 mt-5">
          <button className="min-w-30 p-2 rounded bg-orange-400 text-black text-xl" to="/">Book</button>
          <button className="min-w-30 p-2 rounded border border-solid border-orange-400 text-white text-xl" to="/">Message</button>
        </div>
      </main>
    </div>
  );
};

export default AddSchedule;
