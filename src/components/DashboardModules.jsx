import React from 'react'
import { HiPaperAirplane, HiReceiptRefund, HiReceiptTax } from 'react-icons/hi'
import { HiMiniShoppingBag, HiMiniShoppingCart, HiReceiptPercent } from 'react-icons/hi2'
import { IoReceipt } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const DashboardModules = () => {
  return (
    <div className='w-full sm:px-2 md:px-0 grid  grid-cols-1 md:grid-cols-3 gap-5'>
        <Link to={"product"} className='border rounded-md flex flex-col gap-3 py-12 items-center justify-center grid-cols-1 bg-blue-500 text-white'>
            <HiMiniShoppingBag className='size-10'/>
            <p>Product Module</p>
        </Link>
        <Link to={"sale"} className='border rounded-md flex flex-col gap-3 py-12 items-center justify-center grid-cols-1 bg-blue-500 text-white'>
            <HiMiniShoppingCart className='size-10'/>
            <p>Sale Module</p>
        </Link>
        <Link to={"voucher"} className='border rounded-md flex flex-col gap-3 py-12 items-center justify-center grid-cols-1 bg-blue-500 text-white'>
            <IoReceipt className='size-9'/>
            <p>Voucher Module</p>
        </Link>
    </div>
  )
}

export default DashboardModules