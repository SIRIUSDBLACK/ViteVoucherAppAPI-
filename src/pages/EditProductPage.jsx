import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import EditCurrentProduct from '../components/EditCurrentProduct'

const EditProductPage = () => {
  return (
    <Container>
    <Breadcrumb currentPage={"Edit Product"} links={[{title:"Product Module",path:"/product"}]}/>
    <section>
      <EditCurrentProduct/>
    </section>
  </Container>
  )
}

export default EditProductPage
