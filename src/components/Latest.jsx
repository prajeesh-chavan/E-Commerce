import React from 'react'
import latest_collection from '../components/Assets/latest.js'
import Item from './Item'

const Latest = () => {
  return (
    <div className='flex flex-col items-center gap-10 w-[98vw]'>
      <h1 className='text-[#171717] text-5xl font-semibold mt-10'>Latest Collection</h1>
      <hr className='w-[300px] h-[6px] rounded-lg bg-[#252525]' />
      <div className='w-full max-w-screen-lg gap-10 p-10 pb-20 bg-gray-200 rounded-lg'>
        <div className='grid grid-cols-3 gap-10 mt-12'>
          {latest_collection.map((item, i) => (
            <Item
              key={i} 
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latest