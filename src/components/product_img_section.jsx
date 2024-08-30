import React, { useState } from 'react';
import Small_img_box from './small_img_box';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Product_img_section() {
    const [currntimg, setcurrntimg] = useState('https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIOffWhiteArtboard7_800x.jpg?v=1692951405');
    const [imglist] = useState([
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Prism_FI_Off_WhiteArtboard_1-removebg-preview_500x.png?v=1692951163',
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIBlackArtboard6_800x.jpg?v=1692951404',
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIBlackArtboard5_800x.jpg?v=1692951404',
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIBlackArtboard2_800x.jpg?v=1692951404',
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIMetalArtboard4_800x.jpg?v=1692951405',
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Prism_FI_BlueArtboard_1-removebg-preview_500x.png?v=1692951165',
    ]);

    const nextimg = () => {
        const index = imglist.indexOf(currntimg);
        if (index < imglist.length - 1) {
            setcurrntimg(imglist[index + 1]);
        }else{
            setcurrntimg(imglist[0]);
        }
    }

    const previmg = () => {
        const index = imglist.indexOf(currntimg);
        if (index > 0) {
            setcurrntimg(imglist[index - 1]);
        }else{
            setcurrntimg(imglist[imglist.length - 1]);
        }
    }

    return (
        <div className='h-[100%] w-[50%] flex justify-start'>
            <div className='h-[56%] w-[15%] overflow-y-scroll p-2 flex flex-col items-center space-y-2' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {imglist.map((img, index) => (
                    <Small_img_box key={index} img_url={img} handle_small_img={() => setcurrntimg(img)} />
                ))}
            </div>

            <div className='h-[100%] w-[85%] p-5 relative'>
                <div className='h-[90%] w-[99%] rounded-xl relative'>
                    <img src={currntimg} alt="" className='h-full w-full rounded-xl' />
                    <div className='h-9 w-[95%]   absolute top-[45%] ml-4 flex justify-between'>
                    <div className='h-[100%] w-[7%] bg-[#0b0b0b] rounded-3xl flex justify-center items-center cursor-pointer' onClick={nextimg}>
                    <FaAngleLeft color='#fff'/>

                    </div>
                    <div className='h-[100%] w-[7%] bg-[#0b0b0b] rounded-3xl flex justify-center items-center cursor-pointer' onClick={previmg}>
                    <FaAngleRight color='#fff'/>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Product_img_section;
