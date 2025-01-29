import React from 'react'
import { HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiPlus, HiSearch } from 'react-icons/hi'
import ShowDate from './ShowDate';


const VoucherListRow = ({voucher}) => {
    console.log(voucher);
  return (
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-3 font-medium">
                {voucher.voucher_id}
            </td>
            <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {voucher.customer_name}
            </th>
            <td className="px-6 py-3 text-end">
                {voucher.customer_email}
            </td>
            <td className="px-6 text-gray-700 text-xs font-medium py-3 text-end">
                {<ShowDate timestamp={voucher.sale_date}/>}
            </td>
            <td className="px-6 py-3 text-right">
           <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiOutlineTrash className="size-4 text-red-600"/>
                </button>
            </div>

            </td>
            </tr>
  )
}

export default VoucherListRow