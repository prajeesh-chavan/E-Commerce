import React from 'react';
import watch2 from "../components/Assets/watch2.png";

const Footer = () => {
  return (
    <div className='flex items-center justify-between p-10 bg-gray-200 rounded-lg w-[75vw] m-auto mt-20 mb-10'>
      <div className='flex flex-col max-w-lg gap-4 p-6 ml-10'>
        <h1 className='text-3xl font-semibold text-gray-800'>Subscribe to New Watch</h1>
        <p className='text-lg text-gray-700'>Get a free guide about smartwatches daily</p>
        <div className='flex items-center p-2 bg-white rounded-md shadow-md'>
          <input 
            className='flex-grow p-2 bg-transparent border-none border-rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 ' 
            type="email" 
            placeholder='Enter email address'
          />
          <button 
            className='p-2 text-white bg-blue-800 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className='flex-shrink-0 p-4'>
        <img 
          src={watch2} 
          alt="Smartwatch" 
          className='object-cover h-auto mr-20 rounded-lg shadow-md w-72' 
        />
      </div>
    </div>
  );
}

export default Footer;


