import React from 'react'

const VoucherListSkeletonLoader = () => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <td className="px-2 py-3 text-center font-medium">
          <div className="h-4 w-6 bg-gray-300 rounded"></div>
        </td>
        <td className="px-1 py-3 font-medium">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
        </td>
        <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </th>
        <td className="px-6 py-3 text-end">
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 text-gray-700 text-xs font-medium py-3 text-end">
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-3 text-right">
          <div className="inline-flex rounded-md shadow-sm gap-1">
            <div className="h-8 w-8 bg-gray-300 rounded"></div>
            <div className="h-8 w-8 bg-gray-300 rounded"></div>
          </div>
        </td>
      </tr>
      );
}

export default VoucherListSkeletonLoader