import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { HiTrash } from 'react-icons/hi'

const SaleTableRow = ({record,index,changeQuantity,deleteRecord}) => {

  const increaseQuantity = () => changeQuantity(record.saleID,1)
  const decreaseQuantity = () => {
    if(record.quantity>1) changeQuantity(record.saleID,-1)
      else toast.error("Quantity cannot be less than 1")
    }
  const handleDelete = () => {
    deleteRecord(record.saleID)
    toast.success("Product deleted successfully");
  }
  const [isDeleting,setisDeleting] = useState(false);
  return (
    <tr className="record-row odd:bg-white odd:dark:bg-gray-900 group even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" product-id={1} row-id="2b5169e0-273a-4e5a-9a45-2f43bdc5d62c">
      <td className="record-product-price px-6 text-end py-4">{index+1}</td>
      <th scope="row" className="record-product-name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{record.product.product_name}</th>
      <td className="record-product-price px-6 text-end py-4">{record.product.price}</td>
      <td className="px-6 py-4 text-end">
        <button
        onClick={decreaseQuantity}
          className="q-sub pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <span className="w-5 group-hover:text-center inline-block">{record.quantity}</span>
        <button
        onClick={increaseQuantity}
          className="q-add pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </td>
      <td className=" px-6 text-end py-4">{record.cost}</td>
      <td className="px-6 text-end py-4 print:hidden table-cell">
        <button onClick={handleDelete} className="font-medium text-stone-950 dark:text-stone-50 hover:underline"><HiTrash className='size-5 hover:text-red-600'/></button>
      </td>
    </tr>


  )
}

export default SaleTableRow