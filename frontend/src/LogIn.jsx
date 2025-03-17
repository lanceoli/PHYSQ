import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authFunc from "./assets/isAuth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let user_sessionId = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/LogIn", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          authFunc.auth = true;
          // () => this.authFunc.setAuth(true)
          console.log("auth", authFunc.auth);

          navigate("/");
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
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
          />
          <div className="m-3">
            <input
              type="password"
              placeholder="PASSWORD"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-sm pb-2 bg-black border-b border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            type="submit"
            className="cursor-pointer w-30 bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold text-xl text-center"
            to="/"
          >
            Log-in
          </button>
          <p className="text-md">
            Don’t have an account yet?{" "}
            <Link
              className="text-yellow-500 cursor-pointer font-semibold hover:text-orange"
              to="/SignUp1"
            >
              SIGN-UP
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
