import React from 'react'

const VoucherDetailSkeletonLoader = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="px-8 py-10">
              {/* Header Skeleton */}
              <div className="flex justify-between mb-8">
                <div>
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-40 bg-gray-200 rounded mt-2 animate-pulse"></div>
                </div>
                <div className="text-right">
                  <div className="h-4 w-24 bg-gray-200 rounded ml-auto animate-pulse"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded mt-2 ml-auto animate-pulse"></div>
                  <div className="h-4 w-36 bg-gray-200 rounded mt-2 ml-auto animate-pulse"></div>
                </div>
              </div>
    
              {/* Table Skeleton */}
              <div className="mb-8">
                {/* Table Header */}
                <div className="border-b border-gray-200 grid grid-cols-12 py-3">
                  <div className="col-span-1">
                    <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="col-span-5">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="col-span-2 text-center">
                    <div className="h-4 w-8 bg-gray-200 rounded mx-auto animate-pulse"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-4 w-16 bg-gray-200 rounded ml-auto animate-pulse"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-4 w-16 bg-gray-200 rounded ml-auto animate-pulse"></div>
                  </div>
                </div>
    
                {/* Table Rows */}
                {[1, 2, 3].map((row) => (
                  <div key={row} className="border-b border-gray-200 grid grid-cols-12 py-4">
                    <div className="col-span-1">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="col-span-5">
                      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="h-4 w-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
                    </div>
                    <div className="col-span-2">
                      <div className="h-4 w-16 bg-gray-200 rounded ml-auto animate-pulse"></div>
                    </div>
                    <div className="col-span-2">
                      <div className="h-4 w-16 bg-gray-200 rounded ml-auto animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Totals Skeleton */}
              <div className="mb-8">
                {["Total", "Tax", "Net Total"].map((item, index) => (
                  <div key={item} className={`flex justify-between py-1 ${index === 2 ? "border-t border-gray-200" : ""}`}>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
    
              {/* Payment Details Skeleton */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="h-5 w-40 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="h-5 w-32 bg-gray-200 rounded mb-3 ml-auto animate-pulse"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-4 w-40 bg-gray-200 rounded ml-auto animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
    
              {/* Footer Skeleton */}
              <div className="text-center">
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default VoucherDetailSkeletonLoader