import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import SaleOption from "./SaleOption";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SaleForm = () => {
    const {data,isLoading,error} = useSWR( `${import.meta.env.VITE_API_URL}/products`, fetcher);
    const { register, handleSubmit, formState:{errors},reset} = useForm();
    
    const HandleAddSale = (data) => {
        const currentQuantity = data.product_quantity;
        addRecord({
            saleCreated_time : new Date().toISOString(),         
            saleID: Date.now(),
            quantity: parseInt(currentQuantity),
            product: JSON.parse(data.product_name),
            cost : currentQuantity * JSON.parse(data.product_name).price
        });
        console.log(useRecordStore.getState().records);
        reset();
    }
    const {records,addRecord} = useRecordStore()
  return (
    <div>
      <div className="container print:hidden block mx-auto mb-5">

        <form onSubmit={handleSubmit(HandleAddSale)}>
          <div className="grid grid-cols-4 shadow-lg bg-gray-100 p-3 rounded-sm gap-3">

            <div className="col-span-2">
              <select
                {...register("product_name",{required:"Please select a product"})}
                className="bg-gray-50 text-gray-900 px-5 py-2.5 text-sm font-medium border-2 border-stone-900 rounded-sm focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">
                  Select Product
                </option>
                {isLoading ? <option>Loading...</option> : data.map(product => <SaleOption key={product.id} product={product}/> )}
              </select>
              {errors.product_name && <p className="text-red-500 text-xs mt-1">{errors.product_name.message}</p>}
            </div>

            <div className="col-span-1">
              <input
              {...register("product_quantity",{required: "Quantity is required",min:{value:1,message:"Quantity must be at least 1"}})}
                type="number"
                className="bg-gray-50 w-full text-end text-gray-900  rounded-sm border-2 border-stone-900 focus:ring-stone-500 focus:border-stone-500 block px-5 py-2.5 text-sm font-medium dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Quantity"
              />
              {errors.product_quantity && <p className="text-red-500 text-xs mt-1">{errors.product_quantity.message}</p>}
            </div>

            <div className="col-span-1">
              <button
                type="submit"
                className="w-full text-slate-500 text-center rounded-lg bg-slate-50 border-slate-500 px-5 py-2.5 text-sm font-medium focus:outline-none border-2 hover:bg-slate-600 hover:text-stone-50 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Add Record
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SaleForm;
