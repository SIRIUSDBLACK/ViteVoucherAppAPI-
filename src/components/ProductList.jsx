import React from 'react'
import ProductListSkeletonLoader from './ProductListSkeletonLoader'
import useSWR from 'swr'
import ProductListEmptyStage from './ProductListEmptyStage'
import ProductRow from './ProductRow'
import { HiFilter, HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiPencil, HiPlus, HiSearch } from 'react-icons/hi'
import { HiMiniTrash } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductList = () => {
     const baseUrl = import.meta.env.VITE_API_URL
    // console.log(baseUrl); 

    const {data,error,isLoading} = useSWR(`${baseUrl}/products`,fetcher);
  return (
   <div>
    
    <h1 className='font-semibold text-xl mb-3'>Products List</h1>

    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
        
        <form className="w-full px-2 py-2 mb-5 ">

        <div className='flex justify-between items-center'>
        <div className="flex w-[200px] md:w-[300px]">
        <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-50 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <HiSearch className=' size-4 md:size-5'/>
        </span>
        <input type="text" id="website-admin" className=" rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        </div>
        <div className='flex gap-2 items-center'>
        <button className='border text-sm flex items-center gap-1 px-5 py-2.5 rounded-md bg-blue-50'>
            Fliter
            <HiOutlineFilter/>
            </button>
        <Link to="/product/create" className='border text-white flex text-sm font-medium items-center gap-1 px-5 py-2.5 rounded-md bg-blue-700'>
            Add New Product
            <HiPlus/>
        </Link>
        </div>
        </div>
        </form>


        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                #
            </th>
            <th scope="col" className="px-6 py-3">
                Title
            </th>
            <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-end">
                Price (MMK)
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

         {isLoading ? (<ProductListSkeletonLoader/>):
            data.length === 0 ? <ProductListEmptyStage/> : data.map((product) => <ProductRow key={product.id} product={product} />)}
            
        </tbody>
        </table>
    </div>
</div>

  )
}

export default ProductList