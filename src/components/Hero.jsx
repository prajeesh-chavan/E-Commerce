import React from 'react';
import watch from "../components/Assets/watch1.png";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='flex items-center justify-between p-10 text-white bg-[#0b0b0b] gap-9'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='ml-2 font-semibold text-center text-7xl'>
          Discover Most Suitable Watches
        </h1>
        <p className='ml-3 text-xl'>
          Whether you're looking for a luxury timepiece to mark a special occasion, a rugged sports watch for outdoor adventures, or a versatile everyday watch, there's a perfect timepiece out there that suits every individual's taste and lifestyle.
        </p>
        <div className='flex items-center h-12 p-2 bg-white rounded-full shadow-md'>
          <IoSearch className='pl-2 text-gray-500' fontSize={24} />
          <input
            className='flex-grow px-4 text-black bg-transparent border-none outline-none'
            type="text"
            placeholder='Search for your favorite watch'
          />
          <button className='p-2 px-4 ml-2 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700'>
            Search
          </button>
        </div>
      </div>
      <div >
        <img src={watch} alt="Watch" className='w-[1000px] h-[500px]' />
      </div>
    </div>
  );
}

export default Hero;
