import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VoucherDetail from '../components/VoucherDetail'

const VoucherDetailPage = () => {
  return (
    <Container>
    <Breadcrumb currentPage={"VoucherDetail"} links={[{title:"Voucher Module",path:"/voucher"}]}/>
    <section>
      <VoucherDetail/>
    </section>
  </Container>
  )
}

export default VoucherDetailPage