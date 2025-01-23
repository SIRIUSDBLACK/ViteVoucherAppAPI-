import React from 'react'
import Header from './Header'
import Container from './Container'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <main>
    <Header/>
    <Outlet/>
    <Toaster/>
    </main>
  )
}

export default Layout