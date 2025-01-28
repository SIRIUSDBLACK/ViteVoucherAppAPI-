import React from 'react'

const SaleOption = ({product}) => {
  return (
    <option value={JSON.stringify(product)}>{product.product_name}</option>
  )
}

export default SaleOption