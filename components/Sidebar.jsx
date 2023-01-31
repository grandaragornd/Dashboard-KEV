import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import {RxActivityLog , RxPerson , RxDashboard} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20px h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='p-3 rounded-lg inline-block border border-black'>
                        <RxActivityLog size={25} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-black w-full p-2'></span>
                <Link href='/accounts'>
                    <div className='p-3 my-4 rounded-lg hover:bg-cyan-200 inline-block border border-black'>
                        <RxDashboard size={25} />
                    </div>
                </Link>
                <Link href='/customers'>
                    <div className='p-3 my-4 rounded-lg hover:bg-cyan-200 inline-block border border-black'>
                        <RxPerson size={25} />
                    </div>
                </Link>
                <Link href='/orders'>
                    <div className='p-3 my-4 rounded-lg hover:bg-cyan-200 inline-block border border-black'>
                        <HiOutlineShoppingBag size={25} />
                    </div>
                </Link>
                <Link href='/settings'>
                    <div className='p-3 my-4 rounded-lg hover:bg-cyan-200 inline-block border border-black'>
                        <FiSettings size={25} />
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar;