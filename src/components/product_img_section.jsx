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
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIBlueArtboard3_800x.jpg?v=1692951404',
        'https://www.boat-lifestyle.com/cdn/shop/files/UltimaPrismFIBlueArtboard2_800x.jpg?v=1692951404',
    ]);

    const nextimg = () => {
        const index = imglist.indexOf(currntimg);
        setcurrntimg(index < imglist.length - 1 ? imglist[index + 1] : imglist[0]);
    };

    const previmg = () => {
        const index = imglist.indexOf(currntimg);
        setcurrntimg(index > 0 ? imglist[index - 1] : imglist[imglist.length - 1]);
    };

    return (
        <div className="h-full w-full md:h-[100%] md:w-[50%] flex flex-col md:flex-row justify-start">
            {/* Scrollable Image Thumbnails */}
            <div className="h-[150px] md:h-[500px] w-full md:w-[15%] overflow-x-auto md:overflow-y-auto p-2 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', whiteSpace: 'nowrap' }}>
                {imglist.map((img, index) => (
                    <Small_img_box key={index} img_url={img} handle_small_img={() => setcurrntimg(img)} />
                ))}
            </div>

            {/* Main Image Display */}
            <div className="h-[85%] md:h-full w-full md:w-[85%] p-2 md:p-5 relative">
                <div className="h-[80%] md:h-[90%] w-full md:w-[99%] rounded-xl relative">
                    <img src={currntimg} alt="" className="h-full w-full rounded-xl object-cover" />
                    <div className="h-9 w-[90%] md:w-[95%] absolute top-[45%] ml-4 flex justify-between">
                        <div className="h-[100%] w-[15%] md:w-[7%] bg-[#0b0b0b] rounded-3xl flex justify-center items-center cursor-pointer" onClick={previmg}>
                            <FaAngleLeft color="#fff" />
                        </div>
                        <div className="h-[100%] w-[15%] md:w-[7%] bg-[#0b0b0b] rounded-3xl flex justify-center items-center cursor-pointer" onClick={nextimg}>
                            <FaAngleRight color="#fff" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_img_section;
