
import React, { useEffect, useState } from 'react'
import {cart} from '../data'
import CartRow from '../components/CartRow'
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
    const [totalSum,settotalsum] = useState(0)
    const [Shipping,setShipping] = useState(100)
    useEffect(()=>{
        function calculatePrice(){
            let totalsum = cart.reduce((accumulator, product) => {
                return accumulator + product.Price * product.Quantity;
              }, 0);
            settotalsum(totalsum) }
                calculatePrice()
    })

    return (
        <section className='w-full px-10 '>
            <div className=' max-w-[1000px] mt-[50px] h-[80vh] overflow-y-auto no-scrollbar  relative'>
                <div className='h-12 flex justify-between border-b-2 border-black max-sm:hidden sm:sticky top-0 bg-secondary px-2 '>
                    <p className=' flex justify-center items-center font-medium'>Products</p>
                    <p className='basis-[200px]  flex justify-center items-center font-medium'>Title</p>
                    <p className='basis-[90px]  flex justify-center items-center font-medium'>Price</p>
                    <p className='basis-[90px]  flex justify-center items-center font-medium'>Quantity</p>
                    <p className='basis-[90px]  flex justify-center items-center font-medium'>Total</p>
                    <p className='basis-[70px]  flex justify-center items-center font-medium'>Remove</p>
                </div>
                
                 {cart.map((product, index) => (
                        <CartRow key={index} img={product.image} title={product.title} price={product.Price} Quantity={product.Quantity} />
                ))}
                 
               
            </div>
            <div className='mt-10 max-w-[600px] border-2 border-black p-2 2xl:fixed top-[160px] 2xl:right-[100px] m-2'>
                <h1 className='text-2xl font-medium text-black'>Cart Totals</h1>
                <div className=' p-2 mt-6'>
                    <div className='border-b-2 border-gray-400 flex justify-between h-10 items-center'>
                        <p>Subtotal</p>
                        <p className='flex gap-1 justify-center items-center'>{totalSum} <div className='text-md'><FaRupeeSign /></div></p>
                    </div>
                    <div className='border-b-2 border-gray-400 flex justify-between h-10 items-center'>
                        <p>Shipping</p>
                        <p className='flex gap-1 justify-center items-center'>{Shipping}<div className='text-md'><FaRupeeSign /></div></p>
                    </div>
                    <div className='font-medium text-xl flex justify-between h-10 items-center'>
                        <p>Total</p>
                        <p className='flex gap-1 justify-center items-center'>{totalSum+Shipping} <div className='text-md'><FaRupeeSign /></div></p>
                    </div>
                    <div className='font-medium text-xl flex justify-between h-10 items-center mt-4'>
                        <button className='px-5 py-1 bg-red-400 rounded-[3px] flex gap-2 items-center'>Proceed to Payment</button>
                    </div>

                     <div className='mt-16'>
                        <p className='font-medium text-gray-600'>If you have any promocode , Enter here:</p>
                       <form action="" className='flex items-center mt-1 flex-wrap'>
                        <input type="text" className='p-2 bg-gray-300 rounded-md mr-2 '/>
                        <input type="submit" className=' max-sm:mt-5 px-4 py-1 bg-blue-500 rounded-md text-lg cursor-pointer hover:bg-blue-600 flex justify-center items-center'/>
                       </form>

                     </div>
                </div>
            </div>
        </section>
    )

}
export default Cart