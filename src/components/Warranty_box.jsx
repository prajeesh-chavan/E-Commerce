import React from 'react';

const Warranty_box = ({ img_uri, simpaltext, highlighted_text }) => {
  return (
    <div className="w-[90%] md:w-[150px] bg-white rounded-lg shadow-md flex flex-col items-center p-4">
      <div className="w-full mb-2">
        <img src={img_uri} alt={simpaltext} className="w-full h-auto" />
      </div>
      <div className="w-full text-center">
        <p className="text-lg font-medium">
          <span className="font-bold">{highlighted_text}</span> {simpaltext}
        </p>
      </div>
    </div>
  );
};

export default Warranty_box;
