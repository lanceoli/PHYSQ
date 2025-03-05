import { Link } from "react-router-dom";
import React from "react";


const IntakeCard = (props) => {
    return (
        <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">{props.name}</div>
            <div className="text-sm text-gray-300">
              QUANTITY: {props.quantity}g | {props.calories} CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">{props.date} | {props.time}</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] font-semibold hover:underline">
              UPDATE
            </button>
            <button className="text-red-500 font-semibold hover:underline">
              DELETE
            </button>
          </div>
        </div>
    )
}

export default IntakeCard