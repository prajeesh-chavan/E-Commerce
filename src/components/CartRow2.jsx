import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { Link } from 'react-router-dom';


const CartRow2 = ({ img, title, price, Quantity, setSelectedItems, selectedItems, rowKey,setCartProducts,Cartproducts }) => {
    const total = price * Quantity;

    function handleCheckboxClick(e) {

        if (e.target.checked) {
            const selectedItemsArray = [...selectedItems];
            const totalElement = e.target.closest('.div-2').querySelector('#total');
            const priceElement = e.target.closest('.div-2').querySelector('#price')
            const quantityElement = e.target.closest('.div-2').querySelector('#quantity')
            if (totalElement) {
                const itemObj = {
                    id: Number(totalElement.getAttribute('elekey')),
                    Quantity:Number(quantityElement.textContent),
                    price: Number(priceElement.textContent),
                };
                selectedItemsArray.push(itemObj);
                setSelectedItems(selectedItemsArray);
            }
        } else {
            const totalElement = e.target.closest('.div-2').querySelector('#total');
            const filteredItems = selectedItems.filter(item => item.id !== Number(totalElement.getAttribute('elekey')));
            setSelectedItems(filteredItems);
        }
    }

    function increaseQuantity(e) {
        let NewProducts = Cartproducts.map((product) => {
            console.log(e.target.closest('.div-2').getAttribute('elekey'))
            if(product.id == Number(e.target.closest('.div-2').getAttribute('elekey'))){
                product.Quantity=product.Quantity+1;
                let NewselectedProducts = selectedItems.map((selectedProduct)=>{
                     if(selectedProduct.id==product.id){
                        selectedProduct.Quantity=selectedProduct.Quantity+1;
                        return selectedProduct
                     }
                     else{
                        return selectedProduct
                     }
                })
                setSelectedItems(NewselectedProducts)
                return product;
            }
            else{
                return product;
            }
        })

       
        setCartProducts(NewProducts)
    }

    function decreaseQuantity(e) {
        let NewProducts = Cartproducts.map((product) => {
            if(product.id == Number(e.target.closest('.div-2').getAttribute('elekey'))){
                product.Quantity=product.Quantity-1;
                let NewselectedProducts = selectedItems.map((selectedProduct)=>{
                     if(selectedProduct.id==product.id){
                        selectedProduct.Quantity=selectedProduct.Quantity-1;
                        return selectedProduct
                     }
                     else{
                        return selectedProduct
                     }
                })
                setSelectedItems(NewselectedProducts)
                return product;
            }
            else{
                return product;
            }
        })

       
        setCartProducts(NewProducts)
    }
    return (
        <div className='flex w-full gap-2 items-center max-sm:visible sm:hidden p-4 border-2 border-gray-300 my-2 rounded-lg hover:cursor-pointer div-2' elekey={rowKey}>
            {console.log(rowKey)}
            <div className='self-start my-2 '>
                <input type="checkbox" onClick={handleCheckboxClick}/>
            </div>
            <div className='flex w-full items-center'>
                <div className='max-w-[100px] ' >
                    <Link to={'/product-details'} ><img src={img} alt="image" width={100} /></Link>
                </div>
                <div className='w-full ml-6'>
                    <p className='text-gray-400'>{title}</p>
                    <p ><span className='mr-2' id='price'>200</span> <div className='text-md'><FaRupeeSign /></div></p>
                    <div className='flex justify-between pr-4 mt-2 items-center'>
                        <div className='bg-orange-500 py-1 px-2 rounded-sm text-white hover:cursor-pointer hover:bg-orange-600'><Link to={'/product-details'}>Place Order</Link></div>
                        <div className='flex gap-1 items-center'>
                            <div className='border-2 border-gray-400 hover:border-black hover:cursor-pointer rounded-md' onClick={increaseQuantity}><FiPlus/></div>
                            <div id='quantity'>{Quantity}</div>
                            <div className='border-2 border-gray-400 hover:border-black hover:cursor-pointer  rounded-md' onClick={decreaseQuantity}><LuMinus/></div>
                        </div>
                    </div>
                    <div className='sm:basis-[90px] justify-center items-center gap-1 hidden' id='total' elekey={rowKey}>{total}<div className='text-md'><FaRupeeSign /></div></div>
                </div>

            </div>
        </div>
    )
}

export default CartRow2