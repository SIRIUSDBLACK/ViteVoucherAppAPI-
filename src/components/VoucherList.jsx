import React from 'react'
import { HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiPlus, HiSearch } from 'react-icons/hi'

const VoucherList = () => {
  return (
    <div>

        <h1 className='font-semibold mb-3'>Vouchers List</h1>

        <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                Voucher id.
            </th>
            <th scope="col" className="px-6 py-3">
                name
            </th>
            <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-end">
                email
                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                </div>
            </th>
            <th scope="col" className="px-3 py-3">
                <div className="flex items-center text-end justify-end">
                Created at
                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                </div>
            </th>
            <th scope="col" className="px-6 text-end py-3">
                <span className='text-end'>Action</span>
            </th>
            </tr>
        </thead>
        <tbody>
        <tr className="bg-white last:table-row hidden font-semibold  dark:bg-gray-800 dark:border-gray-700">       
                <td colSpan="5" className="px-6 py-4  text-center font-medium">
                There is no product .
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium">
                #14124
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Htoo Htoo
            </th>
            <td className="px-6 py-4 text-end">
                htoo22@gmail.com
            </td>
            <td className="px-6 text-gray-700 text-xs font-medium py-4 text-end">
                <p className=''>20 Jan 2025</p>
                <p>11:53 PM</p>
            </td>
            <td className="px-6 py-4 text-right">
           <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiOutlinePencil className="size-4"/>

                </button>
                <button type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiOutlineTrash className="size-4 text-red-600"/>

                </button>
            </div>

            </td>
            </tr>
               
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default VoucherList