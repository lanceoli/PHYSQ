import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUp2 = () => {
    const [selected, setSelected] = useState(null);

    const durations = [
        "Never Been",
        "< 6 Months",
        "< 1 Year",
        "1 Year",
        "1-3 Years",
        "3-4 Years",
        "4-5 Years",
        "> 5 Years"
    ];

    const goals = [
        "Lose Weight",
        "Be Healthy",
        "Build Muscle"
    ];

    const dietTypes = [
        "Balanced Diet",
        "High Protein",
        "Keto",
        "Intermittent"
    ];

    return (
        <div className="flex flex-col justify-center bg-black text-white gap-15 pl-10 pr-10">
            <div className="flex flex-col gap-5 pb-10 border-b border-gray-500">
                <h1 className="text-4xl">Welcome to PHYS<span className="text-yellow-500">Q</span>, Rayray!</h1>
                <p className="text-2xl">Just a few questions to get your fitness profile started!</p>
            </div>

            {/* EMAIL, BIRTHDAY & GENDER */}
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">1. MEASUREMENTS</h2>
                <div className="flex flex-row text-xl gap-10">
                    {/* height */}
                    <div className="flex flex-row items-center mr-3 bg-black gap-1">
                        <input
                            type="number"
                            placeholder="HEIGHT"
                            className="max-w-35 pb-2 border-b border-gray-500 focus:outline-none"
                        />
                        <p className="text-white"></p>
                        <select className="text-white">
                            <option value="cm" className="bg-black text-gray-500">cm</option>
                            <option value="in" className="bg-black text-gray-500">in</option>
                        </select>
                    </div>

                    {/* weight */}
                    <div className="flex flex-row items-center mr-3 bg-black gap-1">
                        <input
                            type="number"
                            placeholder="WEIGHT"
                            className="max-w-35 pb-2 border-b border-gray-500 focus:outline-none"
                        />
                        <p className="text-white"></p>
                        <select className="text-white">
                            <option value="kg" className="bg-black text-gray-500">kg</option>
                            <option value="lbs" className="bg-black text-gray-500">lbs</option>
                        </select>
                    </div>
                </div>
            </div>
            
            {/* QUESTION 1*/}
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">2. HOW LONG HAVE YOU GONE TO THE GYM?</h2>
                <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {durations.map((duration, index) => (
                        <button
                            key={index}
                            className={`w-32 py-2 border border-gray-500 rounded-md transition ${
                                selected === index ? "bg-white text-black" : "text-gray-400"
                            }`}
                            onClick={() => setSelected(index)}
                        >
                            {duration}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* QUESTION 2*/}
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">3. WHAT IS YOUR FITNESS GOAL?</h2>
                <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {goals.map((goals, index) => (
                        <button
                            key={index}
                            className={`w-32 py-2 border border-gray-500 rounded-md transition ${
                                selected === index ? "bg-white text-black" : "text-gray-400"
                            }`}
                            onClick={() => setSelected(index)}
                        >
                            {goals}
                        </button>
                    ))}
                    <input
                        type="text"
                        placeholder="OTHER"
                        className="min-w-3xs ml-5 mr-5 border-b border-gray-500 focus:outline-none"
                    />
                </div>
            </div>
            
            {/* QUESTION 3*/}
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">4. DESCRIBE YOUR DIET</h2>
                <div className="max-w-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {dietTypes.map((dietTypes, index) => (
                        <button
                            key={index}
                            className={`w-32 py-2 border border-gray-500 rounded-md transition ${
                                selected === index ? "bg-white text-black" : "text-gray-400"
                            }`}
                            onClick={() => setSelected(index)}
                        >
                            {dietTypes}
                        </button>
                    ))}
                    <input
                        type="text"
                        placeholder="OTHER"
                        className="min-w-3xs ml-5 mr-5 border-b border-gray-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* SUBMIT*/}
            <div className="flex flex-col items-center mb-15">
                <Link className="w-base bg-yellow-500 text-black px-5 py-3 rounded-lg font-semibold text-2xl text-center" to="/">
                    Start My Fitness Journey!
                </Link>
            </div>
        </div>
    );
};

export default SignUp2;
