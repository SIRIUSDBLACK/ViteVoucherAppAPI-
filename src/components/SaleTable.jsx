import React from 'react'
import useRecordStore from '../store/useRecordStore'
import SaleTableRow from './SaleTableRow'

const SaleTable = () => {

  const {records} = useRecordStore()
  const total = records. reduce((total, record) => total + record.cost, 0);
  const tax = total * 0.05;
  const netTotal = total + tax; 
  return (
  <div className="container mx-auto">
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs uppercase text-gray-300 bg-stone-900 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 text-end py-3">
            Price
          </th>
          <th scope="col" className="px-6 text-end py-3">
            Quantity
          </th>
          <th scope="col" className="px-6 text-end py-3">
            cost
          </th>
          <th scope="col" className="px-6 print:hidden table-cell text-end py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
        {records.length === 0 ? <tr className="last:table-row hidden border-b dark:border-gray-700">
          <th colSpan={6} scope="row" className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            There is no Product yet
          </th>
        </tr>: records.map((record,index) => <SaleTableRow key={record.saleID} record={record} index={index}/>) }
      </tbody>
      <tfoot>
        <tr className="border-b dark:border-gray-700">
          <th colSpan={4} scope="row" className="px-6 text-end py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Total
          </th>
          <td id="recordTotal" className="px-6 text-end py-4">
            {total.toFixed(2)}
          </td>
        </tr>
        <tr className="border-b dark:border-gray-700">
          <th colSpan={4} scope="row" className="px-6 text-end py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Vat(USD)
          </th>
          <td id="tax" className="px-6 text-end py-4">
            {tax.toFixed(2)}
          </td>
        </tr>
        <tr className="border-b dark:border-gray-700">
          <th colSpan={4} scope="row" className="px-6 text-end py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Net Total
          </th>
          <td id="recordNetTotal" className="px-6 text-end py-4">
            {netTotal.toFixed(2)}
          </td>             
        </tr>
      </tfoot>
    </table>
  </div>
</div>

  )
}

export default SaleTable