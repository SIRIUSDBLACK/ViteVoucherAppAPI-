import printJS from 'print-js';
import React from 'react'

const VDetailCard = ({voucher}) => {
  const handlePrint = () => {
    printJS({
      printable: "voucher-content",
      type: "html",
      style: `
        .print-header { text-align: center; font-weight: bold; font-size: 24px; }
        .print-table { width: 100%; border-collapse: collapse; }
        .print-table th, .print-table td { border: 1px solid #ddd; padding: 8px; }
        .print-footer { text-align: center; margin-top: 20px; }
      `,
      scanStyles: false, // Use custom styles
    });
  };
  const handleDownloadPDF = () => {
    printJS({
      printable: "voucher-content",
      type: "html",
      targetStyles: ["*"],
      // header: "Invoice Details", // Optional: Adds a header
      scanStyles: false, // Prevents unnecessary styles
      showModal: true, // Shows a progress modal
      filename: `Invoice-${voucher.voucher_id}.pdf`,
      documentTitle: `Invoice-${voucher.voucher_id}`,
      css: "", // You can add extra CSS if needed
      style: `
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; }
      `,
    });
  };


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <div id='voucher-content' className="px-8 py-10">
        {/* Header */}
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
            <p className="text-gray-600 mt-1">{voucher.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Invoice to</p>
            <p className="font-medium">{voucher.customer_name}</p>
            <p className="text-sm text-gray-600 mt-1">Date: {voucher.sale_date.slice(0, 10)}</p>
          </div>
        </div>

        {/* Table */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2">No</th>
              <th className="text-left py-3 px-2">Description</th>
              <th className="text-center py-3 px-2">Qty</th>
              <th className="text-right py-3 px-2">Price</th>
              <th className="text-right py-3 px-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {voucher.records.map((record, index) => (
              <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-2">{index + 1}</td>
              <td className="py-3 px-2">{record.product.product_name}</td>
              <td className="py-3 px-2 text-center">{record.quantity}</td>
              <td className="py-3 px-2 text-right">{record.product.price}</td>
              <td className="py-3 px-2 text-right">{record.cost}</td>
            </tr>
            ))}         
          </tbody>
        </table>

        {/* Totals */}
        <div className="mb-8">
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Total</span>
            <span className="font-medium">{voucher.total}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">{voucher.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1 border-t border-gray-200">
            <span className="text-gray-600">Net Total</span>
            <span className="font-bold">{voucher.netTotal}</span>
          </div>
        </div>

        {/* Payment Details */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">Payment Transfer to</h3>
            <div className="text-sm text-gray-600">
              <p>Kpay,Wave: 0560135205845</p>
              <p>KBZ Bank: 518613218943086218</p>
              <p>AYA Bank: 200036454544</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="font-bold mb-2">Brilliant Tech</h3>
            <div className="text-sm text-gray-600">
              <p>46, 3rd Floor, Melrose Avenue.</p>
              <p>+959-890-162-333</p>
              <p>brilliantTech@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p>Thanks to You</p>
        </div>
      </div>
      <div className='w-full flex justify-end gap-2 p-4'>
      <button onClick={handlePrint} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-3 px-6 rounded'>Print</button>
      <button
          onClick={handleDownloadPDF}
          className="bg-slate-500 hover:bg-slate-700 text-white font-semibold text-sm py-3 px-6 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  )
}

export default VDetailCard