import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout=() => {
    logOut()
    .then(res => {

    })
    .catch(error => {
      console.error(error)
    })
  }

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </NavLink>
      <NavLink
        to="/myBooking"
        className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        My-Booking
      </NavLink>
      <NavLink
        to="/Blog"
        className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Blog
      </NavLink>
      <NavLink
        to="/About"
        className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </NavLink>
      <NavLink
        to="/Contact"
        className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-white font-bold text-lg">CD</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Car Doctor</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks}
          <button className="btn btn-outline btn-warning px-4 py-2 rounded-lg text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
            Appointment
          </button>
          {user?.email ? (
              <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                  {user.displayName}
                    
                  </a>
                </li>
                
                <li><button onClick={handleLogout} className="text-red-600 out">Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-2 p-4">
            {navLinks}
            <li>
              <button className="btn btn-outline btn-warning px-4 py-2 rounded-lg text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
                Appointment
              </button>
            </li>
            <li>
              {user?.email ? (
                <button
                  onClick={logOut}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
