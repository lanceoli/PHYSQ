import React, { use, useEffect } from "react";
import IntakeCard from "./assets/components/IntakeCard";
import axios from "axios";
import { set } from "mongoose";

const IntakeMonitor = () => {
  const [foodname, setFoodname] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [unit, setUnit] = React.useState("g");
  const [calories, setCalories] = React.useState("");
  const [date, setDate] = React.useState("");
  const [combined, setCombined] = React.useState("");
  const [intake, setIntake] = React.useState([]);

  const promptCalorie = async () => {
    try {
      const response = await axios.post("http://localhost:3000/calorie", {
        prompt: foodname + " " + quantity + unit,
      });
      console.log(foodname + " " + quantity + unit);
      setCalories(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error fetching AI response", error);
    }
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const cleanedCalories = calories.replace(/\n/g, '');
  
    setCalories(cleanedCalories);
    const result = await axios
      .post("http://localhost:3000/addIntake", {
        foodname: foodname,
        quantity: quantity,
        unit: unit,
        calories: cleanedCalories,
        date: date,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    fetchIntake();
    setFoodname("");
    setQuantity("");
    setUnit("g");
    setCalories("");
    setDate("");
  };

  const handleDelete = async (id) => {
    const result = await axios
      .delete(`http://localhost:3000/deleteIntake/${id}`)
      .then((result) => {
        console.log(result);
      })
    fetchIntake();
  }
  const fetchIntake = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getIntake");
      console.log(response.data);
      setIntake(response.data);
    } catch (error) {
      console.error("Error fetching AI response", error);
    }
  };

useEffect(() => {
 fetchIntake();
}, []);

// useEffect(() => {
//   const getIntake = async () => {
//     const data = await fetchIntake();
//     setIntake(data);
//   };

//   getIntake();
// }, [intake.length]);

  return (
    <div className="bg-black text-white h-screen p-6 flex gap-8">
      <div className="w-1/3 border-r border-gray-700 pr-6">
        <div className="mb-6">
          <label className="block mb-1 font-semibold">FOOD NAME</label>
          <input
            onChange={(e) => setFoodname(e.target.value)}
            value={foodname}
            type="text"
            placeholder="Enter food name"
            className="input w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">QUANTITY / PORTION</label>
          <div className="flex flex-row">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              type="number"
              placeholder="e.g. 100g or 3pcs"
              className="input w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500"
            />
            <select defaultValue="Pick a color" className="select w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500" onChange={(e) => setUnit(e.target.value)}>
              <option>g</option>
              <option>mg</option>
              <option>mL</option>
              <option>L</option>
              <option>fl oz</option>
              <option>pc</option>
            </select>
          </div>
          
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">CALORIES</label>
          <div className="flex flex-row gap-4">
            <input
              onChange={(e) => setCalories(e.target.value)}
              value={calories}
              type="text"
              placeholder="e.g. 200"
              className="input w-full bg-base-1000 p-2 rounded text-white placeholder-gray-400 focus:outline-none border border-gray-500"
              readOnly
            />
            <button onClick={promptCalorie} className="btn mx-auto bg-[#FFB100] text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 transition-colors transform hover:scale-105 duration-500 shadow-lg text-sm" disabled={!foodname || !quantity || !unit}>
              GET CALORIES
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">DATE & TIME</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="datetime-local"
            className="input w-full bg-base-1000 p-2 rounded text-white focus:outline-none border border-gray-500"
          />
        </div>        
        <button onClick={handleSubmit} className="btn block mx-auto bg-[#FFB100] text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition-colors transform hover:scale-105 duration-500 shadow-lg text-sm" disabled={!foodname || !quantity || !unit || !calories || !date}>
         ADD MEAL
        </button>            
      </div>

      <div className="flex-1 space-y-4">
        {intake.map((item) => (
          <IntakeCard
            key={item._id}
            _id={item._id}
            name={item.foodname}
            quantity={item.quantity}
            unit={item.unit}
            calories={item.calories}
            date={item.createdAt}
            handleDelete={() => handleDelete(item._id)}
            fetchIntake={() => fetchIntake()}
            />
        ))}


        {/* <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">Steak</div>
            <div className="text-sm text-gray-300">
              QUANTITY: 100g | 271 CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">Feb 19 | 9:00 AM</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] font-semibold hover:underline">
              UPDATE
            </button>
            <button className="text-red-500 font-semibold hover:underline">
              DELETE
            </button>
          </div>
        </div> */}

        {/* <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">Eggs</div>
            <div className="text-sm text-gray-300">
              QUANTITY: 3 | 215 CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">Feb 17 | 1:00 PM</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] font-semibold hover:underline">
              UPDATE
            </button>
            <button className="text-red-500 font-semibold hover:underline">
              DELETE
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IntakeMonitor;
