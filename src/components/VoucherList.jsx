import React, { useState } from 'react'
import { HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiPlus, HiSearch } from 'react-icons/hi'
import useSWR from 'swr'
import VoucherListRow from './VoucherListRow';
import { debounce, throttle } from 'lodash';
import VoucherListSkeletonLoader from './VoucherListSkeletonLoader';


const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherList = () => {
    const [search,setSearch] = useState("");
    // const handleSearch = (e) => {
    //     // console.log(e.target.value);
    //     setSearch(e.target.value);
    // }
    const handleSearch = debounce((e)=>{setSearch(e.target.value)
        console.log(e.target.value);
    },500)
    const {data,isLoading,error} = useSWR(search ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`: `${import.meta.env.VITE_API_URL}/vouchers`,fetcher)

  return (
    <div>
        <h1 className='font-semibold mb-3'>Vouchers List</h1>

         <div className="flex w-[200px] md:w-[300px] mb-5">
        <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-50 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <HiSearch className=' size-4 md:size-5'/>
        </span>
        <input type="text" onChange={handleSearch} className=" rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        </div>

        <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='bg-gray-200'>
            <th scope="col" className="px-6 py-5">
                #
            </th>
            <th scope="col" className="px-6 py-5">
                Voucher id.
            </th>
            <th scope="col" className="px-6 py-5">
                name
            </th>
            <th scope="col" className="px-6 py-5 ">
                <div className="flex items-center justify-end">
                email
                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                </div>
            </th>
            <th scope="col" className="px-3 py-5">
                <div className="flex items-center text-end justify-end">
                Created at
                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                </div>
            </th>
            <th scope="col" className="px-6 text-end py-5">
                <span className='text-end'>Action</span>
            </th>
            </tr>
        </thead>
        <tbody>
            {isLoading && <VoucherListSkeletonLoader />}
                {!isLoading &&  (data?.length > 0 ? 
                (data.map((voucher,index)=>(<VoucherListRow key={voucher.id} index={index} voucher={voucher}/>)))
                : 
                 ( <tr className="bg-white  font-semibold  dark:bg-gray-800 dark:border-gray-700">       
                    <td colSpan="5" className="px-6 py-4  text-center font-medium">
                        There is no voucher.
                    </td> 
                  </tr>))
                }
                    
                    
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default VoucherList