import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductList from '../components/ProductList'

const ProductPage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"ProductModule"} links={[]}/>
      <section>
        <ProductList/>
      </section>
    </Container>
  )
}

export default ProductPage