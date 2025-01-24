import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { quantum } from 'ldrs'
import toast from 'react-hot-toast';

const CreateNewProduct = () => {

quantum.register()

// Default values shown

  const {register, handleSubmit, formState:{errors},reset} = useForm();
  const navigate = useNavigate();
  const [isCreating,setisCreating] = useState(false)

  const addProduct = async(data) => {
      setisCreating(true);
      await fetch("http://localhost:5000/products",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        product_name:data.product_name,
        price:data.price,
        created_at:new Date().toISOString()
      })
    });
    setisCreating(false)
    reset();
    if(data.back_to_product_list){
      navigate("/product")
    }
    toast.success("Product created successfully");
  }
  return (
    <>
<h1 className='font-semibold text-xl mb-5'>Create Product</h1>
<form className="max-w-sm " onSubmit={handleSubmit(addProduct)}>
  <div className="mb-5">
    <label className={`${errors.product_name ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Product Name</label>
    <input {...register("product_name",{required:"Product Name is required",minLength:{value :3,message:"Minimum length must be 3"},maxLength :{value: 20,message:"Maximum length must be 20"}})}  className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="e.g.Apple" />
    {errors.product_name && <p className='text-sm text-red-500'>{errors.product_name.message}</p>}
  </div>
  <div className="mb-5">
    <label className={`${errors.product_name ? "text-red-500" : "text-gray-900"} block mb-2 text-sm font-medium  dark:text-white`}>Product Price</label>
    <input {...register("price",{required : "Product Price is required",min:{value:100,message:"Minimum price is 100"}})} className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 outline-none focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="1500" />
    {errors.price && <p className='text-sm text-red-500'>{errors.price.message}</p>}
  </div>
        <div className="flex items-start mb-5">
          <input
            {...register("all_correct")}
            required
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

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="back-to-product-list"
            className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Back to Product List after saving
          </label>
        </div>  
  <Link to="/product" className="text-slate-900 border-2 mr-2  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</Link>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isCreating ? <l-quantum
  size="20"
  speed="1.75" 
  color="white" 
></l-quantum> :"Add Product"}</button>
</form>
</>
  )
}

export default CreateNewProduct