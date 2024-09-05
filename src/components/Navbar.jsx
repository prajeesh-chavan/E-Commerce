import React, { useState } from "react";
import logo from "../components/Assets/logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const cartItemCount = 0;
  return (
    <div className="flex items-center justify-between text-white bg-[#0b0b0b] shadow-custom-dark">
      <div className="flex items-center text-xl">
        <img className="m-5" src={logo} alt="" />
        <p className="text-xl" >Watch</p>
      </div>

      <ul className="flex gap-4 text-xl font-normal">
        <li className="p-2 transition-all duration-100 hover:cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:-translate-y-1"><Link to='/home'>Home</Link></li>
        <li className="p-2 transition-allduration-100 hover:cursor-pointer hover:border-b-2 hover:border-yellow-400 hover:-translate-y-1" ><Link to='/About'>About</Link></li>
        <li className="p-2 transition-allduration-100 hover:cursor-pointer hover:border-b-2 hover:border-yellow-400 hover:-translate-y-1"><Link to='/Products'>Products</Link></li>
        <li className="p-2 transition-allduration-100 hover:cursor-pointer hover:border-b-2 hover:border-yellow-400 hover:-translate-y-1"><Link to='/Contact'>Contact</Link></li>
      </ul>

      <div className="flex items-center gap-10">
        <button className="w-24 transition-all duration-300 border h-9 rounded-2xl hover:bg-[#ffe5de] hover:border-[#ffe5de] hover:text-black font-medium">Login</button>
        <div className="flex items-center gap-10">
          <IoSearchSharp fontSize={30}/>
          <FaShoppingCart className="m-6" fontSize={30} />
        </div>
        <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-800 rounded-full right-5 top-8"> {cartItemCount} </div>
      </div>
    </div>
  );
};

export default Navbar;
