import React from 'react';

function ProductDetailsSection() {
  return (
    <div className="h-full w-1/2 flex flex-col space-y-4 ">
      <div className="h-1/5 w-full pl-8 pt-5">
        <p className="font-bold text-3xl">boAt Ultima Prism</p>
        <p className="font-normal text-base">
          Smartwatch with 1.96" (4.97cm) AMOLED Display, BT Calling, 700+ active modes, Watch Face Studio
        </p>
      </div>

      <div className="h-1/10 w-full pl-8 pt-5">
        <div className="flex items-center">
          <p className="font-semibold text-3xl">₹3,999</p>
          <p className="font-normal text-pretty ml-2 mr-2 line-through">₹5,999</p>
          <p className="font-semibold text-xl ml-3 text-[#00c78b]">78% Off</p>
        </div>
      </div>

      <div className="h-1/4 w-full mt-3 pl-8">
        <p className="font-semibold text-xl text-black">Check Delivery</p>
        <div className="h-auto w-1/2 bg-[#f2f6fa] mt-3 rounded-xl p-5">
          <div className="flex items-center bg-white rounded-md border p-3">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="flex-grow border-none outline-none"
            />
            <button className="h-full w-1/3 bg-black text-white rounded-md">Check</button>
          </div>
          <p className="font-normal text-[#1bcf99] mt-2">
            Free delivery | <span className="text-black">By tomorrow</span>
          </p>
          <p className="font-light text-black">If ordered within 5 hrs 35 mins</p>
        </div>
      </div>

      <div className="h-1/5 w-full pl-8">
        <p className="font-semibold text-xl text-black">Highlights</p>
        <div className="h-auto w-1/2 bg-[#f2f6fa] mt-3 rounded-xl p-5">
          <p className="font-normal text-black">1.96" (4.97cm) AMOLED Display</p>
          <p className="font-normal text-black">BT Calling</p>
          <p className="font-normal text-black">700+ active modes</p>
          <p className="font-normal text-black">Watch Face Studio</p>
        </div>
      </div>

      {/* <div className="h-16 w-full bg-orange-500 pl-8"></div> */}
      
    </div>
  );
}

export default ProductDetailsSection;
