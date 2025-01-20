import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import DashboardModules from '../components/DashboardModules'

const DashboardPage = () => {
  return (
    <Container>
      <Breadcrumb/>
      <section className='w-full h-[500px]'>
      <DashboardModules/>
      </section>
    </Container>
  )
}

export default DashboardPage