import React from 'react'

const ProductListSkeletonLoader = () => {
  return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-6"></div>
        </td>
        <th scope="row" className="px-6 py-4">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-16"></div>
        </th>
        <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-10 ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-20 mb-1 ml-auto"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-16 ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-right">
            <div className="inline-flex rounded-md shadow-sm">
                <div className="w-8 h-8 bg-gray-300 rounded dark:bg-gray-600"></div>
                <div className="w-8 h-8 bg-gray-300 rounded dark:bg-gray-600 ml-2"></div>
            </div>
        </td>
    </tr>
  )
}

export default ProductListSkeletonLoader