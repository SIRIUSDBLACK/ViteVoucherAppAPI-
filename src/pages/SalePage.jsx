import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import SaleInfo from '../components/SaleInfo'


const SalePage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"SaleModule"}/>
      <SaleInfo/>
    </Container>
  )
}

export default SalePage