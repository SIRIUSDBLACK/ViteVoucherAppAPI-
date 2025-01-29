import React, { useState } from 'react'
import {  HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useSWRConfig } from 'swr'
import { tailChase } from 'ldrs'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ShowDate from './ShowDate'

tailChase.register()

// Default values shown

const ProductRow = ({product:{id,product_name,price,created_at}}) => {
    const [isDeleting,setisDeleting] = useState(false);
    const baseUrl = import.meta.env.VITE_API_URL
    const {mutate} = useSWRConfig();
    
      const HandleProductDelete = async () => {
        setisDeleting(true);
    
        await fetch(`${baseUrl}/products/${id}`, {
          method: "DELETE",
        });
        mutate(import.meta.env.VITE_API_URL + `/products`);
        toast.success("Product deleted successfully");
      };

  return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium">
                {id}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product_name} 
            </th>
            <td className="px-6 py-4 text-end">
                {price}
            </td>
            <td className="px-6 text-gray-700 text-xs font-medium py-4 text-end">
                <ShowDate timestamp={created_at}/>
            </td>
            <td className="px-6 py-4 text-right">
        <div className="inline-flex rounded-md shadow-sm" role="group">
                <Link to={`/product/edit/${id}`} className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <HiOutlinePencil className="size-4"/>

                </Link>
                <button type="button" onClick={HandleProductDelete} className="size-9 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    {isDeleting ? 
                        <l-tail-chase
                            size="20"
                            speed="1.75" 
                            color="red">
                         </l-tail-chase>  
                        : 
                        <HiOutlineTrash className="size-4 text-red-600"/>
                    }
                    
                    

                </button>
            </div>

            </td>
        </tr>
    
  )
}

export default ProductRow