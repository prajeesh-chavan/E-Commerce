
import React, { useEffect, useState } from 'react'
import {cart} from '../data'
import CartRow from '../components/CartRow'
import { FaRupeeSign } from "react-icons/fa";
import CartRow2 from '../components/CartRow2';

const Cart = () => {
    const [totalSum,settotalsum] = useState(0)
    const [Discount,setDiscount] = useState(50)
    const [Shipping,setShipping] = useState(100)
    const [selectedItems,setSelectedItems] = useState([]);
    const [totalPrice,settotalPrice] = useState(0)
    const [Cartproducts,setCartProducts] = useState(cart)

   

    useEffect(() => {
        function calculateTotalPrice(){
           let total = 0;
           selectedItems.map((item)=>{
             total = total + (item.price*item.Quantity);
           })
           settotalsum(total);
           setDiscount(0.1*total)
           settotalPrice(total-Discount)
        }
        calculateTotalPrice()
     }, [selectedItems])
     

    return (
        <section className='w-full px-10 '>
            <div className=' max-w-[1000px] mt-[50px] h-[75vh] overflow-y-auto no-scrollbar  relative'>
                <div className='h-12 flex justify-between border-b-2 border-black max-sm:hidden sm:sticky top-0 bg-secondary px-2 '>
                    <p className=' flex justify-center items-center font-medium'>Products</p>
                    <p className='basis-[125px] pl-10 flex justify-center items-center font-medium'>Title</p>
                    <p className='basis-[70px]  flex justify-center items-center font-medium'>Price</p>
                    <p className='basis-[90px]  flex justify-center items-center font-medium'>Quantity</p>
                    <p className='basis-[70px]  pr-8 flex justify-center items-center font-medium'>Total</p>
                    <p className='basis-[70px]  flex justify-center items-center font-medium'>Remove</p>
                </div>
                
                 {Cartproducts.map((product, index) => (
                        <>
                            <CartRow rowKey={product.id || index} img={product.image} title={product.title} price={product.Price} Quantity={product.Quantity} setSelectedItems={setSelectedItems} selectedItems={selectedItems} Cartproducts={Cartproducts} setCartProducts={setCartProducts}/>
                            <CartRow2 rowKey={product.id || index} img={product.image} title={product.title} price={product.Price} Quantity={product.Quantity} setSelectedItems={setSelectedItems} selectedItems={selectedItems} Cartproducts={Cartproducts} setCartProducts={setCartProducts}/>
                        </>
                       
                ))}
                 
               
            </div>
            <div className='mt-10 max-w-[600px] border-2 border-gray-300 p-2  px-3 2xl:fixed top-[160px] 2xl:right-[70px] m-2 font-poppins rounded-lg mx-auto pb-4'>
                <div>
                    <h1 className='font-medium text-xl mb-2'>Order Summary</h1>
                    <h3 className=' text-md'>Have a Promo Code ?</h3>
                    <div className='flex gap-2 mt-1'>
                        <input type="text" className=' px-2 focus:outline-none border-2 border-gray-300 rounded-md md:w-[230px] max-md:w-full'/>
                        <div className='rounded-full p-1 text-md px-4 flex items-center justify-center font-semibold  hover:cursor-pointer bg-orange-500 text-white hover:bg-orange-600'>Apply</div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between items-center p-1'>
                            <p className='text-md text-gray-400 font-medium'>Subtotal</p>
                            <p>{totalSum}</p>
                        </div>
                        <div className='flex justify-between items-center p-1'>
                            <p className='text-md text-gray-400 font-medium'>Discount</p>
                            <p>{Discount}</p>
                        </div>
                        <div className='flex justify-between items-center p-1 pb-3 border-b-2 border-gray-300'>
                            <p className='text-md text-gray-400 font-medium'>Shipping</p>
                            <p>{totalSum ==0 ? 0 : Shipping}</p>
                        </div>
                        <div className='flex  justify-between items-center p-1 pb-3 '>
                            <p className='text-md text-black font-medium'>Total</p>
                            <p>{totalSum ==0 ? 0 : totalPrice}</p>
                        </div>
                         
                         <button className='p-2 rounded-full text-white bg-black w-full mt-3'>Continue To Pay</button>
                    </div>
                </div>
                
                    
            </div>
        </section>
    )

}
export default Cart