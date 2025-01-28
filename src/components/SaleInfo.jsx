import React from 'react'
import { useForm } from 'react-hook-form';
import SaleForm from './SaleForm';


const SaleInfo = () => {
    function generateInvoiceNumber() {
        // Get the current date
        const date = new Date();
    
        // Format the date as YYYYMMDD
        const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
    
        // Generate a random number between 1000 and 9999
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
    
        // Combine the formatted date and the random number
        const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;
    
        return invoiceNumber;
      }   
      const { register, handleSubmit, formState:{errors},reset} = useForm();
      const HandleVoucherInfo = (saleData) => {
        console.log(saleData); 
      }
  return (
    <>
        <form id='VoucherForm' onSubmit={handleSubmit(HandleVoucherInfo)} className="grid gap-2 mb-6  md:grid-cols-4">
            <div>
                <label className={`${errors.voucher_id ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Voucher ID</label>
                <input {...register("voucher_id",{required:"Voucher ID is required"})} type="text" defaultValue={generateInvoiceNumber()}  className={`bg-gray-50 border ${
              errors.voucher_id
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
                {errors.voucher_id && <p className='text-red-500 text-sm'>{errors.voucher_id.message}</p>}
            </div>
            <div>
                <label className={`${errors.customer_name ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Customer name</label>
                <input placeholder='John Doe' type="text" {...register("customer_name",{required:"Customer name is required"})}  className={`bg-gray-50 border ${
              errors.customer_name
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} />
                {errors.customer_name && <p className='text-red-500 text-sm'>{errors.customer_name.message}</p>}
            </div>
            <div>
                <label className={`${errors.customer_email ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Customer Email</label>
                <input placeholder='John@gmail.com' type="email" {...register("customer_email",{required:"Customer email is required"})}  className={`bg-gray-50 border ${
              errors.customer_email
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
                {errors.customer_email && <p className='text-red-500 text-sm'>{errors.customer_email.message}</p>}
            </div>
            <div>
                <label className={`${errors.sale_date ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Sale Date</label>
                <input type="Date" {...register("sale_date",{required:"Sale Date is required"})} defaultValue={new Date().toISOString().slice(0, 10)} className={`bg-gray-50 border ${
              errors.sale_date
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
                {errors.sale_date && <p className='text-red-500 text-sm'>{errors.sale_date.message}</p>}
            </div>
           
        </form>
        <div className='flex items-center justify-end gap-3'>
        <div>
        <input
            {...register("all_correct")}
            required
            form='VoucherForm'
            id="all-correct"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all field are correct
          </label>
        </div>
            <button type="submit" form='VoucherForm' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Confirm Voucher
             </button>
        </div>
        <SaleForm/>
    </>
  )
}

export default SaleInfo