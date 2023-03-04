import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 text-black font-mono bg-gray-800">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-white"></div>
      <ul className="hidden md:flex text-white font-mono text-xl">
        <li className="px-2 hover:text-gray-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="px-2 hover:text-gray-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/players">Valorant Squad</Link>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/contentcreators">Content Creators</Link>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="px-2 hover:text-gray-400">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} color="white" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="mx-4 mt-7 w-10 h-10 border-4 border-dashed rounded-full animate-spin border-white"></div>
        <li className="p-4 border-b border-gray-600 text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-black">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-black">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="p-4 text-white">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-white h-screen text-center pt-[150%]">Deepak M.</li>
      </ul>
    </div>
  );
};

export default Navbar;
