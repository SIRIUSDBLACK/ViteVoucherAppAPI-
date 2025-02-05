import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr';
import VoucherDetailSkeletonLoader from './VoucherDetailSkeletonLoader';
import VDetailCard from './VDetailCard';

const fetcher = (url) => fetch(url).then((res) => res.json())
const VoucherDetail = () => {
    const {id} = useParams();

    const {data,isLoading,error} = useSWR( `${import.meta.env.VITE_API_URL}/vouchers/${id}`, fetcher); 

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
        {isLoading ? <VoucherDetailSkeletonLoader /> : <VDetailCard key={data.id} voucher={data}/>}
    
  </div>
  )
}

export default VoucherDetail