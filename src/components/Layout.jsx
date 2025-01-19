import React from 'react'
import Header from './Header'
import Container from './Container'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

const Layout = () => {
  return (
    <main>
    <Header/>
    <Outlet/>
    </main>
  )
}

export default Layout