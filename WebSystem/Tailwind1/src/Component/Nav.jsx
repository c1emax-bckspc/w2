import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
 
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="bg-amber-100 shadow-sm p-0 w-screen flex justify-between items-center px-4 py-2 fixed top-0 left-0">
      <div className="flex items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
        <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
      </div>
 
      <div
        className={`${isOpen ? "absolute top-14 left-0 bg-amber-100 flex flex-col gap-4 p-4 pe-40 md:static md:bg-transparent md:flex-row md:w-auto" : "hidden md:flex gap-6"}`}
      >
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          Products
        </a>
        <a href="#" className="hover:text-gray-700">
          Solution
        </a>
        <a href="#" className="hover:text-gray-700">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-700">
          Contact
        </a>
      </div>
      <div className="flex gap-4">
        <button className="bg-white px-6 h-10 rounded-xl hover:bg-gray-100">
          Sign Up
        </button>
        <button className="bg-[#8b3dff] px-6 h-10 rounded-xl text-white hover:bg-[#7a2fe6]">
          Login
        </button>
      </div>
    </div>
  );
};
 
export default Nav;