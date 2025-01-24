import React from 'react'

const EditProductSkeletonLoader = () => {
  return (
    <div className="max-w-sm animate-pulse">
    <div className="mb-5">
      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="mb-5">
      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="flex items-start mb-5">
      <div className="w-4 h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-40 ml-2"></div>
    </div>
    <div className="flex items-start mb-4">
      <div className="w-4 h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-40 ml-2"></div>
    </div>
    <div className="flex space-x-2">
      <div className="h-10 bg-gray-300 rounded w-20"></div>
      <div className="h-10 bg-gray-300 rounded w-32"></div>
    </div>
  </div>
  )
}

export default EditProductSkeletonLoader