import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import MyWorkout from "./MyWorkout";
import MyCoach from "./MyCoach";
import IntakeMonitor from "./IntakeMonitor";
import History from "./History";
import AddSchedule from "./AddSchedule";
import ScheduleView from "./ScheduleView";
import LogIn from "./LogIn";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import Profile from "./Profile";

import PrivateRoutes from "./assets/PrivateRoutes";
import { useEffect } from "react";
import authFunc from "./assets/isAuth";

function HomePage() {
  return (
    <div className="bg-black text-white">
      <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="relative h-screen w-full">
          <img src="" alt="" className="hidden" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black opacity-75"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
              Welcome to PHYS
              <span className="text-[#FFB100] ">Q</span>
            </h1>

            <p className="text-xl md:text-2x3 text-gray-200 mb-8 max-w-2xl">
              Your ultimate workout companion. Empower your fitness journey with
              personalized training, and smart meal tracking.
            </p>
            <Link
              className="inline-block bg-[#FFB100] text-black font-bold py-4 px-10 rounded-full hover:bg-orange-400 transition transform hover:scale-105 duration-300 shadow-lg"
              to="/Profile"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      <section className="py-15 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Features</h2>
          <p className="text-xl text-gray-300">
            Everything you need in one place to achieve your fitness goals.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-[#FFB100]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Personalized Training</h3>
            <p className="text-lg text-gray-400">
              Custom workout plans tailored to your body and goals.
            </p>
          </div>

          <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-[#FFB100]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-3.86 0-7 1.79-7 4s3.14 4 7 4 7-1.79 7-4-3.14-4-7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Meal Tracking</h3>
            <p className="text-lg text-gray-400">
              Monitor your nutrition and calories effortlessly.
            </p>
          </div>


        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join PHYSQ today and start your journey towards a healthier,
            stronger you.
          </p>
          <Link
            className="inline-block bg-[#FFB100] text-black font-bold py-4 px-10 rounded-full hover:bg-orange-400 transition transform hover:scale-105 duration-300 shadow-lg"
            to="/Profile"
          >
            Join Now!
          </Link>
        </div>
      </section>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const noNavbarRoutes = ["/LogIn", "/SignUp1", "/SignUp2"];

  useEffect(() => {
    const data = window.sessionStorage.getItem("LOGIN");

    if (data == 'null' || data == 'undefined') {
      window.sessionStorage.setItem("LOGIN", JSON.stringify(false));
    } else {
      authFunc.auth = JSON.parse(data);
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("LOGIN", JSON.stringify(authFunc.auth));
  }, [authFunc.auth]);

  return (
    <>
      <div className="flex flex-col h-screen">
        {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/MyWorkout" element={<MyWorkout />} />
            <Route path="/IntakeMonitor" element={<IntakeMonitor />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          {/* <Route path="/MyWorkout" element={<MyWorkout />} /> */}
          <Route path="/MyCoach" element={<MyCoach />} />
          {/* <Route path="/IntakeMonitor" element={<IntakeMonitor />} /> */}
          <Route path="/History" element={<History />} />
          <Route path="/AddSchedule" element={<AddSchedule />} />
          <Route path="/ScheduleView" element={<ScheduleView />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp1" element={<SignUp1 />} />
          <Route path="/SignUp2" element={<SignUp2 />} />
          {/* <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
