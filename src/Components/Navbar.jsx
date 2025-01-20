import React, { useState } from "react";
import {  NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks=<>
  
   <NavLink to={'/'}> Home</NavLink>
   <NavLink to={'/Services'}> Services</NavLink>
   <NavLink to={'/Blog'}> Blog</NavLink>
   <NavLink to={'/About'}> About</NavLink>
   <NavLink to={'/Contact'}> Contact</NavLink>
  </>

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full">
            {/* Logo */}
            <span className="text-white font-bold">CD</span>
          </div>
          <h1 className="text-xl font-semibold">Car Doctor</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
     
     {navLinks}
    
        </div>

        {/* Appointment Button */}
        <div className="hidden md:flex">
        <button className="btn btn-outline btn-warning">Appointment</button>
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
            <button className="btn btn-outline btn-warning">Secondary</button>

            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
