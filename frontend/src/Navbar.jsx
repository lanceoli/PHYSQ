import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClasses =
    "transition-all duration-300 px-4 py-2 rounded-full shadow-lg transform hover:font-semibold hover:bg-black-1 text-lg";
  const activeClassName = `bg-[#FFB100] text-black ${baseClasses}`;
  const inactiveClassName = `text-white ${baseClasses}`;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 navbar bg-black text-white px-4 h-16">      
      <div className="navbar-start">
        <NavLink to="/" className="text-3xl font-bold tracking-wide">
          PHYS
          <span className="text-[#FFB100] ">Q</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyWorkout"
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              My Workout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyCoach"
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              My Coach
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/IntakeMonitor"
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              Intake Monitor
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link className="btn btn-circle bg-white text-black border-none hover:bg-gray-200" to="/LogIn"></Link>
      </div>
    </nav>
  );
};

export default Navbar;