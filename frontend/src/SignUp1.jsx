import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUp1 = () => {
    const [userType, setUserType] = useState("User");

    return (
        <div className="flex flex-col items-center bg-black text-white gap-15 min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">
                    Welcome to PHYS<span className="text-yellow-500">Q</span>
                </h1>

                <div className="flex justify-center">
                    <button
                        className={`min-w-25 py-2 text-xl font-semibold rounded-lg ${
                        userType === "User"
                        ? "bg-yellow-500 text-black"
                        : "text-white font-thin"
                        }`}
                        onClick={() => setUserType("User")}
                        >
                        User
                    </button>
                        <button
                        className={`min-w-25 py-2 text-xl font-semibold rounded-lg ${
                        userType === "Trainer"
                        ? "bg-yellow-500 text-black"
                        : "text-white font-thin"
                        }`}
                        onClick={() => setUserType("Trainer")}
                        >
                        Trainer
                    </button>
                </div>
            </div>


            <div className="flex flex-row gap-5">
                    <input
                        type="text"
                        placeholder="USERNAME"
                        className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
                    />
            </div>

            <div className="flex flex-row gap-5">
                <input
                    type="text"
                    placeholder="EMAIL"
                    className="w-3xs pb-2 mr-3 ml-3 bg-black border-b border-gray-500"
                />
                
                <div className="flex flex-row mr-3 ml-3 bg-black gap-3">
                    <p className="text-gray-400">BIRTHDAY:</p>
                    <input type="date" className="pb-2 border-b border-gray-500"/>
                </div>
                
                <div className="flex flex-row mr-3 ml-3 bg-black gap-3">
                    <p className="text-gray-400">GENDER:</p>
                    <select
                        className="pb-2 border-b border-gray-500">
                        <option value="" disabled selected className="bg-black text-gray-500"></option>
                        <option value="male" className="bg-black text-gray-500">Male</option>
                        <option value="female" className="bg-black text-gray-500">Female</option>
                    </select>
                </div>



            </div>

            <div className="flex flex-col items-center gap-3">
                <Link className="w-30 bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold text-xl text-center" to="/SignUp2">
                    Sign-up
                </Link>
                <p className="text-md">
                    Already have an account?{" "}
                    <Link 
                    className="text-yellow-500 cursor-pointer font-semibold hover:text-orange"
                    to="/LogIn"
                    >LOG-IN</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp1;
