import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <Container>
    <Breadcrumb currentPage={"VoucherModule"}/>
    <VoucherList/>
  </Container>
  )
}

export default VoucherPage