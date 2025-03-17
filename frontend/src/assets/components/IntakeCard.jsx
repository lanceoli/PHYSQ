import { Link } from "react-router-dom";
import React, { use, useEffect } from "react";
import axios from "axios";


const IntakeCard = (props) => {

  const handleUpdate = async (id) => {
    console.log(calories);
    const cleanedCalories = calories.replace(/\n/g, '');

    

      const result = await axios
        .put(`http://localhost:3000/updateIntake/${id}`, {
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
      props.fetchIntake();
    };

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

    const dateObj = new Date(props.date);
    const id = props._id;
    const [foodname, setFoodname] = React.useState(props.name);
    const [quantity, setQuantity] = React.useState(props.quantity);
    const [unit, setUnit] = React.useState(props.unit);
    const [calories, setCalories] = React.useState(props.calories);
    const [date, setDate] = React.useState(props.date);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Ensures AM/PM format
    });
    return (
        <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">{props.name}</div>
            <div className="text-sm text-gray-300">
              QUANTITY: {props.quantity}{props.unit} | {props.calories} CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">{formattedDate} | {formattedTime}</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] cursor-pointer font-semibold hover:underline" onClick={()=>document.getElementById(props._id).showModal()}>
              UPDATE
            </button>
            <dialog id={props._id} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
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
                    <select defaultValue="Pick a color" className="select w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500"
                    onChange={(e) => setUnit(e.target.value)}
                    value={unit}>
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
                      value={calories}
                      type="text"
                      placeholder="e.g. 200"
                      className="input w-full bg-base-1000 p-2 rounded text-white placeholder-gray-400 focus:outline-none border border-gray-500"
                      readOnly
                    />
                    <button onClick={() => promptCalorie()} className="btn mx-auto bg-[#FFB100] text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 transition-colors transform hover:scale-105 duration-500 shadow-lg text-sm" disabled={!foodname || !quantity || !unit}>
                      GET CALORIES
                    </button>
                  </div>
                </div>
                <button onClick={() => {handleUpdate(id)
                  document.getElementById(props._id).close()
                }} className="btn block mx-auto bg-[#FFB100] text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition-colors transform hover:scale-105 duration-500 shadow-lg text-sm" disabled={!foodname || !quantity || !unit || !calories || !date}>
                  UPDATE MEAL
                  </button>  
              </div>
            </dialog>
            <button className="text-red-500 font-semibold hover:underline cursor-pointer" onClick={props.handleDelete}>
              DELETE
            </button>
          </div>
        </div>
    )
}

export default IntakeCard