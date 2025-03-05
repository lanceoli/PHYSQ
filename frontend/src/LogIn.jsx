import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [userType, setUserType] = useState("User");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3000/LogIn', {
            email,
            password,
        })
        .then((result) => {
            console.log(result);
            if (result.data === 'Success') {
            navigate('/');
            }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-col items-center bg-black text-white gap-15 min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-10">
                <h1 className="text-center text-4xl">
                    Welcome Back <br /> to PHYS<span className="text-yellow-500">Q</span>
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

            <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
                    />
                    <div className="mr-3 ml-3">
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-sm pb-2 bg-black border-b border-gray-500 focus:outline-none"
                        />
                        <p className="text-yellow-800 text-sm cursor-pointer hover:text-yellow-700">
                            Forgot Password
                        </p>
                    </div>
            </div>

            <div className="flex flex-col items-center gap-3">
                <button type="submit" className="w-30 bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold text-xl text-center" to="/">
                    Log-in
                </button>
                <p className="text-md">
                    Don’t have an account yet?{" "}
                    <Link className="text-yellow-500 cursor-pointer font-semibold hover:text-orange"
                    to="/SignUp1"
                    >SIGN-UP</Link>
                </p>
            </div>
            </form>
        </div>
    );
};

export default Login;
