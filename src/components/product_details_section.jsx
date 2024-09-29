import React from 'react';

function ProductDetailsSection() {
  return (
    <div className="h-full w-full md:w-1/2 flex flex-col space-y-4 p-4 md:p-8 md:h-auto">
      <div className="h-auto w-full">
        <p className="font-bold text-xl md:text-3xl">boAt Ultima Prism</p>
        <p className="font-normal text-sm md:text-base">
          Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, 700+ active modes, Watch Face Studio
        </p>
      </div>

      <div className="h-auto w-full">
        <div className="flex items-center">
          <p className="font-semibold text-xl md:text-3xl">₹3,999</p>
          <p className="font-normal text-sm md:text-base text-pretty ml-2 mr-2 line-through">₹5,999</p>
          <p className="font-semibold text-lg md:text-xl ml-3 text-[#00c78b]">78% Off</p>
        </div>
      </div>

      <div className="h-auto w-full mt-3">
        <p className="font-semibold text-lg md:text-xl text-black">Check Delivery</p>
        <div className="h-auto w-full md:w-1/2 bg-[#f2f6fa] mt-3 rounded-xl p-4 md:p-5">
          <div className="flex items-center bg-white rounded-md border p-2 md:p-3">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="flex-grow border-none outline-none"
            />
            <button className="h-[50%] w-1/2 bg-black text-white rounded-md">Check</button>
          </div>
          <p className="font-normal text-sm md:text-base text-[#1bcf99] mt-2">
            Free delivery | <span className="text-black">By tomorrow</span>
          </p>
          <p className="font-light text-xs md:text-sm text-black">If ordered within 5 hrs 35 mins</p>
        </div>
      </div>

      <div className="h-auto w-full">
        <p className="font-semibold text-lg md:text-xl text-black">Highlights</p>
        <div className="h-auto w-full md:w-1/2 bg-[#f2f6fa] mt-3 rounded-xl p-4 md:p-5">
          <p className="font-normal text-sm md:text-base text-black">1.96" (4.97cm) AMOLED Display</p>
          <p className="font-normal text-sm md:text-base text-black">BT Calling</p>
          <p className="font-normal text-sm md:text-base text-black">700+ active modes</p>
          <p className="font-normal text-sm md:text-base text-black">Watch Face Studio</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSection;
