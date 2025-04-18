import React from 'react'
import { HiInformationCircle, HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiPlus, HiSearch } from 'react-icons/hi'
import ShowDate from './ShowDate';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const VoucherListRow = ({voucher,index}) => {
    const {mutate} = useSWRConfig();
    const DeleteVoucher = async(id) => {
        await fetch( `${import.meta.env.VITE_API_URL}/vouchers/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        })
        mutate(`${import.meta.env.VITE_API_URL}/vouchers`);
        toast.success("Voucher deleted successfully");
    }
    const HandleDeleteBtn = () => {
        DeleteVoucher(voucher.id);
    }
    // console.log(voucher);
  return (
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-2 py-3 text-center font-medium">
                {index+1}
            </td>
            <td className="px-1 py-3 font-medium">
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
                <button onClick={HandleDeleteBtn} type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiOutlineTrash className="size-4 text-red-600"/>
                </button>
                <Link to={`/voucher/detail/${voucher.id}`} type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiInformationCircle className="size-4"/>
                </Link>
            </div>

            </td>
            </tr>
  )
}

export default VoucherListRow