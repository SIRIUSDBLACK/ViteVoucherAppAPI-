import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductList from '../components/ProductList'
import CreateNewProduct from '../components/CreateNewProduct'

const CreateProductPage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"Create Product"} links={[{title:"Product Module",path:"/product"}]}/>
      <section>
        <CreateNewProduct/>
      </section>
    </Container>
  )
}

export default CreateProductPage