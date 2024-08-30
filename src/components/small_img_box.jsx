import React from 'react';

function Small_img_box({ img_url, handle_small_img }) {
    return (
        <div className='h-[70px] w-[80%]  rounded-xl mt-2 border-black cursor-pointer' onClick={handle_small_img}>
            <img src={img_url} alt="" className='h-full w-full rounded-xl' />
        </div>
    );
}

export default Small_img_box;
