import React from 'react'
import Product_img_section from '../components/product_img_section'
import Product_details_section from '../components/product_details_section'
import Warranty_box from '../components/Warranty_box'
function ProductDetails() {
  return (
    <>
    <div className='h-[95vh] w-[100]  flex justify-center items-center overflow-hidden'>
  <div className='h-full w-[95%]  flex'>
    <Product_img_section />
    <Product_details_section />
  </div>
</div>
<div className='h-[20vh] w-[100]  flex justify-evenly items-center'>
  <Warranty_box img_uri='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123' simpaltext='Warranty' highlighted_text='1 Year '/>
  <Warranty_box img_uri='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123' simpaltext='Replacement' highlighted_text='7-day '/>
  <Warranty_box img_uri='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123' simpaltext='Delivery*' highlighted_text='Free Express '/>
  <Warranty_box img_uri='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123' simpaltext='Billing ' highlighted_text='GST '/>
  {/* <Warranty_box/> */}

</div>


    </>
  )
}

export default ProductDetails