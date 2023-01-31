import React from 'react'
import {data} from '../data/data.js';
import {FaShoppingBag} from 'react-icons/fa'
 
const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
        <h2>Recent Orders</h2>
        {/*mapping through datajs */}
        <ul>
          {data.map((order, id) => (
            <li key={id} className='bg-gray-100 rounded-lg my-3 flex p-2 items-center cursor-pointer'>
              <div className='rounded-lg p-3'>
                <FaShoppingBag size={25} className='text-cyan-700'/>
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{order.total}€</p>
                <p className='text-gray-800 text-sm'>{order.name.first}</p>
              </div>
              <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default RecentOrders