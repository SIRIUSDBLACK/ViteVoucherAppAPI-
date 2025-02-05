import React from 'react'

const VDetailCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
    <div className="px-8 py-10">
      {/* Header */}
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
          <p className="text-gray-600 mt-1"></p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Invoice to</p>
          <p className="font-medium">Su Su</p>
          <p className="text-sm text-gray-600 mt-1">Date: 2024-09-30</p>
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
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">1</td>
            <td className="py-3 px-2">Custom Website Design</td>
            <td className="py-3 px-2 text-center">3</td>
            <td className="py-3 px-2 text-right">1200</td>
            <td className="py-3 px-2 text-right">3600</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">2</td>
            <td className="py-3 px-2">Website Maintenance Plan</td>
            <td className="py-3 px-2 text-center">2</td>
            <td className="py-3 px-2 text-right">200</td>
            <td className="py-3 px-2 text-right">400</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-2">3</td>
            <td className="py-3 px-2">Custom Web Application Development</td>
            <td className="py-3 px-2 text-center">2</td>
            <td className="py-3 px-2 text-right">2000</td>
            <td className="py-3 px-2 text-right">4000</td>
          </tr>
        </tbody>
      </table>

      {/* Totals */}
      <div className="mb-8">
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Total</span>
          <span className="font-medium">8000</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">560</span>
        </div>
        <div className="flex justify-between py-1 border-t border-gray-200">
          <span className="text-gray-600">Net Total</span>
          <span className="font-bold">8560</span>
        </div>
      </div>

      {/* Payment Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-2">Payment Transfer to</h3>
          <div className="text-sm text-gray-600">
            <p>Kpay,Wave: 09250152018</p>
            <p>KBZ Bank: 02730102705025601</p>
            <p>AYA Bank: 20003674121</p>
          </div>
        </div>
        <div className="text-right">
          <h3 className="font-bold mb-2">Brilliant Tech</h3>
          <div className="text-sm text-gray-600">
            <p>48, 1st Floor, Shan Kane St.</p>
            <p>+959-250-152-018</p>
            <p>enquiry@mms-it.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600">
        <p>Thanks to You</p>
      </div>
    </div>
  </div>
  )
}

export default VDetailCard