import React, { useState } from "react";
import { logo } from "../assets/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Do List Logo" className="w-28 h-16 mx-6" />
        </div>

        <div className="hidden md:flex space-x-6 items-center mr-20">
          <a href="#" className="text-gray-700 hover:text-red-500">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            More Option
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            Contact
          </a>
          <button className="px-8 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
            Log In
          </button>
          <button className="px-8 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-red-500"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-4 px-4 py-2 bg-white shadow-md">
          <a href="#" className="block text-gray-700 hover:text-red-500">
            About Us
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-500">
            Features
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-500">
            More Option
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-500">
            Contact
          </a>
          <button className="w-full px-8 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
            Log In
          </button>
          <button className="w-full px-8 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
