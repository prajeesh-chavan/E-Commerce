import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const CartRow = ({img, title, price, Quantity}) => {
    const total = price * Quantity;
    return (
        <div className='sm:h-14 flex sm:justify-between p-2 border-b-[1px] border-gray-400 items-center max-sm:flex-col max-sm:gap-1 max-sm:mt-4'>
            <p className='sm:basis-[65px]  flex justify-center items-center'><img src={img} alt="" width={30} className='max-sm:w-[100px]'/></p>
            <p className='sm:basis-[200px]  flex justify-center items-center max-sm:text-2xl max-sm:font-medium'>{title}</p>
            <p className='sm:basis-[90px]  flex justify-center items-center gap-1'><p className='font-medium sm:hidden'>Price : </p> {price} <div className='text-md'><FaRupeeSign /></div></p>
            <p className='sm:basis-[90px]  flex justify-center items-center gap-1'><p className='font-medium sm:hidden'>Quantity : </p>{Quantity}</p>
            <p className='sm:basis-[90px] flex justify-center items-center gap-1'><p className='font-medium sm:hidden'>Total : </p>{total}<div className='text-md'><FaRupeeSign /></div></p>
            <p className='sm:basis-[70px]  flex justify-center items-center  h-8 px-4 rounded-md cursor-pointer gap-1'><div className='text-xl hover:scale-125 duration-100 hover:text-red-500'><MdDelete /></div></p>
        </div>
    )
}

export default CartRow