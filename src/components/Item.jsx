import React from 'react'

const Item = (props) => {
  return (
    <div className='w-[90%] p-5 bg-white border border-[#e0e0e0] rounded-lg shadow-md transition-transform duration-300 hover:scale-110'>
      <img src={props.image} alt="" className='w-full rounded-md' />
      <p className='my-1.5'>{props.name}</p>
      <div className='flex justify-between gap-5'>
        <div className='text-[#8c8c8c] text-lg font-medium line-through'>
          ${props.old_price}
        </div>
        <div className='text-[#374151] text-lg font-extrabold'>
          ${props.new_price}
        </div>
      </div>
    </div>
  )
}

export default Item;