import React from 'react'

const ProductListEmptyStage = () => {
  return (
        <tr className="bg-white last:table-row hidden font-semibold  dark:bg-gray-800 dark:border-gray-700">       
            <td colSpan="5" className="px-6 py-4  text-center font-medium">
            There is no product .
            </td>
        </tr>
  )
}

export default ProductListEmptyStage