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
        <div className="flex gap-5 items-center justify-center">
        {/*Menu with Resized UI*/}
          <div className="lg:hidden lg:w-0 dropdown cursor-pointer">
            <svg
              class="h-8 w-8 text-white"
              tabIndex={0}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="4" y1="6" x2="20" y2="6" />{" "}
              <line x1="4" y1="12" x2="20" y2="12" />{" "}
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
            >
              <li>
            <Link
              to="/"
              className="hover:font-semibold focus:bg-[#FFB100] focus:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/MyWorkout"
              className="hover:font-semibold focus:bg-[#FFB100] focus:text-black"
            >
              My Workout
            </Link>
          </li>
          <li>
            <Link
              to="/IntakeMonitor"
              className="hover:font-semibold focus:bg-[#FFB100] focus:text-black"
            >
              Intake Monitor
            </Link>
          </li>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold tracking-wide">
            PHYS
            <span className="text-[#FFB100] ">Q</span>
          </Link>
        </div>
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
        <Link
          className="btn btn-circle bg-white text-black border-none hover:bg-gray-200"
          to="/LogIn"
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
